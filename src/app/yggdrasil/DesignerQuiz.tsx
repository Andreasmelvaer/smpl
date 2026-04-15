'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'
import {
  type Locale,
  type ArchetypeKey,
  getDefaultLocale,
  ui,
  sliderLabels,
  sliderCommentary,
  archetypes,
  archetypeImages,
} from './translations'
import { SLIDERS, type SliderKey, calculateResult } from './sliders'

// ---------------------------------------------------------------------------
// Visual preview components for each slider
// ---------------------------------------------------------------------------

function ShapePreview({ value }: { value: number }) {
  const radii = [0, 12, 24, 40, 999]
  return (
    <div className="flex items-center justify-center h-48">
      <div
        className="w-32 h-32 bg-lime transition-all duration-500 ease-out"
        style={{ borderRadius: radii[value] }}
      />
    </div>
  )
}

const FONT_FAMILIES = [
  '"Courier New", Courier, monospace',
  '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  '"Rockwell", "Roboto Slab", serif',
  '"Georgia", "Times New Roman", serif',
  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  'Papyrus, fantasy, cursive',
]

function TypographyPreview({ value, locale }: { value: number; locale: Locale }) {
  const words = locale === 'no' ? 'Eg e ein designar' : "I'm a designer, la"
  return (
    <div className="flex items-center justify-center h-48">
      <p
        className="text-3xl md:text-4xl text-center text-white transition-all duration-500"
        style={{ fontFamily: FONT_FAMILIES[value] }}
      >
        {words}
      </p>
    </div>
  )
}

function LayoutPreview({ value }: { value: number }) {
  const layouts = [
    // Single column
    <div key="1" className="flex flex-col gap-2 w-48">
      <div className="h-6 bg-lime/60 rounded" />
      <div className="h-6 bg-lime/40 rounded" />
      <div className="h-6 bg-lime/30 rounded" />
    </div>,
    // Two columns
    <div key="2" className="grid grid-cols-2 gap-2 w-48">
      <div className="h-12 bg-lime/60 rounded" />
      <div className="h-12 bg-lime/40 rounded" />
      <div className="h-12 bg-lime/60 rounded" />
      <div className="h-12 bg-lime/40 rounded" />
    </div>,
    // Grid
    <div key="3" className="grid grid-cols-3 gap-2 w-48">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="h-8 bg-lime/50 rounded" />
      ))}
    </div>,
    // Asymmetric
    <div key="4" className="grid grid-cols-3 gap-2 w-48">
      <div className="col-span-2 h-16 bg-lime/60 rounded" />
      <div className="h-16 bg-lime/30 rounded" />
      <div className="h-8 bg-lime/40 rounded" />
      <div className="col-span-2 h-8 bg-lime/50 rounded" />
    </div>,
    // Chaos
    <div key="5" className="relative w-48 h-32">
      <div className="absolute top-0 left-2 w-16 h-10 bg-lime/60 rounded rotate-3" />
      <div className="absolute top-6 right-0 w-20 h-8 bg-lime/40 rounded -rotate-6" />
      <div className="absolute bottom-0 left-8 w-24 h-6 bg-lime/50 rounded rotate-1" />
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-lime/30 rounded-full" />
    </div>,
  ]

  return (
    <div className="flex items-center justify-center h-48 transition-all duration-500">
      {layouts[value]}
    </div>
  )
}

