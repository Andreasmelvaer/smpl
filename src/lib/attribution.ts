// First-touch attribution capture.
//
// On every page load we read tracking params from the URL and merge them
// into a single localStorage entry. Existing values win — so the very first
// landing source is what gets credited even if the visitor later navigates
// to /contact via a deep link with no params.
//
// Two exceptions to the first-touch rule:
//  - gclid / fbclid: these are click-IDs, expire on the platform side
//    (~90d for gclid), and are needed *fresh* for offline-conversion
//    uploads. We always overwrite them with the latest value seen.
//  - Stale entries (>90d) are dropped wholesale on next read.
//
// Forms call getAttribution() at submit time and spread the result into
// the POST body so the smpl-funnel /api/crm/ingest endpoint can persist
// the attribution alongside the contact row.

const KEY = 'smpl_attribution'
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000 // 90 days

const FIRST_TOUCH_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

const LATEST_KEYS = ['gclid', 'fbclid'] as const

type Stored = {
  capturedAt: number
  data: Record<string, string>
}

function readStored(): Stored | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Stored
    if (!parsed.capturedAt || Date.now() - parsed.capturedAt > MAX_AGE_MS) {
      window.localStorage.removeItem(KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function captureFromUrl(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const incoming: Record<string, string> = {}
  for (const k of FIRST_TOUCH_KEYS) {
    const v = params.get(k)
    if (v) incoming[k] = v
  }
  for (const k of LATEST_KEYS) {
    const v = params.get(k)
    if (v) incoming[k] = v
  }
  if (Object.keys(incoming).length === 0) return

  const existing = readStored()
  const merged: Record<string, string> = { ...(existing?.data ?? {}) }

  // First-touch: only set if missing
  for (const k of FIRST_TOUCH_KEYS) {
    if (incoming[k] && !merged[k]) merged[k] = incoming[k]
  }
  // Latest-touch: always overwrite (click IDs expire & we need the freshest)
  for (const k of LATEST_KEYS) {
    if (incoming[k]) merged[k] = incoming[k]
  }

  try {
    window.localStorage.setItem(
      KEY,
      JSON.stringify({ capturedAt: Date.now(), data: merged }),
    )
  } catch {
    // Storage full / disabled — silently skip; attribution is best-effort.
  }
}

export function getAttribution(): Record<string, string> {
  return readStored()?.data ?? {}
}
