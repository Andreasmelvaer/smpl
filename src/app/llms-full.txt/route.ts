import { getAllPostsData } from '@/lib/markdown'

/**
 * /llms-full.txt — full content corpus for LLM crawlers.
 * Blog posts and case studies are served as plain markdown so AI agents can
 * ingest them without JS execution or HTML parsing.
 */

const BASE_URL = 'https://smpl.as'

export const dynamic = 'force-static'
export const revalidate = 3600

function frontmatterSummary(post: {
  title?: string
  slug?: string
  date?: string
  author?: string
  tags?: string[]
  excerpt?: string
  description?: string
}) {
  const lines = [`# ${post.title || post.slug}`]
  const meta: string[] = []
  if (post.date) meta.push(`Date: ${post.date}`)
  if (post.author) meta.push(`Author: ${post.author}`)
  if (Array.isArray(post.tags) && post.tags.length) meta.push(`Tags: ${post.tags.join(', ')}`)
  if (meta.length) lines.push(meta.join(' · '))
  if (post.excerpt || post.description) lines.push(`> ${post.excerpt || post.description}`)
  return lines.join('\n\n')
}

export async function GET() {
  const blogPosts = await getAllPostsData('blog')
  const workPosts = await getAllPostsData('work')
  const webinarPosts = await getAllPostsData('webinars')

  const isPublished = (p: unknown) => (p as { published?: boolean }).published !== false

  const blogSections = blogPosts.filter(isPublished).map((p) => {
    const header = frontmatterSummary(p)
    const url = `URL: ${BASE_URL}/blog/${p.slug}`
    const content = (p as unknown as { rawContent?: string }).rawContent || ''
    return `${header}\n\n${url}\n\n${content}`
  })

  const workSections = workPosts.filter(isPublished).map((p) => {
    const header = frontmatterSummary(p)
    const url = `URL: ${BASE_URL}/work/${p.slug}`
    const content = (p as unknown as { rawContent?: string }).rawContent || ''
    return `${header}\n\n${url}\n\n${content}`
  })

  const webinarSections = webinarPosts.filter(isPublished).map((p) => {
    const header = frontmatterSummary(p)
    const url = `URL: ${BASE_URL}/webinars/${p.slug}`
    const yt = p.youtube_id ? `YouTube: https://www.youtube.com/watch?v=${p.youtube_id}` : ''
    const content = (p as unknown as { rawContent?: string }).rawContent || ''
    return `${header}\n\n${url}\n${yt}\n\n${content}`
  })

  const preamble = `# SmplCo — Full content

This file contains the complete blog, case study, and key page content for SmplCo in plain markdown so AI agents can ingest it efficiently. Short manifest at /llms.txt. Generated dynamically from live content.

SmplCo is a digital product studio. We build prototypes in 5 days and ship production software using AI-assisted design and development. Founders and scale-ups come to us to turn ideas into working products fast. Offices in Stavanger, London, San Francisco, Szeged, and St. Gallen.

Contact: andreas@smpl.as · https://smpl.as/contact

---

`

  const blogBlock = `\n\n---\n\n# Blog posts\n\n${blogSections.join('\n\n---\n\n')}`
  const workBlock = `\n\n---\n\n# Case studies\n\n${workSections.join('\n\n---\n\n')}`
  const webinarBlock = webinarSections.length
    ? `\n\n---\n\n# Webinars & talks\n\n${webinarSections.join('\n\n---\n\n')}`
    : ''

  const body = preamble + blogBlock + workBlock + webinarBlock

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
