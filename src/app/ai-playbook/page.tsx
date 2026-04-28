import type { Metadata } from 'next'
import Link from 'next/link'
import AIPlaybookForm from '@/components/AIPlaybookForm'
import { FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

const AI_PLAYBOOK_FAQS = [
  {
    question: 'What is the AI Integration Playbook?',
    answer:
      'The AI Integration Playbook is a free 6-page guide from SmplCo that walks founders and product teams through a four-stage framework for adding AI to a product without burning cash. It covers picking the right strategy for your stage, prioritising where to apply AI, building with governance and guardrails, and turning AI from a budget drain into a strategic asset.',
  },
  {
    question: 'Who should read it?',
    answer:
      'Founders, product leaders, and CTOs at startups and scale-ups who are either thinking about their first AI feature or looking to make existing AI investments work harder. The playbook is also useful for innovation teams inside enterprises evaluating where to apply AI in customer-facing products.',
  },
  {
    question: 'Is it really free?',
    answer:
      'Yes. The playbook is a free download in exchange for an email address. No paywall, no upsell. We use the email to send you the PDF and occasionally let you know about new resources. You can unsubscribe at any time.',
  },
  {
    question: 'Is there a webinar that goes with it?',
    answer:
      'Yes. Andreas Melvær and Michael Millar are running a free Barclays Eagle Labs webinar on Wednesday 29 April at 12:00 BST that walks through the playbook live with Q&A. Register at labs.uk.barclays/events/effectively-integrate-ai-into-your-product. The recording is sent to all registrants.',
  },
  {
    question: 'Does SmplCo help teams integrate AI?',
    answer:
      'Yes. AI integration is part of every engagement we run, from 5-Day Prototypes through to ongoing Product Design as a Service. We have helped 125+ products use AI in production, and we are recognised by Figma as a global exemplar of AI development. Book a free 30-minute call at smpl.as/book to discuss your specific situation.',
  },
]

export const metadata: Metadata = {
  title: 'AI Integration Playbook — Free Guide',
  description:
    'A 6-page playbook for founders and product teams on integrating AI without burning cash. Right strategy for your stage, where to apply it, governance, and cost discipline.',
  alternates: { canonical: 'https://smpl.as/ai-playbook' },
  openGraph: {
    title: 'AI Integration Playbook — Free Guide',
    description:
      'A 6-page playbook for founders on integrating AI without burning cash. Right strategy for your stage, where to apply it, governance, and cost discipline.',
    url: 'https://smpl.as/ai-playbook',
    siteName: 'SmplCo',
    type: 'website',
    images: [
      {
        url: '/images/ai-playbook-promo.png',
        width: 1200,
        height: 630,
        alt: 'AI Integration Playbook — A 4-Stage Framework for Product Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integration Playbook — Free Guide',
    description:
      'A 6-page playbook for founders on integrating AI without burning cash.',
    images: ['/images/ai-playbook-promo.png'],
  },
}

const stages = [
  {
    number: '01',
    title: 'The right strategy for your stage',
    description:
      'Pre-seed, seed, Series A, scale-up, enterprise — each has a different AI playbook. Most failures are people copying the wrong stage.',
  },
  {
    number: '02',
    title: 'Where AI actually creates value',
    description:
      'The 80/20 of where AI pays back. A practical filter to score any feature for AI fit, and the patterns to avoid.',
  },
  {
    number: '03',
    title: 'Governance, guardrails, scalability',
    description:
      'The bit founders skip until something embarrassing happens in production. Lightweight evals, observability, and cost ceilings.',
  },
  {
    number: '04',
    title: 'AI as an asset, not a budget drain',
    description:
      'Caching, smaller models, batch and async patterns, in-house vs API, and the metrics that actually tell you whether your AI is earning its keep.',
  },
]

const commonMistakes = [
  {
    title: 'Bolting AI onto the wrong feature',
    description: 'Adding a chat interface because a competitor did, instead of starting with the place AI actually moves a metric.',
  },
  {
    title: 'Using a Series-B model for a pre-seed problem',
    description: 'Paying for a frontier model when a small fine-tuned one would do — and burning runway on inference.',
  },
  {
    title: 'No evals, no observability',
    description: 'Shipping AI features with no way to tell when they degrade or how much they cost per request. Then panicking.',
  },
  {
    title: 'Confusing AI usage with AI value',
    description: 'Measuring tokens consumed instead of business outcomes. The result is a budget drain that looks like progress.',
  },
  {
    title: 'Waiting for the perfect moment',
    description: 'Watching the market move while your team debates infrastructure. Six months of focus is the most expensive thing you can spend.',
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
              Free guide for founders &amp; product teams
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              The AI Integration{' '}
              <span className="font-editorial italic">Playbook</span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-satoshi leading-relaxed max-w-xl mx-auto mb-10">
              How to turn AI from a risky expense into a real product advantage. A four-stage framework for picking what to build, where, and when — without burning cash.
            </p>
            <img
              src="/images/ai-playbook-promo.png"
              alt="The AI Integration Playbook — a 4-stage framework for product teams"
              className="w-48 md:w-56 mx-auto rounded-xl shadow-2xl mb-10"
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
                The four-stage{' '}
                <span className="font-editorial italic">framework</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                The same framework SmplCo uses with founders and innovation teams. Built from 125+ products shipped and refined every week. Recognised by Figma as a global exemplar of AI-assisted development.
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
                <span className="font-editorial italic">AI Playbook</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                6 pages. No fluff. The same framework Andreas and Mike use with the founders and product teams they work with every day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The four-stage framework, applied stage by stage</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">A practical filter for scoring features for AI fit</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The cost levers that turn AI into a real moat, not a line item</span>
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
