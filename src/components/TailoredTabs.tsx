'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const tabs = [
  {
    id: 'startup',
    label: 'Start-ups & Scale-ups',
    headline: 'Go from idea to product in weeks',
    description:
      'You have an idea, a napkin sketch, or a rough deck. We turn it into a stunning, clickable prototype in just 5 days — then help you build and launch your MVP fast.',
    features: [
      '5 Day Prototype — investor-ready in a single sprint',
      'Design as a Service — a full design team for the cost of one designer',
      'AI-assisted development — high quality, high speed',
      'Go-to-market materials — website, video, pitch deck',
    ],
    cta: { label: 'See Start-up Success Stories', href: '/work' },
    illustration: '/images/illustrations/smplco-illustration-prototype.png',
  },
  {
    id: 'enterprise',
    label: 'Enterprise & Corporate',
    headline: 'Innovate like a start-up, at enterprise scale',
    description:
      'You need a digital innovation partner who moves fast without cutting corners. We help corporates prototype, test, and launch new digital products and services.',
    features: [
      'Rapid prototyping & concept validation workshops',
      'Internal tools & customer-facing digital products',
      'Innovation sprints embedded in your existing teams',
      'Full design, development, and launch support',
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

      {/* Tab content */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            {current.headline}
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed font-satoshi">
            {current.description}
          </p>
          <ul className="space-y-3 mb-8">
            {current.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-gray-700 font-satoshi"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-lime mt-1.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={current.cta.href}
            className="inline-flex items-center justify-center px-7 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            {current.cta.label}
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src={current.illustration}
            alt=""
            width={360}
            height={360}
            className="opacity-90"
          />
        </div>
      </div>
    </div>
  )
}
