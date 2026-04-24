import { NextResponse } from 'next/server'
import sitemap from '@/app/sitemap'

/**
 * Submits all canonical URLs to IndexNow (Bing, Yandex, Seznam, DuckDuckGo, etc.)
 *
 * Triggered by a Vercel cron (see vercel.json) on a daily schedule, and can
 * also be called manually via GET /api/indexnow.
 *
 * Key verification file lives at /public/{INDEXNOW_KEY}.txt — IndexNow
 * fetches this to confirm ownership of the host.
 */

const INDEXNOW_KEY = '11a6cb5142f94a56633a1a4a39e35c2d'
const HOST = 'smpl.as'
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function GET() {
  try {
    const entries = sitemap()
    const urlList = entries.map((e) => (typeof e.url === 'string' ? e.url : String(e.url)))

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    const text = await response.text().catch(() => '')

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      submitted: urlList.length,
      host: HOST,
      response: text || null,
    })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
