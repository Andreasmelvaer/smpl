import Image from 'next/image'
import Link from 'next/link'
import LogoMarquee from '@/components/LogoMarquee'
import ShimmerGrid from '@/components/ShimmerGrid'

export const metadata = {
  title: 'Smpl Academy — AI, Coding & Design Workshops',
  description: 'Hands-on training in AI, coding, and product design. From one-day workshops to company-wide programmes. Startups to enterprise.',
  alternates: { canonical: 'https://smpl.as/academy' },
  openGraph: {
    title: 'Smpl Academy — AI, Coding & Design Workshops',
    description: 'Hands-on training in AI, coding, and product design. Startups to enterprise.',
    url: 'https://smpl.as/academy',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Smpl Academy — AI, Coding & Design Workshops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smpl Academy — AI, Coding & Design Workshops',
    description: 'Hands-on training in AI, coding, and product design. Startups to enterprise.',
    images: ['/images/og-default.png'],
  },
}

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <div className="relative mb-8 mx-auto w-full max-w-[400px] md:max-w-[465px] lg:max-w-[520px] aspect-[4/3] overflow-hidden">
            <Image
              src="/images/illustrations/Academy.png"
              alt="Smpl Academy — AI training and workshops"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* ============ LEARNING BY DOING ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Learning by Doing
            </h1>
            <div>
              <p className="text-lg text-gray-900 font-semibold mb-2">
                For teams who want to get ahead of AI, not just keep up with it.
              </p>
              <p className="text-gray-600 font-satoshi mb-6">
                Hands-on training in AI, coding, and product design. From one-day workshops to company-wide programmes. Startups to enterprise,{' '}
                <Link href="/contact" className="underline underline-offset-2 decoration-lime-bright decoration-2 hover:decoration-lime">
                  let&apos;s talk
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEARNING AS A SERVICE ============ */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Learning as a Service</h2>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                Custom AI training for your team: coding, design, automation, and strategy.
                Whether 10 people or 10,000, we design programmes that scale. On-site or remote,
                led by practitioners who build real products every day.
              </p>
            </div>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/academy/team-workshop.jpg"
                alt="SmplCo team workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CODING WITH AI ============ */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden md:order-1">
              <Image
                src="/images/academy/coding-with-ai.jpg"
                alt="Coding with AI workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Coding with AI</h2>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                Build production-quality apps through natural language and AI. Go from idea to
                working prototype in record time using the method behind Lovable&apos;s She Builds
                Buildathon winner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT DESIGN IN FIGMA ============ */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Design in Figma</h2>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                Master Figma, prototyping, design systems, and user experience.
                Learn from the team recognised by Figma as a Global Exemplar.
              </p>
            </div>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/academy/figma-design.jpg"
                alt="Product design in Figma"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ ZERO TO ONE ============ */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden md:order-1">
              <Image
                src="/images/academy/zero-to-one.jpg"
                alt="Zero To One Programme"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Zero To One Programme</h2>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                6-week programme or 1-day intensive workshop. Delivered with Codebase (UK) and
                Vekstpartner (Norway). From idea to tested, market-ready product. Proven with
                startups in the Vekstpartner ecosystem being delivered to Valid&eacute;&apos;s AI-360 programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLIENT LOGOS ============ */}
      <LogoMarquee />

      {/* ============ FREE TASTER VIDEO ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main text-center">
          <Image
            src="/images/illustrations/smplco-illustration-smpl-insights.png"
            alt="Smpl Insights illustration"
            width={100}
            height={100}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
            <span className="font-editorial italic">Go from idea to product</span>
            <br />
            with AI vibe coding
          </h2>
          <p className="text-gray-600 font-satoshi mt-4 mb-2 font-semibold">A free taster:</p>
          <p className="text-gray-500 font-satoshi max-w-xl mx-auto mb-10">
            In this webinar for Barclays Eagle Labs we discuss how AI can help you get
            your MVP to market faster than ever.
          </p>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border-4 border-[#00bfff] shadow-lg">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/kltU6DgkJW0"
                title="Go from idea to product with AI vibe coding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <Image src="/images/illustrations/Academy.png" alt="Smpl Academy" width={80} height={80} className="shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  <span className="font-editorial italic">Learn AI-workflows</span>
                  <br />
                  from experts
                </h2>
              </div>
            </div>
            <p className="text-gray-600 font-satoshi mb-8">
              Send us as much or as little detail as you like. We&apos;ll get in touch for your free
              consultation with our digital innovation experts. (And there&apos;ll be no sales pitch either.)
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Here is my email*"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-bright font-satoshi"
                required
              />
              <textarea
                placeholder="Here's a bit about my project."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-bright font-satoshi resize-none"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
