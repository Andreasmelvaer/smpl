'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import ShimmerGrid from '@/components/ShimmerGrid'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Archetype = 'pixel' | 'vibes' | 'framework' | 'slides' | 'accidental' | 'system'

interface ArchetypeData {
  name: string
  tagline: string
  description: string
  strength: string
  weakness: string
}

interface Question {
  text: string
  answers: { label: string; type: Archetype }[]
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const ARCHETYPES: Record<Archetype, ArchetypeData> = {
  pixel: {
    name: 'The Pixel Perfectionist',
    tagline: 'Is that 1px off? Yes. Yes it is.',
    description:
      'You have zoomed into 6400% more times than you\'ve called your mother. You will die on the hill of optical alignment, and honestly? That hill looks beautifully kerned. Your Figma files are immaculate. Your deadlines are a suggestion.',
    strength: 'Craft that makes other designers quietly jealous',
    weakness: 'Has never shipped anything before the heat death of the universe',
  },
  vibes: {
    name: 'The Vibes-Only Designer',
    tagline: "I don't do wireframes. I do feelings.",
    description:
      'Your mood boards have mood boards. You once described a button as "emotionally unavailable." You think grids are a social construct and white space is a personality trait. Stakeholders love your presentations. Engineers want you arrested.',
    strength: 'Can make a 404 page feel like a spiritual experience',
    weakness: 'Has used "it just needs to breathe" in a design review',
  },
  framework: {
    name: 'The Framework Bro',
    tagline: 'Have you considered using Shadcn?',
    description:
      "You don't design interfaces, you configure them. Your Figma is just screenshots of documentation. You have opinions about CSS-in-JS that you will share unprompted. You call yourself a 'design engineer' but you haven't opened Figma since 2022.",
    strength: 'Actually ships things (that all look the same)',
    weakness: "Thinks 'brand' is a font variable",
  },
  slides: {
    name: 'The Slide Deck Artist',
    tagline: 'Let me walk you through my process.',
    description:
      "You have more case study slides than actual designs. Your portfolio is 80% 'the journey' and 20% 'the outcome.' You use words like 'design thinking' and 'north star' without irony. Your real talent isn't design\u2009—\u2009it's convincing people you're designing.",
    strength: 'Could sell ice to a penguin in a stakeholder meeting',
    weakness: 'The actual product looks nothing like the deck',
  },
  accidental: {
    name: 'The Accidental Designer',
    tagline: 'I was supposed to be a developer.',
    description:
      "You fell into design because someone said 'you have good taste' and now here you are, 4 years deep, arguing about border-radius values. You learned Figma from YouTube. Your first design system was a Google Doc. You're somehow the best designer on the team and you have no idea why.",
    strength: 'Pragmatism that purists secretly envy',
    weakness: 'Has committed the sin of designing in the browser',
  },
  system: {
    name: 'The Design System Dictator',
    tagline: "That's not in the component library.",
    description:
      "You have named every shade of grey. Twice. You wrote a 47-page document about button states and felt nothing but joy. You see a rogue border-radius and your eye twitches. You believe in the system. The system is all. Designers fear you. Product managers worship you.",
    strength: 'Consistency that would make a Swiss train jealous',
    weakness: "Has rejected a design because 'Coral isn't in the palette'",
  },
}

const QUESTIONS: Question[] = [
  {
    text: "It's Monday morning. What's open on your screen?",
    answers: [
      { label: 'Figma, zoomed into a button at 3200%', type: 'pixel' },
      { label: "A Pinterest board titled 'visual tension'", type: 'vibes' },
      { label: 'GitHub. Always GitHub.', type: 'framework' },
      { label: "The slide deck from last week's retro you're still 'polishing'", type: 'slides' },
    ],
  },
  {
    text: "A developer says your design is 'not feasible.' You:",
    answers: [
      { label: 'Pull up the spec showing the exact padding values and demand compliance', type: 'pixel' },
      { label: "Say 'let's not kill the magic' and change nothing", type: 'vibes' },
      { label: 'Open their PR and fix it yourself', type: 'framework' },
      { label: "Didn't hear them, you're rehearsing your portfolio presentation", type: 'slides' },
    ],
  },
  {
    text: 'Your design review feedback style is best described as:',
    answers: [
      { label: '"The icon is 0.5px off-center and I am in physical pain"', type: 'pixel' },
      { label: '"This doesn\'t feel right. I can\'t explain why. It just doesn\'t."', type: 'vibes' },
      { label: '"Why didn\'t you just use the existing component?"', type: 'system' },
      { label: '"I actually just made a deck about this..."', type: 'slides' },
    ],
  },
  {
    text: "You're starting a new project. First thing you do?",
    answers: [
      { label: 'Set up a 4px grid and name every layer properly', type: 'pixel' },
      { label: 'Create a moodboard with at least 3 references from Brutalist Websites', type: 'vibes' },
      { label: 'Check if someone already built a template for this', type: 'framework' },
      { label: 'Somehow end up redesigning the entire design system first', type: 'system' },
    ],
  },
  {
    text: 'Your most controversial design opinion?',
    answers: [
      { label: '"If the spacing isn\'t mathematically consistent, it\'s wrong"', type: 'pixel' },
      { label: '"Rules are for people who lack intuition"', type: 'vibes' },
      { label: '"Designers who can\'t code aren\'t really designers"', type: 'framework' },
      { label: '"I fell into this career and I\'m too deep to quit now"', type: 'accidental' },
    ],
  },
  {
    text: "Pick the hill you'd die on:",
    answers: [
      { label: 'Optical alignment > mathematical alignment', type: 'pixel' },
      { label: "The colour palette should 'evoke a feeling', not follow brand guidelines", type: 'vibes' },
      { label: "If it's not in the component library, it doesn't exist", type: 'system' },
      { label: "You don't need to know the tools if you understand people", type: 'accidental' },
    ],
  },
  {
    text: "A stakeholder asks you to 'make it pop.' You:",
    answers: [
      { label: 'Add a 1px inner shadow and call it a day', type: 'pixel' },
      { label: "Finally get to use that gradient you've been saving", type: 'vibes' },
      { label: 'Send them a link to the design system documentation', type: 'system' },
      { label: "Add it to a slide with the title 'Exploring Visual Hierarchy'", type: 'slides' },
    ],
  },
  {
    text: 'How do your coworkers describe you?',
    answers: [
      { label: '"Terrifyingly detail-oriented"', type: 'pixel' },
      { label: '"Either a genius or completely unhinged, jury\'s still out"', type: 'vibes' },
      { label: '"Basically a developer who got lost"', type: 'accidental' },
      { label: '"Will literally fight you over a Figma naming convention"', type: 'system' },
    ],
  },
]

const TIE_BREAK_ORDER: Archetype[] = ['vibes', 'pixel', 'system', 'framework', 'slides', 'accidental']

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function calculateResult(answers: Archetype[]): Archetype {
  const tally: Record<Archetype, number> = {
    pixel: 0, vibes: 0, framework: 0, slides: 0, accidental: 0, system: 0,
  }
  for (const a of answers) tally[a]++
  const max = Math.max(...Object.values(tally))
  return TIE_BREAK_ORDER.find((t) => tally[t] === max)!
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function DesignerQuiz() {
  const [phase, setPhase] = useState<'landing' | 'quiz' | 'result'>('landing')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Archetype[]>([])
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [visible, setVisible] = useState(true)
  const [copied, setCopied] = useState(false)

  const result = phase === 'result' ? ARCHETYPES[calculateResult(answers)] : null
  const resultKey = phase === 'result' ? calculateResult(answers) : null

  const startQuiz = useCallback(() => {
    setAnswers([])
    setCurrentQ(0)
    setPhase('quiz')
    setVisible(true)
    setSelectedIdx(null)
  }, [])

  const handleAnswer = useCallback(
    (type: Archetype, idx: number) => {
      if (selectedIdx !== null) return // prevent double-tap
      setSelectedIdx(idx)

      setTimeout(() => {
        const next = [...answers, type]
        setAnswers(next)
        setVisible(false)

        setTimeout(() => {
          if (currentQ + 1 >= QUESTIONS.length) {
            setPhase('result')
          } else {
            setCurrentQ((q) => q + 1)
          }
          setSelectedIdx(null)
          setVisible(true)
        }, 300)
      }, 250)
    },
    [answers, currentQ, selectedIdx],
  )

  const share = useCallback(async () => {
    if (!result || !resultKey) return
    const text = `I'm ${result.name}. Take the quiz and find your designer archetype:`
    const url = `https://smpl.as/yggdrasil#${resultKey}`
    if (navigator.share) {
      try {
        await navigator.share({ title: 'What Kind of Designer Are You?', text, url })
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [result, resultKey])

  // Scroll to top on phase change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [phase])

  // -------------------------------------------------------------------------
  // Landing
  // -------------------------------------------------------------------------
  if (phase === 'landing') {
    return (
      <section className="relative min-h-[calc(100vh-60px)] flex items-center justify-center bg-gray-900 overflow-hidden">
        <ShimmerGrid />
        <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
            Yggdrasil 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ color: '#ffffff' }}>
            What Kind of
            <br />
            <span className="font-editorial italic text-lime">Designer</span> Are You?
          </h1>
          <p className="font-satoshi text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            8 questions. 0 judgment.
            <br className="sm:hidden" /> OK, maybe a little judgment.
          </p>
          <button
            onClick={startQuiz}
            className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Find Out (If You Dare)
          </button>
          <p className="mt-6 text-xs text-gray-500 font-satoshi">
            Your results will be used against you. Not legally. Socially.
          </p>
        </div>
      </section>
    )
  }

  // -------------------------------------------------------------------------
  // Quiz
  // -------------------------------------------------------------------------
  if (phase === 'quiz') {
    const q = QUESTIONS[currentQ]
    const progress = ((currentQ + 1) / QUESTIONS.length) * 100

    return (
      <section className="min-h-[calc(100vh-60px)] bg-offwhite flex flex-col">
        {/* Progress */}
        <div className="w-full bg-gray-200">
          <div
            className="h-1 bg-lime-bright transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentQ + 1}
            aria-valuemin={1}
            aria-valuemax={QUESTIONS.length}
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-5 py-10">
          <p className="font-mono text-xs text-gray-400 mb-6 tracking-wider">
            {currentQ + 1} / {QUESTIONS.length}
          </p>

          {/* Question card */}
          <div
            className={`w-full max-w-lg bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm motion-safe:transition-all motion-safe:duration-300 ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-8">
              {q.text}
            </h2>

            <div className="flex flex-col gap-3">
              {q.answers.map((a, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(a.type, i)}
                  disabled={selectedIdx !== null}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer min-h-[48px] font-satoshi text-sm md:text-base leading-snug focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent ${
                    selectedIdx === i
                      ? 'bg-lime/20 border-lime-bright scale-[0.98]'
                      : 'border-gray-200 hover:border-lime-bright hover:bg-lime/5 active:scale-[0.98]'
                  } ${selectedIdx !== null && selectedIdx !== i ? 'opacity-50' : ''}`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // -------------------------------------------------------------------------
  // Result
  // -------------------------------------------------------------------------
  if (phase === 'result' && result && resultKey) {
    return (
      <section className="min-h-[calc(100vh-60px)] bg-gray-900 overflow-hidden">
        <div className="max-w-lg mx-auto px-5 py-20 md:py-28">
          {/* Result heading */}
          <div className="text-center mb-8 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">
              You are&hellip;
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3" style={{ color: '#ffffff' }}>
              {result.name}
            </h2>
            <p className="font-editorial italic text-lime text-lg md:text-xl">
              &ldquo;{result.tagline}&rdquo;
            </p>
          </div>

          {/* Description card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 mb-6 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            <p className="font-satoshi text-gray-300 leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Strength & Weakness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="border-l-4 border-lime-bright bg-white/5 rounded-r-xl p-4">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1">
                Strength
              </p>
              <p className="font-satoshi text-sm text-gray-200">{result.strength}</p>
            </div>
            <div className="border-l-4 border-pink bg-white/5 rounded-r-xl p-4">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1">
                Weakness
              </p>
              <p className="font-satoshi text-sm text-gray-200">{result.weakness}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mb-12 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <button
              onClick={share}
              className="w-full py-3.5 bg-white text-gray-900 font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {copied ? 'Copied to clipboard!' : 'Share Your Result'}
            </button>
            <button
              onClick={startQuiz}
              className="w-full py-3 text-gray-400 text-sm font-satoshi hover:text-white transition-colors cursor-pointer"
            >
              Retake the quiz
            </button>
          </div>

          {/* Portfolio CTA */}
          <div className="border-t border-white/10 pt-10 text-center motion-safe:animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
            <p className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
              Want to see what <span className="font-editorial italic text-lime">real</span> designers actually ship?
            </p>
            <p className="font-satoshi text-gray-400 text-sm mb-6">
              Our team has designed products for 125+ companies.
              <br />
              No shade. OK, some shade.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-lime-bright text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300"
            >
              See the portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return null
}
