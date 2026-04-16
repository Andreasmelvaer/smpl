'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'
import {
  type ArchetypeKey,
  type Reaction,
  ui,
  sliderLabels,
  sliderCommentary,
  archetypes,
  archetypeImages,
  reactions,
} from './translations'
import { SLIDERS, type SliderKey, calculateResult } from './sliders'

// ---------------------------------------------------------------------------
// Visual previews — founder-themed abstract visuals
// ---------------------------------------------------------------------------

function RunwayPreview({ value }: { value: number }) {
  const widths = ['20%', '40%', '60%', '80%', '100%']
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <div className="w-48 md:w-56">
        <div className="h-3 bg-white/10 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
          <div
            className="h-full bg-lime rounded-full transition-all duration-700 ease-out"
            style={{ width: widths[value] }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-600">
          <span>💀</span>
          <span>🏖️</span>
        </div>
      </div>
    </div>
  )
}

function PitchStylePreview({ value }: { value: number }) {
  const emojis = ['📊', '📊📝', '📊🎭', '🎭📝', '🎭✨']
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <span className="text-4xl md:text-5xl transition-all duration-500">{emojis[value]}</span>
    </div>
  )
}

function TeamSizePreview({ value }: { value: number }) {
  const people = value + 1
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <div className="flex flex-wrap gap-2 justify-center max-w-[200px]">
        {Array.from({ length: Math.min(people * 2, 10) }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full transition-all duration-300 ${
              i === 0 ? 'bg-lime' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function PivotPreview({ value }: { value: number }) {
  const arrows = ['→', '→↗', '→↗↘', '→↗↘↑', '→↗↘↑↙']
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <span className="text-3xl md:text-4xl font-mono text-lime transition-all duration-500 tracking-wider">{arrows[value]}</span>
    </div>
  )
}

function RiskPreview({ value }: { value: number }) {
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-lime rounded-2xl transition-all duration-500 flex items-center justify-center"
        style={{
          transform: `rotate(${value * 15 - 30}deg) scale(${0.7 + value * 0.15})`,
          opacity: 0.4 + value * 0.15,
        }}
      >
        <span className="text-2xl md:text-3xl" style={{ transform: `rotate(${-(value * 15 - 30)}deg)` }}>
          {['🛡️', '🎲', '⚡', '🔥', '💣'][value]}
        </span>
      </div>
    </div>
  )
}

function InvestorPreview({ value }: { value: number }) {
  const labels = ['Angel', 'Family Office', 'VC', 'Syndicate', 'Grant']
  return (
    <div className="flex items-center justify-center h-28 md:h-40">
      <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 transition-all duration-500">
        <p className="text-lg md:text-xl font-semibold text-white text-center">{labels[value]}</p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Slider step
// ---------------------------------------------------------------------------

const SLIDER_KEYS: SliderKey[] = ['runway', 'pitchStyle', 'teamSize', 'pivotCount', 'riskAppetite', 'investorType']

function SliderStep({ sliderKey, value, onChange }: { sliderKey: SliderKey; value: number; onChange: (v: number) => void }) {
  const config = SLIDERS.find((s) => s.key === sliderKey)!
  const label = sliderLabels[sliderKey]
  const commentary = sliderCommentary[sliderKey]

  const previewMap: Record<SliderKey, React.ReactNode> = {
    runway: <RunwayPreview value={value} />,
    pitchStyle: <PitchStylePreview value={value} />,
    teamSize: <TeamSizePreview value={value} />,
    pivotCount: <PivotPreview value={value} />,
    riskAppetite: <RiskPreview value={value} />,
    investorType: <InvestorPreview value={value} />,
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <h2 className="text-lg md:text-xl font-bold text-center mb-5 md:mb-6" style={{ color: '#ffffff' }}>{label}</h2>

      <div className="mb-4 md:mb-5">{previewMap[sliderKey]}</div>

      <p className="text-xs md:text-sm font-satoshi text-gray-400 text-center min-h-[2.5rem] mb-5 md:mb-6 transition-all duration-300 leading-relaxed px-2">
        {commentary[value]}
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
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7
            [&::-webkit-slider-thumb]:bg-lime [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(200,255,0,0.4),0_2px_6px_rgba(0,0,0,0.3)]
            [&::-webkit-slider-thumb]:-mt-[5px]
            [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:active:scale-125
            [&::-moz-range-track]:h-3 [&::-moz-range-track]:rounded-full
            [&::-moz-range-track]:bg-[#1a1a1a] [&::-moz-range-track]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]
            [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7
            [&::-moz-range-thumb]:bg-lime [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:cursor-pointer"
        />
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
// Carousel
// ---------------------------------------------------------------------------

function BrowseCarousel({ currentKey }: { currentKey: ArchetypeKey }) {
  const allKeys = Object.keys(archetypes) as ArchetypeKey[]
  const [activeIdx, setActiveIdx] = useState(Math.max(0, allKeys.indexOf(currentKey)))
  const touchStartX = useRef(0)

  const goTo = (idx: number) => { if (idx >= 0 && idx < allKeys.length) setActiveIdx(idx) }
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(activeIdx + (diff > 0 ? 1 : -1))
  }

  const prevIdx = activeIdx > 0 ? activeIdx - 1 : null
  const nextIdx = activeIdx < allKeys.length - 1 ? activeIdx + 1 : null
  const active = archetypes[allKeys[activeIdx]]

  return (
    <div className="border-t border-white/[0.06] pt-8 mb-10">
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-5 text-center">{ui.browseAll}</p>
      <div className="relative flex items-center justify-center min-h-[200px]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {prevIdx !== null && (
          <button onClick={() => goTo(prevIdx)} className="absolute left-0 w-16 md:w-24 opacity-15 scale-[0.65] transition-all duration-500 cursor-pointer z-0">
            <Image src={archetypeImages[allKeys[prevIdx]]} alt="" width={120} height={120} className="w-full object-contain" />
          </button>
        )}
        <div className="text-center transition-all duration-500 z-10 px-16">
          <Image src={archetypeImages[allKeys[activeIdx]]} alt={active.name} width={180} height={180} className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain mb-2" />
          <p className="text-xs font-semibold text-lime mb-0.5">{active.name}</p>
          <p className="text-[10px] text-gray-500 font-satoshi italic">&ldquo;{active.tagline}&rdquo;</p>
        </div>
        {nextIdx !== null && (
          <button onClick={() => goTo(nextIdx)} className="absolute right-0 w-16 md:w-24 opacity-15 scale-[0.65] transition-all duration-500 cursor-pointer z-0">
            <Image src={archetypeImages[allKeys[nextIdx]]} alt="" width={120} height={120} className="w-full object-contain" />
          </button>
        )}
      </div>
      <div className="flex justify-center gap-1.5 mt-4">
        {allKeys.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === activeIdx ? 'bg-lime w-5' : 'bg-white/15 w-1.5'}`} />
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function FounderQuiz() {
  const [phase, setPhase] = useState<'landing' | 'quiz' | 'result'>('landing')
  const [currentSlider, setCurrentSlider] = useState(0)
  const [values, setValues] = useState<Record<SliderKey, number>>({
    runway: 2, pitchStyle: 2, teamSize: 1, pivotCount: 1, riskAppetite: 2, investorType: 2,
  })
  const [visible, setVisible] = useState(true)
  const [copied, setCopied] = useState(false)
  const [activeReaction, setActiveReaction] = useState<Reaction | null>(null)
  const reactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const t = ui
  const resultKey: ArchetypeKey | null = phase === 'result' ? calculateResult(values) : null
  const result = resultKey ? archetypes[resultKey] : null

  const startQuiz = useCallback(() => {
    setValues({ runway: 2, pitchStyle: 2, teamSize: 1, pivotCount: 1, riskAppetite: 2, investorType: 2 })
    setCurrentSlider(0)
    setPhase('quiz')
    setVisible(true)
  }, [])

  const advanceSlider = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      if (currentSlider + 1 >= SLIDERS.length) setPhase('result')
      else setCurrentSlider((c) => c + 1)
      setVisible(true)
    }, 350)
  }, [currentSlider])

  const dismissReaction = useCallback(() => {
    if (!activeReaction) return
    if (reactionTimerRef.current) clearTimeout(reactionTimerRef.current)
    if (currentSlider + 1 >= SLIDERS.length) {
      setPhase('result')
      setActiveReaction(null)
    } else {
      setCurrentSlider((c) => c + 1)
      setTimeout(() => setActiveReaction(null), 200)
    }
  }, [activeReaction, currentSlider])

  const goNext = useCallback(() => {
    const key = SLIDERS[currentSlider].key
    const reaction = reactions[`${key}:${values[key]}`]
    if (reaction) {
      setActiveReaction(reaction)
      reactionTimerRef.current = setTimeout(() => dismissReaction(), 3700)
    } else {
      advanceSlider()
    }
  }, [currentSlider, values, advanceSlider, dismissReaction])

  const goPrev = useCallback(() => {
    if (currentSlider === 0) return
    setVisible(false)
    setTimeout(() => { setCurrentSlider((c) => c - 1); setVisible(true) }, 350)
  }, [currentSlider])

  const shareLinkedIn = useCallback(() => {
    if (!result) return
    const url = 'https://smpl.as/investorready'
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500')
  }, [result])

  const copyLink = useCallback(async () => {
    if (!result) return
    await navigator.clipboard.writeText(`I'm "${result.name}". Take the quiz: https://smpl.as/investorready`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [phase])

  // ---- Landing ----
  if (phase === 'landing') {
    return (
      <section className="relative min-h-[calc(100vh-60px)] flex flex-col bg-gray-900 overflow-hidden">
        <ShimmerGrid />
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="text-center px-6 max-w-xl mx-auto pb-12 md:pb-20">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-gray-500 mb-5">{t.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-5" style={{ color: '#ffffff' }}>
              {t.title1}<br />
              <span className="font-editorial italic text-lime">{t.titleHighlight}</span> {t.title2}
            </h1>
            <p className="font-satoshi text-gray-400 text-base md:text-lg mb-8 leading-relaxed whitespace-pre-line">{t.tagline}</p>
            <button onClick={startQuiz} className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(200,255,0,0.2)]">
              {t.start}
            </button>
            <p className="mt-5 text-[11px] text-gray-600 font-satoshi">{t.disclaimer}</p>
          </div>
        </div>
        <div className="relative z-10 w-full pointer-events-none -mt-24 md:-mt-10">
          <Image src="/whatdesignerareyou/all.png" alt="" width={1200} height={300} className="w-full max-w-5xl mx-auto object-contain" priority />
        </div>
      </section>
    )
  }

  // ---- Quiz ----
  if (phase === 'quiz') {
    const progress = ((currentSlider + 1) / SLIDERS.length) * 100
    const slider = SLIDERS[currentSlider]
    const isLast = currentSlider === SLIDERS.length - 1

    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 flex flex-col">
        <div className="w-full bg-white/5">
          <div className="h-0.5 bg-lime transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex-1 flex flex-col items-center px-5 pt-[12vh] md:pt-[10vh] pb-6">
          <p className="font-mono text-[11px] text-gray-600 mb-5 md:mb-6 tracking-wider">
            {currentSlider + 1} <span className="text-gray-700">/</span> {SLIDERS.length}
          </p>
          <div className={`w-full max-w-lg transition-all duration-350 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <SliderStep sliderKey={slider.key} value={values[slider.key]} onChange={(v) => setValues((prev) => ({ ...prev, [slider.key]: v }))} />
          </div>
          <div className="flex items-center gap-3 mt-6 md:mt-10">
            {currentSlider > 0 && (
              <button onClick={goPrev} disabled={!!activeReaction} className="px-5 py-2.5 text-gray-500 text-sm hover:text-white transition-colors cursor-pointer disabled:opacity-20">←</button>
            )}
            <button onClick={goNext} disabled={!!activeReaction} className="px-8 py-3 bg-lime-bright text-gray-900 font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-[0_0_20px_rgba(200,255,0,0.15)]">
              {isLast ? t.seeResult : t.next}
            </button>
          </div>
        </div>
        {activeReaction && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/85 backdrop-blur-md cursor-pointer" onClick={dismissReaction}>
            <div className="text-center px-6 motion-safe:animate-[fadeInUp_0.4s_ease-out_both]">
              <div className="relative bg-white rounded-2xl px-5 py-3.5 mb-3 max-w-[280px] mx-auto shadow-2xl">
                <p className="text-sm font-satoshi text-gray-900 leading-relaxed">{activeReaction.comment}</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm" />
              </div>
              <Image src={archetypeImages[activeReaction.character]} alt="" width={160} height={160} className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain drop-shadow-2xl" />
            </div>
            <p className="text-[10px] text-gray-600 font-mono mt-6 animate-pulse">tap to continue</p>
          </div>
        )}
      </section>
    )
  }

  // ---- Result ----
  if (phase === 'result' && result && resultKey) {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 overflow-hidden">
        <div className="max-w-lg mx-auto px-5 py-16 md:py-24">
          <div className="flex justify-center mb-4 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]">
            <Image src={archetypeImages[resultKey]} alt={result.name} width={240} height={240} className="w-44 h-44 md:w-56 md:h-56 object-contain drop-shadow-[0_0_40px_rgba(200,255,0,0.15)]" />
          </div>
          <div className="text-center mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3">{t.youAre}</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2" style={{ color: '#ffffff' }}>{result.name}</h2>
            <p className="font-editorial italic text-lime text-base md:text-lg">&ldquo;{result.tagline}&rdquo;</p>
          </div>
          <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] p-5 md:p-7 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            <p className="font-satoshi text-gray-300 text-sm leading-relaxed">{result.description}</p>
          </div>
          <div className="bg-lime/[0.08] border border-lime/15 rounded-xl p-4 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-lime/50 mb-0.5">{t.diagnosis}</p>
            <p className="font-satoshi text-sm text-lime/90">{result.diagnosis}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="border-l-2 border-lime bg-white/[0.03] rounded-r-lg p-3.5">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">{t.strength}</p>
              <p className="font-satoshi text-xs text-gray-300">{result.strength}</p>
            </div>
            <div className="border-l-2 border-pink bg-white/[0.03] rounded-r-lg p-3.5">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">{t.weakness}</p>
              <p className="font-satoshi text-xs text-gray-300">{result.weakness}</p>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-4 mb-8 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-0.5">{t.prescription}</p>
            <p className="font-satoshi text-xs text-gray-300 italic">{result.prescription}</p>
          </div>
          <div className="flex flex-col gap-2.5 mb-10 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <button onClick={shareLinkedIn} className="w-full py-3 bg-[#0A66C2] text-white font-semibold text-sm rounded-full hover:bg-[#004182] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {t.share}
            </button>
            <button onClick={copyLink} className="w-full py-2.5 text-gray-500 text-xs font-satoshi hover:text-white transition-colors cursor-pointer">
              {copied ? t.copied : 'Copy link'}
            </button>
            <button onClick={() => setPhase('landing')} className="w-full py-2.5 text-gray-500 text-xs font-satoshi hover:text-white transition-colors cursor-pointer">
              {t.retake}
            </button>
          </div>
          <BrowseCarousel currentKey={resultKey} />
          <div className="border-t border-white/[0.06] pt-8 text-center motion-safe:animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
            <p className="text-lg md:text-xl font-bold mb-1.5" style={{ color: '#ffffff' }}>{t.ctaTitle}</p>
            <p className="font-satoshi text-gray-500 text-xs mb-5 whitespace-pre-line">{t.ctaSubtitle}</p>
            <Link href="/pitch-prep" className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-7 py-3.5 rounded-full text-sm hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(200,255,0,0.15)]">
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return null
}
