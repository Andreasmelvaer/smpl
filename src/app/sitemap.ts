import type { MetadataRoute } from 'next'
import { getAllPostsMeta } from '@/lib/markdown'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smpl.as'
  const buildTime = new Date()

  // Static pages — use build time, since these aren't tied to a single content file
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: buildTime, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: buildTime, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: buildTime, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/webinars`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pitch-prep`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/attention-guide`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/build-guide`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai-playbook`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/partners`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/eaglelabs`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/academy`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/investorready`, lastModified: buildTime, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: buildTime, changeFrequency: 'yearly', priority: 0.3 },
    // /yggdrasil, /bingo, /kluge are intentionally event-only pages with no
    // inbound site links. Excluding them from the sitemap so Ahrefs/Google
    // stop flagging them as orphans — visitors reach them via QR codes /
    // direct links during the relevant event, not via search.
  ]

  // For content-driven pages, prefer the post's frontmatter date so Google sees
  // the actual publication date instead of "modified today" on every build.
  const dynamic = (folder: string, urlPrefix: string, priority = 0.7): MetadataRoute.Sitemap =>
    getAllPostsMeta(folder).map(({ slug, date }) => ({
      url: `${baseUrl}${urlPrefix}/${slug}`,
      lastModified: date ? new Date(date) : buildTime,
      changeFrequency: 'monthly' as const,
      priority,
    }))

  return [
    ...staticPages,
    ...dynamic('work', '/work'),
    ...dynamic('blog', '/blog'),
    ...dynamic('webinars', '/webinars'),
  ]
}
