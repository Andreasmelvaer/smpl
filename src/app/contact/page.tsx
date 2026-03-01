import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get in Touch — SmplCo',
  description:
    'Every great product starts with a conversation. Get in touch for a free consultation with our digital innovation experts.',
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left column — info */}
          <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let&apos;s <span className="font-editorial">build</span>{' '}
                something great
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-satoshi mb-12">
                Every great product starts with a conversation. Tell us about
                your idea and we&apos;ll get back to you within 24 hours.
              </p>

            <AnimateOnScroll delay={200}>
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@smpl.co"
                    className="text-gray-600 font-satoshi hover:text-gray-900 transition-colors"
                  >
                    hello@smpl.co
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">
                    Based in
                  </h3>
                  <p className="text-gray-600 font-satoshi">
                    London &amp; Oslo — working globally
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">
                    Typical response time
                  </h3>
                  <p className="text-gray-600 font-satoshi">
                    Within 24 hours on weekdays
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-offwhite rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/illustrations/smplco-illustration-fist-bump.png"
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div>
                    <p className="font-semibold text-sm">Free consultation</p>
                    <p className="text-xs text-gray-500 font-satoshi">
                      No strings attached
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-satoshi leading-relaxed">
                  Not sure where to start? Book a free 30-minute consultation.
                  We&apos;ll help you figure out the best path forward for your
                  idea — whether that&apos;s with us or not.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right column — form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our <span className="font-editorial italic">offices</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { city: 'Stavanger', country: 'Norway', emoji: '🇳🇴' },
              { city: 'London', country: 'United Kingdom', emoji: '🇬🇧' },
              { city: 'San Francisco', country: 'United States', emoji: '🇺🇸' },
              { city: 'Budapest', country: 'Hungary', emoji: '🇭🇺' },
              { city: 'Zürich', country: 'Switzerland', emoji: '🇨🇭' },
            ].map((loc) => (
              <div key={loc.city} className="bg-offwhite rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{loc.emoji}</div>
                <p className="font-bold text-gray-900">{loc.city}</p>
                <p className="text-sm text-gray-500 font-satoshi">{loc.country}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eagle Labs banner */}
        <AnimateOnScroll>
          <div className="mt-24 bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-white">
            <Image
              src="/images/logos/partners/barclays-eagle-labs-logo-blue.png"
              alt="Barclays Eagle Labs"
              width={160}
              height={32}
              className="brightness-0 invert opacity-70 shrink-0"
            />
            <div className="text-center md:text-left flex-1">
              <p className="font-semibold text-white mb-1">
                Barclays Eagle Labs member?
              </p>
              <p className="text-sm text-gray-400 font-satoshi">
                Grab your exclusive discount through our Eagle Labs partnership.
              </p>
            </div>
            <Link
              href="/eaglelabs"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors shrink-0"
            >
              View Offer
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
