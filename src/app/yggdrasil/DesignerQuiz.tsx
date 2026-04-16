'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
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
    <div className="flex items-center justify-center h-32 md:h-48">
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
  '"Didot", "Bodoni MT", "Noto Serif Display", serif',
  'Papyrus, fantasy, cursive',
]

function TypographyPreview({ value, locale, comicSans }: { value: number; locale: Locale; comicSans: boolean }) {
  const words = comicSans
    ? (locale === 'no' ? 'Å herregud nei...' : 'Oh God no...')
    : (locale === 'no' ? 'Eg e ein designar' : "I'm a designer")
  return (
    <div className="flex flex-col items-center justify-center h-32 md:h-48">
      <p
        className={`text-3xl md:text-4xl text-center transition-all duration-500 ${comicSans ? 'text-pink' : 'text-white'}`}
        style={{
          fontFamily: comicSans ? '"Comic Sans MS", "Comic Sans", cursive' : FONT_FAMILIES[value],
          fontStyle: value === 4 && !comicSans ? 'italic' : 'normal',
          letterSpacing: value === 4 && !comicSans ? '0.05em' : 'normal',
        }}
      >
        {words}
      </p>
      {comicSans && (
        <p className="text-xs text-pink/60 font-mono mt-2 animate-pulse">🚨 Comic Sans unlocked 🚨</p>
      )}
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
    <div className="flex items-center justify-center h-32 md:h-48">
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
    <div className="flex items-center justify-center h-32 md:h-48">
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
    <div className="flex items-center justify-center h-32 md:h-48">
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
  comicSans: boolean
  onComicSans: () => void
}

function SliderStep({ sliderKey, value, onChange, locale, comicSans, onComicSans }: SliderStepProps) {
  const config = SLIDERS.find((s) => s.key === sliderKey)!
  const label = sliderLabels[sliderKey][locale]
  const commentary = sliderCommentary[sliderKey][locale]
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Long-press on Papyrus (typography slider, last position) = Comic Sans
  const isPapyrus = sliderKey === 'typography' && value === config.stops - 1
  const handlePressStart = () => {
    if (!isPapyrus || comicSans) return
    longPressTimer.current = setTimeout(() => {
      onComicSans()
      navigator.vibrate?.(200)
    }, 1500)
  }
  const handlePressEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current)
  }

  let Preview: React.ReactNode = null
  if (sliderKey === 'shape') Preview = <ShapePreview value={value} />
  else if (sliderKey === 'typography') Preview = <TypographyPreview value={value} locale={locale} comicSans={comicSans} />
  else if (sliderKey === 'layout') Preview = <LayoutPreview value={value} />
  else if (sliderKey === 'colour') Preview = <ColourPreview value={value} />
  else if (sliderKey === 'shadow') Preview = <ShadowPreview value={value} />
  else if (sliderKey === 'motion') Preview = <MotionPreview value={value} />

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Label — above preview */}
      <h2 className="text-lg md:text-2xl font-bold text-center mb-3 md:mb-6" style={{ color: '#ffffff' }}>{label}</h2>

      {/* Visual preview — long press on Papyrus for Comic Sans easter egg */}
      <div
        className="mb-3 md:mb-6"
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
      >
        {Preview}
      </div>

      {/* Commentary */}
      <p className={`text-xs md:text-base font-satoshi text-center min-h-[2.5rem] mb-4 md:mb-8 transition-opacity duration-300 ${comicSans ? 'text-pink' : 'text-gray-400'}`}>
        {comicSans
          ? (locale === 'no' ? 'Comic Sans. Du e heilt ute å kjøra. Eg e imponert.' : "Comic Sans. Yer've lost the plot entirely. I'm impressed.")
          : commentary[value]
        }
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
// Browse All Archetypes Carousel
// ---------------------------------------------------------------------------

