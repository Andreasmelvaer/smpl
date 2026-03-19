'use client'

import { useState } from 'react'
import Link from 'next/link'

type TabKey = 'startup' | 'scaleup' | 'corporate'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'startup', label: 'Start-Up' },
  { key: 'scaleup', label: 'Scale-Up' },
  { key: 'corporate', label: 'Corporate Innovator' },
]

const tabContent: Record<TabKey, {
  cards: {
    subtitle: string
    title: string
    description: string
    discount?: string
    bullets: string[]
    cta: { label: string; href: string }
  }[]
}> = {
  startup: {
    cards: [
      {
        subtitle: 'Reveal your vision',
        title: '5-Day Prototype',
        description: 'Define key UI/UX, test viability, & win investment, with Silicon Valley-quality assets',
        discount: '*Start-up discounts available*',
        bullets: [
          '3 workshops & live Figma iteration',
          'Strategic insight from industry veterans',
          'Your own team of epic product designers',
          'Specialist support, from AI to UI',
          'A hi-res, clickable prototype',
          'Pitch-ready design & brand assets',
        ],
        cta: { label: "Let's Talk About Your Vision", href: '/contact' },
      },
      {
        subtitle: 'Build & launch fast',
        title: 'AI-assisted MVP',
        description: 'Create a working product in as little as a week, with our ultra-lean MVP process',
        discount: '*Start-up discounts available*',
        bullets: [
          'AI-assisted building for max efficiency',
          'Designed for sustainable product growth',
          'Expert product strategy & tech leadership',
          'Code cleaned & deployed to Github',
          'A beautifully designed working product',
          'Deployment and rigorous testing',
        ],
        cta: { label: "Let's Build Your Working Product", href: '/contact' },
      },
      {
        subtitle: 'Raise funding',
        title: 'Get investor-ready',
        description: 'Define your story and create the assets needed to stand out from the crowd',
        bullets: [
          'Expert investor experience, insight, & networks',
          'Millions raised by clients',
          'Powerful pitchdecks',
          'Engaging websites',
          'All engagement content (audio, video, written)',
          'Investment readiness audits (incl. SEIS)',
          'Strategy re. size, timing, investor types, etc',
        ],
        cta: { label: "Let's Talk About Raising", href: '/contact' },
      },
    ],
  },
  scaleup: {
    cards: [
      {
        subtitle: 'Find your new focus',
        title: '5-Day Prototype',
        description: 'Define new solutions, test viability, and win investment, with Silicon Valley-quality assets',
        bullets: [
          '3 workshops & live Figma iteration',
          'Strategic insight from industry veterans',
          'Your own team of epic product designers',
          'Specialist support, from AI to UI',
          'A hi-res, clickable prototype',
          'Pitch-ready design & brand assets',
        ],
        cta: { label: "Let's Create Rapid Momentum", href: '/contact' },
      },
      {
        subtitle: 'Build & deploy fast',
        title: 'Design on Demand',
        description: 'Launch new products fast, without full-time hires. Just the talent you need, on demand.',
        bullets: [
          'Expert product strategy & tech leadership',
          'Full stack dev. (incl. AI engineering)',
          'Design systems & component libraries',
          'Complete, AI-enabled plug-and-play skills',
          'UX/UI design in Figma',
          'User testing & validation',
          'Complete launch support',
        ],
        cta: { label: "Let's Get You Out There", href: '/contact' },
      },
      {
        subtitle: 'Raise funding',
        title: 'Meet investors',
        description: 'Access our international network of investors, including HNWIs, VCs, PE & more',
        bullets: [
          'End-to-end support to raise (pre-) seed funds',
          'Tens of millions raised by clients',
          'Investment readiness audits',
          'Powerful pitchdecks',
          'Information Memoranda',
          'All engagement content (audio, video, written)',
          'Approaches, liaison & term sheet analysis',
        ],
        cta: { label: "Let's Discuss Investment Terms", href: '/contact' },
      },
    ],
  },
  corporate: {
    cards: [
      {
        subtitle: 'Bring ideas to life',
        title: '5-Day Prototype',
        description: 'Define new solutions, win immediate buy-in, and test viability, with Silicon Valley-quality',
        bullets: [
          '3 workshops & live Figma iteration',
          'Strategic insight from industry veterans',
          'Your own team of epic product designers',
          'Specialist support, from AI to UI',
          'A hi-res, clickable prototype',
          'Pitch-ready design & brand assets',
        ],
        cta: { label: "Let's Create Rapid Momentum", href: '/contact' },
      },
      {
        subtitle: 'Build & deploy fast',
        title: 'Design on Demand',
        description: 'Launch new products fast, without full-time hires. Just the talent you need, on demand.',
        bullets: [
          'Expert product strategy & tech leadership',
          'Full stack dev. (incl. AI engineering)',
          'Design systems & component libraries',
          'Complete, AI-enabled plug-and-play skills',
          'UX/UI design in Figma',
          'User testing & validation',
          'Complete launch support',
        ],
        cta: { label: "Let's Grab Opportunities Together", href: '/contact' },
      },
      {
        subtitle: 'Transform your business',
        title: 'Learn our secrets',
        description: 'Embed an AI-enabled innovation culture where ideas thrive & no opportunity is lost',
        bullets: [
          'Learn & deploy our unique innovation process',
          'Unlock new ideas & opportunities',
          'Rapidly create new revenue streams',
          'Slash time, risk & cost from innovation',
          'Improve internal productivity & drive efficiency',
          'Engage colleagues in your innovation agenda',
          'Empower staff to bring innovative ideas to life',
        ],
        cta: { label: "Let's Talk About Change", href: '/contact' },
      },
    ],
  },
}

export default function TailoredTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('startup')
  const content = tabContent[activeTab]

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors font-satoshi ${
              activeTab === tab.key
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.cards.map((card) => (
          <div
            key={card.title}
            className="bg-offwhite rounded-2xl p-8 flex flex-col text-left border border-gray-100"
          >
            <p className="text-sm text-gray-400 font-satoshi italic mb-2">{card.subtitle}</p>
            <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-satoshi">
              {card.description}
            </p>
            <div className="bg-gray-100 rounded-xl p-5 mb-6 flex-1">
              {card.discount && (
                <p className="text-xs text-gray-400 font-satoshi italic mb-3">{card.discount}</p>
              )}
              <ul className="space-y-2.5">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-gray-600 flex items-start gap-2.5 font-satoshi">
                    <svg className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={card.cta.href}
              className="inline-flex items-center justify-center px-4 py-3 bg-white text-gray-900 text-xs font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors w-full whitespace-nowrap"
            >
              {card.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
