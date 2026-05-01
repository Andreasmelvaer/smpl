import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webinars & talks — SmplCo',
  description:
    'Recorded webinars and talks by Andreas Melvær and Michael Millar of SmplCo, including sessions hosted by Barclays Eagle Labs on AI product strategy, internal tooling, and storytelling for founders.',
  alternates: { canonical: 'https://smpl.as/webinars' },
  openGraph: {
    title: 'Webinars & talks — SmplCo',
    description:
      'Recorded webinars and talks by SmplCo on AI product strategy, internal tooling, and founder storytelling.',
    url: 'https://smpl.as/webinars',
    siteName: 'SmplCo',
    type: 'website',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinars & talks — SmplCo',
    description:
      'Recorded webinars and talks by SmplCo on AI product strategy, internal tooling, and founder storytelling.',
    images: ['/images/og-default.png'],
  },
}

export default async function WebinarsIndex() {
  const allWebinars = await getAllPostsData('webinars')
  const webinars = allWebinars.filter((w) => w.published !== false)

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16 max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold">Webinars &amp; talks</h1>
            <p className="text-gray-600 font-satoshi leading-relaxed">
              Recorded sessions where we share what we&apos;ve learned shipping
              AI-assisted products with founders, scale-ups, and innovation teams.
              Includes our partnership webinar series with Barclays Eagle Labs.
            </p>
          </div>

          {webinars.length === 0 ? (
            <p className="text-gray-500">No webinars yet — check back soon.</p>
          ) : (
            <ul className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {webinars.map((w) => (
                <li
                  key={w.slug}
                  className="rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors"
                >
                  <Link href={`/webinars/${w.slug}`} className="group block h-full">
                    {w.youtube_id && (
                      <div className="relative w-full aspect-video bg-black">
                        <Image
                          src={`https://i.ytimg.com/vi/${w.youtube_id}/maxresdefault.jpg`}
                          alt={w.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-gray-900 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 leading-tight">
                        {w.title}
                      </h2>
                      <div className="text-sm text-gray-500 mb-3">
                        {w.host_organisation && <span>{w.host_organisation}</span>}
                        {w.host_organisation && w.date && (
                          <span className="text-gray-300"> · </span>
                        )}
                        {w.date && (
                          <time dateTime={w.date}>
                            {new Date(w.date).toLocaleDateString('en-GB', {
                              month: 'long',
                              year: 'numeric',
                            })}
                          </time>
                        )}
                        {w.readTime && (
                          <>
                            <span className="text-gray-300"> · </span>
                            <span>{w.readTime}</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                        {w.excerpt || w.description}
                      </p>
                      <span className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full group-hover:bg-gray-800 transition-colors uppercase tracking-wider">
                        Watch webinar
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
