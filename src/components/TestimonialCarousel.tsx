'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: 'SmplCo is my go-to partner for everything — from product design and development to branding and collateral.',
    name: 'Tom Harris',
    title: 'CEO, Saddle',
  },
  {
    quote: 'Smpl has done for us as the name implies — taken something complex and made it beautifully simple, helping us raise and helping us sell.',
    name: 'Kitty Harris',
    title: 'Enquip Energy',
  },
  {
    quote: 'The 5-day prototype with SmplCo played a key role in shaping the core value of the company. The visual effects kick started a new journey for us.',
    name: 'Kine Norland',
    title: 'Resani, Head of Growth',
  },
  {
    quote: 'I have never seen anything like this level of speed and quality. SmplCo understood exactly what we needed and delivered beyond expectations.',
    name: 'Christian Bjerke',
    title: 'TWENTY40, CEO',
  },
  {
    quote: 'The team at SmplCo brought clarity to a complex problem. Their prototype helped us secure our seed round within weeks.',
    name: 'Sarah Chen',
    title: 'FinTech Founder',
  },
  {
    quote: 'Working with SmplCo felt like having an in-house team. They moved fast, communicated clearly, and the results were outstanding.',
    name: 'Marcus Lindberg',
    title: 'Tilsig, Co-founder',
  },
  {
    quote: 'The 5 Day Prototype process is a game-changer. We went from idea to investor-ready demo in a single sprint.',
    name: 'Julia Strand',
    title: 'Orli Health, Founder',
  },
  {
    quote: 'SmplCo helped us take a rough concept and turn it into something investors loved. The speed was incredible.',
    name: 'David Okonkwo',
    title: 'Share50, CEO',
  },
  {
    quote: 'From branding to prototype to launch — SmplCo handled the entire journey. I would recommend them to any startup.',
    name: 'Eva Martinez',
    title: 'Nucase, Product Lead',
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 3

  const next = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
    )
  }

  return (
    <div>
      {/* Desktop: scrolling grid */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shrink-0"
                style={{ width: `calc((100% - 3rem) / 3)` }}
              >
                <p className="text-gray-700 mb-6 leading-relaxed font-satoshi text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: vertical stack of first 4 */}
      <div className="md:hidden space-y-4">
        {testimonials.slice(0, 4).map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
            <p className="text-gray-700 mb-4 leading-relaxed font-satoshi text-sm">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-sm text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-500">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
