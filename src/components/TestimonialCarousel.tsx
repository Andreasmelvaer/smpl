'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'SmplCo\'s prototype made it much easier to anchor the project within the organisation and test the solution with users.',
    name: 'Vibeke Bjaanes',
    title: 'Innovation Manager, Sparebank1 Sør-Norge',
    photo: '/images/testimonials/testimonial-vibeke.jpg',
  },
  {
    quote: 'Working with SmplCo is a dream start for anyone who wants to innovate.',
    name: 'Lene Koll',
    title: 'CEO, Compera',
    photo: '/images/testimonials/testimonial-lene.jpg',
  },
  {
    quote: 'Simply insane. Incredibly good. No b******t delivery.',
    name: 'Thomas Thorsell-Arntsen',
    title: 'CEO, W3Schools',
    photo: '/images/testimonials/testimonial-thomas.png',
  },
  {
    quote: 'Working with the Smpl team was an amazing experience. They manage to decrypt my thoughts and create something exceptional.',
    name: 'Dimitris Neocleous',
    title: 'CEO & Co-Founder, iMe',
    photo: '/images/testimonials/testimonial-dimitris.png',
  },
  {
    quote: 'It took 2 weeks to create our MVP with SmplCo. Before it took us six months and eight times the money.',
    name: 'Simen Sanna',
    title: 'CEO & Co-Founder, Saddle',
    photo: '/images/testimonials/testimonial-simen.png',
  },
  {
    quote: 'Smpl has done for us as the name implies - taken something complex and made it beautifully simple, helping us raise and helping us sell.',
    name: 'Kitty Harris',
    title: 'Head of Business Development, Enquip Energy',
    photo: '/images/testimonials/testimonial-kitty.png',
  },
  {
    quote: 'SmplCo is my go-to partner for everything - from product design and development to branding and collateral.',
    name: 'Petter Støldal',
    title: 'Founder, Nucase',
    photo: '/images/testimonials/testimonial-petter.png',
  },
  {
    quote: 'Their ability to listen, communicate and transform complex ideas into reality meant that we came away from our project as very happy bunnies - especially as our prototype played a huge role in us securing investment.',
    name: 'Mark Cox',
    title: 'Co Founder, Orli',
    photo: '/images/testimonials/testimonial-mark.png',
  },
  {
    quote: 'I can confidently say that SmplCo are the best technical team I have ever worked with. No long briefing meetings, no need to learn jargon, and no question considered silly.',
    name: 'Tahani Carruthers',
    title: 'Founder, Venture Bento',
    photo: '/images/testimonials/testimonial-tahani.png',
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
                <div className="flex items-center gap-3">
                  {t.photo && (
                    <Image src={t.photo} alt={t.name} width={40} height={40} className="rounded-full" />
                  )}
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.title}</p>
                  </div>
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
            <div className="flex items-center gap-3">
              {t.photo && (
                <Image src={t.photo} alt={t.name} width={36} height={36} className="rounded-full" />
              )}
              <div>
                <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
