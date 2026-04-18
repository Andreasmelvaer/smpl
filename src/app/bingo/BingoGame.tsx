'use client'

import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'

// ---------------------------------------------------------------------------
// Word pool
// ---------------------------------------------------------------------------

const WORD_POOL = [
  'Gnu Bar', 'LinkedIn', 'Mora mi', 'Barclays', 'Eagle Labs',
  'Prototype', 'SmplCo', '5 dagar', 'Melvær & Co', 'Kommunikasjon',
  '17. mai', 'Hirtshals', 'Fernet', 'Kebabdressing', 'Pattex',
  'Mufasa', 'Google Org', 'Zinc Network', 'Literal', 'Epic Games',
  'Discord', 'Fortnite', 'Radikalisering', 'Putin', 'Merkevare',
  'Om eg bare kan sei ein ting', 'Love you', 'Fokkings', 'Stavanger', 'Rau',
  'Bitkraft', 'Afterski', 'Bartender', 'QR-kode', 'Figma',
  'AI', 'Innovasjon', 'Startup', 'Design', 'Brukaroppleving',
  'Kode', 'App', 'Investorar', 'Pitch', 'MVP',
  'Skalering', 'Brukar', 'Data', 'Strategi', 'Produkt',
  'Hold kjeft', 'Pils', 'Kontoret', 'Sandnes', 'B-menneske',
  'PowerPoint', 'Teams-møte', 'Grønn juice', 'Keto', 'Imposter syndrome',
]

const FREE_CELL = 'GRATIS'
const TIMER_MINUTES = 30

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateBoard(): string[][] {
  const words = shuffle(WORD_POOL).slice(0, 24)
  const board: string[][] = []
  let idx = 0
  for (let r = 0; r < 5; r++) {
    const row: string[] = []
    for (let c = 0; c < 5; c++) {
      if (r === 2 && c === 2) row.push(FREE_CELL)
      else row.push(words[idx++])
    }
    board.push(row)
  }
  return board
}

function generateMarked(): boolean[][] {
  const marked: boolean[][] = []
  for (let r = 0; r < 5; r++) {
    const row: boolean[] = []
    for (let c = 0; c < 5; c++) row.push(r === 2 && c === 2)
    marked.push(row)
  }
  return marked
}

function checkBingo(marked: boolean[][]): { won: boolean; line?: { type: 'row' | 'col'; index: number } } {
  for (let r = 0; r < 5; r++) {
    if (marked[r].every(Boolean)) return { won: true, line: { type: 'row', index: r } }
  }
  for (let c = 0; c < 5; c++) {
    if (marked.every(row => row[c])) return { won: true, line: { type: 'col', index: c } }
  }
  return { won: false }
}

// Count how many cells are marked in each row/column (for heat-up effect)
function getLineProgress(marked: boolean[][]): { rowCounts: number[]; colCounts: number[] } {
  const rowCounts = marked.map(row => row.filter(Boolean).length)
  const colCounts: number[] = []
  for (let c = 0; c < 5; c++) {
    colCounts.push(marked.reduce((sum, row) => sum + (row[c] ? 1 : 0), 0))
  }
  return { rowCounts, colCounts }
}

