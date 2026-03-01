'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const tabs = [
  {
    id: 'startup',
    label: 'Start-Up',
    headline: 'Reveal your vision',
    description:
      'You have an idea, a napkin sketch, or a rough deck. We turn it into a stunning, clickable prototype in just 5 days — then help you build and launch your MVP fast.',
    cards: [
      { subtitle: 'Reveal your vision', title: '5-Day Prototype', description: 'Go from idea to high-fidelity, clickable prototype in just 5 days.' },
      { subtitle: 'Build & launch fast', title: 'AI-assisted MVP', description: 'We build your MVP at speed using AI-assisted development and lean UX.' },
      { subtitle: 'Raise funding', title: 'Get investor-ready', description: 'Pitch decks, demo videos, and go-to-market materials that win investment.' },
    ],
    cta: { label: 'See Start-up Success Stories', href: '/work' },
    illustration: '/images/illustrations/smplco-illustration-prototype.png',
  },
  {
    id: 'scaleup',
    label: 'Scale-Up',
    headline: 'Accelerate your growth',
    description:
      'You have traction and need to scale fast. We provide the design and development firepower to iterate, grow, and ship at speed.',
    cards: [
      { subtitle: 'Design at scale', title: 'Design as a Service', description: 'A full design team for the cost of one designer. UI/UX, branding, and more.' },
      { subtitle: 'Ship faster', title: 'Product Development', description: 'AI-powered development that ships production-ready features fast.' },
      { subtitle: 'Grow your brand', title: 'Marketing & Launch', description: 'Websites, videos, and marketing materials to fuel your next growth phase.' },
    ],
    cta: { label: 'See Scale-up Case Studies', href: '/work' },
    illustration: '/images/illustrations/smplco-illustration-mobile-app.png',
  },
  {
    id: 'corporate',
    label: 'Corporate Innovator',
    headline: 'Innovate like a start-up, at enterprise scale',
    description:
      'You need a digital innovation partner who moves fast without cutting corners. We help corporates prototype, test, and launch new digital products and services.',
    cards: [
      { subtitle: 'Validate fast', title: 'Innovation Sprints', description: 'Rapid prototyping and concept validation workshops embedded in your teams.' },
      { subtitle: 'Build internal tools', title: 'Digital Products', description: 'Customer-facing apps and internal tools designed for enterprise scale.' },
      { subtitle: 'Full support', title: 'End-to-end Delivery', description: 'From discovery to launch — design, development, and go-to-market in one team.' },
    ],
    cta: { label: 'See Enterprise Case Studies', href: '/work' },
    illustration: '/images/illustrations/smplco-illustration-innovation-forum.png',
  },
]

export default function TailoredTabs() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex justify-center gap-2 mb-12">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActive(i)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
              active === i
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content: 3 service cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {current.cards.map((card) => (
          <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-500 font-satoshi mb-3">{card.subtitle}</p>
            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-satoshi mb-6">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href={current.cta.href}
          className="inline-flex items-center justify-center px-7 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          {current.cta.label}
        </Link>
      </div>
    </div>
  )
}
