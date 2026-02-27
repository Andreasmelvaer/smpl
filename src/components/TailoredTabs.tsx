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
    title: string
    description: string
    bullets: string[]
    cta: { label: string; href: string }
  }[]
}> = {
  startup: {
    cards: [
      {
        title: '5-Day Prototype',
        description: 'Reveal your vision, test viability, and win investment with a fully clickable prototype.',
        bullets: [
          'High-fidelity clickable prototype',
          'Stakeholder & investor presentations',
          'User flow & journey mapping',
          'Visual identity & branding',
          'Delivered in 5 working days',
        ],
        cta: { label: 'Get a prototype', href: '/contact' },
      },
      {
        title: 'AI-assisted MVP',
        description: 'Launch your MVP fast, without full-time hires. Just the talent you need, on demand.',
        bullets: [
          'AI-powered rapid development',
          'Modern tech stack (Next.js, React)',
          'Cloud deployment & CI/CD',
          'Scalable architecture',
          'Ongoing iteration support',
        ],
        cta: { label: 'Build an MVP', href: '/contact' },
      },
      {
        title: 'Get Investor-Ready',
        description: 'Raise funding with confidence. We help you build the materials that close rounds.',
        bullets: [
          'Pitch deck design & narrative',
          'Financial model support',
          'SEIS/EIS compliance materials',
          'Demo & prototype for due diligence',
          'Go-to-market strategy',
          'Website & landing pages',
          'Video & marketing materials',
        ],
        cta: { label: 'Raise funding', href: '/contact' },
      },
    ],
  },
  scaleup: {
    cards: [
      {
        title: '5-Day Prototype',
        description: 'Validate new features or product lines before committing engineering resources.',
        bullets: [
          'Rapid concept validation',
          'Stakeholder alignment workshops',
          'Competitive analysis',
          'User testing & feedback',
          'Delivered in 5 working days',
        ],
        cta: { label: 'Get a prototype', href: '/contact' },
      },
      {
        title: 'Design as a Service',
        description: 'Our ultra-lean Design as a Service gives you expert design resources on demand.',
        bullets: [
          'Full design team for the cost of one',
          'UI/UX for web & mobile',
          'Design system creation',
          'Brand & visual identity',
          'Ongoing design support',
        ],
        cta: { label: 'Get design help', href: '/contact' },
      },
      {
        title: 'Product Development',
        description: 'Scale your product with experienced, AI-powered engineering and modern tooling.',
        bullets: [
          'AI-assisted development',
          'Feature development sprints',
          'Performance optimisation',
          'Integration & API development',
          'Quality assurance & testing',
        ],
        cta: { label: 'Scale your product', href: '/contact' },
      },
    ],
  },
  corporate: {
    cards: [
      {
        title: '5-Day Prototype',
        description: 'Test innovation hypotheses rapidly without disrupting your core business.',
        bullets: [
          'Executive stakeholder workshops',
          'Rapid proof-of-concept',
          'Board-ready presentations',
          'Risk-free validation',
          'Delivered in 5 working days',
        ],
        cta: { label: 'Get a prototype', href: '/contact' },
      },
      {
        title: 'Innovation Sprint',
        description: 'Unlock new revenue streams and digital transformation opportunities.',
        bullets: [
          'Digital transformation roadmap',
          'Innovation pipeline development',
          'Cross-functional team alignment',
          'Technology stack evaluation',
          'ROI & business case modelling',
        ],
        cta: { label: 'Start innovating', href: '/contact' },
      },
      {
        title: 'Product Marketing',
        description: 'A great product deserves great marketing. We create what you need to showcase it.',
        bullets: [
          'High-quality website design',
          'Compelling video production',
          'Full marketing materials suite',
          'Brand positioning & messaging',
          'Content strategy & creation',
        ],
        cta: { label: 'Market your product', href: '/contact' },
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
            className="bg-offwhite rounded-2xl p-8 flex flex-col text-left"
          >
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-satoshi">
              {card.description}
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="text-sm text-gray-600 flex items-start gap-2 font-satoshi">
                  <span className="text-lime-bright mt-0.5 shrink-0">+</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              href={card.cta.href}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors w-full"
            >
              {card.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
