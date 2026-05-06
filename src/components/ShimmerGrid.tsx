'use client'

import { useEffect, useRef } from 'react'

const BLUE = [62, 138, 226] as const
const LIME = [235, 254, 96] as const
// Pale tints that appear in small clusters that pulse in and out — the dots
// inside an active cluster get bigger, more opaque, and pull strongly toward
// these hues so the colour reads as a soft cluster rather than a wash.
const SKY = [189, 227, 255] as const // #BDE3FF
const PINK = [255, 189, 242] as const // #FFBDF2
const LIME_PALE = [243, 255, 156] as const // #F3FF9C
// Light-grey dot base — keeps the field reading as "mainly white" with the
// colour clusters as occasional bursts.
const GRAY = 215

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

      // Colour bursts. Each burst is an envelope (organic shape, not a
      // circle — its radius wobbles around its angle so the edge has
      // lobes/inlets) that pulses on a sin cycle so it's invisible roughly
      // half the time. When a burst IS active, the dots inside it pick up
      // ALL THREE colours (sky / pink / lime), with each colour's strength
      // determined by a small-scale field sampled at the dot's position.
      // So a single burst contains lavender, peach, and mint regions where
      // the inner sub-fields overlap — never just one flat colour.
      const burst1Pulse = Math.max(0, Math.sin(time * 0.32 + 0.2))
      const burst1X = w * 0.22 + Math.cos(time * 0.18) * w * 0.15
      const burst1Y = h * 0.3 + Math.sin(time * 0.22 + 0.5) * h * 0.2
      const burst1R = maxDim * 0.22
      const burst1Phase = 0.0

      const burst2Pulse = Math.max(0, Math.sin(time * 0.27 + 1.8))
      const burst2X = w * 0.78 + Math.cos(time * 0.21 + 1.5) * w * 0.12
      const burst2Y = h * 0.55 + Math.sin(time * 0.16 + 2.0) * h * 0.22
      const burst2R = maxDim * 0.2
      const burst2Phase = 2.4

      const burst3Pulse = Math.max(0, Math.sin(time * 0.3 + 3.6))
      const burst3X = w * 0.5 + Math.cos(time * 0.24 + 4.0) * w * 0.25
      const burst3Y = h * 0.82 + Math.sin(time * 0.18 + 0.8) * h * 0.12
      const burst3R = maxDim * 0.21
      const burst3Phase = 4.8

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

          // Burst envelope: angle-modulated radius gives an organic, wobbly
          // edge (not a clean circle). Two harmonics (3× and 5× the angle)
          // produce 3-lobed + 5-lobed wobble that drifts with time.
          const computeBurst = (cx: number, cy: number, baseR: number, phase: number, pulse: number) => {
            if (pulse <= 0) return 0
            const dxB = x - cx
            const dyB = y - cy
            const angleB = Math.atan2(dyB, dxB)
            const wobble =
              1 +
              0.32 * Math.sin(angleB * 3 + time * 0.4 + phase) +
              0.18 * Math.sin(angleB * 5 - time * 0.3 + phase * 1.7)
            const distB = Math.sqrt(dxB * dxB + dyB * dyB)
            return smoothstep(1 - distB / (baseR * wobble)) * pulse
          }

          const burst1S = computeBurst(burst1X, burst1Y, burst1R, burst1Phase, burst1Pulse)
          const burst2S = computeBurst(burst2X, burst2Y, burst2R, burst2Phase, burst2Pulse)
          const burst3S = computeBurst(burst3X, burst3Y, burst3R, burst3Phase, burst3Pulse)
          const burstStrength = burst1S + burst2S + burst3S

          // Inside any active burst, sample three small-scale colour
          // sub-fields at this dot's position. Each gives 0..1 strength,
          // and a single dot can have multiple sub-fields strong at once
          // → multi-colour blending within one burst.
          const skySub = Math.max(
            0,
            0.4 + 0.6 * Math.sin(x * 0.013 + Math.sin(y * 0.011 + time * 0.5) + time * 0.3),
          )
          const pinkSub = Math.max(
            0,
            0.4 + 0.6 * Math.sin(x * 0.011 + Math.cos(y * 0.014 + time * 0.4 + 1.7) - time * 0.35 + 2.4),
          )
          const limeSub = Math.max(
            0,
            0.4 + 0.6 * Math.cos(y * 0.012 + Math.sin(x * 0.015 + time * 0.45 + 4.0) + time * 0.3),
          )

          const tintSky = Math.min(0.85, burstStrength * skySub)
          const tintPink = Math.min(0.85, burstStrength * pinkSub)
          const tintLimePale = Math.min(0.85, burstStrength * limeSub)
          const clusterStrength = Math.min(1, burstStrength)

          // Dots inside a cluster grow + get more opaque so the colour
          // actually pops; outside clusters the field stays subtle.
          const opacity =
            (baseOpacity + boostA + boostB + clusterStrength * 0.5) * (1 - fadeBright)
          if (opacity < 0.01) continue
          const radius = dotRadius + clusterStrength * 0.7

          const tb = Math.min(0.7, tintBlue)
          const tl = Math.min(0.7, tintLime)
          const r = Math.min(
            255,
            Math.round(
              GRAY +
                (BLUE[0] - GRAY) * tb +
                (LIME[0] - GRAY) * tl +
                (SKY[0] - GRAY) * tintSky +
                (PINK[0] - GRAY) * tintPink +
                (LIME_PALE[0] - GRAY) * tintLimePale,
            ),
          )
          const g = Math.min(
            255,
            Math.round(
              GRAY +
                (BLUE[1] - GRAY) * tb +
                (LIME[1] - GRAY) * tl +
                (SKY[1] - GRAY) * tintSky +
                (PINK[1] - GRAY) * tintPink +
                (LIME_PALE[1] - GRAY) * tintLimePale,
            ),
          )
          const b = Math.min(
            255,
            Math.round(
              GRAY +
                (BLUE[2] - GRAY) * tb +
                (LIME[2] - GRAY) * tl +
                (SKY[2] - GRAY) * tintSky +
                (PINK[2] - GRAY) * tintPink +
                (LIME_PALE[2] - GRAY) * tintLimePale,
            ),
          )

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
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
