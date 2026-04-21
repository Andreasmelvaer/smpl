import type { Metadata } from 'next'
import Link from 'next/link'
import AttentionGuideForm from '@/components/AttentionGuideForm'

export const metadata: Metadata = {
  title: 'Attention is New Gold — Free Guide | SmplCo',
  description: 'The founder\'s guide to brand & storytelling. 6 pages of practical frameworks — TRUTH, behavioural science, and 6 field lessons for cutting through the noise.',
  alternates: { canonical: 'https://smpl.as/attention-guide' },
  openGraph: {
    title: 'Attention is New Gold — Free Guide | SmplCo',
    description: 'The founder\'s guide to brand & storytelling. TRUTH storytelling, 8 behavioural science principles, 6 field lessons.',
    url: 'https://smpl.as/attention-guide',
    siteName: 'SmplCo',
    type: 'website',
    images: [
      {
        url: '/images/attention-guide-promo.png',
        alt: 'Attention Is New Gold — the founder\'s guide to brand & storytelling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://smpl.as/images/attention-guide-promo.png'],
  },
}

const guideContents = [
  {
    number: '01',
    title: 'Why Attention Matters More Than Ever',
    description: 'The average person encounters 4,000–10,000 brand messages a day. Why founders need a different approach to cut through.',
  },
  {
    number: '02',
    title: 'The Cornerstones of Brand Value',
    description: 'Valuable, Relevant, Differentiated, Trustworthy — why all four must compound before your brand has any real value.',
  },
  {
    number: '03',
    title: 'The TRUTH Framework',
    description: 'Topical, Relevant, Unusual, Trouble, Human — a storytelling framework you can run every piece of content through before it ships.',
  },
  {
    number: '04',
    title: '8 Behavioural Science Principles',
    description: 'Social Proof, Loss Aversion, Authority Bias, Reciprocity, Default Effect, Cognitive Fluency, Anchoring, Peak-End Rule — and how to combine them.',
  },
  {
    number: '05',
    title: '6 Field Lessons',
    description: 'From real brand-building: relevance beats reach, founder voice is an unfair advantage, story structure is a skill, consistency compounds, and more.',
  },
  {
    number: '06',
    title: 'Quick Reference',
    description: 'The TRUTH checklist, 8 behavioural principles, 6 lessons — plus the master formula for every story worth telling.',
  },
]

const truthFramework = [
  { letter: 'T', name: 'Topical', description: 'Connected to what matters right now — in the world, your industry, or your audience\'s daily life.' },
  { letter: 'R', name: 'Relevant', description: 'Speaks directly to your reader\'s real situation. Not about you — about what they\'re trying to solve.' },
  { letter: 'U', name: 'Unusual', description: 'Contains something surprising or counterintuitive. Predictable stories are forgettable stories.' },
  { letter: 'T', name: 'Trouble', description: 'Every great story has a problem at its centre. Without tension, there\'s little reason to keep reading.' },
  { letter: 'H', name: 'Human', description: 'Feature real people, real stakes, real emotion. The more specific and human, the more universal its appeal.' },
]

const behaviouralPrinciples = [
  { title: 'Social Proof', description: 'Lead with specific customer numbers and verbatim quotes.' },
  { title: 'Loss Aversion', description: 'Reframe around what they\'re losing by not acting.' },
  { title: 'Authority Bias', description: 'Earn and display authority signals — press, awards, advisors.' },
  { title: 'Reciprocity', description: 'Give genuine value before asking for anything.' },
  { title: 'Default Effect', description: 'Make the behaviour you want the path of least resistance.' },
  { title: 'Cognitive Fluency', description: 'Clarity signals competence. Complexity signals risk.' },
  { title: 'Anchoring', description: 'The first number shapes every subsequent judgement.' },
  { title: 'Peak-End Rule', description: 'Obsess over onboarding and the renewal/referral moment.' },
]

const lessons = [
  {
    number: '01',
    title: 'You Don\'t Have an Attention Problem, You Have a Relevance Problem',
    takeaway: 'Be unmissable to the right 1,000 people, not invisible to the wrong million.',
  },
  {
    number: '02',
    title: 'The Founder Voice Is an Unfair Advantage',
    takeaway: 'Write in your actual voice about things you actually believe. Safe content is invisible content.',
  },
  {
    number: '03',
    title: 'Story Structure Is a Skill, Not a Gift',
    takeaway: 'Most people think X, but I\'ve come to believe Y, which means Z.',
  },
  {
    number: '04',
    title: 'Consistency Beats Virality',
    takeaway: 'Define your minimum viable content commitment — what you can honestly sustain even in a bad week.',
  },
  {
    number: '05',
    title: 'The Medium Is Part of the Message',
    takeaway: 'Ask where your ideal customers are already paying attention voluntarily, not where they\'re being targeted.',
  },
  {
    number: '06',
    title: 'Distribution Is at Least Half the Work',
    takeaway: 'Most founders spend 90% on creation and 10% on distribution. It should be closer to 50/50.',
  },
]

export default function AttentionGuide() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-offwhite">
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">
              The founder&apos;s guide to brand &amp; storytelling
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Attention is{' '}
              <span className="font-editorial italic">new gold</span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-satoshi leading-relaxed max-w-xl mx-auto mb-10">
              How to make your brand and stories stand out in the most distracted era in human history. TRUTH storytelling, behavioural science, and 6 field lessons.
            </p>
            <img
              src="/images/attention-guide-promo.png"
              alt="Attention Is New Gold — the founder's guide to brand & storytelling"
              className="w-72 md:w-80 mx-auto rounded-xl shadow-2xl mb-10"
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
                We&apos;ve spent years helping founders and scale-ups build brands that people actually pay attention to. This guide is the practical distillation — the frameworks and lessons we use every day.
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

      {/* ============ TRUTH FRAMEWORK ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                The{' '}
                <span className="font-editorial italic">TRUTH</span>{' '}
                framework
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                Run every piece of content through TRUTH before it goes out. If it fails more than two of the five, rework it. The <strong>Tension test</strong> is the one most founders consistently fail.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {truthFramework.map((item) => (
              <div key={item.letter + item.name} className="flex items-start gap-4 bg-white rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center shrink-0 text-base font-bold">
                  {item.letter}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 font-satoshi">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEHAVIOURAL SCIENCE ============ */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                8 principles of{' '}
                <span className="font-editorial italic">behavioural science</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed">
                Customers don&apos;t make rational decisions. They make fast, intuitive ones — and then rationalise them afterwards. Understanding the cognitive shortcuts that drive behaviour is one of the highest-leverage things a founder can learn.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {behaviouralPrinciples.map((item, i) => (
              <div key={item.title} className="bg-offwhite rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-lime font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 font-satoshi">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6 LESSONS ============ */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: '#ffffff' }}>
                6{' '}
                <span className="font-editorial italic text-lime">field lessons</span>
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-400 font-satoshi leading-relaxed">
                The lessons that actually move the needle. Each one comes with a concrete takeaway you can act on this week.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {lessons.map((lesson) => (
              <div key={lesson.number} className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <span className="inline-block px-2.5 py-0.5 bg-lime text-gray-900 rounded-full text-[10px] font-semibold mb-3">{lesson.number}</span>
                <h3 className="text-base font-semibold mb-3" style={{ color: '#ffffff' }}>{lesson.title}</h3>
                <p className="text-sm text-gray-400 font-satoshi leading-relaxed italic">
                  &ldquo;{lesson.takeaway}&rdquo;
                </p>
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
                <span className="font-editorial italic">Attention Guide</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                6 pages of frameworks, principles, and lessons for building a brand that cuts through the noise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">The TRUTH storytelling framework</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">8 behavioural science principles that win customers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-satoshi text-gray-600">6 field lessons for founders &amp; scale-up leaders</span>
                </div>
              </div>
            </div>
            <AttentionGuideForm />
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Want us to help{' '}
                <span className="font-editorial italic">build your brand?</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                We work with founders and scale-ups to build brands, craft stories, and win attention that converts. If this guide sparked something, let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-200 text-gray-900 text-xs font-medium rounded-full hover:bg-gray-50 transition-colors"
                >
                  See Our Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Say hello</p>
              <h3 className="text-lg font-semibold mb-1">Michael Millar</h3>
              <p className="text-sm text-gray-500 font-satoshi mb-1">Partner &amp; Co-founder, SmplCo</p>
              <a href="mailto:mike@smpl.as" className="text-sm text-gray-900 font-medium underline decoration-lime decoration-2 underline-offset-4">
                mike@smpl.as
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
