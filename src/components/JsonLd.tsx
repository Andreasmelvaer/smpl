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
      email: 'hello@smpl.as',
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
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.description || '',
    image: post.hero_image ? `${BASE_URL}${post.hero_image}` : undefined,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
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
