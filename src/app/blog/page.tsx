import Link from 'next/link'
import Image from 'next/image'
import { getAllPostsData } from '@/lib/markdown'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmplMinds — Blog — SmplCo',
  description:
    'Browse our thoughts on key industry trends, tales of success and disaster, and tips for getting ahead in a digital world.',
}

export default async function BlogPage() {
  const posts = await getAllPostsData('blog')

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-offwhite relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, #999 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="container-main relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight">
                Smpl<span className="font-editorial">Minds</span>
              </h1>
              <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2">
                <Image
                  src="/images/illustrations/smplco-illustration-speech-bubbles.png"
                  alt=""
                  width={160}
                  height={160}
                  className="opacity-90"
                />
              </div>
              {/* Decorative bezier curve */}
              <svg className="hidden md:block absolute -top-4 right-[-40px] w-32 h-24 pointer-events-none" viewBox="0 0 130 96" fill="none">
                <path d="M10 86 C 40 86, 50 10, 100 10 C 115 10, 125 20, 122 32" stroke="#60a5fa" strokeWidth="2" fill="none" />
                <circle cx="10" cy="86" r="4" stroke="#60a5fa" strokeWidth="2" fill="none" />
                <circle cx="122" cy="32" r="4" stroke="#60a5fa" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Brain fuel header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold shrink-0">Brain fuel</h2>
          <div className="flex items-start gap-4 max-w-xl">
            <p className="text-gray-600 leading-relaxed font-satoshi">
              Find out what&apos;s happening at SmplCo, dive into our thoughts on key
              industry trends, read tales of success and disaster, and get tips on
              getting ahead in a digital world.
            </p>
            <svg className="w-8 h-8 shrink-0 text-gray-900 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

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
    </div>
  )
}
