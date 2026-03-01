import Link from 'next/link'
import Image from 'next/image'
import { getPostData, getAllSlugs } from '@/lib/markdown'
import { generateBlogPostMetadata } from '@/lib/metadata'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs('blog')
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostData('blog', slug)
    return generateBlogPostMetadata(post)
  } catch {
    return { title: 'Blog — SmplCo' }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostData('blog', slug)

  return (
    <article className="py-16 md:py-24">
      <div className="container-main">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-12 font-satoshi"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to SmplInsights
        </Link>

        <AnimateOnScroll>
          {/* Header */}
          <div className="max-w-3xl mb-12">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-gray-400 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-satoshi">
              {post.author && (
                <span className="font-medium text-gray-700">
                  {post.author}
                </span>
              )}
              {post.date && (
                <span>
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              )}
              {post.readTime && <span>{post.readTime}</span>}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Hero image */}
        {post.hero_image && (
          <AnimateOnScroll>
            <div className="aspect-[2/1] rounded-2xl overflow-hidden relative mb-12">
              <Image
                src={post.hero_image}
                alt={post.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </AnimateOnScroll>
        )}

        {/* Content */}
        <div className="max-w-3xl">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Footer */}
        <div className="max-w-3xl mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              More SmplInsights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Build With Us
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
