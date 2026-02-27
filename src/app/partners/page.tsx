import type { Metadata } from 'next'
import Link from 'next/link'

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
            },
            {
              name: 'Figma',
              type: 'Design Platform',
              desc: 'Recognised as a Global Exemplar by Figma for AI-assisted development — the gold standard in digital design.',
            },
            {
              name: 'Lovable',
              type: 'AI Development',
              desc: 'Multiple award winners with Lovable, including SheBuilds and Global Runner-Up.',
            },
            {
              name: 'Technology Partners',
              type: 'Development Stack',
              desc: 'Working with the best tools: Next.js, Vercel, and modern AI-assisted development platforms.',
            },
          ].map((partner) => (
            <div key={partner.name} className="bg-offwhite rounded-2xl p-8">
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
