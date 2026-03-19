'use client'

import { useState, useRef, useEffect } from 'react'

interface PartnerCardProps {
  name: string
  category: string
  logo: string | null
  description: string
  href: string
}

export default function PartnerCard({ name, category, logo, description, href }: PartnerCardProps) {
  const [revealed, setRevealed] = useState(false)
  const isTouchDevice = useRef(false)
  const cardRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Close overlay when tapping outside on mobile
    function handleTouchOutside(e: TouchEvent) {
      if (revealed && cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setRevealed(false)
      }
    }
    document.addEventListener('touchstart', handleTouchOutside)
    return () => document.removeEventListener('touchstart', handleTouchOutside)
  }, [revealed])

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-offwhite rounded-2xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        if (!isTouchDevice.current) setRevealed(true)
      }}
      onMouseLeave={() => {
        if (!isTouchDevice.current) setRevealed(false)
      }}
      onTouchStart={() => {
        isTouchDevice.current = true
      }}
      onClick={(e) => {
        if (isTouchDevice.current) {
          if (!revealed) {
            e.preventDefault()
            setRevealed(true)
          }
          // Second tap: revealed is true, link follows normally
        }
      }}
    >
      {/* Default state: logo + category + name */}
      <div className={`flex flex-col justify-between h-full transition-opacity duration-300 ${revealed ? 'opacity-0' : 'opacity-100'}`}>
        {/* Logo */}
        <div className="h-20 flex items-start">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="object-contain max-h-[80px] max-w-[220px]"
            />
          ) : (
            <span className="text-2xl font-bold text-gray-800">{name}</span>
          )}
        </div>

        {/* Category pill + Name */}
        <div>
          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>

      {/* Hover/tap overlay */}
      <div
        className={`absolute inset-0 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
          revealed ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#f0ff83' }}
      >
        <div>
          <span className="inline-block px-3 py-1 bg-white/60 text-gray-700 text-xs font-medium rounded-full mb-4">
            {category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-3">{name}</h3>
          <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 mt-4">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-xs">
            →
          </span>
          Visit
        </div>
      </div>
    </a>
  )
}
