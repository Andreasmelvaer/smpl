import type { Metadata } from 'next'
import type { PostData } from './markdown'

const SITE_NAME = 'SmplCo'
const SITE_URL = 'https://smpl.co'
const DEFAULT_DESCRIPTION =
  'We work with ambitious innovators and entrepreneurs to design and develop amazing digital products and services — fast.'

export function generatePageMetadata(data: Partial<PostData>): Metadata {
  const title = data.title ? `${data.title} — ${SITE_NAME}` : SITE_NAME
  const description = data.excerpt || DEFAULT_DESCRIPTION

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: SITE_URL,
      type: 'website',
      ...(data.hero_image && {
        images: [{ url: data.hero_image, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(data.hero_image && { images: [data.hero_image] }),
    },
  }
}

export function generateBlogPostMetadata(data: Partial<PostData>): Metadata {
  const title = data.title ? `${data.title} — ${SITE_NAME}` : SITE_NAME
  const description = data.excerpt || DEFAULT_DESCRIPTION

  return {
    title,
    description,
    authors: data.author ? [{ name: data.author }] : undefined,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: data.slug ? `${SITE_URL}/blog/${data.slug}` : SITE_URL,
      type: 'article',
      ...(data.date && { publishedTime: data.date }),
      ...(data.author && { authors: [data.author] }),
      ...(data.hero_image && {
        images: [{ url: data.hero_image, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(data.hero_image && { images: [data.hero_image] }),
    },
  }
}
