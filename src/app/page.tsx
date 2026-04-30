import Link from 'next/link'
import Image from 'next/image'
import { getAllPostsData } from '@/lib/markdown'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import TailoredTabs from '@/components/TailoredTabs'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import LogoMarquee from '@/components/LogoMarquee'
import ParallaxImage from '@/components/ParallaxImage'
import ShimmerGrid from '@/components/ShimmerGrid'
import FreebieGrid from '@/components/FreebieGrid'
import { WebSiteJsonLd, LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = {
  alternates: { canonical: 'https://smpl.as/' },
}

export default async function HomePage() {
  const blogPosts = await getAllPostsData('blog')
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      <WebSiteJsonLd />
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }]} />
      {/* ============ HERO ============ */}
      <section className="py-16 md:py-24 lg:py-36 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          {/* Hero illustration — the full composition from Figma */}
          <div className="relative inline-block mb-8">
            <Image
              src="/images/illustrations/Hero Section.png"
              alt="SmplCo — prototype fast, build smart, launch in weeks"
              width={900}
              height={500}
              className="w-full max-w-[440px] md:max-w-[520px] lg:max-w-[600px] h-auto mx-auto mix-blend-multiply"
              priority
            />
            <h1 className="sr-only">SmplCo — a digital product studio for founders who need to move fast</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-satoshi">
            SmplCo builds digital products fast using AI-assisted design and development. We ship working prototypes in 5 days and production software in weeks, not quarters. 125+ products built, €10m+ raised by our clients, and recognised by Figma as a world-leader in AI-assisted development.
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
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="container-main">
          <p className="text-sm text-gray-500 text-center mb-10">
            Recognised by
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Global Exemplar', logo: '/images/logos/recognition/figma-logo.png' },
              { label: 'SheBuilds winner', logo: '/images/logos/recognition/lovable-logo.png' },
              { label: 'Global Runner-Up', logo: '/images/logos/recognition/design-intelligence-award-dia-badge.png' },
              { label: 'Digital Design Winner', logo: '/images/logos/partners/staerk-reklame-logo.png' },
            ].map((award) => (
              <div key={award.label} className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-4">
                <div className="h-12 flex items-center justify-center">
                  <Image src={award.logo} alt={award.label} width={120} height={48} className="object-contain h-10 w-auto" />
                </div>
                <p className="text-sm text-gray-500 font-satoshi">{award.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FROM POST-IT TO PRODUCT ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-16">
              <Image src="/images/illustrations/smplco-illustration-notebook.png" alt="From post-it to product" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  <span className="font-editorial italic">From Post-it</span>
                  <br />
                  ...to product
                </h2>
                <p className="text-lg text-gray-600 max-w-xl font-satoshi">
                  Put a rocket under your innovation plans. Our unique process and unbeatable
                  experience puts you ahead of the game, while slashing risk, time, and cost.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          {/* Project preview grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { name: 'Compera', slug: 'compera', image: '/images/cases/compera-card.jpg' },
              { name: 'nucase', slug: 'nucase', image: '/images/cases/nucase-card.jpg' },
              { name: 'Share50', slug: 'share50', image: '/images/cases/share50-card.jpg' },
              { name: 'ENQUIP', slug: 'enquip', image: '/images/cases/enquip-card.jpg' },
              { name: '2040', slug: '2040', image: '/images/cases/2040-card.jpg' },
              { name: 'altien', slug: 'altien', image: '/images/cases/altien-card.jpg' },
            ].map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </Link>
            ))}
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

      {/* ============ CLIENT LOGOS ============ */}
      <LogoMarquee />

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
              <Image src="/images/illustrations/smplco-illustration-speech-bubbles.png" alt="Client testimonials" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="font-editorial italic">Don&apos;t</span>
                  <br />
                  <span className="font-bold">just take our</span>
                  <br />
                  <span className="font-bold">word for it</span>
                </h2>
              </div>
            </div>
          </AnimateOnScroll>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="flex items-center gap-4">
              <Image src="/images/illustrations/smplco-illustration-high-five.png" alt="125+ prototypes and MVPs built" width={64} height={64} />
              <div>
                <p className="text-3xl md:text-4xl font-bold">125+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Prototypes &amp; MVPs</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/illustrations/smplco-illustration-fist-bump.png" alt="Over 10 million euros raised by clients" width={64} height={64} />
              <div>
                <p className="text-3xl md:text-4xl font-bold">&euro;10M+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Raised by clients</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/illustrations/smplco-illustration-prototype.png" alt="61% average time and cost reduction" width={64} height={64} />
              <div>
                <p className="text-3xl md:text-4xl font-bold">61% <span className="text-lime-bright">↓</span></p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Ave time/cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EAGLE LABS ============ */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/images/logos/partners/barclays-eagle-labs-logo-blue.png" alt="Barclays Eagle Labs" width={280} height={50} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-2 font-satoshi">
              Barclays Eagle Labs member?
            </p>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto font-satoshi">
              Grab your discount using our exclusive offer with Eagle Labs member rewards
            </p>
            <Link
              href="/eaglelabs"
              className="inline-flex items-center justify-center px-6 py-3 bg-lime-bright text-gray-900 text-sm font-medium rounded-full hover:bg-lime transition-colors uppercase tracking-wider"
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
              <Image src="/images/illustrations/smplco-illustration-signpost.png" alt="Tailored to your needs" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  <span className="font-editorial italic">Tailored</span>
                  <br />
                  to you
                </h2>
              </div>
            </div>
          </AnimateOnScroll>
          <TailoredTabs />
        </div>
      </section>

      {/* ============ HOME OF THE 5-DAY PROTOTYPE ============ */}
      <ParallaxImage
        src="/images/work/office-5day-prototype.jpg"
        alt="Home of the 5-Day prototype — SmplCo office"
      />

      {/* ============ SMPL INSIGHTS (BLOG) ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6">
              <Image src="/images/illustrations/smplco-illustration-smpl-insights.png" alt="Smpl Insights blog" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="font-editorial italic">Smpl</span>
                  <br />
                  <span className="font-bold">Insights</span>
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4 text-center font-satoshi">
              Browse our thoughts on key industry trends, tales of success and disaster, and tips
              for getting ahead in a digital world. All courtesy of innovators who have seen it
              and done it all themselves.
            </p>
            <div className="text-center mb-12">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors uppercase tracking-wider"
              >
                Get Knowledge
              </Link>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug group-hover:text-gray-700 transition-colors line-clamp-1">
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

      {/* ============ TOP 4 DOWNLOADED FREEBIES ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6">
              <Image src="/images/illustrations/smplco-illustration-high-five.png" alt="Top 4 Downloaded Freebies" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="font-editorial italic">Top 4</span>
                  <br />
                  <span className="font-bold">Downloaded Freebies</span>
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center font-satoshi">
              Practical guides Mike, Andreas and the team have written for the founders we work with every week. Free to download, no strings attached.
            </p>
          </AnimateOnScroll>
          <FreebieGrid
            freebies={[
              { href: '/ai-playbook', img: '/images/ai-playbook-mockup.jpg', title: 'Build with AI Without Building a Monster', meta: '13 pages', desc: 'Our playbook on how we plan, design and ship AI products.', initialCount: 1276 },
              { href: '/pitch-prep', img: '/images/pitch-prep-promo.jpg', title: 'Pitch Prep Guide', meta: '11 pages', desc: 'Frameworks for nailing your investor pitch.', initialCount: 612 },
              { href: '/attention-guide', img: '/images/attention-guide-promo.jpg', title: 'Attention is New Gold', meta: '8 pages', desc: 'Brand and storytelling for the most distracted era ever.', initialCount: 263 },
              { href: '/build-guide', img: '/images/smpl_buil_your_own_promo.jpg', title: 'Build Your Own Tools', meta: '10 pages', desc: 'Replace SaaS bloat with tools that actually fit.', initialCount: 174 },
            ]}
          />
        </div>
      </section>
    </div>
  )
}
