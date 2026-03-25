import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PitchPrepForm from '@/components/PitchPrepForm'

export const metadata: Metadata = {
  title: 'Pitch Prep Guide — Free Fundraising Toolkit | SmplCo',
  description: 'Free guide to nail your investor pitch. Practical frameworks to brainstorm your key messages, tell an engaging story, and think like an investor.',
  alternates: { canonical: 'https://smpl.as/pitch-prep' },
  openGraph: {
    title: 'Pitch Prep Guide — Free Fundraising Toolkit | SmplCo',
    description: 'Free guide to nail your investor pitch. Practical frameworks to brainstorm your key messages, tell an engaging story, and think like an investor.',
    url: 'https://smpl.as/pitch-prep',
    siteName: 'SmplCo',
    type: 'website',
  },
}

const guideContents = [
  {
    number: '01',
    title: 'Brainstorm Your Key Messages',
    description: 'Nail down the key ingredients of an irresistible value proposition — problem, solution, unique value, customers, traction, and more.',
  },
  {
    number: '02',
    title: 'Prioritise What to Say',
    description: 'Structure the key sections for a full investor pitch deck. Know exactly what to include and what to leave out.',
  },
  {
    number: '03',
    title: 'Tell an Engaging Story',
    description: 'Bring your product or service to life. Demonstrate value and engage your audience with a compelling narrative.',
  },
  {
    number: '04',
    title: 'Think Like an Investor',
    description: 'Put yourself in an investor\'s shoes. A checklist of everything they want to know — from traction to team to revenue.',
  },
  {
    number: '05',
    title: 'Real World Success',
    description: 'Free advice from experts who\'ve helped companies raise millions (and raised billions themselves).',
  },
]

const roadmapSteps = [
  {
    number: '1',
    title: 'Getting your story ready',
    description: 'We prepare everything you need to be investment ready — business plans, investor decks, information memoranda, product prototypes, roadmaps, and data rooms.',
  },
  {
    number: '2',
    title: 'Asking the hard questions',
    description: 'We interrogate the financials, historic and projected, and ask the challenging questions investors will ask.',
  },
  {
    number: '3',
    title: 'Making approaches',
    description: 'Once investor-ready, we approach our network — HNW/UHNW individuals, syndicates, VCs, family offices, and private equity houses.',
  },
  {
    number: '4',
    title: 'With you all the way',
    description: 'End-to-end support until the investment is raised — attending investor meetings, liaison, and term sheet interrogation.',
  },
]

const testimonials = [
  {
    quote: 'Their ability to listen, communicate and transform complex ideas into reality meant that we came away from our project as very happy bunnies — especially as our prototype played a huge role in us securing investment.',
    name: 'Dr. Mark Cox',
    role: 'Co-founder, Orli',
  },
  {
    quote: 'I can confidently say that SmplCo are the best technical team I have ever worked with. No long briefing meetings, no need to learn jargon, and no question considered silly.',
    name: 'Tahani Carruthers',
    role: 'Founder, Venturleytics',
  },
  {
    quote: 'Smpl has done for us as the name implies — taken something complex and made it beautifully simple, helping us raise and helping us sell.',
    name: 'Kitty Harris',
    role: 'Enquip Energy',
  },
  {
    quote: 'Working with SmplCo is a dream start for anyone who wants to innovate.',
    name: 'Lene Koll',
    role: 'Founder, Compera',
  },
]

const investorChecklist = [
  'Have they immediately captured my attention?',
  'Is there a clearly defined customer problem?',
  'Is it clear how the proposed solution addresses this problem?',
  'Is there any proof anyone wants this? (evidence of traction)',
  'Is there a clear route to revenue?',
  'Is there a team with the right skills and experience?',
  'Have they articulated achievements and future milestones?',
  'Is their ask clear and specific?',
]

export default function PitchPrep() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-offwhite">
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Free guide for startups &amp; scaleups</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nail your{' '}
              <span className="font-editorial italic">investor pitch</span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-satoshi leading-relaxed max-w-xl mx-auto mb-10">
              Practical activities to help you focus on what investors want to hear, and how they want to hear it. Download the free Pitch Prep Guide Pack.
            </p>
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
                Five practical frameworks designed by experts who&apos;ve helped 125+ startups raise investment, build products, and land their first customers — including a team that founded and sold a $2.8bn cyber security unicorn.
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

      {/* ============ INVESTOR CHECKLIST ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Think like{' '}
                <span className="font-editorial italic">an investor</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                Before you pitch, put yourself in the investor&apos;s shoes. Here&apos;s what they want to know. The guide helps you nail every single one.
              </p>
            </div>
            <div className="space-y-3">
              {investorChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
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

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Don&apos;t{' '}
              <span className="font-editorial italic">just take our</span>{' '}
              word for it
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-offwhite rounded-2xl p-6 md:p-8">
                <p className="text-sm text-gray-600 font-satoshi leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ROAD TO INVESTMENT ============ */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                The road to{' '}
                <span className="font-editorial italic">investment</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-satoshi leading-relaxed">
                We specialise in fundraising for early-stage businesses. Tech is a significant focus, but we&apos;re sector-agnostic. Here&apos;s how we help.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step) => (
              <div key={step.number} className="border border-gray-700 rounded-2xl p-6">
                <span className="inline-block w-8 h-8 bg-lime text-gray-900 rounded-full text-sm font-bold flex items-center justify-center mb-4">{step.number}</span>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
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
                <span className="font-editorial italic">Pitch Prep</span>{' '}
                guide
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                10 pages of practical frameworks and activities to help you nail your investor pitch. Designed by a team that&apos;s helped 125+ startups and scaleups raise millions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">Brainstorm and prioritise your key messages</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">Tell a story that engages investors</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">Investor checklist — know what they want</span>
                </div>
              </div>
            </div>
            <PitchPrepForm />
          </div>
        </div>
      </section>

      {/* ============ CONTACT / ABOUT ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Need help with{' '}
                <span className="font-editorial italic">fundraising?</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                Our globally recognised, AI-assisted development process was designed by a team that has founded, built, and sold their own companies — including a $2.8bn cyber security unicorn. If you want to get to market and do it faster, cheaper, and with less risk than anyone else, we&apos;re here to help.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Book a Free Audit
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
              <h3 className="text-lg font-semibold mb-1">Michael Millar</h3>
              <p className="text-sm text-gray-500 font-satoshi mb-1">Partner, Client Fundraising</p>
              <a href="mailto:mike@smpl.as" className="text-sm text-gray-900 font-medium underline decoration-lime decoration-2 underline-offset-4">
                mike@smpl.as
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
