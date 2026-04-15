'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'

// ---------------------------------------------------------------------------
// Word pool (60 words — 25 randomly selected per board)
// ---------------------------------------------------------------------------

const WORD_POOL = [
  // From the talk (specific)
  'Gnu Bar', 'LinkedIn', 'Mora mi', 'Barclays', 'Eagle Labs',
  'Prototype', 'SmplCo', '5 dagar', 'Melvær & Co', 'Kommunikasjon',
  '17. mai', 'Hirtshals', 'Fernet', 'Kebabdressing', 'Pattex',
  'Mufasa', 'Google Org', 'Zinc Network', 'Literal', 'Epic Games',
  'Discord', 'Fortnite', 'Radikalisering', 'Putin', 'Merkevare',
  'Om eg bare kan sei ein ting', 'Love you', 'Fokkings', 'Stavanger', 'Rau',
  'Bitkraft', 'Afterski', 'Bartender', 'QR-kode', 'Figma',
  // Generic conference words
  'AI', 'Innovasjon', 'Startup', 'Design', 'Brukaroppleving',
  'Kode', 'App', 'Investorar', 'Pitch', 'MVP',
  'Skalering', 'Brukar', 'Data', 'Strategi', 'Produkt',
  // Gnu-style / funny
  'Hold kjeft', 'Pils', 'Kontoret', 'Sandnes', 'B-menneske',
  'PowerPoint', 'Teams-møte', 'Grønn juice', 'Keto', 'Imposter syndrome',
]

const FREE_CELL = '⭐ GRATIS'
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
  const words = shuffle(WORD_POOL).slice(0, 24) // 24 words + 1 free
  const board: string[][] = []
  let idx = 0
  for (let r = 0; r < 5; r++) {
    const row: string[] = []
    for (let c = 0; c < 5; c++) {
      if (r === 2 && c === 2) {
        row.push(FREE_CELL)
      } else {
        row.push(words[idx++])
      }
    }
    board.push(row)
  }
  return board
}

function generateMarked(): boolean[][] {
  const marked: boolean[][] = []
  for (let r = 0; r < 5; r++) {
    const row: boolean[] = []
    for (let c = 0; c < 5; c++) {
      row.push(r === 2 && c === 2) // center is free
    }
    marked.push(row)
  }
  return marked
}

