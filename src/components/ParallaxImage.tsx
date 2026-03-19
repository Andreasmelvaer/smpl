'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  height?: string
}

export default function ParallaxImage({ src, alt, height = 'h-[550px] md:h-[700px] lg:h-[800px]' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowH = window.innerHeight
      // Only animate when section is in view
      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height)
        setOffset((progress - 0.5) * 80) // -40px to +40px range
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${height}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-center transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
      />
    </div>
  )
}
