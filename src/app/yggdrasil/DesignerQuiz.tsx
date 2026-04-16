'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'
import {
  type Locale,
  type ArchetypeKey,
  type Reaction,
  getDefaultLocale,
  ui,
  sliderLabels,
  sliderCommentary,
  archetypes,
  archetypeImages,
  reactions,
} from './translations'
import { SLIDERS, type SliderKey, calculateResult, calculateTally } from './sliders'

// ---------------------------------------------------------------------------
// Visual preview components for each slider
// ---------------------------------------------------------------------------

function ShapePreview({ value }: { value: number }) {
  const radii = [0, 12, 24, 40, 999]
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <div
        className="w-28 h-28 md:w-32 md:h-32 bg-lime transition-all duration-500 ease-out"
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
    <div className="flex flex-col items-center justify-center h-28 md:h-40">
      <p
        className={`text-2xl md:text-4xl text-center transition-all duration-500 ${comicSans ? 'text-pink' : 'text-white'}`}
        style={{
          fontFamily: comicSans ? '"Comic Sans MS", "Comic Sans", cursive' : FONT_FAMILIES[value],
          fontStyle: value === 4 && !comicSans ? 'italic' : 'normal',
          letterSpacing: value === 4 && !comicSans ? '0.05em' : 'normal',
        }}
      >
        {words}
      </p>
      {comicSans && (
        <p className="text-[10px] text-pink/60 font-mono mt-2 animate-pulse">🚨 Comic Sans unlocked 🚨</p>
      )}
    </div>
  )
}

