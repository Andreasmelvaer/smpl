const CRM_ENDPOINT = 'https://go.smpl.as/api/crm/ingest'

interface CrmLead {
  name: string
  email: string
  company?: string
  description?: string
  source: string
}

export async function syncToCrm(lead: CrmLead): Promise<void> {
  try {
    await fetch(CRM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })
  } catch (error) {
    // Log but don't block the main flow — CRM sync is best-effort
    console.error('CRM sync failed:', error)
  }
}
