import { getPostData, getAllPosts } from '@/lib/markdown'
import { generateWebinarMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { WebinarVideoJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostData('webinars', slug)
    return generateWebinarMetadata(post)
  } catch {
    return { title: 'Webinar Not Found' }
  }
}

export default async function WebinarPage({ params }: Props) {
  const { slug } = await params
  try {
    const post = await getPostData('webinars', slug)

    return (
      <article className="py-16 md:py-24">
        <WebinarVideoJsonLd post={post} />
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', href: '/' },
            { name: 'Webinars', href: '/webinars' },
            { name: post.title, href: `/webinars/${slug}` },
          ]}
        />
        <div className="container-main">
          <Link
            href="/webinars"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All webinars
          </Link>

          <header className="mb-10 max-w-3xl">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-lime rounded-full text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm">
              {post.speakers && (
                <span>
                  with {(post.speakers as string[]).join(' & ')}
                </span>
              )}
              {post.host_organisation && (
                <>
                  <span className="text-gray-300">·</span>
                  <span>hosted by {post.host_organisation}</span>
                </>
              )}
              {post.date && (
                <>
                  <span className="text-gray-300">·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                </>
              )}
              {post.readTime && (
                <>
                  <span className="text-gray-300">·</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </header>

          {/* YouTube embed — sized 16:9, full-width on mobile, capped on desktop */}
          {post.youtube_id && (
            <div className="mb-12 rounded-2xl overflow-hidden max-w-4xl bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${post.youtube_id}?rel=0`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          )}

          <div
            className="prose max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  const slugs = getAllPosts('webinars')
  return slugs.map((slug) => ({ slug }))
}
