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

    const smoothstep = (e: number) => {
      const t = Math.max(0, Math.min(1, e))
      return t * t * (3 - 2 * t)
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const gap = 8
      const dotRadius = 0.8
      const baseOpacity = 0.3
      const maxDim = Math.max(w, h)

      ctx.clearRect(0, 0, w, h)

      // Big bright patch — dots fade OUT inside, like a moving spotlight.
      const brightX = w * 0.5 + Math.cos(time * 0.4) * w * 0.35
      const brightY = h * 0.5 + Math.sin(time * 0.3) * h * 0.3
      const brightR = maxDim * 0.55

      // Two small darker patches drifting independently — sunlight + shadow
      // through clouds. Slower, smaller, different phases.
      const shadowAX = w * 0.3 + Math.cos(time * 0.25 + 1.0) * w * 0.25
      const shadowAY = h * 0.7 + Math.sin(time * 0.18 + 0.5) * h * 0.2
      const shadowAR = maxDim * 0.18

      const shadowBX = w * 0.7 + Math.cos(time * 0.22 + 2.5) * w * 0.2
      const shadowBY = h * 0.3 + Math.sin(time * 0.28) * h * 0.18
      const shadowBR = maxDim * 0.15

      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const distBright = Math.sqrt((x - brightX) ** 2 + (y - brightY) ** 2)
          const distA = Math.sqrt((x - shadowAX) ** 2 + (y - shadowAY) ** 2)
          const distB = Math.sqrt((x - shadowBX) ** 2 + (y - shadowBY) ** 2)

          const fadeBright = smoothstep(1 - distBright / brightR)
          const boostA = smoothstep(1 - distA / shadowAR) * 0.18
          const boostB = smoothstep(1 - distB / shadowBR) * 0.14

          const opacity = (baseOpacity + boostA + boostB) * (1 - fadeBright)
          if (opacity < 0.01) continue

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(150, 150, 150, ${opacity})`
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
