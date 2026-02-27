import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on AI development, digital products, vibecoding, and building startups from the Smpl Co team.',
}

export default async function Blog() {
  const blogPosts = await getAllPostsData('blog')
  const [featured, ...rest] = blogPosts

  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Brain Fuel
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Find out what&apos;s happening at SmplCo, dive into our thoughts on
            key industry trends, read tales of success and disaster, and get
            tips on getting ahead in a digital world.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-offwhite rounded-2xl p-8 md:p-10 mb-12 hover:bg-gray-100 transition-colors"
          >
            <div className="max-w-3xl">
              {featured.tags && featured.tags[0] && (
                <span className="text-xs font-medium text-gray-500 mb-3 block">
                  {featured.tags[0]}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {featured.excerpt}
                </p>
              )}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                {featured.author && <span>{featured.author}</span>}
                {featured.date && (
                  <>
                    <span className="text-gray-300">·</span>
                    <time dateTime={featured.date}>
                      {new Date(featured.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </>
                )}
                {featured.readTime && (
                  <>
                    <span className="text-gray-300">·</span>
                    <span>{featured.readTime}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        )}

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-offwhite rounded-2xl p-6 hover:bg-gray-100 transition-colors"
            >
              {post.tags && post.tags[0] && (
                <span className="text-xs font-medium text-gray-500 mb-3 block">
                  {post.tags[0]}
                </span>
              )}
              <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug group-hover:text-gray-700 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center gap-3 text-xs text-gray-500">
                {post.author && <span>{post.author}</span>}
                {post.date && (
                  <>
                    {post.author && <span className="text-gray-300">·</span>}
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
