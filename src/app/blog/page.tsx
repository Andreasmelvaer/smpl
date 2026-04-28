import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ShimmerGrid from '@/components/ShimmerGrid'

export const metadata: Metadata = {
  title: 'Blog – AI Development, Prototyping & Startup Insights',
  description: 'Insights on AI development, digital products, vibecoding, and building startups from the SmplCo team.',
  alternates: { canonical: 'https://smpl.as/blog' },
  openGraph: {
    title: 'Blog – AI Development, Prototyping & Startup Insights',
    description: 'Insights on AI development, digital products, vibecoding, and building startups.',
    url: 'https://smpl.as/blog',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'SmplCo Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – AI Development, Prototyping & Startup Insights',
    description: 'Insights on AI development, digital products, vibecoding, and building startups.',
    images: ['/images/og-default.png'],
  },
}

export default async function Blog() {
  const blogPosts = await getAllPostsData('blog')

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-16 md:py-24 lg:py-36 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/Blog.png"
            alt="Smpl Insights — blog and articles"
            width={700}
            height={400}
            className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[450px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h1 className="text-3xl md:text-4xl font-bold">Smpl Insights</h1>
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
                {(post.thumbnail_image || post.hero_image) && (
                  <div className="aspect-[4/3] overflow-hidden relative rounded-2xl mb-4">
                    <Image
                      src={post.thumbnail_image || post.hero_image}
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
