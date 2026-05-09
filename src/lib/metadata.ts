import type { Metadata } from 'next'
import { PostData } from './markdown'

const BASE_URL = 'https://smpl.as'

/**
 * Generate metadata for a page from its markdown frontmatter.
 * Handles SEO fields from the content source.
 */
export function generatePageMetadata(data: PostData, path?: string): Metadata {
  const seo = data.seo || {}

  const title = seo.metaTitle || data.title
  const description = seo.metaDescription || data.description || data.excerpt || ''
  const rawOgImage = seo.ogImage || data.og_image || data.hero_image || '/images/og-default.png'
  const ogImage = rawOgImage.startsWith('/') ? `${BASE_URL}${rawOgImage}` : rawOgImage

  return {
    title,
    description,
    alternates: path ? { canonical: `${BASE_URL}${path}` } : undefined,
    openGraph: {
      title,
      description,
      url: path ? `${BASE_URL}${path}` : BASE_URL,
      siteName: 'SmplCo',
      images: [{ url: ogImage }],
      type: 'website',
    },
    twitter: {
      card: (seo.twitterCard as 'summary_large_image' | 'summary') || 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Generate metadata for a blog post.
 */
export function generateBlogMetadata(data: PostData): Metadata {
  const title = data.title
  const description = data.excerpt || data.description || ''
  const rawOgImage = data.og_image || data.hero_image || '/images/og-default.png'
  const ogImage = rawOgImage.startsWith('/') ? `${BASE_URL}${rawOgImage}` : rawOgImage

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/blog/${data.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blog/${data.slug}`,
      siteName: 'SmplCo',
      type: 'article',
      publishedTime: data.date,
      authors: data.author ? [data.author] : undefined,
      tags: data.tags,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Generate metadata for a webinar / talk recap page.
 */
export function generateWebinarMetadata(data: PostData): Metadata {
  const title = data.title
  const description = data.excerpt || data.description || ''
  const rawOgImage = data.og_image || data.hero_image || '/images/og-default.png'
  const ogImage = rawOgImage.startsWith('/') ? `${BASE_URL}${rawOgImage}` : rawOgImage

  return {
    // Title kept clean — the layout adds "| SmplCo" at the end. Avoiding
    // a long "— SmplCo webinar with Barclays Eagle Labs" suffix that would
    // push the SERP title past 70 chars and trigger Google's auto-rewrite.
    // Eagle Labs branding lives in the on-page metadata block + body copy.
    title,
    description,
    alternates: { canonical: `${BASE_URL}/webinars/${data.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/webinars/${data.slug}`,
      siteName: 'SmplCo',
      type: 'video.other',
      images: [{ url: ogImage }],
      videos: data.youtube_id
        ? [
            {
              url: `https://www.youtube.com/embed/${data.youtube_id}`,
              type: 'text/html',
            },
          ]
        : undefined,
    },
    twitter: {
      // 'player' card requires a separate playable iframe + width/height —
      // we don't ship those, so Twitter flagged the card as incomplete.
      // 'summary_large_image' is the right choice when the YouTube video
      // is embedded on the destination page rather than served inline in
      // the tweet.
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Generate metadata for a work case study.
 */
export function generateWorkMetadata(data: PostData): Metadata {
  const title = data.title
  const description = data.description || `${data.client || ''} – ${data.category || 'Case Study'}`
  const rawOgImage = data.og_image || data.hero_image || '/images/og-default.png'
  const ogImage = rawOgImage.startsWith('/') ? `${BASE_URL}${rawOgImage}` : rawOgImage

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/work/${data.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/work/${data.slug}`,
      siteName: 'SmplCo',
      type: 'website',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
