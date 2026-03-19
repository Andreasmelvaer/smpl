import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'
import PartnerCard from '@/components/PartnerCard'

export const metadata: Metadata = {
  title: 'Partners | SmplCo – Our Partner Network',
  description: 'Our partnerships offer you expertise, access, discounts, investment opportunities, and more. All carefully chosen to give you everything you need to successfully take on the world.',
  alternates: { canonical: 'https://smpl.as/partners' },
}

const partners = [
  {
    name: 'Shoosmiths',
    category: '(S)EIS Investment',
    logo: '/images/logos/clients/shoosmiths-logo.png',
    description: 'Ensure (S)EIS eligibility & compliance for your start-up or scale-up. Get a free consultation with UK-leading advisor on (S)EIS investment, Shoosmiths partner Tom Wilde.',
    href: 'https://www.shoosmiths.com/people/directory/tom-wilde',
  },
  {
    name: 'Barclays Eagle Labs',
    category: 'Community',
    logo: '/images/logos/partners/barclays-eagle-labs-logo-framer.png',
    description: 'Access co-working spaces, mentorship, and a thriving community of innovators through the Barclays Eagle Labs network across the UK.',
    href: 'https://labs.uk.barclays/',
  },
  {
    name: 'Scale London',
    category: 'Community',
    logo: '/images/logos/clients/scale-logo.png',
    description: 'Join a curated community of ambitious founders and operators in London. Events, introductions, and peer support to help you scale.',
    href: 'https://www.scalelondon.co/',
  },
  {
    name: 'Capital Enterprise',
    category: 'Accelerator Programs',
    logo: '/images/logos/clients/capital-enterprise-logo-color.png',
    description: 'London\'s entrepreneurship network connecting start-ups with accelerators, funding, and growth programmes across the capital.',
    href: 'https://capitalenterprise.org/',
  },
  {
    name: 'Lunos',
    category: 'User testing',
    logo: '/images/logos/clients/lunos-logo.png',
    description: 'Professional user testing and UX research to validate your product with real users. Get actionable insights to improve your product experience.',
    href: 'https://www.lunos.io/',
  },
  {
    name: 'E-FWD',
    category: 'Community (energy)',
    logo: '/images/logos/clients/e-fwd-logo.png',
    description: 'A community dedicated to energy innovation, connecting start-ups with corporates and investors in the energy transition space.',
    href: 'https://www.e-fwd.com/',
  },
  {
    name: 'Japeto',
    category: 'Product development',
    logo: null,
    description: 'Expert product development and engineering support to bring your digital product from concept to launch with speed and quality.',
    href: 'https://www.japeto.com/',
  },
  {
    name: 'Codebase',
    category: 'Accelerator Programs',
    logo: '/images/logos/clients/codebase-logo.png',
    description: 'Scotland\'s largest tech incubator, providing workspace, community, and acceleration programmes for early-stage tech companies.',
    href: 'https://www.thisiscodebase.com/',
  },
  {
    name: 'Wood Associates London',
    category: 'Investment',
    logo: '/images/logos/clients/wood-associates-london-logo.png',
    description: 'Strategic investment advisory helping start-ups navigate fundraising rounds and connect with the right investors for their stage.',
    href: 'https://woodassociates.co.uk/',
  },
  {
    name: 'Die Botschafter',
    category: 'Marketing & Comms',
    logo: '/images/logos/clients/die-botschafter-logo.png',
    description: 'Full-service marketing and communications agency specialising in brand storytelling and campaign strategy for ambitious companies.',
    href: 'https://diebotschafter.de/',
  },
  {
    name: 'Studio Blunt',
    category: 'Brand Strategy',
    logo: '/images/logos/clients/studio-blunt-logo.png',
    description: 'Brand strategy and identity design for companies that want to stand out. From positioning to visual identity systems.',
    href: 'https://www.studioblunt.com/',
  },
  {
    name: 'Melvær&Co',
    category: 'Exhibitions',
    logo: '/images/logos/clients/melvaer-and-co-logo.png',
    description: 'Award-winning exhibition design and spatial storytelling. Creating immersive brand experiences and exhibition spaces worldwide.',
    href: 'https://www.melvaer.co/',
  },
  {
    name: 'Experis',
    category: 'AI strategy & development',
    logo: '/images/logos/clients/experis-manpowergroup-logo.png',
    description: 'AI strategy consulting and talent solutions from ManpowerGroup\'s technology brand. Access top AI and engineering talent on demand.',
    href: 'https://www.experis.co.uk/',
  },
  {
    name: 'Fabriq',
    category: 'AI strategy & development',
    logo: '/images/logos/clients/fabriq-logo.png',
    description: 'AI-powered operations and asset management platform. Helping organisations harness AI to optimise workflows and decision-making.',
    href: 'https://www.fabriq.space/',
  },
  {
    name: 'Evista',
    category: 'Product Development',
    logo: '/images/logos/clients/evista-logo.png',
    description: 'Product development partner specialising in building scalable digital products. From MVPs to full platform builds.',
    href: 'https://www.evista.no/',
  },
]

export default function Partners() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-44 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/Partners.png"
            alt="SmplCo partner network"
            width={700}
            height={400}
            className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[560px] h-auto mx-auto relative z-10"
            priority
          />
        </div>
      </section>

      {/* ============ PARTNERS INTRO ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h1 className="text-3xl md:text-4xl font-bold">Our Partners</h1>
            <div>
              <p className="text-gray-600 font-satoshi leading-relaxed mb-6">
                Our partnerships offer you expertise, access, discounts, investment opportunities,
                and more. All carefully chosen to give you everything you need to successfully
                take on the world.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Want Some Intros?
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.name}
                name={partner.name}
                category={partner.category}
                logo={partner.logo}
                description={partner.description}
                href={partner.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <section className="pb-24 md:pb-32">
        <div className="container-main">
          <div className="bg-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Interested in partnering?
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto font-satoshi">
              We&apos;re always looking for strategic partnerships that benefit our clients.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-lime text-gray-900 text-sm font-semibold rounded-full hover:bg-lime-bright transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
