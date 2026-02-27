import { generatePageMetadata } from '@/lib/metadata'
import { getPostData } from '@/lib/markdown'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getPostData('pages', 'contact')
    return generatePageMetadata(data)
  } catch {
    return { title: 'Contact Us' }
  }
}

const offices = [
  { city: 'Stavanger', country: 'Norway', address: 'Ryfylkegata 9, Stavanger' },
  { city: 'London', country: 'United Kingdom', address: 'Tottenham Court Road, London' },
  { city: 'San Francisco', country: 'USA', address: '1 Ferry Building, San Francisco' },
  { city: 'Szeged', country: 'Hungary', address: 'Attila utca 11, Szeged' },
  { city: 'St. Gallen', country: 'Switzerland', address: 'Teufener Str. 3, 9000 St. Gallen' },
]

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let&apos;s build together
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;ve been in your shoes. We&apos;ve lived it. That&apos;s why
            we start by offering{' '}
            <span className="font-semibold text-gray-900">
              one hour of advice — absolutely free
            </span>
            . The kind of advice that has already helped our clients build
            products & services that have won millions in investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="bg-lime rounded-2xl p-8 md:p-10 mb-10">
              <h2 className="text-2xl font-bold mb-3">Free advice from experts</h2>
              <p className="text-gray-700 leading-relaxed">
                Send us as much or as little detail as you like. We&apos;ll get
                in touch for your free consultation with our digital innovation
                experts. And there&apos;ll be no sales pitch either.
              </p>
            </div>

            {/* What to expect */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">What to expect</h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Share your idea or challenge' },
                  { step: '2', text: 'We assign the right specialist' },
                  { step: '3', text: '1-hour free advice session' },
                  { step: '4', text: 'Optional proposal if there\'s a fit' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-offwhite text-sm font-semibold flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <p className="text-gray-700 pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Global offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-offwhite rounded-xl p-4">
                    <p className="font-medium text-sm text-gray-900">{office.city}</p>
                    <p className="text-xs text-gray-500">{office.country}</p>
                    <p className="text-xs text-gray-400 mt-1">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form placeholder */}
          <div>
            <div className="bg-offwhite rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent resize-none"
                    placeholder="What are you building? What stage are you at?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Send message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We&apos;ll respond within 24 hours. No sales pitch — promise.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
