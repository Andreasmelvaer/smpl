'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface Freebie {
  href: string
  img: string
  title: string
  meta: string // e.g. "13 pages"
  desc: string
  initialCount: number
}

export default function FreebieGrid({ freebies }: { freebies: Freebie[] }) {
  const [counts, setCounts] = useState<number[]>(() => freebies.map((f) => f.initialCount))
  const [bumpedIdx, setBumpedIdx] = useState<number | null>(null)
  const [bumpKey, setBumpKey] = useState(0) // forces re-mount of the +1 element each tick

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const scheduleNext = () => {
      // First tick lands quickly (4–9s) so visitors see the effect; then 7–22s.
      const isFirst = bumpKey === 0
      const delayMs = isFirst
        ? 4000 + Math.random() * 5000
        : 7000 + Math.random() * 15000

      timeoutId = setTimeout(() => {
        const idx = Math.floor(Math.random() * freebies.length)
        setCounts((prev) => prev.map((c, i) => (i === idx ? c + 1 : c)))
        setBumpedIdx(idx)
        setBumpKey((k) => k + 1)

        // Clear the bump state after the animation finishes (1.6s).
        setTimeout(() => setBumpedIdx(null), 1700)
      }, delayMs)
    }

    scheduleNext()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
    // We re-run on bumpKey so the next tick gets scheduled after each bump.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bumpKey, freebies.length])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {freebies.map((freebie, i) => {
        const bumped = bumpedIdx === i
        return (
          <Link key={freebie.href} href={freebie.href} className="group block">
            <div className="aspect-[4/3] overflow-hidden relative rounded-2xl mb-4">
              <Image
                src={freebie.img}
                alt={freebie.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
              {freebie.meta} ·{' '}
              <span className="relative inline-block">
                <span
                  key={bumped ? `bumped-${bumpKey}` : 'idle'}
                  className={`tabular-nums ${bumped ? 'animate-freebie-flash' : ''}`}
                >
                  {counts[i].toLocaleString()}
                </span>
                {bumped && (
                  <span
                    key={`plus-${bumpKey}`}
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 text-sky-500 font-semibold pointer-events-none animate-freebie-bump"
                  >
                    +1
                  </span>
                )}
              </span>{' '}
              downloads
            </p>
            <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug group-hover:text-gray-700 transition-colors">
              {freebie.title}
            </h3>
            <p className="text-sm text-gray-500 font-satoshi leading-snug">{freebie.desc}</p>
          </Link>
        )
      })}
    </div>
  )
}
