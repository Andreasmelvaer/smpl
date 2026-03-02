'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'SmplCo is my go-to partner for everything — from product design and development to branding and collateral.',
    name: 'Tom Harris',
    title: 'CEO, Saddle',
    photo: '/images/testimonials/testimonial-young-man-polo.png',
  },
  {
    quote: 'Smpl has done for us as the name implies — taken something complex and made it beautifully simple, helping us raise and helping us sell.',
    name: 'Kitty Harris',
    title: 'Enquip Energy',
    photo: '/images/testimonials/testimonial-blonde-woman.png',
  },
  {
    quote: 'The 5-day prototype with SmplCo played a key role in shaping the core value of the company. The visual effects kick started a new journey for us.',
    name: 'Kine Norland',
    title: 'Resani, Head of Growth',
    photo: '/images/testimonials/testimonial-young-woman-dark-hair.png',
  },
  {
    quote: 'I have never seen anything like this level of speed and quality. SmplCo understood exactly what we needed and delivered beyond expectations.',
    name: 'Christian Bjerke',
    title: 'TWENTY40, CEO',
    photo: '/images/testimonials/testimonial-young-man-garden.png',
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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const t = testimonials[currentIndex]

  return (
    <div>
      {/* Single large testimonial card with side arrows */}
      <div className="relative max-w-3xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors z-10 hidden md:flex"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonial card */}
        <div className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 min-h-[280px] flex flex-col justify-between">
          <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-satoshi">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            {t.photo && (
              <Image src={t.photo} alt={t.name} width={48} height={48} className="rounded-full" />
            )}
            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors z-10 hidden md:flex"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats bar — below carousel */}
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Image src="/images/illustrations/smplco-illustration-prototype.png" alt="" width={56} height={56} className="shrink-0" />
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">125+</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Prototypes &amp; MVPs</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/images/illustrations/smplco-illustration-space-astronaut.png" alt="" width={56} height={56} className="shrink-0" />
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">&euro;10M+</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Raised by clients</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/images/illustrations/smplco-illustration-high-five.png" alt="" width={56} height={56} className="shrink-0" />
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">61% <span className="text-lg">↓</span></p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Ave time/cost</p>
          </div>
        </div>
      </div>
    </div>
  )
}
