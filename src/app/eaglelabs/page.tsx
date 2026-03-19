import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'
import LogoMarquee from '@/components/LogoMarquee'

export const metadata: Metadata = {
  title: 'Barclays Eagle Labs | 25% Off 5-Day Prototype | SmplCo',
  description: 'Exclusive 25% discount on our 5-Day Prototype service for Barclays Eagle Labs members. See your vision brought to life in just five days.',
  alternates: { canonical: 'https://smpl.as/eaglelabs' },
}

const caseStudies = [
  { name: 'Compera', image: '/images/cases/compera-card.jpg', slug: 'compera' },
  { name: 'nucase', image: '/images/cases/nucase-card.jpg', slug: 'nucase' },
  { name: 'Share50', image: '/images/cases/share50-card.jpg', slug: 'share50' },
  { name: 'ENQUIP', image: '/images/cases/enquip-card.jpg', slug: 'enquip' },
  { name: 'TWENTY40', image: '/images/cases/2040-card.jpg', slug: '2040' },
  { name: 'altien', image: '/images/cases/altien-card.jpg', slug: 'altien' },
]

const features = [
  '3 workshops & live Figma iteration',
  'Strategic insight from industry veterans',
  'Your own team of epic product designers',
  'Specialist support, from AI to UI',
  'A hi-res, clickable prototype',
  'Pitch-ready design & brand assets',
]

const testimonials = [
  { name: 'Mark Cox', quote: 'SmplCo turned our idea into a working prototype in just five days. The team was incredible.' },
  { name: 'Tahani Carruthers', quote: 'We used our prototype to raise our first round of funding. Couldn\'t have done it without SmplCo.' },
  { name: 'Vibeke Bjaanes', quote: 'Professional, fast, and they truly understood our vision from day one.' },
  { name: 'Lene Koll', quote: 'The 5-Day Prototype process gave us clarity and confidence to move forward.' },
  { name: 'Kitty Harris', quote: 'SmplCo helped us validate our concept before committing to a full build.' },
  { name: 'Petter Støldal', quote: 'Outstanding quality and speed. Our investors were impressed with the prototype.' },
]

const stats = [
  {
    number: '125+',
    label: 'PROTOTYPES & MVPs',
    icon: '/images/illustrations/smplco-illustration-notebook.png',
  },
  {
    number: '€10m+',
    label: 'RAISED by clients',
    icon: '/images/illustrations/smplco-illustration-prototype.png',
  },
  {
    number: '61% ⇩',
    label: 'AVE TIME/COST',
    icon: '/images/illustrations/smplco-illustration-fist-bump.png',
  },
]

export default function EagleLabs() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <div className="relative mb-8 mx-auto w-full max-w-[500px] md:max-w-[600px] lg:max-w-[770px] aspect-[16/9] overflow-hidden">
            <Image
              src="/images/illustrations/Barclays Members Reward.png"
              alt="Barclays Eagle Labs exclusive offer"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="font-semibold leading-snug mb-4 max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            25% off our 5-Day Prototype service
          </h1>
          <p className="text-sm text-gray-500 font-satoshi leading-relaxed max-w-xl mx-auto mb-8">
            See your vision brought to life in just five days, with a fully designed, clickable
            prototype designed to test feasibility &amp; viability, raise investment, and land your
            first customers. Backed by a team of highly successful entrepreneurs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-900 text-gray-900 text-xs font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Build With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CLIENT LOGOS ============ */}
      <LogoMarquee />

      {/* ============ CASE STUDIES ============ */}
      <section id="case-studies" className="py-20 md:py-28">
        <div className="container-main">
          <div className="mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 40px)' }}>
              A winning<br />solution
            </h2>
            <p className="text-sm text-gray-500 font-satoshi max-w-lg leading-relaxed">
              Our clients have used their prototypes to raise millions, land places in exclusive
              incubators, win their first customers, and more. Take a look at some examples:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={study.image}
                  alt={study.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/work"
              className="text-xs font-medium text-gray-900 uppercase tracking-widest hover:text-gray-500 transition-colors"
            >
              See ideas come alive →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main text-center">
          <h2 className="font-bold leading-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 40px)' }}>
            Don&apos;t<br />
            <span className="font-editorial italic">just take our</span><br />
            word for it
          </h2>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-16">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-left">
                <p className="text-sm text-gray-600 font-satoshi leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS WITH MASCOTS ============ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.number} className="flex items-center gap-4">
                <div className="shrink-0 w-20 h-20 relative">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold leading-none mb-1">{stat.number}</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <h2 className="font-bold leading-tight text-center mb-12" style={{ fontSize: 'clamp(32px, 4vw, 40px)' }}>
            Let&apos;s get<br />started
          </h2>

          <div className="max-w-md mx-auto bg-offwhite rounded-2xl p-8 md:p-10">
            <h3 className="text-base font-bold mb-3">5-Day Prototype</h3>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl md:text-4xl font-bold">£6,075</span>
              <span className="text-lg text-gray-400 line-through">£8,100</span>
            </div>
            <p className="text-sm text-gray-500 font-satoshi mb-6 leading-relaxed">
              Reveal your vision, test viability, and win investment with a fully clickable prototype
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xs text-gray-600 font-satoshi">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-800 font-satoshi font-bold mb-6">
              Run by a team of highly successful entrepreneurs
            </p>

            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Let&apos;s Talk About Your Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
