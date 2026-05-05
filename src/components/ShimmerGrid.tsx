'use client'

import { useEffect, useRef } from 'react'

const BLUE = [62, 138, 226] as const
const LIME = [235, 254, 96] as const
// Pale "oil sheen" tints that appear in small clusters near the edges.
// Closer to the gray base than the strong brand colours, so they read as
// iridescence rather than coloured spots.
const SKY = [189, 227, 255] as const // #BDE3FF
const PINK = [255, 189, 242] as const // #FFBDF2
const LIME_PALE = [243, 255, 156] as const // #F3FF9C
const GRAY = 150

const smoothstep = (e: number) => {
  const t = Math.max(0, Math.min(1, e))
  return t * t * (3 - 2 * t)
}

export default function ShimmerGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Offscreen canvas for the smooth holographic colour wash. We render
    // the colour fields here at low resolution (64px wide), then drawImage
    // it scaled up to the main canvas with smoothing — gives a continuous
    // gradient where the colours flow and meet, which dots alone can't
    // achieve.
    const offscreen = document.createElement('canvas')
    const offCtx = offscreen.getContext('2d', { alpha: true })
    if (!offCtx) return

    let cancelled = false
    let rafId = 0
    let dpr = window.devicePixelRatio || 1
    let cssWidth = 0
    let cssHeight = 0
    let time = 0

    const fitCanvas = () => {
      dpr = window.devicePixelRatio || 1
      cssWidth = canvas.offsetWidth
      cssHeight = canvas.offsetHeight
      canvas.width = Math.max(1, Math.round(cssWidth * dpr))
      canvas.height = Math.max(1, Math.round(cssHeight * dpr))
    }

    const draw = () => {
      if (cancelled) return

      // Re-fit if the canvas changed size (parent layout shift, viewport resize)
      if (canvas.offsetWidth !== cssWidth || canvas.offsetHeight !== cssHeight) {
        fitCanvas()
      }

      const w = cssWidth
      const h = cssHeight
      const gap = 8
      const dotRadius = 0.8
      const baseOpacity = 0.34
      const maxDim = Math.max(w, h)

      // Reset transform each frame (canvas.width assignment in fitCanvas would
      // reset it, but resetting here too means any stale state is cleared)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      const brightX = w * 0.5 + Math.cos(time * 0.55) * w * 0.4
      const brightY = h * 0.5 + Math.sin(time * 0.42) * h * 0.35
      const brightR = maxDim * 0.55

      const shadowAX = w * 0.3 + Math.cos(time * 0.38 + 1.0) * w * 0.3
      const shadowAY = h * 0.7 + Math.sin(time * 0.28 + 0.5) * h * 0.25
      const shadowAR = maxDim * 0.2

      const shadowBX = w * 0.7 + Math.cos(time * 0.34 + 2.5) * w * 0.25
      const shadowBY = h * 0.3 + Math.sin(time * 0.42) * h * 0.22
      const shadowBR = maxDim * 0.16

      // Brand colour pulses — sin offset so they appear at different times
      const bluePulse = Math.max(0, Math.sin(time * 0.45 - 0.5))
      const blueX = w * 0.35 + Math.cos(time * 0.4 + 1.5) * w * 0.32
      const blueY = h * 0.3 + Math.sin(time * 0.32 + 0.8) * h * 0.22
      const blueR = maxDim * 0.13

      const limePulse = Math.max(0, Math.sin(time * 0.38 + 2.0))
      const limeX = w * 0.65 + Math.cos(time * 0.36 + 4.0) * w * 0.3
      const limeY = h * 0.7 + Math.sin(time * 0.3 + 2.2) * h * 0.2
      const limeR = maxDim * 0.12

      // === Holographic wash pass ===
      // Build a small ImageData where each "field pixel" is the blend of
      // three colour fields (sky / pink / lime) computed via domain-warped
      // sin. We then drawImage it up to canvas size with smoothing so the
      // colours read as continuous flowing bands. This is what gives the
      // oil-slick feel — the dot loop alone can't carry it because too
      // much white sits between dots.
      const fieldW = 96
      const fieldH = Math.max(16, Math.round(fieldW * (h / w)))
      if (offscreen.width !== fieldW || offscreen.height !== fieldH) {
        offscreen.width = fieldW
        offscreen.height = fieldH
      }
      const fieldData = offCtx.createImageData(fieldW, fieldH)
      const fieldPixels = fieldData.data

      const skyTime = time * 0.18
      const pinkTime = time * 0.14
      const limeFieldTime = time * 0.16

      for (let i = 0; i < fieldW; i++) {
        for (let j = 0; j < fieldH; j++) {
          const fx = (i / fieldW) * w
          const fy = (j / fieldH) * h

          const skyF = Math.max(
            0,
            0.5 + 0.5 * Math.sin(fx * 0.0055 + Math.sin(fy * 0.004 + skyTime + 0.3) + skyTime),
          )
          const pinkF = Math.max(
            0,
            0.5 + 0.5 * Math.sin(fx * 0.0042 + Math.cos(fy * 0.0058 + pinkTime + 1.7) - pinkTime * 1.1 + 2.4),
          )
          const limeF = Math.max(
            0,
            0.5 + 0.5 * Math.cos(fy * 0.0048 + Math.sin(fx * 0.0062 + limeFieldTime + 4.0) + limeFieldTime * 0.8),
          )

          // Strong tint caps — the wash IS the colour layer, so it can be
          // saturated. Where two fields overlap (e.g. sky + pink) the dot
          // pulls toward both → lavender. Where all three meet → near white.
          const ts = Math.min(0.95, skyF)
          const tp = Math.min(0.95, pinkF)
          const tlp = Math.min(0.95, limeF)

          const r = Math.min(255, Math.round(
            GRAY + (SKY[0] - GRAY) * ts + (PINK[0] - GRAY) * tp + (LIME_PALE[0] - GRAY) * tlp,
          ))
          const g = Math.min(255, Math.round(
            GRAY + (SKY[1] - GRAY) * ts + (PINK[1] - GRAY) * tp + (LIME_PALE[1] - GRAY) * tlp,
          ))
          const b = Math.min(255, Math.round(
            GRAY + (SKY[2] - GRAY) * ts + (PINK[2] - GRAY) * tp + (LIME_PALE[2] - GRAY) * tlp,
          ))

          // Wash alpha follows the bright-spotlight inverse so the centre
          // (where text sits) stays clean and the corners pick up colour.
          const wx = fx
          const wy = fy
          const distBr = Math.sqrt((wx - brightX) ** 2 + (wy - brightY) ** 2)
          const fadeBr = smoothstep(1 - distBr / brightR)
          // 0..255 alpha; max ~110 (≈43%) at the edges, 0 in the spotlight.
          const alpha = Math.round((1 - fadeBr) * 110)

          const idx = (j * fieldW + i) * 4
          fieldPixels[idx] = r
          fieldPixels[idx + 1] = g
          fieldPixels[idx + 2] = b
          fieldPixels[idx + 3] = alpha
        }
      }
      offCtx.putImageData(fieldData, 0, 0)

      // Smoothly upscale the field onto the main canvas as a colour wash.
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(offscreen, 0, 0, w, h)

      // === Dot pass ===
      // Dots now sit OVER the wash. They carry only the brand-tint pulses
      // (blue + lime) and the gray base — the holographic colour comes from
      // the wash underneath. This keeps the dots reading as texture rather
      // than competing with the colour field.

      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const distBright = Math.sqrt((x - brightX) ** 2 + (y - brightY) ** 2)
          const distA = Math.sqrt((x - shadowAX) ** 2 + (y - shadowAY) ** 2)
          const distB = Math.sqrt((x - shadowBX) ** 2 + (y - shadowBY) ** 2)
          const distBlue = Math.sqrt((x - blueX) ** 2 + (y - blueY) ** 2)
          const distLime = Math.sqrt((x - limeX) ** 2 + (y - limeY) ** 2)

          const fadeBright = smoothstep(1 - distBright / brightR)
          const boostA = smoothstep(1 - distA / shadowAR) * 0.22
          const boostB = smoothstep(1 - distB / shadowBR) * 0.18
          const tintBlue = smoothstep(1 - distBlue / blueR) * bluePulse
          const tintLime = smoothstep(1 - distLime / limeR) * limePulse

          const opacity = (baseOpacity + boostA + boostB) * (1 - fadeBright)
          if (opacity < 0.01) continue

          const tb = Math.min(0.7, tintBlue)
          const tl = Math.min(0.7, tintLime)
          const r = Math.round(GRAY + (BLUE[0] - GRAY) * tb + (LIME[0] - GRAY) * tl)
          const g = Math.round(GRAY + (BLUE[1] - GRAY) * tb + (LIME[1] - GRAY) * tl)
          const b = Math.round(GRAY + (BLUE[2] - GRAY) * tb + (LIME[2] - GRAY) * tl)

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
          ctx.fill()
        }
      }

      time += 0.028
      rafId = requestAnimationFrame(draw)
    }

    fitCanvas()
    // Draw the first frame synchronously so there's no flash of empty canvas
    // even on browsers that throttle rAF for offscreen tabs/iframes.
    draw()

    const onResize = () => fitCanvas()
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
