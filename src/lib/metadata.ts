import type { Metadata } from 'next'
import { PostData } from './markdown'

/**
 * Generate metadata for a page from its markdown frontmatter.
 * Handles SEO fields from the content source.
 */
export function generatePageMetadata(data: PostData): Metadata {
  const seo = data.seo || {}

  const title = seo.metaTitle || data.title
  const description = seo.metaDescription || data.description || data.excerpt || ''
  const ogImage = seo.ogImage || data.og_image || data.hero_image || '/images/og-default.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      type: 'website',
    },
    twitter: {
      card: (seo.twitterCard as 'summary_large_image' | 'summary') || 'summary_large_image',
      title,
      description,
    },
  }
}

/**
 * Generate metadata for a blog post.
 */
export function generateBlogMetadata(data: PostData): Metadata {
  const title = data.title
  const description = data.excerpt || data.description || ''
  const ogImage = data.og_image || data.hero_image || '/images/og-default.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
    },
  }
}

/**
 * Generate metadata for a work case study.
 */
export function generateWorkMetadata(data: PostData): Metadata {
  const title = data.title
  const description = data.description || `${data.client || ''} – ${data.category || 'Case Study'}`
  const ogImage = data.og_image || data.hero_image || '/images/og-default.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
