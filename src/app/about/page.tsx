import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ShimmerGrid from '@/components/ShimmerGrid'
import TailoredTabs from '@/components/TailoredTabs'
import { FAQJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About Us – Digital Product Studio',
  description: 'We\'re a team of global entrepreneurs who\'ve built, sold, and invested in digital companies. Meet the SmplCo team.',
  alternates: { canonical: 'https://smpl.as/about' },
  openGraph: {
    title: 'About Us – Digital Product Studio',
    description: 'We\'re a team of global entrepreneurs who\'ve built, sold, and invested in digital companies.',
    url: 'https://smpl.as/about',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Meet the SmplCo team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Digital Product Studio',
    description: 'We\'re a team of global entrepreneurs who\'ve built, sold, and invested in digital companies.',
    images: ['/images/og-default.png'],
  },
}

const teamMembers = [
  { name: 'Andreas Melvær', role: 'Managing Director', photo: '/images/team/andreas-melvaer.jpg' },
  { name: 'Lasse Andresen', role: 'Partner & Unicorn Tech Developer', photo: '/images/team/lasse-andresen.jpg' },
  { name: 'Jingjing Li', role: 'UI/UX Design & Data Science', photo: '/images/team/jingjing-li.jpg' },
  { name: 'Michael Millar', role: 'Partner & Brand Strategist', photo: '/images/team/michael-millar.png' },
  { name: 'Giorgiana Mihaela Bejan', role: 'UI/UX Design', photo: '/images/team/giorgiana-bejan.jpg' },
  { name: 'Bjørn Ivar Knudsen', role: 'Partner & SaaS Expert', photo: '/images/team/bjorn-knudsen.jpg' },
  { name: 'Leonardo Hernandez', role: 'UI/UX Design Lead', photo: '/images/team/leonardo-hernandez.jpg' },
  { name: 'Andras Toth', role: 'Partner & Head of Development', photo: '/images/team/andras-toth.png' },
  { name: 'Jeanne Irina Knudsen', role: 'UI/UX Design & Game Design', photo: '/images/team/jeanne-knudsen.jpg' },
  { name: 'Stian Selland', role: 'Partner & Martech Expert', photo: '/images/team/stian-selland.jpg' },
  { name: 'Dag Andreas Olsen', role: 'Business Expert', photo: '/images/team/dag-andreas-olsen.jpg' },
  { name: 'Axel Thoma', role: 'Business Strategist (CH)', photo: '/images/team/axel-thoma.jpg' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <FAQJsonLd faqs={[
        { question: 'What is SmplCo?', answer: 'SmplCo is a digital product studio that helps startups and enterprises prototype and build smart digital products in weeks using AI and no-code tools. Founded by a team of global entrepreneurs who have built, sold, and invested in digital companies, including a $3bn tech unicorn.' },
        { question: 'What is the 5-Day Prototype?', answer: 'The 5-Day Prototype is SmplCo\'s signature service that transforms your idea into a high-fidelity, clickable prototype in just five days. It reduces risk, lays foundations for rapid MVP development, saves cost, and aligns all stakeholders with clear visibility.' },
        { question: 'How does the SmplCo process work?', answer: 'SmplCo\'s process has four stages: (1) Talk to us — a free consultation to understand your vision and goals; (2) 5-Day Prototype — transform your idea into a clickable prototype; (3) Product Development — design and build your MVP with our Design-as-a-Service team and development partners; (4) Launch — go-to-market strategy and rollout support.' },
        { question: 'How much does the 5-Day Prototype cost?', answer: 'The 5-Day Prototype starts at £8,100. Barclays Eagle Labs members receive an exclusive 25% discount, bringing the price to £6,075. Contact us for a free consultation to discuss your specific needs.' },
      ]} />
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-44 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/About Us.png"
            alt="About SmplCo — digital product studio"
            width={700}
            height={400}
            className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[560px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* ============ ABOUT INTRO ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <h1 className="text-3xl md:text-4xl font-bold">About</h1>
            <div>
              <p className="text-lg text-gray-600 font-satoshi italic mb-6">
                &ldquo;Let&apos;s have the right conversations after 5 days, not 5 months…&rdquo;
              </p>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                We&apos;re a team of global entrepreneurs who&apos;ve built, sold, and invested in
                digital companies. We knew innovators like us needed a faster, safer, smarter way
                to get ideas to market. <strong>SmplCo</strong> is that way, built on hard-earned
                experience and a dash of Google Ventures magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR TEAM ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6">
              <Image src="/images/illustrations/smplco-illustration-high-five.png" alt="Team high-five illustration" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="font-editorial italic">Our</span>
                  <br />
                  Team
                </h2>
              </div>
            </div>
            <p className="text-gray-600 font-satoshi text-center max-w-2xl mx-auto mb-16">
              We&apos;re a group of digital experts from the four corners of the globe, who are deeply
              passionate about bringing Big Ideas to life and making magic happen
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${member.role} at SmplCo`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-gray-500 text-xs font-satoshi">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TALK TO US ============ */}
      <section className="pt-16 md:pt-24 pb-0">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  <span className="font-editorial italic">Talk</span>
                  <br />
                  to us
                </h2>
              </AnimateOnScroll>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                Every great product starts with a conversation. We dive into your vision,
                challenges, and goals, collaborating through discussions and workshops to turn
                ideas into a solid concept, laying the groundwork for what&apos;s next.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/illustrations/smplco-illustration-ideas-investors.png" alt="Ideas meeting investors illustration" width={600} height={600} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5 DAY PROTOTYPE ============ */}
      <section className="py-0">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  <span className="font-editorial italic">5 Day</span>
                  <br />
                  Prototype
                </h2>
              </AnimateOnScroll>
              <p className="text-gray-600 font-satoshi leading-relaxed mb-6">
                In just five days, we transform your idea into a high-fidelity, clickable
                prototype that is ready to wow stakeholders and investors. You benefit from:
              </p>
              <ul className="space-y-2">
                {[
                  'Risk reduction: test and validate ideas early',
                  'Speed: lay foundations for rapid MVP development',
                  'Cost efficiency: learn fast without big investment',
                  'Alignment: all stakeholders have clear visibility',
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2 font-satoshi">
                    <span className="text-gray-700 mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image src="/images/illustrations/smplco-illustration-ui-components.png" alt="UI components illustration" width={600} height={600} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT DEVELOPMENT ============ */}
      <section className="py-0">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image src="/images/illustrations/smplco-illustration-code-development.png" alt="Code development illustration" width={600} height={600} className="w-full" />
            </div>
            <div>
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  <span className="font-editorial italic">Product</span>
                  <br />
                  Development
                </h2>
              </AnimateOnScroll>
              <p className="text-gray-600 font-satoshi leading-relaxed mb-4">
                First, our ultra-lean Design as a Service gives you the expert resources you need to
                design your MVP, when you need them. You get a full design team for the cost of a
                single designer. You avoid the confusion, delays, cost — and stress! — that dog
                most digital projects.
              </p>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                Next, we partner with highly skilled developers to transform your prototype into a
                functional product. Our network of experienced, AI-powered engineers ensures a
                smooth and efficient development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ READY SET LAUNCH ============ */}
      <section className="py-0">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image src="/images/illustrations/smplco-illustration-space-astronaut.png" alt="Astronaut illustration representing launching digital products" width={600} height={600} className="w-full" />
            </div>
            <div>
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  <span className="font-editorial italic">Ready, set</span>
                  <br />
                  Launch
                </h2>
              </AnimateOnScroll>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                With deep expertise in business and SaaS entrepreneurship, we help position your
                product for a successful launch — from refining your go-to-market strategy, to
                ensuring a smooth rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT MARKETING ============ */}
      <section className="pb-16 md:pb-24 pt-0">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image src="/images/illustrations/smplco-illustration-mobile-app.png" alt="Mobile app development illustration" width={600} height={600} className="w-full" />
            </div>
            <div>
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  <span className="font-editorial italic">Product</span>
                  <br />
                  Marketing
                </h2>
              </AnimateOnScroll>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                A great product deserves great marketing. We create high-quality websites, compelling
                videos (ads, product demos, investor pitches), and a full suite of marketing materials
                to showcase your product in the best light — whether it&apos;s a simple flyer or an
                expansive campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE PLANS ============ */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
              <Image src="/images/illustrations/smplco-illustration-signpost.png" alt="Signpost illustration" width={120} height={120} className="shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="font-editorial italic">The</span>
                  <br />
                  Plans
                </h2>
              </div>
            </div>
          </AnimateOnScroll>
          <TailoredTabs />
        </div>
      </section>
    </div>
  )
}
