import { generatePageMetadata } from '@/lib/metadata'
import { getPostData } from '@/lib/markdown'
import ContactForm from '@/components/ContactForm'
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

          {/* Right: Contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
