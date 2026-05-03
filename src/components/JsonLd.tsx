import { PostData } from '@/lib/markdown'

const BASE_URL = 'https://smpl.as'

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SmplCo',
    url: BASE_URL,
    logo: `${BASE_URL}/images/smpl-logo.svg`,
    description:
      'SmplCo helps startups and enterprises prototype and build smart digital products in weeks using AI and no-code tools.',
    sameAs: [
      'https://www.linkedin.com/company/smplcoas/',
      'https://dribbble.com/SmplCo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'andreas@smpl.as',
      contactType: 'sales',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BlogPostJsonLd({ post }: { post: PostData }) {
  // Approximate word count from rawContent — helps AI engines weight the post.
  const wordCount = post.rawContent
    ? post.rawContent.replace(/[#`*_>\[\]\(\)\!]/g, ' ').split(/\s+/).filter(Boolean).length
    : undefined

  const data = {
    '@context': 'https://schema.org',
    // BlogPosting is a subtype of Article; declaring both helps validators that
    // index Article specifically (e.g. some AI search engine extractors).
    '@type': ['BlogPosting', 'Article'],
    headline: post.title,
    description: post.excerpt || post.description || '',
    image: post.hero_image ? `${BASE_URL}${post.hero_image}` : undefined,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    inLanguage: 'en-GB',
    articleSection: post.tags?.[0],
    ...(wordCount ? { wordCount } : {}),
    author: post.author
      ? { '@type': 'Person', name: post.author }
      : { '@type': 'Organization', name: 'SmplCo' },
    publisher: {
      '@type': 'Organization',
      name: 'SmplCo',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/smpl-logo.svg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SmplCo',
    url: BASE_URL,
    publisher: { '@type': 'Organization', name: 'SmplCo', url: BASE_URL },
    inLanguage: 'en-GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * SmplCo's 5 offices. Emitted as a graph of LocalBusiness entries so each
 * location has its own address and is independently indexable.
 */
export function LocalBusinessJsonLd() {
  const offices = [
    {
      id: `${BASE_URL}/#office-stavanger`,
      name: 'SmplCo — Stavanger',
      streetAddress: 'Ryfylkegata 9',
      addressLocality: 'Stavanger',
      postalCode: '4014',
      addressCountry: 'NO',
    },
    {
      id: `${BASE_URL}/#office-london`,
      name: 'SmplCo — London',
      streetAddress: 'Tottenham Court Road',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    {
      id: `${BASE_URL}/#office-sanfrancisco`,
      name: 'SmplCo — San Francisco',
      streetAddress: '1 Ferry Building',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      id: `${BASE_URL}/#office-szeged`,
      name: 'SmplCo — Szeged',
      streetAddress: 'Attila utca 11',
      addressLocality: 'Szeged',
      addressCountry: 'HU',
    },
    {
      id: `${BASE_URL}/#office-stgallen`,
      name: 'SmplCo — St. Gallen',
      streetAddress: 'Teufener Str. 3',
      addressLocality: 'St. Gallen',
      postalCode: '9000',
      addressCountry: 'CH',
    },
  ]

  const data = {
    '@context': 'https://schema.org',
    '@graph': offices.map((o) => ({
      '@type': 'LocalBusiness',
      '@id': o.id,
      name: o.name,
      url: BASE_URL,
      image: `${BASE_URL}/images/og-default.png`,
      telephone: '',
      email: 'andreas@smpl.as',
      priceRange: '$$-$$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: o.streetAddress,
        addressLocality: o.addressLocality,
        ...(o.postalCode ? { postalCode: o.postalCode } : {}),
        ...(o.addressRegion ? { addressRegion: o.addressRegion } : {}),
        addressCountry: o.addressCountry,
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'SmplCo',
        url: BASE_URL,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export interface ServiceJsonLdItem {
  name: string
  description: string
  url?: string
  serviceType?: string
}

/**
 * Array of services offered by SmplCo. Each becomes a Service node with
 * SmplCo as provider. Used on /services to give search engines and AI crawlers
 * a structured list of what SmplCo sells.
 */
export function ServiceListJsonLd({ services }: { services: ServiceJsonLdItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': services.map((s) => ({
      '@type': 'Service',
      name: s.name,
      description: s.description,
      ...(s.serviceType ? { serviceType: s.serviceType } : {}),
      ...(s.url ? { url: `${BASE_URL}${s.url}` } : {}),
      provider: {
        '@type': 'Organization',
        name: 'SmplCo',
        url: BASE_URL,
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * VideoObject schema for webinar / talk recap pages. Google + AI engines
 * (Perplexity, ChatGPT search, Gemini) use this to surface video content in
 * answers and SERP video carousels. youtube_id is required; the rest is
 * derived from frontmatter.
 */
export function WebinarVideoJsonLd({ post }: { post: PostData }) {
  if (!post.youtube_id) return null

  // VideoObject Rich Results requires uploadDate in ISO 8601 with time +
  // timezone — a bare YYYY-MM-DD string fails Google's validator.
  const isoDate = post.date
    ? new Date(`${post.date}T12:00:00Z`).toISOString()
    : undefined

  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: post.title,
    description: post.excerpt || post.description || '',
    thumbnailUrl: [
      `https://i.ytimg.com/vi/${post.youtube_id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${post.youtube_id}/hqdefault.jpg`,
    ],
    uploadDate: isoDate,
    contentUrl: `https://www.youtube.com/watch?v=${post.youtube_id}`,
    embedUrl: `https://www.youtube.com/embed/${post.youtube_id}`,
    ...(post.duration ? { duration: post.duration } : {}),
    ...(post.publisher_name
      ? {
          publication: {
            '@type': 'BroadcastEvent',
            name: post.title,
            isLiveBroadcast: false,
            startDate: isoDate,
          },
        }
      : {}),
    publisher: {
      '@type': 'Organization',
      name: 'SmplCo',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/smpl-logo.svg` },
    },
    creator: post.speakers
      ? (post.speakers as string[]).map((s) => ({ '@type': 'Person', name: s }))
      : { '@type': 'Organization', name: 'SmplCo' },
    inLanguage: 'en-GB',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/webinars/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function CreativeWorkJsonLd({ post }: { post: PostData }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: post.title,
    headline: post.title,
    description: post.excerpt || post.description || '',
    image: post.hero_image ? `${BASE_URL}${post.hero_image}` : undefined,
    datePublished: post.date,
    author: post.author
      ? { '@type': 'Person', name: post.author }
      : { '@type': 'Organization', name: 'SmplCo' },
    publisher: {
      '@type': 'Organization',
      name: 'SmplCo',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/smpl-logo.svg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/work/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
