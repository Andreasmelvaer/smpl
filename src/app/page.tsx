import Link from 'next/link'
import Image from 'next/image'
import { getAllPostsData } from '@/lib/markdown'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import TailoredTabs from '@/components/TailoredTabs'

export default async function HomePage() {
  const blogPosts = await getAllPostsData('blog')
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-main text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8 tracking-tight">
            Prototype <span className="highlight">fast</span>
            <br />
            build(<span className="font-editorial">&ldquo;smart&rdquo;</span>);
            <br />
            Launch in <span className="highlight">Weeks</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-satoshi">
            We work with ambitious innovators and entrepreneurs to design and
            develop amazing digital products and services — fast. Whether
            you&apos;re a start-up or an established leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Build With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============ RECOGNISED BY ============ */}
      <section className="py-16 md:py-20 bg-offwhite border-y border-gray-200">
        <div className="container-main">
          <p className="text-xs font-medium text-gray-500 text-center mb-10 uppercase tracking-wider">
            Recognised by
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Global Exemplar', org: 'Figma', desc: 'Recognised for world-class AI-assisted development' },
              { label: 'SheBuilds Winner', org: 'Lovable', desc: 'First place at the SheBuilds hackathon' },
              { label: 'Global Runner-Up', org: 'Lovable', desc: 'Runner-up in global buildathon competition' },
              { label: 'Digital Design Winner', org: 'Marketing Awards', desc: 'Award-winning digital design work' },
            ].map((award) => (
              <div key={award.label} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <p className="font-bold text-gray-900 text-base mb-1">{award.label}</p>
                <p className="text-sm font-medium text-gray-500 mb-2">{award.org}</p>
                <p className="text-xs text-gray-400 font-satoshi">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FROM POST-IT TO PRODUCT ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From <span className="highlight">Post-it</span> to{' '}
              <span className="font-editorial">product</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-satoshi">
              Join 125+ start-ups, scale-ups, and global brands who&apos;ve
              brought big ideas to life, backed by a team that has built and sold
              digital companies, including a $3bn tech unicorn.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors uppercase tracking-wider"
            >
              See Ideas Come Alive
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF / TESTIMONIALS ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don&apos;t just take
              <br />
              our word for it
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ============ EAGLE LABS ============ */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
              Partnership
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Barclays Eagle Labs member?
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto font-satoshi">
              Grab your discount using our exclusive offer with Eagle Labs member
              rewards.
            </p>
            <Link
              href="/eaglelabs"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 transition-colors uppercase tracking-wider"
            >
              Eagle Labs Deals &amp; Offers Page
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TAILORED TO YOU ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="highlight">Tailored</span> to you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-satoshi">
              Whether you&apos;re a start-up with a napkin sketch or an enterprise
              with a complex digital challenge, our process adapts to you.
            </p>
          </div>
          <TailoredTabs />
        </div>
      </section>

      {/* ============ SMPLINSIGHTS ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SmplInsights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-satoshi">
              Browse our thoughts on key industry trends, tales of success and
              disaster, and tips for getting ahead in a digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                {post.hero_image && (
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image
                      src={post.hero_image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  {post.date && (
                    <p className="text-sm text-gray-500 font-satoshi">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors uppercase tracking-wider"
            >
              Get Knowledge
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Ready to build?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 font-satoshi">
            Every great product starts with a conversation. Get in touch for a
            free consultation with our digital innovation experts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-lime text-gray-900 text-sm font-semibold rounded-full hover:bg-lime-bright transition-colors"
          >
            Build With Us
          </Link>
        </div>
      </section>
    </div>
  )
}
