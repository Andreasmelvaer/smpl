// Fires the Google Ads "Submit lead form" conversion. The conversion action
// + snippet are configured in the SmplCo Google Ads account; the AW id and
// label below are read from conversion_action.tag_snippets via the API and
// pinned here so the same conversion fires for every lead-form submission
// on the site.
//
// Required global: gtag (loaded in src/app/layout.tsx). The same loader
// also calls gtag('config', 'AW-18117348115') so Google Ads is initialised
// alongside GA4. If gtag isn't on the window for any reason (script blocker,
// SSR, etc.) this is a no-op.

const SEND_TO = 'AW-18117348115/jkAoCJWYnqUcEJOWg79D'

type GtagFn = (
  command: 'event',
  action: 'conversion',
  params: { send_to: string },
) => void

export function trackLeadConversion(): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', 'conversion', { send_to: SEND_TO })
}
