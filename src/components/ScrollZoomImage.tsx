'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface ScrollZoomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function ScrollZoomImage({ src, alt, width = 1200, height = 750, className = '', priority = false }: ScrollZoomImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1.08)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowH = window.innerHeight
      if (rect.bottom > 0 && rect.top < windowH) {
        // Progress: 0 when entering viewport from bottom, 1 when fully visible
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height)))
        // Scale from 1.08 down to 1.0
        setScale(1.08 - progress * 0.08)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto transition-transform duration-100 ease-out"
        style={{ transform: `scale(${scale})` }}
        priority={priority}
      />
    </div>
  )
}
