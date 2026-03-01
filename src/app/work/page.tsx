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
    name: 'Saddle',
    tagline: 'From idea to live product in 2 weeks',
    description:
      'A SaaS platform helping companies make faster, better decisions during M&A. Recognised by Figma as a global exemplar of AI-assisted development.',
    tags: ['SaaS', 'AI Development', '5 Day Prototype'],
    images: [
      '/images/work/work-screenshot-4V7cfbNH.png',
      '/images/work/work-screenshot-8MPdzvcM.png',
    ],
    highlight: true,
  },
  {
    name: 'Enquip Energy',
    tagline: 'Helping raise capital and close sales',
    description:
      'Branding, design, and digital product development for an energy-tech company. SmplCo helped Enquip simplify their complex offering into a beautiful, investor-ready story.',
    tags: ['Energy Tech', 'Branding', 'MVP'],
    images: [
      '/images/work/work-screenshot-GClb3SRB.png',
      '/images/work/work-screenshot-IGDCoJUp.png',
    ],
  },
  {
    name: 'Resani',
    tagline: 'A 5-day prototype that kicked off a new journey',
    description:
      'The 5-day prototype with SmplCo played a key role in shaping the core value of the company. The visual effects kick started a new journey for Resani.',
    tags: ['PropTech', '5 Day Prototype', 'Design'],
    images: [
      '/images/work/work-screenshot-K8urYIj7.png',
      '/images/work/work-screenshot-5dCPqayx.jpg',
    ],
  },
  {
    name: 'TWENTY40',
    tagline: 'Speed and quality that exceeded expectations',
    description:
      'A digital product built with unprecedented speed and quality. SmplCo understood exactly what was needed and delivered beyond expectations.',
    tags: ['Digital Product', 'AI-Assisted', 'Development'],
    images: [
      '/images/work/work-screenshot-5dXnzIIn.jpg',
      '/images/work/work-screenshot-5x8QfViJ.jpg',
    ],
  },
  {
    name: 'Get to Give',
    tagline: 'First place at the Lovable SheBuilds hackathon',
    description:
      'In 48 hours, our team built a validated product concept that won first place at the SheBuilds hackathon, surrounded by 200+ inspiring women.',
    tags: ['Hackathon Winner', 'Social Impact', 'Rapid Build'],
    images: [
      '/images/work/work-screenshot-7B0EOKcy.jpg',
    ],
  },
  {
    name: 'Altien',
    tagline: 'The app we will all wish we had, one day',
    description:
      'A deeply personal project helping families navigate life\'s most difficult transitions. Designed and built with care, empathy, and cutting-edge technology.',
    tags: ['HealthTech', 'Design', 'Mobile App'],
    images: [
      '/images/work/work-screenshot-7zbdZUNv.jpg',
      '/images/work/work-screenshot-8G0s0DGc.jpg',
    ],
  },
]

export default function WorkPage() {
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Our <span className="font-editorial">Work</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-satoshi max-w-lg">
                Here are some examples from the 100+ digital products and services
                we&apos;ve brought to life for clients ranging from early stage start-ups
                to corporate innovation departments at global leaders.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image src="/images/illustrations/smplco-illustration-design-frame.png" alt="Our Work" width={280} height={280} className="opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header - now hidden since hero above covers it */}

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

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={i * 50}>
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
              >
                {/* Images */}
                <div
                  className={`space-y-4 ${i % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  {project.images.map((img, j) => (
                    <div
                      key={j}
                      className="rounded-2xl overflow-hidden bg-gray-100 relative aspect-[16/10]"
                    >
                      <Image
                        src={img}
                        alt={`${project.name} — ${project.tagline}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-gray-400 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-lg text-gray-500 font-satoshi mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-satoshi">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-24 mb-16">
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
