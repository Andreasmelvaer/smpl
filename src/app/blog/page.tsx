import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ShimmerGrid from '@/components/ShimmerGrid'

export const metadata: Metadata = {
  title: 'Smpl Minds | Blog – Insights & Articles',
  description: 'Insights on AI development, digital products, vibecoding, and building startups from the Smpl Co team.',
  alternates: { canonical: 'https://smpl.as/blog' },
}

export default async function Blog() {
  const blogPosts = await getAllPostsData('blog')

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-44 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/Blog.png"
            alt=""
            width={700}
            height={400}
            className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[560px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Smpl Insights</h2>
            <p className="text-gray-600 font-satoshi leading-relaxed">
              Browse our thoughts on key industry trends, tales of success and disaster,
              and tips for getting ahead in a digital world. All courtesy of innovators
              who have seen it and done it all themselves.
            </p>
          </div>

          {/* ============ POST GRID ============ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {post.hero_image && (
                  <div className="aspect-[4/3] overflow-hidden relative rounded-2xl mb-4">
                    <Image
                      src={post.hero_image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug group-hover:text-gray-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.date && (
                  <p className="text-sm text-gray-400 font-satoshi">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
