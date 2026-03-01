import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Success Stories — SmplCo',
  description:
    'See how we help ambitious innovators go from idea to live product. Start-ups, scale-ups, and global brands — built fast with SmplCo.',
}

const projects = [
  {
    name: 'Altien',
    subtitle: 'Healthcare',
    slug: 'altien',
    tags: ['5-Day Prototype'],
    image: '/images/work/work-screenshot-7zbdZUNv.jpg',
    bgColor: '#C5DAF0',
  },
  {
    name: 'Compera',
    subtitle: 'Supply Chain Reporting',
    slug: 'compera',
    tags: ['5-day prototype', 'Development'],
    image: '/images/work/work-screenshot-8MPdzvcM.png',
    bgColor: '#E8E5E0',
  },
  {
    name: 'Enquip',
    subtitle: 'Real Estate / FS',
    slug: 'enquip',
    tags: ['5-day prototype'],
    image: '/images/work/work-screenshot-GClb3SRB.png',
    bgColor: '#7EECDA',
  },
  {
    name: 'Nucase',
    subtitle: 'Home Renovation',
    slug: 'nucase',
    tags: ['5-day prototype', 'Development'],
    image: '/images/work/work-screenshot-K8urYIj7.png',
    bgColor: '#D4E857',
  },
  {
    name: 'Orli',
    subtitle: 'Mental Health',
    slug: 'orli',
    tags: ['5-day prototype'],
    image: '/images/work/work-screenshot-5dCPqayx.jpg',
    bgColor: '#F0EDE6',
  },
  {
    name: 'Paperdrop',
    subtitle: 'For Contractors',
    slug: 'paperdrop',
    tags: ['MVP Development'],
    image: '/images/work/work-screenshot-IGDCoJUp.png',
    bgColor: '#E0E4E8',
  },
  {
    name: 'Saddle',
    subtitle: 'M&A Platform',
    slug: 'saddle',
    tags: ['SaaS', 'AI Development'],
    image: '/images/work/work-screenshot-4V7cfbNH.png',
    bgColor: '#F5F0E8',
  },
  {
    name: 'TWENTY40',
    subtitle: 'Decarbonisation',
    slug: '2040',
    tags: ['5-day prototype', 'Energy'],
    image: '/images/work/work-screenshot-5dXnzIIn.jpg',
    bgColor: '#C5E8D0',
  },
  {
    name: 'Resani',
    subtitle: 'Hygiene',
    slug: 'resani',
    tags: ['5-day prototype'],
    image: '/images/work/work-screenshot-5x8QfViJ.jpg',
    bgColor: '#E8D5E0',
  },
  {
    name: 'Tilsig',
    subtitle: 'Energy / Flow Monitoring',
    slug: 'tilsig',
    tags: ['5-day prototype', 'Energy'],
    image: '/images/work/work-screenshot-7B0EOKcy.jpg',
    bgColor: '#D0E0F0',
  },
]

export default function WorkPage() {
  return (
    <div>
      {/* Hero — centered with illustration integrated into heading */}
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
            {/* Large heading with illustration overlapping */}
            <div className="relative">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight">
                Our{' '}
                <span className="relative inline-block">
                  <span className="font-editorial">Work</span>
                  {/* Lime blob behind "Work" */}
                  <span
                    className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] rounded-full opacity-60"
                    style={{ backgroundColor: '#f0ff83' }}
                  />
                </span>
              </h1>
              {/* Illustration overlapping the heading */}
              <div className="hidden md:block absolute -bottom-16 left-1/2 -translate-x-1/2">
                <Image
                  src="/images/illustrations/smplco-illustration-design-frame.png"
                  alt=""
                  width={240}
                  height={240}
                  className="opacity-90"
                />
              </div>
              {/* Decorative bezier curve */}
              <svg className="hidden md:block absolute -top-6 right-[-60px] w-40 h-28 pointer-events-none" viewBox="0 0 160 112" fill="none">
                <path d="M10 100 C 50 100, 60 10, 120 10 C 140 10, 155 25, 150 40" stroke="#60a5fa" strokeWidth="2" fill="none" />
                <circle cx="10" cy="100" r="4" stroke="#60a5fa" strokeWidth="2" fill="none" />
                <circle cx="150" cy="40" r="4" stroke="#60a5fa" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container-main">
          {/* Portfolio header */}
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold shrink-0">Portfolio</h2>
              <div className="flex items-start gap-4 max-w-xl">
                <p className="text-gray-600 leading-relaxed font-satoshi">
                  Here are some examples from the 100+ digital products and services
                  we&apos;ve brought to life for clients ranging from early stage start-ups
                  to corporate innovation departments at global leaders.
                </p>
                <svg className="w-8 h-8 shrink-0 text-gray-900 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Project card grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.name} delay={i * 30}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow bg-white"
                >
                  {/* Colored image area */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <div className="absolute inset-0 flex items-end justify-center p-6 pt-12">
                      <div className="relative w-full max-w-[85%] aspect-[16/10] rounded-t-lg overflow-hidden shadow-xl">
                        <Image
                          src={project.image}
                          alt={`${project.name} — ${project.subtitle}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Card info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {project.name} — {project.subtitle}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Stats */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { value: '125+', label: 'Products built' },
                { value: '5 days', label: 'Idea to prototype' },
                { value: '2 weeks', label: 'Prototype to MVP' },
                { value: '$3bn', label: 'Alumni valuations' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-offwhite rounded-2xl p-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 font-satoshi">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Client logos */}
          <div className="mb-16">
            <p className="text-xs font-medium text-gray-500 text-center mb-10 uppercase tracking-wider">
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
                { src: '/images/logos/clients/skillwork-logo.png', alt: 'Skillwork', w: 100 },
                { src: '/images/logos/clients/evista-logo.png', alt: 'Evista', w: 80 },
                { src: '/images/logos/clients/studio-blunt-logo.png', alt: 'Studio Blunt', w: 100 },
                { src: '/images/logos/clients/wood-associates-london-logo.png', alt: 'Wood Associates', w: 100 },
              ].map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={40}
                  className="h-8 w-auto object-contain grayscale"
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Your story could be next
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto font-satoshi">
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
        </div>
      </div>
    </div>
  )
}