function BrowseCarousel({ locale, currentKey }: { locale: Locale; currentKey: ArchetypeKey }) {
  const allKeys = Object.keys(archetypes[locale]) as ArchetypeKey[]
  const startIdx = Math.max(0, allKeys.indexOf(currentKey))
  const [activeIdx, setActiveIdx] = useState(startIdx)
  const touchStartX = useRef(0)

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= allKeys.length) return
    setActiveIdx(idx)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      goTo(activeIdx + (diff > 0 ? 1 : -1))
    }
  }

  const t = ui[locale]
  const prevIdx = activeIdx > 0 ? activeIdx - 1 : null
  const nextIdx = activeIdx < allKeys.length - 1 ? activeIdx + 1 : null
  const activeArch = archetypes[locale][allKeys[activeIdx]]
  const activeImg = archetypeImages[allKeys[activeIdx]]

  return (
    <div className="border-t border-white/10 pt-10 mb-12 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.7s_both]">
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-6 text-center">
        {t.browseAll}
      </p>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center min-h-[220px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous (peeking left) */}
        {prevIdx !== null && (
          <button
            onClick={() => goTo(prevIdx)}
            className="absolute left-0 w-20 md:w-28 opacity-20 scale-75 transition-all duration-500 ease-out cursor-pointer z-0"
          >
            {archetypeImages[allKeys[prevIdx]] ? (
              <Image src={archetypeImages[allKeys[prevIdx]]!} alt="" width={120} height={120} className="w-full object-contain" />
            ) : (
              <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center"><span className="text-2xl">?</span></div>
            )}
          </button>
        )}

        {/* Active (center) */}
        <div className="text-center transition-all duration-500 ease-out z-10">
          {activeImg ? (
            <Image
              src={activeImg}
              alt={activeArch.name}
              width={180}
              height={180}
              className="w-36 h-36 md:w-44 md:h-44 mx-auto object-contain mb-3"
            />
          ) : (
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-4xl">?</span>
            </div>
          )}
          <p className="text-sm font-semibold text-lime">{activeArch.name}</p>
        </div>

        {/* Next (peeking right) */}
        {nextIdx !== null && (
          <button
            onClick={() => goTo(nextIdx)}
            className="absolute right-0 w-20 md:w-28 opacity-20 scale-75 transition-all duration-500 ease-out cursor-pointer z-0"
          >
            {archetypeImages[allKeys[nextIdx]] ? (
              <Image src={archetypeImages[allKeys[nextIdx]]!} alt="" width={120} height={120} className="w-full object-contain" />
            ) : (
              <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center"><span className="text-2xl">?</span></div>
            )}
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {allKeys.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIdx ? 'bg-lime w-4' : 'bg-white/20 w-1.5'
            }`}
          />
        ))}
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
  const [comicSansUnlocked, setComicSansUnlocked] = useState(false)

  // Detect locale on mount
  useEffect(() => {
    setLocale(getDefaultLocale())
  }, [])

  const t = ui[locale]
  const resultKey: ArchetypeKey | null = phase === 'result'
    ? (comicSansUnlocked ? 'notDesigner' : calculateResult(values))
    : null
  const result = resultKey ? archetypes[locale][resultKey] : null

  const toggleLocale = useCallback(() => {
    setLocale((l) => (l === 'no' ? 'en' : 'no'))
  }, [])

  const startQuiz = useCallback(() => {
    setValues({ shape: 2, typography: 1, layout: 2, colour: 2, shadow: 2, motion: 2 })
    setCurrentSlider(0)
    setPhase('quiz')
    setVisible(true)
    setComicSansUnlocked(false)
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
        {/* Characters at the bottom — sits on top of ShimmerGrid, no gradient */}
        <div className="relative z-10 w-full pointer-events-none -mt-12 md:-mt-4">
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

        <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 md:py-10">
          <p className="font-mono text-xs text-gray-500 mb-4 md:mb-8 tracking-wider">
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
              comicSans={comicSansUnlocked}
              onComicSans={() => setComicSansUnlocked(true)}
            />
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-6 md:mt-12">
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

          {/* Browse all archetypes — centered carousel */}
          <BrowseCarousel locale={locale} currentKey={resultKey} />

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
