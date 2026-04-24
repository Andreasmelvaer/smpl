#!/usr/bin/env node
/**
 * Internal linking audit.
 *
 * Scans:
 *   - src tsx/ts files for <Link href="..."> and href="..." that point internally
 *   - content/blog .md and content/work .md for markdown links [text](/...)
 *
 * Builds a graph:
 *   - Nodes: every valid internal route (derived from src/app structure + blog/work slugs)
 *   - Edges: links found in the above files
 *
 * Reports:
 *   1. Pages that exist but have zero or few incoming internal links (orphans)
 *   2. Broken internal links (pointing to routes that don't exist)
 *   3. Top outbound linkers (for context)
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const ROOT = path.join(__dirname, '..')
const APP = path.join(ROOT, 'src', 'app')
const SRC = path.join(ROOT, 'src')
const BLOG = path.join(ROOT, 'content', 'blog')
const WORK = path.join(ROOT, 'content', 'work')

function walk(dir, filter) {
  const out = []
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full, filter))
    else if (filter(full)) out.push(full)
  }
  return out
}

// --- Build list of valid routes ---
function buildRoutes() {
  const routes = new Set(['/'])

  // src/app routes (directories containing page.tsx, minus dynamic segments)
  const pageFiles = walk(APP, (f) => f.endsWith('page.tsx'))
  for (const file of pageFiles) {
    const rel = path.relative(APP, path.dirname(file))
    if (rel === '') continue
    // Skip dynamic segments and route groups
    if (rel.includes('[') || rel.includes('(')) continue
    routes.add('/' + rel.split(path.sep).join('/'))
  }

  // Blog posts
  if (fs.existsSync(BLOG)) {
    for (const f of fs.readdirSync(BLOG)) {
      if (!f.endsWith('.md')) continue
      const slug = f.replace(/\.md$/, '')
      routes.add(`/blog/${slug}`)
    }
  }
  // Work case studies
  if (fs.existsSync(WORK)) {
    for (const f of fs.readdirSync(WORK)) {
      if (!f.endsWith('.md')) continue
      const slug = f.replace(/\.md$/, '')
      routes.add(`/work/${slug}`)
    }
  }

  return routes
}

// --- Extract internal links from a file ---
function extractLinksFromCode(content, allRoutes) {
  const links = new Set()
  // href="..." in JSX — capture internal only (starting with /)
  const jsxRe = /href=["']\/(?!\/)([^"'#?]*)/g
  let m
  while ((m = jsxRe.exec(content)) !== null) {
    links.add('/' + m[1].replace(/\/$/, ''))
  }
  // Dynamic template literals: href={`/blog/${slug}`} or href={`/work/${slug}`}
  // Treat these as linking to every route under that prefix.
  const dynRe = /href=\{`\/([a-z0-9-]+)\/\$\{/g
  while ((m = dynRe.exec(content)) !== null) {
    const prefix = '/' + m[1]
    for (const route of allRoutes) {
      if (route.startsWith(prefix + '/')) links.add(route)
    }
  }
  // Paths stored as quoted strings in JS objects/arrays (e.g. footer nav: { href: '/academy' })
  // Only treat as internal if it exactly matches a known route.
  const strRe = /['"](\/(?:[a-z0-9][a-z0-9-/]*)?)['"]/gi
  while ((m = strRe.exec(content)) !== null) {
    const candidate = normalisePath(m[1])
    if (allRoutes.has(candidate)) links.add(candidate)
  }
  return links
}

function normalisePath(p) {
  if (p === '' || p === '/') return '/'
  return p.replace(/\/$/, '')
}

function extractLinksFromMarkdown(content) {
  const links = new Set()
  // [text](/...) but not external
  const mdRe = /\[[^\]]*\]\(\/(?!\/)([^)#?]*)/g
  let m
  while ((m = mdRe.exec(content)) !== null) {
    links.add('/' + m[1].replace(/\/$/, ''))
  }
  return links
}

function normalise(route) {
  if (route === '') return '/'
  return route.replace(/\/$/, '') || '/'
}

// --- Scan everything and build graph ---
function buildGraph(routes) {
  // incomingCount[route] = number of distinct source files linking to it
  const incomingCount = new Map()
  const incomingSources = new Map() // route -> Set of source files
  const broken = [] // { from, to }

  function record(fromFile, links) {
    for (const raw of links) {
      const target = normalise(raw)
      if (!routes.has(target)) {
        // ignore assets like /images, /downloads, /_next, /api, anchors, mailto, tel
        if (
          target.startsWith('/images') ||
          target.startsWith('/downloads') ||
          target.startsWith('/_next') ||
          target.startsWith('/api') ||
          target.startsWith('/whatdesignerareyou') ||
          target.startsWith('/fonts') ||
          target === '/' ||
          target.startsWith('/favicon')
        ) continue
        // Only record as broken if it looks like a page path
        if (target.match(/^\/[a-z0-9-/]+$/i)) {
          broken.push({ from: path.relative(ROOT, fromFile), to: target })
        }
        continue
      }
      incomingCount.set(target, (incomingCount.get(target) || 0) + 1)
      if (!incomingSources.has(target)) incomingSources.set(target, new Set())
      incomingSources.get(target).add(path.relative(ROOT, fromFile))
    }
  }

  // Scan all .tsx files in src (components + pages)
  const tsxFiles = walk(SRC, (f) => f.endsWith('.tsx') || f.endsWith('.ts'))
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf8')
    record(file, extractLinksFromCode(content, routes))
  }

  // Scan all blog and work markdown bodies
  for (const dir of [BLOG, WORK]) {
    if (!fs.existsSync(dir)) continue
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.md')) continue
      const full = path.join(dir, f)
      const raw = fs.readFileSync(full, 'utf8')
      const parsed = matter(raw)
      record(full, extractLinksFromMarkdown(parsed.content))
    }
  }

  return { incomingCount, incomingSources, broken }
}

function main() {
  const routes = buildRoutes()
  const { incomingCount, incomingSources, broken } = buildGraph(routes)

  const rows = []
  for (const route of routes) {
    rows.push({
      route,
      count: incomingCount.get(route) || 0,
      sources: incomingSources.get(route) ? [...incomingSources.get(route)] : [],
    })
  }
  rows.sort((a, b) => a.count - b.count)

  console.log('\n=== Routes by incoming link count (ascending) ===\n')
  for (const r of rows) {
    console.log(`${String(r.count).padStart(3)}  ${r.route}`)
  }

  console.log('\n=== Orphans (0 incoming links) ===')
  for (const r of rows.filter((r) => r.count === 0)) {
    console.log(`  ${r.route}`)
  }

  console.log('\n=== Under-linked (1 incoming link) ===')
  for (const r of rows.filter((r) => r.count === 1)) {
    console.log(`  ${r.route}  ← ${r.sources[0]}`)
  }

  if (broken.length > 0) {
    console.log('\n=== Possibly broken internal links ===')
    for (const b of broken) {
      console.log(`  ${b.from} → ${b.to}`)
    }
  }

  console.log(`\nTotal routes: ${routes.size}`)
  console.log(`Orphans: ${rows.filter((r) => r.count === 0).length}`)
  console.log(`Under-linked (1): ${rows.filter((r) => r.count === 1).length}`)
  console.log(`Broken: ${broken.length}`)
}

main()
