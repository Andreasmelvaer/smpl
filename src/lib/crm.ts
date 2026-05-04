const CRM_ENDPOINT = 'https://go.smpl.as/api/crm/ingest'

interface CrmLead {
  name: string
  email: string
  company?: string
  description?: string
  source: string
  // Lead-magnet metadata — receiving end uses these for segmentation +
  // surfacing the "wants a call" flag in the team notification UI.
  lead_magnet?: string
  wants_consultation?: boolean
  // Attribution — captured client-side from URL params (see lib/attribution.ts)
  // and spread into the form POST body. All optional; the receiving end
  // ignores any field it doesn't recognise.
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string
}

/**
 * Sync a lead to the SmplCo CRM. Logs success and failure clearly so
 * issues are visible in Vercel logs — but does not block the main flow
 * (the user still gets their email + PDF even if the CRM endpoint is down).
 */
export async function syncToCrm(lead: CrmLead): Promise<void> {
  try {
    const res = await fetch(CRM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })
    if (res.ok) {
      console.log(`[CRM] synced ${lead.source} lead: ${lead.email}`)
    } else {
      console.error(`[CRM] sync failed for ${lead.email} — HTTP ${res.status}`)
    }
  } catch (error) {
    console.error(`[CRM] sync errored for ${lead.email}:`, error)
  }
}
