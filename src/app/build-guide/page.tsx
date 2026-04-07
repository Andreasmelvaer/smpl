import type { Metadata } from 'next'
import Link from 'next/link'
import BuildGuideForm from '@/components/BuildGuideForm'

export const metadata: Metadata = {
  title: 'Build Your Own Internal Tools — Free Guide | SmplCo',
  description: 'Free practical guide to building internal tools with Claude Code, Figma, and modern web tech. Stop paying for platforms you only use 10% of.',
  alternates: { canonical: 'https://smpl.as/build-guide' },
  openGraph: {
    title: 'Build Your Own Internal Tools — Free Guide | SmplCo',
    description: 'Free practical guide to building internal tools with Claude Code, Figma, and modern web tech. Stop paying for platforms you only use 10% of.',
    url: 'https://smpl.as/build-guide',
    siteName: 'SmplCo',
    type: 'website',
  },
}

const guideContents = [
  {
    number: '01',
    title: 'Why Build Your Own?',
    description: 'The real cost of SaaS sprawl — paying for a thousand features and using forty. Why the economics have shifted.',
  },
  {
    number: '02',
    title: "What's Easy to Build",
    description: 'CRMs, task planners, dashboards, email tools, admin panels — what takes days vs. weeks, and what to avoid.',
  },
  {
    number: '03',
    title: 'The Stack',
    description: 'Supabase, Next.js, Vercel, and an AI coding assistant. What you need, what it costs, and how it fits together.',
  },
  {
    number: '04',
    title: 'Figma for Your Style Guide',
    description: 'Setting up a basic design system — colors, typography, components. Keep your tools looking professional with minimal effort.',
  },
  {
    number: '05',
    title: 'Building with Claude Code',
    description: 'How to prompt effectively, what to build first, and how to iterate. The boring parts write themselves.',
  },
]

const easyToBuild = [
  { tool: 'Simple CRM', time: '1–2 weeks', description: 'Contact tracking, pipeline stages, activity log' },
  { tool: 'Task planner', time: '1 week', description: 'Team scheduling linked to clients or projects' },
  { tool: 'Newsletter tool', time: '1 week', description: 'Templates, send tracking, subscriber management' },
  { tool: 'Internal dashboard', time: '2–3 days', description: 'KPIs, charts, real-time data from your APIs' },
  { tool: 'Landing page generator', time: '1 week', description: 'AI-generated pages deployed at custom URLs' },
  { tool: 'Admin panel', time: '2–3 days', description: 'Manage content, users, or settings for any app' },
  { tool: 'Client portal', time: '1–2 weeks', description: 'Shared project status, files, and communication' },
  { tool: 'Reporting with API integrations', time: '1–2 weeks', description: 'Pull data from Meta, Google, Stripe — one dashboard' },
]

const watchOuts = [
  'Scope creep — build what you need, nothing more',
  'Maintenance is on you — keep it simple',
  'Start with one tool, not five',
  'Use proper auth and never store secrets in code',
  "Don't rebuild payment processing, accounting, or compliance tools",
  'First version won\'t be perfect — that\'s fine, iterate',
]

