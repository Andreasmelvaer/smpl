import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Our strategic partnerships with industry leaders help provide comprehensive support for digital product development.',
}

export default function Partners() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Partner Network
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-satoshi">
            We&apos;ve built strategic partnerships with industry leaders to provide
            our clients with comprehensive support across every aspect of digital
            product development and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              name: 'Barclays Eagle Labs',
              type: 'Innovation Partner',
              desc: 'Exclusive member discounts and collaboration through Eagle Labs member rewards programme.',
              link: '/eaglelabs',
              logo: '/images/logos/partners/barclays-eagle-labs-logo-blue.png',
            },
            {
              name: 'Figma',
              type: 'Design Platform',
              desc: 'Recognised as a Global Exemplar by Figma for AI-assisted development — the gold standard in digital design.',
              logo: '/images/logos/recognition/figma-logo.png',
            },
            {
              name: 'Lovable',
              type: 'AI Development',
              desc: 'Multiple award winners with Lovable, including SheBuilds and Global Runner-Up.',
              logo: '/images/logos/recognition/lovable-logo.png',
            },
            {
              name: 'W3Schools',
              type: 'Education Partner',
              desc: 'Partnering with the world\'s largest web developer education platform.',
              logo: '/images/logos/partners/w3-schools-logo.png',
            },
          ].map((partner) => (
            <div key={partner.name} className="bg-offwhite rounded-2xl p-8">
              {partner.logo && (
                <div className="h-10 flex items-center mb-4">
                  <Image src={partner.logo} alt={partner.name} width={120} height={40} className="h-8 w-auto object-contain" />
                </div>
              )}
              <p className="text-xs font-medium text-gray-500 mb-2">
                {partner.type}
              </p>
              <h2 className="text-xl font-semibold mb-3">{partner.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-satoshi">
                {partner.desc}
              </p>
              {partner.link && (
                <Link
                  href={partner.link}
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Clients we work with</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { src: '/images/logos/clients/shoosmiths-logo.png', alt: 'Shoosmiths' },
              { src: '/images/logos/clients/scale-logo.png', alt: 'Scale' },
              { src: '/images/logos/clients/lunos-logo.png', alt: 'Lunos' },
              { src: '/images/logos/clients/experis-manpowergroup-logo.png', alt: 'Experis ManpowerGroup' },
              { src: '/images/logos/clients/codebase-logo.png', alt: 'CodeBase' },
              { src: '/images/logos/clients/fabriq-logo.png', alt: 'Fabriq' },
              { src: '/images/logos/clients/skillwork-logo.png', alt: 'Skillwork' },
              { src: '/images/logos/clients/studio-blunt-logo.png', alt: 'Studio Blunt' },
              { src: '/images/logos/clients/evista-logo.png', alt: 'Evista' },
              { src: '/images/logos/clients/e-fwd-logo.png', alt: 'E-fwd' },
            ].map((logo) => (
              <div key={logo.alt} className="bg-offwhite rounded-xl p-4 flex items-center justify-center aspect-[5/3]">
                <Image src={logo.src} alt={logo.alt} width={120} height={60} className="w-auto h-auto max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Interested in partnering?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto font-satoshi">
            We&apos;re always looking for strategic partnerships that benefit our
            clients.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-lime text-gray-900 text-sm font-semibold rounded-full hover:bg-lime-bright transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
