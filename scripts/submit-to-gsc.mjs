#!/usr/bin/env node
// Submit a URL to the Google Search Console Indexing API.
// Setup instructions: see .claude/skills/publish-blog/SKILL.md
//
// Usage: node scripts/submit-to-gsc.mjs <url>
// Env:   GSC_SERVICE_ACCOUNT_KEY_FILE — absolute path to service account JSON key

import { readFileSync, existsSync } from 'node:fs'
import { createSign } from 'node:crypto'
import { resolve } from 'node:path'

const SETUP_HELP = `
Set up the Indexing API once:
  1. Create a Google Cloud service account with Indexing API enabled.
  2. Add the service-account email as an Owner in Google Search Console.
  3. Save the JSON key file outside the repo (e.g. ~/.config/smpl/gsc-key.json).
  4. Add to .env.local:  GSC_SERVICE_ACCOUNT_KEY_FILE=/absolute/path/to/key.json

Full instructions: .claude/skills/publish-blog/SKILL.md (section "One-Time Setup").

For now, paste the URL into https://search.google.com/search-console URL Inspector → Request Indexing.
`

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), '.env.local')
  if (!existsSync(envPath)) return
  const content = readFileSync(envPath, 'utf8')
  for (const line of content.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (!m) continue
    const [, key, rawValue] = m
    if (process.env[key]) continue
    process.env[key] = rawValue.replace(/^["']|["']$/g, '')
  }
}

function b64url(input) {
  const buf = typeof input === 'string' ? Buffer.from(input) : input
  return buf
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

async function signJwt(credentials) {
  const header = { alg: 'RS256', typ: 'JWT' }
  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }
  const signingInput = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}`
  const signature = createSign('RSA-SHA256').update(signingInput).sign(credentials.private_key)
  return `${signingInput}.${b64url(signature)}`
}

async function getAccessToken(credentials) {
  const jwt = await signJwt(credentials)
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  const body = await res.json()
  if (!res.ok || !body.access_token) {
    throw new Error(`Auth failed: ${JSON.stringify(body)}`)
  }
  return body.access_token
}

async function submitUrl(url, accessToken) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  })
  const body = await res.json()
  if (!res.ok) {
    throw new Error(`Submission failed (${res.status}): ${JSON.stringify(body)}`)
  }
  return body
}

async function main() {
  const url = process.argv[2]
  if (!url || !url.startsWith('http')) {
    console.error('Usage: node scripts/submit-to-gsc.mjs <url>')
    process.exit(1)
  }

  loadEnvLocal()
  const keyFile = process.env.GSC_SERVICE_ACCOUNT_KEY_FILE
  if (!keyFile) {
    console.error('GSC_SERVICE_ACCOUNT_KEY_FILE is not set.')
    console.error(SETUP_HELP)
    process.exit(1)
  }
  if (!existsSync(keyFile)) {
    console.error(`Key file not found at ${keyFile}`)
    console.error(SETUP_HELP)
    process.exit(1)
  }

  const credentials = JSON.parse(readFileSync(keyFile, 'utf8'))
  if (!credentials.client_email || !credentials.private_key) {
    console.error('Key file is missing client_email or private_key.')
    process.exit(1)
  }

  const accessToken = await getAccessToken(credentials)
  const result = await submitUrl(url, accessToken)
  console.log(`Submitted ${url} to Google Search Console.`)
  console.log(JSON.stringify(result, null, 2))
}

main().catch((err) => {
  console.error(err.message || err)
  process.exit(1)
})