export default function BuildGuide() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-offwhite">
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Free guide for teams &amp; founders</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Build your own{' '}
              <span className="font-editorial italic">internal tools</span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-satoshi leading-relaxed max-w-xl mx-auto mb-10">
              A practical guide to replacing SaaS bloat with tools that actually fit how you work. Using Claude Code, Figma, and a modern web stack.
            </p>
            <img
              src="/images/smpl_buil_your_own_promo.jpg"
              alt="Build Your Own Internal Tools guide"
              className="w-48 md:w-56 mx-auto rounded-xl shadow-2xl mb-10"
            />
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Get the free guide
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                What&apos;s inside<br />
                <span className="font-editorial italic">the guide</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                We built our own CRM, newsletter tool, task planner, and Meta Ads integration. This guide shares what we learned — what worked, what to avoid, and how to get started.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideContents.map((item) => (
              <div key={item.number} className="bg-offwhite rounded-2xl p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-lime rounded-full text-xs font-semibold mb-4">{item.number}</span>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-satoshi leading-relaxed">{item.description}</p>
              </div>
            ))}
            <a
              href="#download"
              className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center hover:bg-gray-800 transition-colors"
            >
              <span className="text-2xl mb-3">&#8595;</span>
              <span className="text-sm font-semibold">Download the full guide</span>
              <span className="text-xs text-gray-400 mt-1">Free — no strings attached</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S EASY TO BUILD ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                What&apos;s actually{' '}
                <span className="font-editorial italic">easy to build</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                These used to require a dev team and months of work. With AI coding tools, most of them take days or weeks — and they&apos;ll fit your workflow better than any off-the-shelf platform.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {easyToBuild.map((item) => (
              <div key={item.tool} className="flex items-start gap-4 bg-white rounded-xl p-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-sm font-semibold">{item.tool}</h3>
                    <span className="inline-block px-2 py-0.5 bg-lime rounded-full text-xs font-medium">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-satoshi">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT TO WATCH OUT FOR ============ */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                What to{' '}
                <span className="font-editorial italic">watch out for</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                Building your own tools is easier than it used to be. That doesn&apos;t mean it&apos;s free of tradeoffs. The guide covers these in detail.
              </p>
            </div>
            <div className="space-y-3">
              {watchOuts.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-offwhite rounded-xl p-4">
                  <span className="w-5 h-5 rounded-md bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5-DAY PLAN ============ */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: '#ffffff' }}>
                Get started in{' '}
                <span className="font-editorial italic">5 days</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-satoshi leading-relaxed">
                You don&apos;t need to rip out everything at once. Start with one tool, the one that&apos;s most painful or most wasteful. Here&apos;s a week-long plan.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { day: '1', title: 'Audit', description: 'What tools do you use? What do you actually need? What\'s annoying?' },
              { day: '2', title: 'Pick one', description: 'Choose the most painful or wasteful tool. That\'s your first build.' },
              { day: '3', title: 'Set up', description: 'Supabase + Next.js + Vercel. Design the data model. Get the stack running.' },
              { day: '4', title: 'Build', description: 'Build the core feature. Use AI to move fast. Don\'t over-think it.' },
              { day: '5', title: 'Ship', description: 'Test it with your team. Deploy it. Iterate next week.' },
            ].map((step) => (
              <div key={step.day} className="border border-gray-700 rounded-2xl p-6">
                <span className="flex w-8 h-8 bg-lime text-gray-900 rounded-full text-sm font-bold items-center justify-center mb-4">{step.day}</span>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#ffffff' }}>{step.title}</h3>
                <p className="text-sm text-gray-400 font-satoshi leading-relaxed">{step.description}</p>
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
                Get your free{' '}
                <span className="font-editorial italic">Build Guide</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                8 pages of practical advice on building internal tools with AI coding assistants and Figma. Based on what we actually built for ourselves.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">What&apos;s easy to build and realistic timelines</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The stack — Supabase, Next.js, Figma, Claude Code</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">What to watch out for — scope creep, maintenance, tradeoffs</span>
                </div>
              </div>
            </div>
            <BuildGuideForm />
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Want us to{' '}
                <span className="font-editorial italic">build it for you?</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                We&apos;ve built 125+ digital products for startups, scaleups, and global brands. If you want help building your own internal tools — or want us to do it — we&apos;re here.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Book a Free Consultation
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
              <h3 className="text-lg font-semibold mb-1">Andreas Melvær</h3>
              <p className="text-sm text-gray-500 font-satoshi mb-1">Co-founder, SmplCo</p>
              <a href="mailto:andreas@smpl.as" className="text-sm text-gray-900 font-medium underline decoration-lime decoration-2 underline-offset-4">
                andreas@smpl.as
              </a>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/smplcoas/" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
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
