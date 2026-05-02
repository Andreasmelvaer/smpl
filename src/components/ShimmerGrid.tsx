'use client'

import { useEffect, useRef } from 'react'

export default function ShimmerGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const gap = 10
      const dotRadius = 1.4

      ctx.clearRect(0, 0, w, h)

      // Shimmer center moves slowly across the canvas
      const shimmerX = w * 0.5 + Math.cos(time * 0.4) * w * 0.35
      const shimmerY = h * 0.5 + Math.sin(time * 0.3) * h * 0.3
      const shimmerRadius = Math.max(w, h) * 0.45

      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const dx = x - shimmerX
          const dy = y - shimmerY
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Base opacity + shimmer boost for dots near the light
          const shimmer = Math.max(0, 1 - dist / shimmerRadius)
          const opacity = 0.28 + shimmer * 0.55

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(120, 120, 120, ${opacity})`
          ctx.fill()
        }
      }

      time += 0.02
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  )
}
