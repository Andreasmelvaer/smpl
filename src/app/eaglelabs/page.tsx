import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Barclays Eagle Labs',
  description: 'Exclusive SmplCo offer for Barclays Eagle Labs members. Get discounted prototyping and product development.',
}

export default function EagleLabs() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <Image src="/images/logos/partners/barclays-eagle-labs-logo-blue.png" alt="Barclays Eagle Labs" width={250} height={50} />
            </div>
            <p className="text-sm font-medium text-gray-500 mb-3">
              Exclusive Partnership
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Barclays Eagle Labs
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-satoshi">
              SmplCo has partnered with Barclays Eagle Labs to offer exclusive
              member discounts on prototyping and product development.
            </p>
          </div>

          {/* Eagle Labs illustration */}
          <div className="flex justify-center mb-12">
            <Image src="/images/illustrations/smplco-illustration-eagle-labs-member-reward.png" alt="Exclusive Eagle Labs member reward — SmplCo partnership" width={500} height={400} />
          </div>

          {/* Offer card */}
          <div className="bg-lime rounded-2xl p-8 md:p-12 mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Exclusive Member Discount
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-lg mx-auto mb-6 font-satoshi">
              Barclays Eagle Labs member? Grab your discount using our exclusive
              offer with Eagle Labs member rewards. Take your innovation journey
              to the next level with SmplCo&apos;s proven 5 Day Prototype methodology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Claim your discount
            </Link>
          </div>

          {/* What you get */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">What Eagle Labs members get</h2>
            <div className="space-y-4">
              {[
                'Discounted 5 Day Prototype — go from idea to clickable prototype',
                'Priority access to SmplCo product development services',
                'Free initial consultation with our digital innovation experts',
                'Exclusive rates on MVP development and launch support',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-gray-700 font-satoshi">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-offwhite rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-xl font-semibold mb-3">Ready to get started?</h3>
            <p className="text-gray-600 mb-6 font-satoshi">
              Mention Eagle Labs when you get in touch and we&apos;ll apply your
              discount automatically.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