function countMarked(marked: boolean[][]): number {
  return marked.reduce((sum, row) => sum + row.filter(Boolean).length, 0)
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ---------------------------------------------------------------------------
// Particle burst (on cell tap)
// ---------------------------------------------------------------------------

interface Burst { id: number; x: number; y: number; intensity: number }

function ParticleBurst({ burst }: { burst: Burst }) {
  // More particles at higher intensity
  const count = 12 + Math.floor(burst.intensity * 6)
  const particles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4
      return {
        angle,
        distance: 40 + Math.random() * 50 + burst.intensity * 30,
        size: 4 + Math.random() * 5,
        delay: Math.random() * 0.08,
        duration: 0.7 + Math.random() * 0.4,
      }
    }), [burst.id, count, burst.intensity])

  // Add a shockwave ring
  return (
    <div className="fixed pointer-events-none z-40" style={{ left: burst.x, top: burst.y }}>
      {/* Shockwave ring */}
      <div
        className="absolute rounded-full border-2 border-lime"
        style={{
          left: 0, top: 0,
          width: 20, height: 20,
          transform: 'translate(-50%, -50%)',
          animation: `shockwave 0.5s ease-out forwards`,
        }}
      />
      {/* Flash */}
      <div
        className="absolute rounded-full bg-lime"
        style={{
          left: 0, top: 0,
          width: 30, height: 30,
          transform: 'translate(-50%, -50%)',
          animation: `flash 0.3s ease-out forwards`,
          filter: 'blur(8px)',
        }}
      />
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-lime"
          style={{
            width: p.size,
            height: p.size,
            left: 0, top: 0,
            boxShadow: '0 0 12px rgba(200,255,0,0.9), 0 0 20px rgba(200,255,0,0.5)',
            animation: `burst ${p.duration}s cubic-bezier(0.22, 1, 0.36, 1) ${p.delay}s forwards`,
            // @ts-expect-error custom css var
            '--angle': `${p.angle}rad`,
            '--distance': `${p.distance}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes burst {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          60% { opacity: 1; }
          100% {
            transform: translate(
              calc(-50% + cos(var(--angle)) * var(--distance)),
              calc(-50% + sin(var(--angle)) * var(--distance))
            ) scale(0);
            opacity: 0;
          }
        }
        @keyframes shockwave {
          0% { width: 20px; height: 20px; opacity: 0.8; border-width: 2px; }
          100% { width: 120px; height: 120px; opacity: 0; border-width: 0; }
        }
        @keyframes flash {
          0% { opacity: 0.8; transform: translate(-50%, -50%) scale(0.5); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
        }
      `}</style>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Confetti (winner celebration)
// ---------------------------------------------------------------------------

function Confetti() {
  const colors = ['#e5ff21', '#ff99e0', '#0d99ff', '#ffffff', '#f0ff83']
  const particles = useMemo(() =>
    Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      left: Math.random() * 100,
      delay: Math.random() * 2.5,
      duration: 2.5 + Math.random() * 2,
      size: 4 + Math.random() * 10,
      rotate: Math.random() * 360,
    })), [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animation: `confettiFall ${p.duration}s linear ${p.delay}s forwards`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Ambient glow overlay (intensifies as marks increase)
// ---------------------------------------------------------------------------

function AmbientGlow({ intensity }: { intensity: number }) {
  // intensity 0-1
  const opacity = 0.05 + intensity * 0.2
  return (
    <div
      className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
      style={{
        background: `radial-gradient(ellipse at center, rgba(200,255,0,${opacity}) 0%, transparent 60%)`,
      }}
    />
  )
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function BingoGame() {
  const [phase, setPhase] = useState<'splash' | 'playing' | 'winner' | 'timeout'>('splash')
  const [board, setBoard] = useState<string[][]>([])
  const [marked, setMarked] = useState<boolean[][]>([])
  const [timeLeft, setTimeLeft] = useState(TIMER_MINUTES * 60)
  const [saved, setSaved] = useState(false)
  const [bursts, setBursts] = useState<Burst[]>([])
  const [winningLine, setWinningLine] = useState<{ type: 'row' | 'col'; index: number } | null>(null)
  const [shakeLevel, setShakeLevel] = useState(0) // 0, 1, 2 for screen shake
  const [recentlyMarked, setRecentlyMarked] = useState<string | null>(null) // "r-c" key
  const boardRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startGame = useCallback(() => {
    setBoard(generateBoard())
    setMarked(generateMarked())
    setTimeLeft(TIMER_MINUTES * 60)
    setSaved(false)
    setBursts([])
    setWinningLine(null)
    setPhase('playing')
  }, [])

  // Timer
  useEffect(() => {
    if (phase !== 'playing') return
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          setPhase('timeout')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const totalMarked = marked.length > 0 ? countMarked(marked) : 0
  const intensity = Math.min((totalMarked - 1) / 24, 1) // 0 → 1 as board fills
  const { rowCounts, colCounts } = marked.length > 0 ? getLineProgress(marked) : { rowCounts: [], colCounts: [] }
  const maxLine = Math.max(...rowCounts, ...colCounts, 0)

  const toggleCell = useCallback((r: number, c: number, event: React.MouseEvent) => {
    if (phase !== 'playing') return
    if (r === 2 && c === 2) return

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    setMarked(prev => {
      const next = prev.map(row => [...row])
      const wasMarked = next[r][c]
      next[r][c] = !wasMarked

      if (!wasMarked) {
        // Emit burst particles only on marking
        const currentIntensity = Math.min(countMarked(next) / 20, 3)
        setBursts(b => [...b, { id: Date.now() + Math.random(), x, y, intensity: currentIntensity }])
        setRecentlyMarked(`${r}-${c}`)
        setTimeout(() => setRecentlyMarked(null), 600)

        // Check if this mark creates a near-bingo for screen shake
        const progress = getLineProgress(next)
        const newMaxLine = Math.max(...progress.rowCounts, ...progress.colCounts)
        if (newMaxLine === 4) {
          setShakeLevel(2)
          navigator.vibrate?.([80, 30, 80])
          setTimeout(() => setShakeLevel(0), 500)
        } else if (newMaxLine === 3) {
          setShakeLevel(1)
          navigator.vibrate?.(50)
          setTimeout(() => setShakeLevel(0), 300)
        } else {
          navigator.vibrate?.(30 + Math.floor(currentIntensity * 20))
        }
      }

      const result = checkBingo(next)
      if (result.won && result.line) {
        setWinningLine(result.line)
        if (timerRef.current) clearInterval(timerRef.current)
        navigator.vibrate?.([100, 50, 100, 50, 200])
        setTimeout(() => setPhase('winner'), 1400)
      }

      return next
    })
  }, [phase])

  // Clean up old bursts
  useEffect(() => {
    if (bursts.length === 0) return
    const timer = setTimeout(() => {
      setBursts(b => b.slice(1))
    }, 800)
    return () => clearTimeout(timer)
  }, [bursts])

  const saveToImage = useCallback(async () => {
    if (!boardRef.current) return
    try {
      const { default: html2canvas } = await import('html2canvas')
      const canvas = await html2canvas(boardRef.current, {
        backgroundColor: '#141416',
        scale: 2,
      })
      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b!), 'image/png')
      )
      const url = URL.createObjectURL(blob)

      if (navigator.share && navigator.canShare?.({ files: [new File([blob], 'bingo.png', { type: 'image/png' })] })) {
        await navigator.share({
          files: [new File([blob], 'bingo.png', { type: 'image/png' })],
          title: 'BINGO!',
        })
      } else {
        const a = document.createElement('a')
        a.href = url
        a.download = 'bingo-winner.png'
        a.click()
      }
      setSaved(true)
      URL.revokeObjectURL(url)
    } catch (_e) {
      setSaved(true)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [phase])

  // ---------------------------------------------------------------------------
  // Splash
  // ---------------------------------------------------------------------------
  if (phase === 'splash') {
    return (
      <section className="relative min-h-[calc(100vh-60px)] flex items-center justify-center bg-gray-900 overflow-hidden">
        <ShimmerGrid />
        <div className="relative z-10 text-center px-6 max-w-md mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500 mb-5">
            Yggdrasil 2026
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6" style={{ color: '#ffffff' }}>
            <span className="font-editorial italic text-lime">Bingo</span>
          </h1>
          <p className="font-satoshi text-gray-300 text-base md:text-lg mb-3 leading-relaxed">
            Marker orå du hører under foredraget.
          </p>
          <p className="font-satoshi text-gray-400 text-sm mb-8 leading-relaxed">
            Fem på rad = <strong className="text-lime font-semibold">Gnu rabattkort</strong>.
            <br />
            Du har 30 minutt. Brettet e randomisert.
          </p>
          <button
            onClick={startGame}
            className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-10 py-4 rounded-full text-base hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_40px_rgba(200,255,0,0.3)]"
          >
            Start
          </button>
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Playing
  // ---------------------------------------------------------------------------
  if (phase === 'playing') {
    const timeLow = timeLeft < 300
    const hasBingoWin = !!winningLine

    return (
      <section className={`min-h-[calc(100vh-60px)] bg-gray-900 flex flex-col relative overflow-hidden ${
        shakeLevel === 2 ? 'animate-[shakeStrong_0.5s_ease-in-out]' :
        shakeLevel === 1 ? 'animate-[shakeLight_0.3s_ease-in-out]' : ''
      }`}>
        <AmbientGlow intensity={intensity} />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gray-500">BINGO</p>
            <span className="font-mono text-[10px] text-gray-700">·</span>
            <p className="font-mono text-[10px] text-lime font-semibold">
              {totalMarked}<span className="text-gray-700">/25</span>
            </p>
            {maxLine >= 3 && (
              <p className={`font-mono text-[10px] font-semibold ${maxLine === 4 ? 'text-lime-bright animate-[pulseHot_0.5s_ease-in-out_infinite]' : 'text-lime-bright animate-pulse'}`}>
                {maxLine === 4 ? 'EIN TE!' : 'VARMT!'}
              </p>
            )}
          </div>
          <p className={`font-mono text-sm font-semibold transition-colors ${timeLow ? 'text-red-400 animate-pulse' : 'text-lime'}`}>
            {formatTime(timeLeft)}
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative z-10 w-full bg-white/5 h-0.5">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${timeLow ? 'bg-red-400' : 'bg-lime'}`}
            style={{ width: `${(timeLeft / (TIMER_MINUTES * 60)) * 100}%` }}
          />
        </div>

        {/* Board — moved up, less padding */}
        <div className="relative z-10 flex flex-col items-center pt-3 pb-3 px-3">
          <div className="grid grid-cols-5 gap-1.5 w-full max-w-md aspect-square">
            {board.map((row, r) =>
              row.map((word, c) => {
                const isMarked = marked[r]?.[c]
                const isFree = r === 2 && c === 2
                const isOnWinningLine = hasBingoWin && (
                  (winningLine.type === 'row' && winningLine.index === r) ||
                  (winningLine.type === 'col' && winningLine.index === c)
                )
                const lineMax = Math.max(rowCounts[r] || 0, colCounts[c] || 0)
                const isHeating = !isMarked && lineMax >= 3
                const isJustMarked = recentlyMarked === `${r}-${c}`

                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={(e) => toggleCell(r, c, e)}
                    className={`relative rounded-lg flex items-center justify-center p-1 text-center transition-all duration-300 cursor-pointer select-none active:scale-90
                      ${isMarked
                        ? isFree
                          ? 'bg-lime-bright text-gray-900 shadow-[0_0_20px_rgba(200,255,0,0.4)]'
                          : 'bg-lime text-gray-900 shadow-[0_0_16px_rgba(200,255,0,0.35)]'
                        : isHeating
                          ? 'bg-lime/5 border border-lime/25 text-white animate-[heatPulse_2s_ease-in-out_infinite]'
                          : 'bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.07] hover:border-white/20'
                      }
                      ${isJustMarked ? 'animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)]' : ''}
                      ${isOnWinningLine ? 'animate-[winPulse_0.5s_ease-in-out_infinite_alternate]' : ''}
                    `}
                  >
                    <span className={`text-[10px] sm:text-xs leading-tight transition-all duration-300 ${
                      isMarked ? 'font-bold' : 'font-medium'
                    }`}>
                      {word}
                    </span>
                    {isFree && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gray-900/40" />
                    )}
                  </button>
                )
              })
            )}
          </div>

          {/* Progress pips below board */}
          <div className="mt-5 flex items-center gap-1.5">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  i < totalMarked ? 'bg-lime scale-125' : 'bg-white/10'
                }`}
                style={{
                  boxShadow: i < totalMarked ? '0 0 6px rgba(200,255,0,0.6)' : 'none',
                }}
              />
            ))}
          </div>
        </div>

        {/* Particle bursts */}
        {bursts.map(b => <ParticleBurst key={b.id} burst={b} />)}

        <style>{`
          @keyframes winPulse {
            from { box-shadow: 0 0 20px rgba(200,255,0,0.5); transform: scale(1); }
            to { box-shadow: 0 0 40px rgba(200,255,0,0.9); transform: scale(1.05); }
          }
          @keyframes popIn {
            0% { transform: scale(0.6) rotate(-5deg); box-shadow: 0 0 40px rgba(200,255,0,1); }
            40% { transform: scale(1.2) rotate(3deg); box-shadow: 0 0 30px rgba(200,255,0,0.8); }
            70% { transform: scale(0.95) rotate(-1deg); }
            100% { transform: scale(1) rotate(0deg); box-shadow: 0 0 16px rgba(200,255,0,0.35); }
          }
          @keyframes heatPulse {
            0%, 100% { box-shadow: 0 0 0 rgba(200,255,0,0); border-color: rgba(200,255,0,0.25); }
            50% { box-shadow: 0 0 10px rgba(200,255,0,0.3); border-color: rgba(200,255,0,0.5); }
          }
          @keyframes pulseHot {
            0%, 100% { transform: scale(1); text-shadow: 0 0 8px rgba(229,255,33,0.8); }
            50% { transform: scale(1.1); text-shadow: 0 0 16px rgba(229,255,33,1); }
          }
          @keyframes shakeLight {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            75% { transform: translateX(3px); }
          }
          @keyframes shakeStrong {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-4px, -2px) rotate(-0.5deg); }
            20% { transform: translate(4px, 2px) rotate(0.5deg); }
            30% { transform: translate(-3px, 3px) rotate(-0.3deg); }
            40% { transform: translate(3px, -3px) rotate(0.3deg); }
            50% { transform: translate(-2px, 2px); }
            60% { transform: translate(2px, -2px); }
            70% { transform: translate(-1px, 1px); }
            80% { transform: translate(1px, -1px); }
          }
        `}</style>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Winner
  // ---------------------------------------------------------------------------
  if (phase === 'winner') {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 overflow-hidden relative">
        <AmbientGlow intensity={1} />
        <Confetti />
        <div className="relative z-10 max-w-md mx-auto px-5 py-12 md:py-20">
          {/* Winner card (capturable) */}
          <div ref={boardRef} className="bg-gray-900 rounded-2xl p-6">
            <div className="text-center mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]">
              <h2 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight" style={{ color: '#ffffff' }}>
                <span className="font-editorial italic text-lime">BINGO!</span>
              </h2>
              <p className="font-satoshi text-gray-400 text-sm">
                Du klarte det. Respekt!
              </p>
            </div>

            {/* Mini board */}
            <div className="grid grid-cols-5 gap-1 mb-5 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              {board.map((row, r) =>
                row.map((word, c) => {
                  const isMarked = marked[r]?.[c]
                  const isOnWinningLine = winningLine && (
                    (winningLine.type === 'row' && winningLine.index === r) ||
                    (winningLine.type === 'col' && winningLine.index === c)
                  )
                  return (
                    <div
                      key={`${r}-${c}`}
                      className={`rounded p-1 flex items-center justify-center text-center transition-all ${
                        isOnWinningLine
                          ? 'bg-lime-bright text-gray-900 shadow-[0_0_12px_rgba(200,255,0,0.6)]'
                          : isMarked
                            ? 'bg-lime text-gray-900'
                            : 'bg-white/5 text-white/30'
                      }`}
                    >
                      <span className="text-[7px] sm:text-[9px] leading-tight font-medium">{word}</span>
                    </div>
                  )
                })
              )}
            </div>

            <p className="text-center font-mono text-[10px] text-gray-600">smpl.as/bingo — Yggdrasil 2026</p>
          </div>

          {/* Instructions */}
          <div className="mt-6 text-center motion-safe:animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="bg-lime/10 border border-lime/20 rounded-2xl p-5 mb-5">
              <p className="text-base font-semibold text-lime mb-1.5">Vis denne te Andreas!</p>
              <p className="text-sm text-gray-300 font-satoshi leading-relaxed">
                Vis skjermen (eller bilet) te Andreas, så får du et <strong className="text-lime">Gnu rabattkort</strong>.
              </p>
            </div>

            <button
              onClick={saveToImage}
              className="w-full py-3.5 bg-white text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer mb-2.5"
            >
              {saved ? 'Lagra!' : 'Lagre som bilet'}
            </button>

            <Link
              href="/yggdrasil"
              className="block w-full py-3 text-gray-400 text-sm font-satoshi hover:text-white transition-colors text-center"
            >
              Ta designar-quizen →
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Timeout
  // ---------------------------------------------------------------------------
  if (phase === 'timeout') {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="text-center px-6 max-w-md mx-auto">
          <div className="mb-8">
            <Image
              src="/images/404-illustration.png"
              alt=""
              width={200}
              height={200}
              className="mx-auto opacity-50"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#ffffff' }}>
            Ingen bingo denne gongen!
          </h2>
          <p className="font-satoshi text-gray-400 text-sm md:text-base mb-8">
            Tiå gikk ud. Men det va gøy å prøva, ikkje sant?
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={startGame}
              className="w-full py-3.5 bg-lime-bright text-gray-900 font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(200,255,0,0.2)]"
            >
              Prøv igjen
            </button>
            <Link
              href="/yggdrasil"
              className="block w-full py-3 text-gray-400 text-sm font-satoshi hover:text-white transition-colors text-center"
            >
              Ta designar-quizen →
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return null
}
