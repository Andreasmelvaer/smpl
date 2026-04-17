'use client'

import { useMemo } from 'react'

interface ParticlesProps {
  /** Particle count (default 15). Keep small for perf. */
  count?: number
  /** Intensity multiplier (0-1+). Higher = brighter/bigger. */
  intensity?: number
  /** Color in rgba-ready form, e.g. "200,255,0" (lime) */
  color?: string
  /** "drift" floats upward; "celebrate" radiates outward gently */
  variant?: 'drift' | 'celebrate'
  /** Optional className for the wrapper */
  className?: string
}

/**
 * Lightweight CSS-only particle layer. No libraries, no rAF.
 * Uses deterministic pseudo-randomness so SSR and client match.
 * Honors prefers-reduced-motion.
 */
export default function Particles({
  count = 15,
  intensity = 1,
  color = '200,255,0',
  variant = 'drift',
  className = '',
}: ParticlesProps) {
  // Deterministic "random" so SSR/CSR agree and we don't get hydration flicker
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Simple hash-ish PRNG from index
      const r1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1
      const r2 = Math.abs(Math.sin(i * 78.233) * 43758.5453) % 1
      const r3 = Math.abs(Math.sin(i * 39.346) * 43758.5453) % 1
      const r4 = Math.abs(Math.sin(i * 4.8731) * 43758.5453) % 1
      return {
        left: r1 * 100,
        top: r2 * 100,
        size: 2 + r3 * 4,
        delay: r4 * -12,
        duration: 8 + r1 * 10,
        drift: (r2 - 0.5) * 40, // horizontal drift px
      }
    })
  }, [count])

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute block rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size * intensity}px`,
            height: `${p.size * intensity}px`,
            backgroundColor: `rgba(${color}, ${0.35 * intensity})`,
            boxShadow: `0 0 ${6 * intensity}px rgba(${color}, ${0.5 * intensity})`,
            animation: `${variant === 'drift' ? 'smpl-particle-drift' : 'smpl-particle-celebrate'} ${p.duration}s ease-in-out ${p.delay}s infinite`,
            // @ts-expect-error CSS custom property
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
