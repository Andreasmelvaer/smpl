import type { ArchetypeKey } from './translations'

export type SliderKey = 'runway' | 'pitchStyle' | 'teamSize' | 'pivotCount' | 'riskAppetite' | 'investorType'

export interface SliderConfig {
  key: SliderKey
  stops: number
}

export const SLIDERS: SliderConfig[] = [
  { key: 'runway', stops: 5 },
  { key: 'pitchStyle', stops: 5 },
  { key: 'teamSize', stops: 5 },
  { key: 'pivotCount', stops: 5 },
  { key: 'riskAppetite', stops: 5 },
  { key: 'investorType', stops: 5 },
]

type ScoreRow = Partial<Record<ArchetypeKey, number>>

export const SCORING: Record<SliderKey, ScoreRow[]> = {
  runway: [
    { hustler: 3, visionary: 1 },
    { accidentalFounder: 2, hustler: 1 },
    { techCofounder: 2, reluctantCeo: 1 },
    { bootstrapper: 2, deckPolisher: 1 },
    { bootstrapper: 3, deckPolisher: 2 },
  ],
  pitchStyle: [
    { techCofounder: 3, reluctantCeo: 1 },
    { accidentalFounder: 2, bootstrapper: 1 },
    { deckPolisher: 2, hustler: 1 },
    { hustler: 3, visionary: 1 },
    { visionary: 4 },
  ],
  teamSize: [
    { accidentalFounder: 2, bootstrapper: 2, techCofounder: 1 },
    { techCofounder: 2, reluctantCeo: 1 },
    { serialPivoter: 1, hustler: 1, deckPolisher: 1 },
    { reluctantCeo: 3, visionary: 1 },
    { visionary: 2, hustler: 2 },
  ],
  pivotCount: [
    { visionary: 2, bootstrapper: 2 },
    { accidentalFounder: 2, techCofounder: 1 },
    { serialPivoter: 3 },
    { serialPivoter: 4 },
    { serialPivoter: 5 },
  ],
  riskAppetite: [
    { bootstrapper: 3, reluctantCeo: 1 },
    { deckPolisher: 2, accidentalFounder: 1 },
    { techCofounder: 2, reluctantCeo: 1 },
    { hustler: 3, visionary: 1 },
    { visionary: 3, hustler: 2 },
  ],
  investorType: [
    { accidentalFounder: 2, reluctantCeo: 1 },
    { bootstrapper: 2, deckPolisher: 1 },
    { hustler: 3, visionary: 1 },
    { serialPivoter: 2, hustler: 1 },
    { reluctantCeo: 2, techCofounder: 2 },
  ],
}

const TIEBREAK: ArchetypeKey[] = [
  'visionary', 'hustler', 'serialPivoter', 'techCofounder',
  'bootstrapper', 'deckPolisher', 'reluctantCeo', 'accidentalFounder',
]

export function calculateResult(values: Record<SliderKey, number>): ArchetypeKey {
  const tally: Record<ArchetypeKey, number> = {
    visionary: 0, reluctantCeo: 0, serialPivoter: 0, techCofounder: 0,
    hustler: 0, bootstrapper: 0, deckPolisher: 0, accidentalFounder: 0,
  }
  for (const slider of SLIDERS) {
    const scores = SCORING[slider.key][values[slider.key]]
    if (scores) {
      for (const [arch, pts] of Object.entries(scores)) {
        tally[arch as ArchetypeKey] += pts as number
      }
    }
  }
  const max = Math.max(...Object.values(tally))
  return TIEBREAK.find((t) => tally[t] === max)!
}
