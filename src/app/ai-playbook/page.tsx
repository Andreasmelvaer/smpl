import type { Metadata } from 'next'
import Link from 'next/link'
import AIPlaybookForm from '@/components/AIPlaybookForm'
import { FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

const AI_PLAYBOOK_FAQS = [
  {
    question: 'What is "Build with AI without building a monster"?',
    answer:
      'It is a free 13-page playbook from SmplCo. The premise is simple: do not start with AI, start with structure. The playbook walks through the workflow we use ourselves — Plan, Figma, Claude Design, Claude Code, GitHub, Deploy — with the prompts, brief templates, and patterns to avoid that we apply on every project.',
  },
  {
    question: 'Who should read it?',
    answer:
      'Founders, product leaders, and CTOs at startups and scale-ups who are either thinking about their first AI feature or trying to keep existing AI builds from going off the rails. Also useful for innovation teams inside enterprises evaluating where to apply AI in customer-facing products.',
  },
  {
    question: 'Is it really free?',
    answer:
      'Yes. The playbook is a free download in exchange for an email address. No paywall, no upsell. We use the email to send you the PDF and occasionally let you know about new resources. Unsubscribe whenever.',
  },
  {
    question: 'Is there a webinar that goes with it?',
    answer:
      'Yes. Andreas Melvær and Michael Millar ran a free Barclays Eagle Labs webinar on Wednesday 29 April 2026 at 12:00 BST that walked through the playbook live with Q&A. The recording is sent to anyone who registers at labs.uk.barclays/events/effectively-integrate-ai-into-your-product.',
  },
  {
    question: 'Does SmplCo help teams integrate AI?',
    answer:
      'Yes. AI-assisted design and development is part of every engagement we run, from 5-Day Prototypes through to ongoing Product Design as a Service. We have helped 125+ products ship AI in production and are recognised by Figma as a global exemplar of AI development. Book a free 30-minute call at smpl.as/book to talk through your situation.',
  },
]

export const metadata: Metadata = {
  title: 'Build with AI Without Building a Monster — Free Playbook',
  description:
    'A 13-page playbook for founders and product teams on planning, designing and shipping with AI. The workflow we use ourselves at SmplCo: Plan, Figma, Claude Design, Claude Code, GitHub, Deploy.',
  alternates: { canonical: 'https://smpl.as/ai-playbook' },
  openGraph: {
    title: 'Build with AI Without Building a Monster — Free Playbook',
    description:
      'A 13-page playbook on planning, designing and shipping with AI. The workflow Andreas and Mike use with founders every week.',
    url: 'https://smpl.as/ai-playbook',
    siteName: 'SmplCo',
    type: 'website',
    images: [
      {
        url: '/images/ai-playbook-mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'Build with AI without building a monster — free SmplCo playbook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build with AI Without Building a Monster — Free Playbook',
    description:
      'A 13-page playbook on planning, designing and shipping with AI.',
    images: ['/images/ai-playbook-mockup.jpg'],
  },
}

const stages = [
  {
    number: '01',
    title: 'Plan, design, decide',
    description:
      'Brief writing and journey design before AI gets involved. The boring questions — who, problem, journey, what "done" means — are where the value lives.',
  },
  {
    number: '02',
    title: 'Operationalise via Claude Design',
    description:
      'Turn your Figma system into actual rules so AI builds inside it, not beside it. No purple gradients. No invented colours. No glassmorphism nobody asked for.',
  },
  {
    number: '03',
    title: 'Build with Claude Code, carefully',
    description:
      'Plan first. Then prompt. Like a good junior developer, not a caffeinated raccoon with access to your repo. Main journey only, design rules as the source of truth.',
  },
  {
    number: '04',
    title: 'Ship, secure, sustain',
    description:
      'GitHub, deploy, domain, data. The boring infrastructure that turns a prototype into a product. Plus a sanity check on what you can actually defend to a customer.',
  },
]

const commonMistakes = [
  {
    title: 'Starting with the prompt, not the brief',
    description: 'Asking AI to "make an app" before deciding who it is for, what problem it solves, or what "done" means. Wasted weeks dressed up as iteration.',
  },
  {
    title: 'Letting AI invent its own design system',
    description: 'Default purple gradients on every screen. Glassmorphism nobody asked for. Crypto-startup dashboards. Fine for a throwaway, less fine when investors are in the room.',
  },
  {
    title: 'Using a Series-B model for a pre-seed problem',
    description: 'Paying for a frontier model when a small one would do — and burning runway on inference your customers do not feel.',
  },
  {
    title: 'No evals, no observability',
    description: 'Shipping AI features with no way to tell when they degrade or how much they cost per request. Then panicking.',
  },
  {
    title: 'Bolting AI onto the wrong feature',
    description: 'Adding a chat interface because a competitor did, rather than starting where AI actually moves a metric.',
  },
  {
    title: 'Going all-in on one model',
    description: 'Treating one provider as a permanent partner. The right answer is usually a thin abstraction and the freedom to swap.',
  },
]

export default function AIPlaybook() {
  return (
    <div className="min-h-screen">
      <FAQJsonLd faqs={AI_PLAYBOOK_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'AI Integration Playbook', href: '/ai-playbook' },
        ]}
      />
      {/* ============ HERO ============ */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-offwhite">
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">
              Free playbook · 13 pages
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Build with AI{' '}
              <span className="font-editorial italic">without building a monster</span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-satoshi leading-relaxed max-w-xl mx-auto mb-10">
              A practical guide to planning, designing and shipping with AI. The workflow we use ourselves at SmplCo to keep AI builds from going off the rails.
            </p>
            <img
              src="/images/ai-playbook-mockup.jpg"
              alt="Build with AI without building a monster — free SmplCo playbook"
              className="w-56 md:w-64 mx-auto rounded-xl shadow-2xl mb-10"
            />
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Get the free playbook
            </a>
          </div>
        </div>
      </section>

      {/* ============ WEBINAR CALLOUT ============ */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto bg-lime text-gray-900 rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-2">Live with us</p>
                <p className="text-lg font-bold leading-tight">Wed 29 April · 12:00 BST</p>
                <p className="text-sm text-gray-700 mt-1">Online · Free · Recording sent to all registrants</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-base font-medium mb-3">
                  Andreas and Mike walk through the full playbook live at the Barclays Eagle Labs webinar — with Q&amp;A.
                </p>
                <a
                  href="https://labs.uk.barclays/events/effectively-integrate-ai-into-your-product/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Register for the webinar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                The workflow,{' '}
                <span className="font-editorial italic">top to bottom</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                Plan → Figma → Claude Design → Claude Code → GitHub → Deploy. The same flow we use ourselves on every project. Built from 125+ products shipped and refined every week. Recognised by Figma as a global exemplar of AI-assisted development.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((item) => (
              <div key={item.number} className="bg-offwhite rounded-2xl p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-lime rounded-full text-xs font-semibold mb-4">
                  Stage {item.number}
                </span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-satoshi leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMON MISTAKES ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                The mistakes we see{' '}
                <span className="font-editorial italic">every week</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                Six predictable patterns that turn an AI investment into a budget drain. The playbook covers how to spot and avoid each one.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {commonMistakes.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5">
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-satoshi">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD / LEAD CAPTURE ============ */}
      <section id="download" className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Get the free{' '}
                <span className="font-editorial italic">playbook</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                13 pages. No fluff. The actual workflow Andreas and Mike use with the founders and product teams they work with every day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The full workflow: Plan → Figma → Claude Design → Claude Code → Deploy</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The one-page brief that saves you a week of "nearly there"</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The boring infrastructure checklist nobody else writes about</span>
                </div>
              </div>
            </div>
            <AIPlaybookForm />
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Need a second opinion on{' '}
                <span className="font-editorial italic">your AI bet?</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                Book a free 30-minute call with Andreas and Mike. No pitch — just a sanity check on what you're building, where the cost is going, and whether the AI part is doing the work it's meant to.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Book a Free Call
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-200 text-gray-900 text-xs font-medium rounded-full hover:bg-gray-50 transition-colors"
                >
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Say hello</p>
              <h3 className="text-lg font-semibold mb-1">Andreas &amp; Mike</h3>
              <p className="text-sm text-gray-500 font-satoshi mb-1">Co-founders, SmplCo</p>
              <a
                href="mailto:hello@smpl.as"
                className="text-sm text-gray-900 font-medium underline decoration-lime decoration-2 underline-offset-4"
              >
                hello@smpl.as
              </a>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/smplcoas/"
                    className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <Link href="/blog" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                  <Link href="/about" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
