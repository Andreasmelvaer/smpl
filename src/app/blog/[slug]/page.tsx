import { getPostData, getAllPosts, getAllPostsData } from '@/lib/markdown'
import { generateBlogMetadata } from '@/lib/metadata'
import { getAuthor } from '@/lib/authors'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AuthorBio from '@/components/AuthorBio'
import RelatedPosts from '@/components/RelatedPosts'
import { BlogPostJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostData('blog', slug)
    return generateBlogMetadata(post)
  } catch {
    return { title: 'Post Not Found' }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  try {
    const post = await getPostData('blog', slug)
    const allPosts = await getAllPostsData('blog')

    return (
      <article className="py-16 md:py-24">
        <BlogPostJsonLd post={post} />
        <BreadcrumbJsonLd items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${slug}` },
        ]} />
        {Array.isArray(post.faqs) && post.faqs.length > 0 && (
          <FAQJsonLd faqs={post.faqs as { question: string; answer: string }[]} />
        )}
        <div className="container-main">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12 max-w-3xl">
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
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              {post.author && <span>{post.author}</span>}
              {post.author && post.date && <span className="text-gray-300">·</span>}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              )}
              {post.readTime && (
                <>
                  <span className="text-gray-300">·</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </header>

          {/* Hero image */}
          {post.hero_image && (
            <div className={`mb-12 rounded-2xl overflow-hidden max-w-4xl${post.hero_border ? ' border border-black' : ''}`}>
              <Image
                src={post.hero_image}
                alt={post.title}
                width={1200}
                height={750}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose blog-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author bio */}
          {(() => {
            const author = getAuthor(post.author)
            return author ? <AuthorBio author={author} /> : null
          })()}

          {/* Related posts */}
          <RelatedPosts current={post} posts={allPosts} max={3} />
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts('blog')
  return posts.map((slug) => ({ slug }))
}
