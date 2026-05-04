'use client'

import { useEffect } from 'react'
import { captureFromUrl } from '@/lib/attribution'

// Mounted once in the root layout. Reads tracking params from the URL on
// every navigation and merges them into localStorage. Renders nothing.
export default function AttributionCapture() {
  useEffect(() => {
    captureFromUrl()
  }, [])
  return null
}
