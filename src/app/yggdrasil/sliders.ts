// ---------------------------------------------------------------------------
// Yggdrasil – Slider configurations & archetype scoring
// ---------------------------------------------------------------------------

import type { ArchetypeKey } from './translations'

export type SliderKey = 'shape' | 'typography' | 'layout' | 'colour' | 'motion' | 'shadow'

export interface SliderConfig {
  key: SliderKey
  stops: number // number of discrete positions (0-indexed)
}

export const SLIDERS: SliderConfig[] = [
  { key: 'shape', stops: 5 },
  { key: 'typography', stops: 6 },
  { key: 'layout', stops: 5 },
  { key: 'colour', stops: 5 },
  { key: 'shadow', stops: 5 },
  { key: 'motion', stops: 5 },
]

// ---------------------------------------------------------------------------
// Scoring matrix: [sliderKey][position] → partial archetype scores
// Each position adds/subtracts points to archetypes
// ---------------------------------------------------------------------------

type ScoreRow = Partial<Record<ArchetypeKey, number>>

export const SCORING: Record<SliderKey, ScoreRow[]> = {
  shape: [
    // 0: Sharp square
    { neurotic: 3, gridDictator: 2, helvetica: 1 },
    // 1: Rounded square
    { hoarder: 2, awkward: 2 },
    // 2: Squircle (Apple-style)
    { imposter: 3, notDesigner: 1 },
    // 3: Nearly circle
    { chaotic: 1, imposter: 1, awkward: 1 },
    // 4: Perfect circle
    { chaotic: 2, notDesigner: 1, hoarder: 1 },
  ],
  typography: [
    // 0: Monospace
    { notDesigner: 2, gridDictator: 2 },
    // 1: Sans-serif
    { helvetica: 3, hoarder: 1 },
    // 2: Slab serif
    { awkward: 2, imposter: 1, neurotic: 1 },
    // 3: Serif
    { helvetica: 2, neurotic: 2 },
    // 4: Old-style
    { neurotic: 3, awkward: 1 },
    // 5: Papyrus
    { chaotic: 2, notDesigner: 1, hoarder: 1 },
  ],
  layout: [
    // 0: Single column
    { awkward: 2, imposter: 1, notDesigner: 1 },
    // 1: Two columns
    { hoarder: 2, notDesigner: 1, gridDictator: 1 },
    // 2: Grid
    { gridDictator: 3, hoarder: 1 },
    // 3: Asymmetric
    { chaotic: 2, neurotic: 1, imposter: 1 },
    // 4: No grid / chaos
    { chaotic: 2, notDesigner: 1, imposter: 1 },
  ],
  colour: [
    // 0: Monochrome B&W
    { helvetica: 3, neurotic: 2 },
    // 1: Muted / earth tones
    { awkward: 2, hoarder: 2 },
    // 2: Brand primary
    { gridDictator: 2, imposter: 2 },
    // 3: Neon / vibrant
    { chaotic: 2, imposter: 2 },
    // 4: Full rainbow
    { notDesigner: 2, chaotic: 1, imposter: 1 },
  ],
  shadow: [
    // 0: No shadow (flat)
    { helvetica: 3, gridDictator: 1, neurotic: 1 },
    // 1: Subtle shadow
    { hoarder: 2, neurotic: 2 },
    // 2: Medium shadow
    { awkward: 3, imposter: 1 },
    // 3: Heavy shadow
    { notDesigner: 2, chaotic: 1, imposter: 1 },
    // 4: MEGA shadow (PowerPoint)
    { chaotic: 2, notDesigner: 1, awkward: 1 },
  ],
  motion: [
    // 0: No animation
    { gridDictator: 3, helvetica: 1 },
    // 1: Subtle fade
    { hoarder: 2, awkward: 1, neurotic: 1 },
    // 2: Smooth ease
    { imposter: 2, neurotic: 2 },
    // 3: Spring/bounce
    { chaotic: 2, notDesigner: 1, hoarder: 1 },
    // 4: Absolute circus
    { chaotic: 2, imposter: 1, notDesigner: 1 },
  ],
}

// ---------------------------------------------------------------------------
// Calculate result from slider values
// ---------------------------------------------------------------------------

const TIEBREAK_ORDER: ArchetypeKey[] = [
  'notDesigner', 'awkward', 'helvetica', 'hoarder',
  'gridDictator', 'imposter', 'neurotic', 'chaotic',
]

export function calculateTally(values: Record<SliderKey, number>): Record<ArchetypeKey, number> {
  const tally: Record<ArchetypeKey, number> = {
    neurotic: 0, imposter: 0, helvetica: 0, gridDictator: 0,
    chaotic: 0, hoarder: 0, awkward: 0, notDesigner: 0,
  }

  for (const slider of SLIDERS) {
    const pos = values[slider.key]
    const scores = SCORING[slider.key][pos]
    if (scores) {
      for (const [arch, pts] of Object.entries(scores)) {
        tally[arch as ArchetypeKey] += pts as number
      }
    }
  }

  return tally
}

export function calculateResult(values: Record<SliderKey, number>): ArchetypeKey {
  const tally = calculateTally(values)
  const max = Math.max(...Object.values(tally))
  return TIEBREAK_ORDER.find((t) => tally[t] === max)!
}
