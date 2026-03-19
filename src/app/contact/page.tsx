import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import type { Metadata } from 'next'
import ShimmerGrid from '@/components/ShimmerGrid'
import { FAQJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Contact Us | SmplCo – Let\'s Build Together',
  description: 'Get a free consultation with our digital innovation experts. One hour of advice, absolutely free.',
  alternates: { canonical: 'https://smpl.as/contact' },
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
    <div className="min-h-screen">
      <FAQJsonLd faqs={[
        { question: 'How do I contact SmplCo?', answer: 'You can reach SmplCo through the contact form on our website at smpl.as/contact, or email us directly at hello@smpl.as. We have offices in Stavanger (Norway), London (UK), San Francisco (USA), Szeged (Hungary), and St. Gallen (Switzerland).' },
        { question: 'Does SmplCo offer free consultations?', answer: 'Yes, SmplCo offers a free 1-hour consultation with our digital innovation experts. Share your idea or challenge, we assign the right specialist, and you get a no-obligation advice session. If there is a fit, we provide an optional proposal.' },
        { question: 'Where are SmplCo offices located?', answer: 'SmplCo has offices in five locations: Stavanger, Norway (Ryfylkegata 9); London, UK (Tottenham Court Road); San Francisco, USA (1 Ferry Building); Szeged, Hungary (Attila utca 11); and St. Gallen, Switzerland (Teufener Str. 3).' },
      ]} />
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-44 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/Contact.png"
            alt="Contact SmplCo"
            width={700}
            height={400}
            className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[560px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <div>
              <p className="text-gray-600 font-satoshi leading-relaxed mb-4">
                Send us as much or as little detail as you like. We&apos;ll get in touch
                for your free consultation with our digital innovation experts. (And
                there&apos;ll be no sales pitch either.)
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Info */}
            <div>
              {/* Offices */}
              <h3 className="text-xl font-semibold mb-6">Connect &amp; Engage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {offices.map((office) => (
                  <div key={office.city} className="bg-offwhite rounded-xl p-4">
                    <p className="font-medium text-sm text-gray-900">{office.city}</p>
                    <p className="text-xs text-gray-500">{office.country}</p>
                    <p className="text-xs text-gray-400 mt-1">{office.address}</p>
                  </div>
                ))}
              </div>

              {/* What to expect */}
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
                    <p className="text-gray-700 pt-1 font-satoshi">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