function checkBingo(marked: boolean[][]): boolean {
  for (let r = 0; r < 5; r++) {
    if (marked[r].every(Boolean)) return true
  }
  for (let c = 0; c < 5; c++) {
    if (marked.every(row => row[c])) return true
  }
  return false
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ---------------------------------------------------------------------------
// Confetti (pure CSS particles)
// ---------------------------------------------------------------------------

function Confetti() {
  const colors = ['#e5ff21', '#ff99e0', '#0d99ff', '#ffffff', '#f0ff83']
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    color: colors[i % colors.length],
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
    size: 4 + Math.random() * 8,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute animate-[confettiFall_linear_forwards]"
          style={{
            left: `${p.left}%`,
            top: '-10px',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
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
  const boardRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startGame = useCallback(() => {
    setBoard(generateBoard())
    setMarked(generateMarked())
    setTimeLeft(TIMER_MINUTES * 60)
    setSaved(false)
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

  const toggleCell = useCallback((r: number, c: number) => {
    if (phase !== 'playing') return
    if (r === 2 && c === 2) return // can't unmark free cell

    setMarked(prev => {
      const next = prev.map(row => [...row])
      next[r][c] = !next[r][c]

      if (checkBingo(next)) {
        if (timerRef.current) clearInterval(timerRef.current)
        setTimeout(() => setPhase('winner'), 300)
      }

      return next
    })
  }, [phase])

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

      // Try native share first (mobile)
      if (navigator.share && navigator.canShare?.({ files: [new File([blob], 'bingo.png', { type: 'image/png' })] })) {
        await navigator.share({
          files: [new File([blob], 'bingo.png', { type: 'image/png' })],
          title: 'BINGO! 🎉',
        })
      } else {
        // Fallback: download
        const a = document.createElement('a')
        a.href = url
        a.download = 'bingo-winner.png'
        a.click()
      }
      setSaved(true)
      URL.revokeObjectURL(url)
    } catch (_e) {
      // Last resort: just mark as saved
      setSaved(true)
    }
  }, [])

  // Scroll to top on phase change
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
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
            Yggdrasil 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4" style={{ color: '#ffffff' }}>
            <span className="font-editorial italic text-lime">Bingo!</span>
          </h1>
          <p className="font-satoshi text-gray-400 text-base md:text-lg mb-4 leading-relaxed">
            Marker orda du høyre under foredraget.
            <br />
            Fem på rad = <strong className="text-lime">Gnu rabattkort!</strong>
          </p>
          <p className="font-satoshi text-gray-500 text-sm mb-10">
            Du har 30 minutt. Brettet e randomisert — ingen har det same.
          </p>
          <button
            onClick={startGame}
            className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Start Bingo
          </button>
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Playing
  // ---------------------------------------------------------------------------
  if (phase === 'playing') {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 flex flex-col">
        {/* Timer bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <p className="font-mono text-xs text-gray-500">BINGO</p>
          <p className={`font-mono text-sm font-semibold ${timeLeft < 300 ? 'text-red-400' : 'text-lime'}`}>
            {formatTime(timeLeft)}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/10 h-0.5">
          <div
            className="h-full bg-lime-bright transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / (TIMER_MINUTES * 60)) * 100}%` }}
          />
        </div>

        {/* Board */}
        <div className="flex-1 flex items-center justify-center p-3">
          <div className="grid grid-cols-5 gap-1.5 w-full max-w-md aspect-square">
            {board.map((row, r) =>
              row.map((word, c) => {
                const isMarked = marked[r]?.[c]
                const isFree = r === 2 && c === 2
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => toggleCell(r, c)}
                    className={`relative rounded-lg flex items-center justify-center p-1 text-center transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                      isMarked
                        ? 'bg-lime text-gray-900'
                        : 'bg-white/5 border border-white/10 text-white'
                    } ${isFree ? 'bg-lime/30 border-lime/40' : ''}`}
                  >
                    <span className={`text-[10px] sm:text-xs font-medium leading-tight ${
                      isMarked ? 'font-semibold' : ''
                    }`}>
                      {word}
                    </span>
                    {isMarked && !isFree && (
                      <span className="absolute top-0.5 right-0.5 text-[8px]">✓</span>
                    )}
                  </button>
                )
              })
            )}
          </div>
        </div>
      </section>
    )
  }

  // ---------------------------------------------------------------------------
  // Winner
  // ---------------------------------------------------------------------------
  if (phase === 'winner') {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 overflow-hidden">
        <Confetti />
        <div className="max-w-md mx-auto px-5 py-12 md:py-20">
          {/* Winner card (capturable) */}
          <div ref={boardRef} className="bg-gray-900 rounded-2xl p-6">
            <div className="text-center mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]">
              <p className="text-6xl mb-4">🎉</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#ffffff' }}>
                <span className="font-editorial italic text-lime">BINGO!</span>
              </h2>
              <p className="font-satoshi text-gray-400 text-sm">
                Du klarte det!
              </p>
            </div>

            {/* Mini board showing winning state */}
            <div className="grid grid-cols-5 gap-1 mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              {board.map((row, r) =>
                row.map((word, c) => {
                  const isMarked = marked[r]?.[c]
                  return (
                    <div
                      key={`${r}-${c}`}
                      className={`rounded p-1 flex items-center justify-center text-center ${
                        isMarked ? 'bg-lime text-gray-900' : 'bg-white/5 text-white/40'
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
          <div className="mt-8 text-center motion-safe:animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="bg-lime/10 border border-lime/20 rounded-2xl p-6 mb-6">
              <p className="text-lg font-semibold text-lime mb-2">🏆 Vis denne te Andreas!</p>
              <p className="text-sm text-gray-300 font-satoshi">
                Vis denne sida (eller bildet) te Andreas så får du eit <strong className="text-lime">Gnu rabattkort</strong>!
              </p>
            </div>

            <button
              onClick={saveToImage}
              className="w-full py-3.5 bg-white text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors cursor-pointer mb-3"
            >
              {saved ? '✓ Lagra!' : 'Lagre som bilde'}
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
              alt="Sad blob"
              width={200}
              height={200}
              className="mx-auto opacity-60"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Ingen bingo denne gongen!
          </h2>
          <p className="font-satoshi text-gray-400 text-base mb-8">
            Tiå rann ut. Men det va gøy å prøva, ikkje sant?
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={startGame}
              className="w-full py-3.5 bg-lime-bright text-gray-900 font-semibold text-sm rounded-full hover:scale-105 transition-transform cursor-pointer"
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
