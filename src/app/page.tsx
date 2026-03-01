import Link from 'next/link'
import Image from 'next/image'
import { getAllPostsData } from '@/lib/markdown'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import TailoredTabs from '@/components/TailoredTabs'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default async function HomePage() {
  const blogPosts = await getAllPostsData('blog')
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-offwhite">
        {/* Dotted background pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #999 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="container-main text-center relative z-10">
          <AnimateOnScroll>
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
                {/* Line 1: Prototype fast */}
                <span className="relative">
                  <span className="text-lime-bright font-editorial" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.15)' }}>Prototype</span>
                  {' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-bold">fast</span>
                    {/* Figma selection box around "fast" */}
                    <span className="hidden md:block absolute -inset-2 border-2 border-blue-400 pointer-events-none" style={{ borderRadius: '2px' }}>
                      <span className="absolute -top-[4px] -left-[4px] w-[8px] h-[8px] bg-white border-2 border-blue-400" />
                      <span className="absolute -top-[4px] -right-[4px] w-[8px] h-[8px] bg-white border-2 border-blue-400" />
                      <span className="absolute -bottom-[4px] -left-[4px] w-[8px] h-[8px] bg-white border-2 border-blue-400" />
                      <span className="absolute -bottom-[4px] -right-[4px] w-[8px] h-[8px] bg-white border-2 border-blue-400" />
                      {/* Play button */}
                      <span className="absolute -top-[4px] right-[calc(50%-12px)] -translate-y-full mb-1 w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><polygon points="2,0 10,5 2,10" /></svg>
                      </span>
                    </span>
                  </span>
                </span>
                <br />
                {/* Line 2: build("smart"); as code terminal */}
                <span className="relative inline-block my-2">
                  <span className="relative z-10 inline-block bg-white rounded-lg shadow-[4px_4px_0_rgba(0,0,0,0.9)] border border-gray-200 px-6 md:px-8 py-3 md:py-4 transform -rotate-2">
                    <span className="absolute top-2.5 left-3 flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </span>
                    <span className="font-mono text-2xl md:text-4xl lg:text-5xl font-normal tracking-normal">
                      build(<span className="text-gray-900">&quot;smart&quot;</span>);
                    </span>
                  </span>
                </span>
                <br />
                {/* Line 3: Launch in Weeks */}
                <span className="font-editorial">Launch in </span>
                <span className="font-bold">Weeks</span>
              </h1>
              {/* Decorative bezier curve (SVG) */}
              <svg className="hidden md:block absolute -top-4 right-[15%] w-48 h-32 pointer-events-none" viewBox="0 0 200 130" fill="none">
                <path d="M10 120 C 60 120, 80 10, 150 10 C 180 10, 195 30, 190 50" stroke="#60a5fa" strokeWidth="2" fill="none" />
                <circle cx="10" cy="120" r="4" stroke="#60a5fa" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-satoshi">
              Join 125+ start-ups, scale-ups, and global brands who&apos;ve brought big ideas to
              life, backed by a team that has built and sold digital companies, including a $3bn
              tech unicorn. Recognised as a world-leader in AI-assisted development by Figma.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
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
          </AnimateOnScroll>
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
              { label: 'Global Exemplar', org: 'Figma', desc: 'Recognised for world-class AI-assisted development', logo: '/images/logos/recognition/figma-logo.png' },
              { label: 'SheBuilds Winner', org: 'Lovable', desc: 'First place at the SheBuilds hackathon', logo: '/images/logos/recognition/lovable-logo.png' },
              { label: 'Global Runner-Up', org: 'Lovable', desc: 'Runner-up in global buildathon competition', logo: '/images/logos/recognition/lovable-logo.png' },
              { label: 'Digital Design Winner', org: 'DIA', desc: 'Award-winning digital design work', logo: '/images/logos/recognition/design-intelligence-award-dia-badge.png' },
            ].map((award) => (
              <div key={award.label} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="h-12 flex items-center justify-center mb-4">
                  <Image src={award.logo} alt={award.org} width={100} height={48} className="object-contain h-10 w-auto" />
                </div>
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
          <AnimateOnScroll>
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
          </AnimateOnScroll>
          {/* Illustration */}
          <div className="flex justify-center mb-12">
            <Image src="/images/illustrations/smplco-illustration-ideas-investors.png" alt="From ideas to investors — SmplCo design and development process" width={400} height={400} className="opacity-90" />
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
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Image src="/images/illustrations/smplco-illustration-speech-bubbles.png" alt="" width={80} height={80} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Don&apos;t just take
                <br />
                our word for it
              </h2>
            </div>
          </AnimateOnScroll>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ============ EAGLE LABS ============ */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/images/logos/partners/barclays-eagle-labs-logo-blue.png" alt="Barclays Eagle Labs" width={200} height={40} className="brightness-0 invert opacity-70" />
            </div>
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
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="highlight-pink">Tailored</span> to you
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-satoshi">
                Whether you&apos;re a start-up with a napkin sketch or an enterprise
                with a complex digital challenge, our process adapts to you.
              </p>
            </div>
          </AnimateOnScroll>
          <TailoredTabs />
        </div>
      </section>

      {/* ============ CLIENT LOGOS ============ */}
      <section className="py-12 border-y border-gray-200">
        <div className="container-main">
          <p className="text-xs font-medium text-gray-500 text-center mb-8 uppercase tracking-wider">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[
              { src: '/images/logos/clients/shoosmiths-logo.png', alt: 'Shoosmiths', w: 120 },
              { src: '/images/logos/clients/scale-logo.png', alt: 'Scale', w: 80 },
              { src: '/images/logos/clients/lunos-logo.png', alt: 'Lunos', w: 80 },
              { src: '/images/logos/clients/experis-manpowergroup-logo.png', alt: 'Experis ManpowerGroup', w: 120 },
              { src: '/images/logos/clients/codebase-logo.png', alt: 'CodeBase', w: 100 },
              { src: '/images/logos/clients/fabriq-logo.png', alt: 'Fabriq', w: 80 },
            ].map((logo) => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={logo.w} height={40} className="h-8 w-auto object-contain grayscale" />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SMPLINSIGHTS ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">SmplInsights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-satoshi">
                Browse our thoughts on key industry trends, tales of success and
                disaster, and tips for getting ahead in a digital world.
              </p>
            </div>
          </AnimateOnScroll>
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