function ColourPreview({ value }: { value: number }) {
  const palettes = [
    ['#000', '#333', '#666', '#999', '#fff'],
    ['#8B7355', '#A0926B', '#C4B896', '#D4C5A9', '#E8DCC8'],
    ['#0066FF', '#0052CC', '#003D99', '#E6F0FF', '#B3D1FF'],
    ['#FF006E', '#00F5D4', '#FEE440', '#8338EC', '#3A86FF'],
    ['#FF0000', '#FF8800', '#FFEE00', '#00FF00', '#0000FF'],
  ]
  return (
    <div className="flex items-center justify-center h-48">
      <div className="flex gap-3">
        {palettes[value].map((c, i) => (
          <div
            key={i}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-500 shadow-lg"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  )
}

function ShadowPreview({ value }: { value: number }) {
  const shadows = [
    'none',
    '0 2px 8px rgba(200,255,0,0.15)',
    '0 4px 16px rgba(200,255,0,0.25)',
    '0 8px 32px rgba(200,255,0,0.4)',
    '0 16px 64px rgba(200,255,0,0.5), 0 8px 24px rgba(200,255,0,0.3)',
  ]
  return (
    <div className="flex items-center justify-center h-48">
      <div
        className="w-40 h-24 bg-white rounded-2xl flex items-center justify-center transition-all duration-500"
        style={{ boxShadow: shadows[value] }}
      >
        <span className="text-gray-900 text-sm font-semibold">Button</span>
      </div>
    </div>
  )
}

function MotionPreview({ value }: { value: number }) {
  const animations = [
    '', // none
    'animate-pulse',
    'animate-[fadeInUp_1.5s_ease-in-out_infinite_alternate]',
    'animate-bounce',
    'animate-spin',
  ]
  return (
    <div className="flex items-center justify-center h-48">
      <div
        className={`w-20 h-20 bg-lime rounded-2xl transition-all duration-300 ${animations[value]}`}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Slider step component
// ---------------------------------------------------------------------------

interface SliderStepProps {
  sliderKey: SliderKey
  value: number
  onChange: (v: number) => void
  locale: Locale
}

function SliderStep({ sliderKey, value, onChange, locale }: SliderStepProps) {
  const config = SLIDERS.find((s) => s.key === sliderKey)!
  const label = sliderLabels[sliderKey][locale]
  const commentary = sliderCommentary[sliderKey][locale]

  let Preview: React.ReactNode = null
  if (sliderKey === 'shape') Preview = <ShapePreview value={value} />
  else if (sliderKey === 'typography') Preview = <TypographyPreview value={value} locale={locale} />
  else if (sliderKey === 'layout') Preview = <LayoutPreview value={value} />
  else if (sliderKey === 'colour') Preview = <ColourPreview value={value} />
  else if (sliderKey === 'shadow') Preview = <ShadowPreview value={value} />
  else if (sliderKey === 'motion') Preview = <MotionPreview value={value} />

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Visual preview */}
      <div className="mb-8">{Preview}</div>

      {/* Label */}
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-2">{label}</h2>

      {/* Commentary */}
      <p className="text-sm md:text-base text-gray-400 font-satoshi text-center min-h-[3rem] mb-8 transition-opacity duration-300">
        {commentary[value]}
      </p>

      {/* Slider */}
      <div className="px-4">
        <input
          type="range"
          min={0}
          max={config.stops - 1}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:bg-lime [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(200,255,0,0.4)]
            [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:bg-lime [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:cursor-pointer"
        />
        {/* Tick marks — px-3 matches half the 24px (w-6) slider thumb */}
        <div className="flex justify-between mt-2 px-3">
          {Array.from({ length: config.stops }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === value ? 'bg-lime' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Quiz Component
// ---------------------------------------------------------------------------

export default function DesignerQuiz() {
  const [locale, setLocale] = useState<Locale>('no')
  const [phase, setPhase] = useState<'landing' | 'quiz' | 'result'>('landing')
  const [currentSlider, setCurrentSlider] = useState(0)
  const [values, setValues] = useState<Record<SliderKey, number>>({
    shape: 2, typography: 1, layout: 2, colour: 2, shadow: 2, motion: 2,
  })
  const [visible, setVisible] = useState(true)
  const [copied, setCopied] = useState(false)

  // Detect locale on mount
  useEffect(() => {
    setLocale(getDefaultLocale())
  }, [])

  const t = ui[locale]
  const resultKey: ArchetypeKey | null = phase === 'result' ? calculateResult(values) : null
  const result = resultKey ? archetypes[locale][resultKey] : null

  const toggleLocale = useCallback(() => {
    setLocale((l) => (l === 'no' ? 'en' : 'no'))
  }, [])

  const startQuiz = useCallback(() => {
    setValues({ shape: 2, typography: 1, layout: 2, colour: 2, shadow: 2, motion: 2 })
    setCurrentSlider(0)
    setPhase('quiz')
    setVisible(true)
  }, [])

  const goNext = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      if (currentSlider + 1 >= SLIDERS.length) {
        setPhase('result')
      } else {
        setCurrentSlider((c) => c + 1)
      }
      setVisible(true)
    }, 300)
  }, [currentSlider])

  const goPrev = useCallback(() => {
    if (currentSlider === 0) return
    setVisible(false)
    setTimeout(() => {
      setCurrentSlider((c) => c - 1)
      setVisible(true)
    }, 300)
  }, [currentSlider])

  const updateSlider = useCallback((v: number) => {
    const key = SLIDERS[currentSlider].key
    setValues((prev) => ({ ...prev, [key]: v }))
  }, [currentSlider])

  const shareLinkedIn = useCallback(() => {
    if (!result || !resultKey) return
    const url = `https://smpl.as/yggdrasil`
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=500')
  }, [result, resultKey])

  const copyLink = useCallback(async () => {
    if (!result || !resultKey) return
    const text = locale === 'no'
      ? `Eg e "${result.name}". Ta testen og finn din designer-arketype:`
      : `I'm "${result.name}". Take the quiz and find your designer archetype:`
    const url = `https://smpl.as/yggdrasil`
    await navigator.clipboard.writeText(`${text} ${url}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result, resultKey, locale])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [phase])

  // Language toggle (shown on all phases)
  const LangToggle = (
    <div className="fixed top-20 right-4 z-50 flex bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden">
      <button
        onClick={() => setLocale('no')}
        className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
          locale === 'no'
            ? 'bg-lime text-gray-900 font-semibold'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        Siddis
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
          locale === 'en'
            ? 'bg-lime text-gray-900 font-semibold'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
      >
        Scouse
      </button>
    </div>
  )

  // ---------------------------------------------------------------------------
  // Landing
  // ---------------------------------------------------------------------------
  if (phase === 'landing') {
    return (
      <section className="relative min-h-[calc(100vh-60px)] flex flex-col bg-gray-900 overflow-hidden">
        <ShimmerGrid />
        {LangToggle}
        {/* Content — centered vertically in available space */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="text-center px-6 max-w-xl mx-auto pb-16 md:pb-24">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
              {t.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#ffffff' }}>
              {t.title1}
              <br />
              <span className="font-editorial italic text-lime">{t.titleHighlight}</span> {t.title2}
            </h1>
            <p className="font-satoshi text-gray-400 text-lg md:text-xl mb-10 leading-relaxed whitespace-pre-line">
              {t.tagline}
            </p>
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {t.start}
            </button>
            <p className="mt-6 text-xs text-gray-500 font-satoshi">
              {t.disclaimer}
            </p>
          </div>
        </div>
        {/* Characters at the bottom */}
        <div className="relative z-10 w-full pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent z-10" />
          <Image
            src="/whatdesignerareyou/all.png"
            alt=""
            width={1200}
            height={300}
            className="w-full max-w-5xl mx-auto object-contain"
            priority
          />
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Quiz (Sliders)
  // ---------------------------------------------------------------------------
  if (phase === 'quiz') {
    const progress = ((currentSlider + 1) / SLIDERS.length) * 100
    const slider = SLIDERS[currentSlider]
    const isLast = currentSlider === SLIDERS.length - 1

    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 flex flex-col">
        {LangToggle}
        {/* Progress */}
        <div className="w-full bg-white/10">
          <div
            className="h-1 bg-lime-bright transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentSlider + 1}
            aria-valuemin={1}
            aria-valuemax={SLIDERS.length}
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-5 py-10">
          <p className="font-mono text-xs text-gray-500 mb-8 tracking-wider">
            {currentSlider + 1} / {SLIDERS.length}
          </p>

          {/* Slider content */}
          <div
            className={`w-full max-w-lg motion-safe:transition-all motion-safe:duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <SliderStep
              sliderKey={slider.key}
              value={values[slider.key]}
              onChange={updateSlider}
              locale={locale}
            />
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-12">
            {currentSlider > 0 && (
              <button
                onClick={goPrev}
                className="px-6 py-3 text-gray-400 text-sm font-satoshi hover:text-white transition-colors cursor-pointer"
              >
                {t.prev}
              </button>
            )}
            <button
              onClick={goNext}
              className="px-8 py-3 bg-lime-bright text-gray-900 font-semibold text-sm rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {isLast ? t.seeResult : t.next}
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Result
  // ---------------------------------------------------------------------------
  if (phase === 'result' && result && resultKey) {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 overflow-hidden">
        {LangToggle}
        <div className="max-w-lg mx-auto px-5 py-20 md:py-28">
          {/* Character illustration */}
          {archetypeImages[resultKey] && (
            <div className="flex justify-center mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]">
              <Image
                src={archetypeImages[resultKey]!}
                alt={result.name}
                width={240}
                height={240}
                className="w-48 h-48 md:w-60 md:h-60 object-contain"
              />
            </div>
          )}

          {/* Result heading */}
          <div className="text-center mb-8 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">
              {t.youAre}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3" style={{ color: '#ffffff' }}>
              {result.name}
            </h2>
            <p className="font-editorial italic text-lime text-lg md:text-xl">
              &ldquo;{result.tagline}&rdquo;
            </p>
          </div>

          {/* Description card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            <p className="font-satoshi text-gray-300 leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Diagnosis */}
          <div className="bg-lime/10 border border-lime/20 rounded-2xl p-5 mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-lime/60 mb-1">
              {t.diagnosis}
            </p>
            <p className="font-satoshi text-sm text-lime">{result.diagnosis}</p>
          </div>

          {/* Strength & Weakness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="border-l-4 border-lime-bright bg-white/5 rounded-r-xl p-4">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1">
                {t.strength}
              </p>
              <p className="font-satoshi text-sm text-gray-200">{result.strength}</p>
            </div>
            <div className="border-l-4 border-pink bg-white/5 rounded-r-xl p-4">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1">
                {t.weakness}
              </p>
              <p className="font-satoshi text-sm text-gray-200">{result.weakness}</p>
            </div>
          </div>

          {/* Prescription */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-5 mb-8 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1">
              {t.prescription}
            </p>
            <p className="font-satoshi text-sm text-gray-200 italic">{result.prescription}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mb-12 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <button
              onClick={shareLinkedIn}
              className="w-full py-3.5 bg-[#0A66C2] text-white font-semibold text-sm rounded-full hover:bg-[#004182] transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {t.share}
            </button>
            <button
              onClick={copyLink}
              className="w-full py-3 text-gray-400 text-sm font-satoshi hover:text-white transition-colors cursor-pointer"
            >
              {copied ? t.copied : (locale === 'no' ? 'Kopier lenke' : 'Copy link')}
            </button>
            <button
              onClick={() => setPhase('landing')}
              className="w-full py-3 text-gray-400 text-sm font-satoshi hover:text-white transition-colors cursor-pointer"
            >
              {t.retake}
            </button>
          </div>

          {/* Browse all archetypes */}
          <div className="border-t border-white/10 pt-10 mb-12 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.7s_both]">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-6 text-center">
              {t.browseAll}
            </p>
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5 scrollbar-hide">
              {(Object.keys(archetypes[locale]) as ArchetypeKey[]).map((key) => {
                const arch = archetypes[locale][key]
                const img = archetypeImages[key]
                const isActive = key === resultKey
                return (
                  <div
                    key={key}
                    className={`flex-shrink-0 snap-center w-48 rounded-2xl p-4 text-center transition-all ${
                      isActive
                        ? 'bg-lime/15 border border-lime/30'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    {img && (
                      <Image
                        src={img}
                        alt={arch.name}
                        width={120}
                        height={120}
                        className="w-24 h-24 mx-auto object-contain mb-3"
                      />
                    )}
                    <p className={`text-xs font-semibold mb-1 ${isActive ? 'text-lime' : 'text-white'}`}>
                      {arch.name}
                    </p>
                    <p className="text-[10px] text-gray-500 font-satoshi leading-snug">
                      {arch.tagline}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Portfolio CTA */}
          <div className="border-t border-white/10 pt-10 text-center motion-safe:animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
            <p className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
              {t.ctaTitle}
            </p>
            <p className="font-satoshi text-gray-400 text-sm mb-6 whitespace-pre-line">
              {t.ctaSubtitle}
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return null
}