function LayoutPreview({ value }: { value: number }) {
  const layouts = [
    <div key="1" className="flex flex-col gap-1.5 w-36 md:w-48">
      <div className="h-5 md:h-6 bg-lime/60 rounded" />
      <div className="h-5 md:h-6 bg-lime/40 rounded" />
      <div className="h-5 md:h-6 bg-lime/30 rounded" />
    </div>,
    <div key="2" className="grid grid-cols-2 gap-1.5 w-36 md:w-48">
      <div className="h-10 md:h-12 bg-lime/60 rounded" />
      <div className="h-10 md:h-12 bg-lime/40 rounded" />
      <div className="h-10 md:h-12 bg-lime/60 rounded" />
      <div className="h-10 md:h-12 bg-lime/40 rounded" />
    </div>,
    <div key="3" className="grid grid-cols-3 gap-1.5 w-36 md:w-48">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="h-6 md:h-8 bg-lime/50 rounded" />
      ))}
    </div>,
    <div key="4" className="grid grid-cols-3 gap-1.5 w-36 md:w-48">
      <div className="col-span-2 h-12 md:h-16 bg-lime/60 rounded" />
      <div className="h-12 md:h-16 bg-lime/30 rounded" />
      <div className="h-6 md:h-8 bg-lime/40 rounded" />
      <div className="col-span-2 h-6 md:h-8 bg-lime/50 rounded" />
    </div>,
    <div key="5" className="relative w-36 md:w-48 h-24 md:h-32">
      <div className="absolute top-0 left-2 w-14 md:w-16 h-8 md:h-10 bg-lime/60 rounded rotate-3" />
      <div className="absolute top-5 md:top-6 right-0 w-16 md:w-20 h-6 md:h-8 bg-lime/40 rounded -rotate-6" />
      <div className="absolute bottom-0 left-6 md:left-8 w-20 md:w-24 h-5 md:h-6 bg-lime/50 rounded rotate-1" />
      <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-10 md:w-12 h-10 md:h-12 bg-lime/30 rounded-full" />
    </div>,
  ]

  return (
    <div className="flex items-center justify-center h-28 md:h-40 transition-all duration-500">
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
    <div className="flex items-center justify-center h-28 md:h-40">
      <div className="flex gap-2 md:gap-3">
        {palettes[value].map((c, i) => (
          <div
            key={i}
            className="w-9 h-9 md:w-12 md:h-12 rounded-full transition-all duration-500 shadow-lg"
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
    <div className="flex items-center justify-center h-28 md:h-40">
      <div
        className="w-36 h-20 md:w-40 md:h-24 bg-white rounded-2xl flex items-center justify-center transition-all duration-500"
        style={{ boxShadow: shadows[value] }}
      >
        <span className="text-gray-900 text-sm font-semibold">Button</span>
      </div>
    </div>
  )
}

function MotionPreview({ value }: { value: number }) {
  const animations = [
    '',
    'animate-pulse',
    'animate-[fadeInUp_1.5s_ease-in-out_infinite_alternate]',
    'animate-bounce',
    'animate-spin',
  ]
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <div
        className={`w-16 h-16 md:w-20 md:h-20 bg-lime rounded-2xl transition-all duration-300 ${animations[value]}`}
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
    <div className="w-full max-w-lg mx-auto px-4">
      <h2 className="text-lg md:text-xl font-bold text-center mb-5 md:mb-6" style={{ color: '#ffffff' }}>{label}</h2>

      <div
        className="mb-4 md:mb-5"
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
      >
        {Preview}
      </div>

      <p className={`text-xs md:text-sm font-satoshi text-center min-h-[2.5rem] mb-5 md:mb-6 transition-all duration-300 leading-relaxed px-2 ${comicSans ? 'text-pink' : 'text-gray-400'}`}>
        {comicSans
          ? (locale === 'no' ? 'Comic Sans. Du e heilt ute å kjøra. Eg e imponert.' : "Comic Sans. Yer've lost the plot entirely. I'm impressed.")
          : commentary[value]
        }
      </p>

      <div className="px-2 md:px-4">
        <input
          type="range"
          min={0}
          max={config.stops - 1}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ background: 'none' }}
          className="w-full h-3 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:bg-[#1a1a1a] [&::-webkit-slider-runnable-track]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-11 [&::-webkit-slider-thumb]:h-11
            [&::-webkit-slider-thumb]:bg-lime [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(200,255,0,0.4),0_2px_6px_rgba(0,0,0,0.3)]
            [&::-webkit-slider-thumb]:-mt-[14px]
            [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:active:shadow-[0_0_30px_rgba(200,255,0,0.6)]
            [&::-moz-range-track]:h-3 [&::-moz-range-track]:rounded-full
            [&::-moz-range-track]:bg-[#1a1a1a] [&::-moz-range-track]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]
            [&::-moz-range-thumb]:w-11 [&::-moz-range-thumb]:h-11
            [&::-moz-range-thumb]:bg-lime [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:shadow-[0_0_20px_rgba(200,255,0,0.4),0_2px_6px_rgba(0,0,0,0.3)]"
        />
        {/* Tick indicators — spaced below slider with animation */}
        <div className="flex justify-between mt-4 px-3.5">
          {Array.from({ length: config.stops }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ease-out ${
                i === value
                  ? 'w-2.5 h-2.5 bg-lime shadow-[0_0_8px_rgba(200,255,0,0.5)]'
                  : 'w-1.5 h-1.5 bg-white/15'
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
    if (Math.abs(diff) > 40) {
      goTo(activeIdx + (diff > 0 ? 1 : -1))
    }
  }

  const t = ui[locale]
  const prevIdx = activeIdx > 0 ? activeIdx - 1 : null
  const nextIdx = activeIdx < allKeys.length - 1 ? activeIdx + 1 : null
  const activeArch = archetypes[locale][allKeys[activeIdx]]
  const activeImg = archetypeImages[allKeys[activeIdx]]

  return (
    <div className="border-t border-white/10 pt-8 mb-10 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.7s_both]">
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-5 text-center">
        {t.browseAll}
      </p>

      <div
        className="relative flex items-center justify-center min-h-[200px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {prevIdx !== null && (
          <button
            onClick={() => goTo(prevIdx)}
            className="absolute left-0 w-16 md:w-24 opacity-15 scale-[0.65] transition-all duration-500 ease-out cursor-pointer z-0"
          >
            <Image src={archetypeImages[allKeys[prevIdx]]} alt="" width={120} height={120} className="w-full object-contain" />
          </button>
        )}

        <div className="text-center transition-all duration-500 ease-out z-10 px-16">
          <Image
            src={activeImg}
            alt={activeArch.name}
            width={180}
            height={180}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain mb-2"
          />
          <p className="text-xs font-semibold text-lime mb-0.5">{activeArch.name}</p>
          <p className="text-[10px] text-gray-500 font-satoshi italic">&ldquo;{activeArch.tagline}&rdquo;</p>
        </div>

        {nextIdx !== null && (
          <button
            onClick={() => goTo(nextIdx)}
            className="absolute right-0 w-16 md:w-24 opacity-15 scale-[0.65] transition-all duration-500 ease-out cursor-pointer z-0"
          >
            <Image src={archetypeImages[allKeys[nextIdx]]} alt="" width={120} height={120} className="w-full object-contain" />
          </button>
        )}
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {allKeys.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIdx ? 'bg-lime w-5' : 'bg-white/15 w-1.5'
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
  const [phase, setPhase] = useState<'landing' | 'quiz' | 'reveal' | 'result'>('landing')
  const [revealTaps, setRevealTaps] = useState(0)
  const [currentSlider, setCurrentSlider] = useState(0)
  const [values, setValues] = useState<Record<SliderKey, number>>({
    shape: 2, typography: 1, layout: 2, colour: 2, shadow: 2, motion: 2,
  })
  const [visible, setVisible] = useState(true)
  const [copied, setCopied] = useState(false)
  const [showDna, setShowDna] = useState(false)
  const [comicSansUnlocked, setComicSansUnlocked] = useState(false)
  const [activeReaction, setActiveReaction] = useState<Reaction | null>(null)
  const reactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setLocale(getDefaultLocale())
  }, [])

  const t = ui[locale]
  const resultKey: ArchetypeKey | null = (phase === 'result' || phase === 'reveal')
    ? (comicSansUnlocked ? 'notDesigner' : calculateResult(values))
    : null
  const result = resultKey ? archetypes[locale][resultKey] : null

  const startQuiz = useCallback(() => {
    setValues({ shape: 2, typography: 1, layout: 2, colour: 2, shadow: 2, motion: 2 })
    setCurrentSlider(0)
    setPhase('quiz')
    setVisible(true)
    setComicSansUnlocked(false)
  }, [])

  const advanceSlider = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      if (currentSlider + 1 >= SLIDERS.length) {
        setPhase('reveal'); setRevealTaps(0)
      } else {
        setCurrentSlider((c) => c + 1)
      }
      setVisible(true)
    }, 350)
  }, [currentSlider])

  const goNext = useCallback(() => {
    const key = SLIDERS[currentSlider].key
    const pos = values[key]
    const reaction = reactions[`${key}:${pos}`]

    if (reaction) {
      setActiveReaction(reaction)
    } else {
      advanceSlider()
    }
  }, [currentSlider, values, advanceSlider])

  const dismissReaction = useCallback(() => {
    if (!activeReaction) return
    setActiveReaction(null)
    if (reactionTimerRef.current) clearTimeout(reactionTimerRef.current)
    if (currentSlider + 1 >= SLIDERS.length) {
      setPhase('reveal'); setRevealTaps(0)
    } else {
      setCurrentSlider((c) => c + 1)
    }
  }, [activeReaction, currentSlider])

  const goPrev = useCallback(() => {
    if (currentSlider === 0) return
    setVisible(false)
    setTimeout(() => {
      setCurrentSlider((c) => c - 1)
      setVisible(true)
    }, 350)
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

  // Language toggle
  const LangToggle = (
    <div className="fixed top-20 right-4 z-50 flex bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden shadow-lg">
      <button
        onClick={() => setLocale('no')}
        className={`px-3 py-1.5 text-[11px] font-mono transition-all duration-200 cursor-pointer ${
          locale === 'no'
            ? 'bg-lime text-gray-900 font-semibold'
            : 'text-white/50 hover:text-white hover:bg-white/10'
        }`}
      >
        Siddis
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1.5 text-[11px] font-mono transition-all duration-200 cursor-pointer ${
          locale === 'en'
            ? 'bg-lime text-gray-900 font-semibold'
            : 'text-white/50 hover:text-white hover:bg-white/10'
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
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="text-center px-6 max-w-xl mx-auto pb-12 md:pb-20">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-gray-500 mb-5">
              {t.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-5" style={{ color: '#ffffff' }}>
              {t.title1}
              <br />
              <span className="font-editorial italic text-lime">{t.titleHighlight}</span> {t.title2}
            </h1>
            <p className="font-satoshi text-gray-400 text-base md:text-lg mb-8 leading-relaxed whitespace-pre-line">
              {t.tagline}
            </p>
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(200,255,0,0.2)]"
            >
              {t.start}
            </button>
            <p className="mt-5 text-[11px] text-gray-400 font-satoshi">
              {t.disclaimer}
            </p>
          </div>
        </div>
        <div className="relative z-10 w-full pointer-events-none -mt-24 md:-mt-10">
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
    const safeSlider = Math.min(currentSlider, SLIDERS.length - 1)
    const progress = ((safeSlider + 1) / SLIDERS.length) * 100
    const slider = SLIDERS[safeSlider]
    const isLast = safeSlider === SLIDERS.length - 1

    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 flex flex-col">
        {LangToggle}
        {/* Progress bar */}
        <div className="w-full bg-white/5">
          <div
            className="h-0.5 bg-lime transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={safeSlider + 1}
            aria-valuemin={1}
            aria-valuemax={SLIDERS.length}
          />
        </div>

        <div className="flex-1 flex flex-col items-center px-5 pt-[12vh] md:pt-[10vh] pb-6">
          <p className="font-mono text-[11px] text-gray-600 mb-5 md:mb-6 tracking-wider">
            {safeSlider + 1} <span className="text-gray-700">/</span> {SLIDERS.length}
          </p>

          <div
            className={`w-full max-w-lg transition-all duration-350 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
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
          <div className="flex items-center gap-3 mt-6 md:mt-10">
            {currentSlider > 0 && (
              <button
                onClick={goPrev}
                disabled={!!activeReaction}
                className="px-5 py-2.5 text-gray-500 text-sm font-satoshi hover:text-white transition-colors cursor-pointer disabled:opacity-20"
              >
                ←
              </button>
            )}
            <button
              onClick={goNext}
              disabled={!!activeReaction}
              className="px-8 py-3 bg-lime-bright text-gray-900 font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:scale-100 shadow-[0_0_20px_rgba(200,255,0,0.15)]"
            >
              {isLast ? t.seeResult : t.next}
            </button>
          </div>
        </div>

        {/* Character reaction overlay */}
        {activeReaction && (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/85 backdrop-blur-md cursor-pointer"
            onClick={dismissReaction}
          >
            <div className="text-center px-6 motion-safe:animate-[fadeInUp_0.4s_ease-out_both]">
              <div className="relative bg-white rounded-2xl px-5 py-3.5 mb-3 max-w-[280px] mx-auto shadow-2xl">
                <p className="text-sm font-satoshi text-gray-900 leading-relaxed">
                  {activeReaction[locale]}
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm" />
              </div>
              <Image
                src={archetypeImages[activeReaction.character]}
                alt=""
                width={160}
                height={160}
                className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain drop-shadow-2xl"
              />
            </div>
            <p className="text-xs text-gray-400 font-mono mt-6 animate-pulse">
              {locale === 'no' ? 'trykk for å fortsetta' : 'tap to continue'}
            </p>
          </div>
        )}
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Reveal — tap 3 times to see your result
  // ---------------------------------------------------------------------------
  if (phase === 'reveal') {
    const revealMessages = locale === 'no'
      ? ['Resultatet ditt e klart...', 'E du sikker på at du vil vita?', 'Ok då, her kjem det...']
      : ['Your result is ready...', 'Are you sure you want to know?', 'Alright, here it comes...']
    const countdownImages = [
      '/whatdesignerareyou/3.png',
      '/whatdesignerareyou/2.png',
      '/whatdesignerareyou/1.png',
    ]
    const scales = [1, 1.1, 1.25]

    const handleRevealTap = () => {
      if (revealTaps < 2) {
        setRevealTaps((t) => t + 1)
        navigator.vibrate?.(50 + revealTaps * 50)
      } else {
        navigator.vibrate?.(200)
        setPhase('result')
      }
    }

    return (
      <section
        className="min-h-[calc(100vh-60px)] bg-gray-900 flex items-center justify-center cursor-pointer"
        onClick={handleRevealTap}
      >
        {LangToggle}
        <div className="text-center px-6" key={revealTaps}>
          <div
            className="mx-auto mb-6 p-16 overflow-visible animate-[fadeInUp_0.4s_ease-out_both]"
            style={{ transform: `scale(${scales[revealTaps]})` }}
          >
            <Image
              src={countdownImages[revealTaps]}
              alt={`${3 - revealTaps}`}
              width={200}
              height={200}
              className="w-40 h-40 md:w-48 md:h-48 mx-auto object-contain overflow-visible"
              style={{ filter: `drop-shadow(0 0 ${20 + revealTaps * 15}px rgba(200,255,0,${0.2 + revealTaps * 0.15}))` }}
            />
          </div>

          <p
            className="text-xl md:text-2xl font-bold mb-4 animate-[fadeInUp_0.4s_ease-out_0.1s_both]"
            style={{ color: '#ffffff' }}
          >
            {revealMessages[revealTaps]}
          </p>

          <div className="flex justify-center gap-3 mb-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i <= revealTaps ? 'bg-lime scale-125' : 'bg-white/15'
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-gray-400 font-satoshi animate-pulse">
            {locale === 'no' ? 'trykk for å avslørå' : 'tap to reveal'}
          </p>
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Result
  // ---------------------------------------------------------------------------
  if (phase === 'result' && result && resultKey) {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900">
        {LangToggle}
        <div className="max-w-lg mx-auto px-5 py-16 md:py-24">
          {/* Character illustration */}
          <div className="flex justify-center mb-4 p-8 overflow-visible motion-safe:animate-[fadeInUp_0.6s_ease-out_both]">
            <Image
              src={archetypeImages[resultKey]}
              alt={result.name}
              width={240}
              height={240}
              className="w-44 h-44 md:w-56 md:h-56 object-contain drop-shadow-[0_0_40px_rgba(200,255,0,0.15)]"
            />
          </div>

          {/* Result heading */}
          <div className="text-center mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">
              {t.youAre}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2" style={{ color: '#ffffff' }}>
              {result.name}
            </h2>
            <p className="font-editorial italic text-lime text-base md:text-lg">
              &ldquo;{result.tagline}&rdquo;
            </p>
          </div>

          {/* Description card */}
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-5 md:p-7 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            <p className="font-satoshi text-gray-300 text-sm leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Diagnosis */}
          <div className="bg-lime/[0.08] border border-lime/15 rounded-xl p-4 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-lime/50 mb-0.5">
              {t.diagnosis}
            </p>
            <p className="font-satoshi text-sm text-lime/90">{result.diagnosis}</p>
          </div>

          {/* Strength & Weakness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="border-l-2 border-lime bg-white/[0.03] rounded-r-lg p-3.5">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">
                {t.strength}
              </p>
              <p className="font-satoshi text-xs text-gray-300">{result.strength}</p>
            </div>
            <div className="border-l-2 border-pink bg-white/[0.03] rounded-r-lg p-3.5">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">
                {t.weakness}
              </p>
              <p className="font-satoshi text-xs text-gray-300">{result.weakness}</p>
            </div>
          </div>

          {/* DNA Breakdown */}
          <div className="mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.45s_both]">
            <button
              onClick={() => setShowDna(!showDna)}
              className="w-full flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 cursor-pointer hover:bg-white/[0.05] transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500">
                {locale === 'no' ? 'Ditt designer-DNA' : 'Your designer DNA'}
              </span>
              <span className={`text-gray-500 text-xs transition-transform duration-300 ${showDna ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {showDna && (() => {
              const tally = calculateTally(values)
              const total = Object.values(tally).reduce((a, b) => a + b, 0)
              if (total === 0) return null
              const sorted = (Object.entries(tally) as [ArchetypeKey, number][])
                .filter(([, v]) => v > 0)
                .sort((a, b) => b[1] - a[1])
              return (
                <div className="mt-2 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 space-y-2.5 animate-[fadeInUp_0.3s_ease-out_both]">
                  {sorted.map(([key, score]) => {
                    const pct = Math.round((score / total) * 100)
                    const name = archetypes[locale][key].name
                    const isWinner = key === resultKey
                    return (
                      <div key={key}>
                        <div className="flex justify-between mb-1">
                          <span className={`font-satoshi text-xs ${isWinner ? 'text-lime font-semibold' : 'text-gray-400'}`}>
                            {name}
                          </span>
                          <span className={`font-mono text-xs ${isWinner ? 'text-lime' : 'text-gray-500'}`}>
                            {pct}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${isWinner ? 'bg-lime' : 'bg-white/20'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })()}
          </div>

          {/* Prescription */}
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4 mb-8 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">
              {t.prescription}
            </p>
            <p className="font-satoshi text-xs text-gray-300 italic">{result.prescription}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2.5 mb-10 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <button
              onClick={shareLinkedIn}
              className="w-full py-3 bg-[#0A66C2] text-white font-semibold text-sm rounded-full hover:bg-[#004182] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {t.share}
            </button>
            <button
              onClick={copyLink}
              className="w-full py-2.5 text-gray-500 text-xs font-satoshi hover:text-white transition-colors cursor-pointer"
            >
              {copied ? t.copied : (locale === 'no' ? 'Kopier lenke' : 'Copy link')}
            </button>
            <button
              onClick={() => setPhase('landing')}
              className="w-full py-2.5 text-gray-500 text-xs font-satoshi hover:text-white transition-colors cursor-pointer"
            >
              {t.retake}
            </button>
          </div>

          {/* Browse all archetypes */}
          <BrowseCarousel locale={locale} currentKey={resultKey} />

          {/* Portfolio CTA */}
          <div className="border-t border-white/[0.06] pt-8 text-center motion-safe:animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
            <p className="text-lg md:text-xl font-bold mb-1.5" style={{ color: '#ffffff' }}>
              {t.ctaTitle}
            </p>
            <p className="font-satoshi text-gray-500 text-xs mb-5 whitespace-pre-line">
              {t.ctaSubtitle}
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-7 py-3.5 rounded-full text-sm hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(200,255,0,0.15)]"
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
