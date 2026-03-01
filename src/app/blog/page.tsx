import Link from 'next/link'
import Image from 'next/image'
import { getAllPostsData } from '@/lib/markdown'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmplInsights — Blog — SmplCo',
  description:
    'Browse our thoughts on key industry trends, tales of success and disaster, and tips for getting ahead in a digital world.',
}

export default async function BlogPage() {
  const posts = await getAllPostsData('blog')

  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <AnimateOnScroll>
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smpl<span className="font-editorial">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-satoshi">
              Browse our thoughts on key industry trends, tales of success and
              disaster, and tips for getting ahead in a digital world.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Featured post (latest) */}
        {posts.length > 0 && (
          <AnimateOnScroll>
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group block mb-16 bg-offwhite rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                {posts[0].hero_image && (
                  <div className="aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden relative">
                    <Image
                      src={posts[0].hero_image}
                      alt={posts[0].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                    Latest
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug group-hover:text-gray-700 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 font-satoshi leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-satoshi">
                    {posts[0].author && <span>{posts[0].author}</span>}
                    {posts[0].date && (
                      <span>
                        {new Date(posts[0].date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                    {posts[0].readTime && <span>{posts[0].readTime}</span>}
                  </div>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        )}

        {/* Remaining posts grid */}
        {posts.length > 1 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
                >
                  {post.hero_image && (
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <Image
                        src={post.hero_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 font-satoshi mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-satoshi">
                      {post.date && (
                        <span>
                          {new Date(post.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                      {post.readTime && <span>{post.readTime}</span>}
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 bg-gray-900 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Got a big idea?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto font-satoshi">
            We love hearing from ambitious innovators. Let&apos;s talk about how
            we can bring your idea to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-lime text-gray-900 text-sm font-semibold rounded-full hover:bg-lime-bright transition-colors"
          >
            Build With Us
          </Link>
        </div>
      </div>
    </div>
  )
}
