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

      // Pale colour clusters — small, drift slowly, pulse on a sin cycle so
      // each cluster spends roughly half its time invisible. When a cluster
      // IS active, the dots inside it get bigger, more opaque, and pull
      // strongly toward the cluster's hue so a recognisable splash of
      // colour appears. Five clusters across the three pale tints with
      // different pulse phases so they appear at different times.
      const sky1Pulse = Math.max(0, Math.sin(time * 0.32 + 0.2))
      const sky1X = w * 0.18 + Math.cos(time * 0.18) * w * 0.15
      const sky1Y = h * 0.25 + Math.sin(time * 0.22 + 0.5) * h * 0.18
      const sky1R = maxDim * 0.16

      const sky2Pulse = Math.max(0, Math.sin(time * 0.34 + 4.8))
      const sky2X = w * 0.12 + Math.cos(time * 0.2 + 2.2) * w * 0.08
      const sky2Y = h * 0.7 + Math.sin(time * 0.18 + 3.0) * h * 0.18
      const sky2R = maxDim * 0.14

      const pink1Pulse = Math.max(0, Math.sin(time * 0.27 + 1.8))
      const pink1X = w * 0.85 + Math.cos(time * 0.21 + 1.5) * w * 0.1
      const pink1Y = h * 0.55 + Math.sin(time * 0.16 + 2.0) * h * 0.22
      const pink1R = maxDim * 0.16

      const pink2Pulse = Math.max(0, Math.sin(time * 0.29 + 5.5))
      const pink2X = w * 0.72 + Math.cos(time * 0.22 + 5.5) * w * 0.12
      const pink2Y = h * 0.18 + Math.sin(time * 0.2 + 1.2) * h * 0.1
      const pink2R = maxDim * 0.13

      const limePalePulse = Math.max(0, Math.sin(time * 0.3 + 3.2))
      const limePaleX = w * 0.5 + Math.cos(time * 0.24 + 4.0) * w * 0.25
      const limePaleY = h * 0.85 + Math.sin(time * 0.18 + 0.8) * h * 0.1
      const limePaleR = maxDim * 0.15

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

          // Cluster strengths — each one is the geometric falloff times the
          // pulse, so a dot is only "in a cluster" when the cluster is
          // currently visible AND nearby.
          const sky1S = smoothstep(1 - Math.sqrt((x - sky1X) ** 2 + (y - sky1Y) ** 2) / sky1R) * sky1Pulse
          const sky2S = smoothstep(1 - Math.sqrt((x - sky2X) ** 2 + (y - sky2Y) ** 2) / sky2R) * sky2Pulse
          const pink1S = smoothstep(1 - Math.sqrt((x - pink1X) ** 2 + (y - pink1Y) ** 2) / pink1R) * pink1Pulse
          const pink2S = smoothstep(1 - Math.sqrt((x - pink2X) ** 2 + (y - pink2Y) ** 2) / pink2R) * pink2Pulse
          const limePaleS = smoothstep(1 - Math.sqrt((x - limePaleX) ** 2 + (y - limePaleY) ** 2) / limePaleR) * limePalePulse

          const tintSky = Math.min(0.85, sky1S + sky2S)
          const tintPink = Math.min(0.85, pink1S + pink2S)
          const tintLimePale = Math.min(0.85, limePaleS)
          const clusterStrength = Math.min(1, tintSky + tintPink + tintLimePale)

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
