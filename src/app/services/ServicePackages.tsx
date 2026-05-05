'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShimmerGrid from '@/components/ShimmerGrid'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PackageItem {
  title: string
  items: string[]
}

interface ServicePackage {
  tier: string
  name: string
  delivery?: string
  tagline: string
  bestFor: string[]
  sections: PackageItem[]
  note?: string
}

interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  packages: ServicePackage[]
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PRODUCT_SECTION_IDS = ['prototype', 'pdaas']

const CATEGORIES: ServiceCategory[] = [
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'From first logo to full identity systems.',
    packages: [
      {
        tier: 'Essential',
        name: 'Brand Essentials',
        delivery: 'Approx 3–5 days',
        tagline: 'For early-stage brands that need a solid brand design fast.',
        bestFor: ['Small businesses', 'New projects & side ventures', 'MVP brands needing a polished starting point'],
        sections: [
          { title: 'Discovery & Direction', items: ['Brand direction check-in/kick-off meeting', 'Mood board & visual direction'] },
          { title: 'Logo & Identity Design', items: ['Logo concept exploration (2–3 directions)', 'Logo refinement & final lockup', 'Basic colour palette (primary + secondary)', 'Typography selection (heading + body pairing)'] },
          { title: 'File Preparation & Delivery', items: ['Logo file exports (SVG, PNG, EPS, PDF)', 'Core brand playbook (colours, fonts, logo usage)', 'File organisation & handoff'] },
          { title: 'Revisions', items: ['1 round of revisions', 'Final adjustments & sign-off'] },
        ],
      },
      {
        tier: 'Growth',
        name: 'Growth Branding',
        delivery: 'Approx 2–3 weeks',
        tagline: 'For brands that need a more bespoke, flexible identity system.',
        bestFor: ['Start-ups scaling up', 'Service businesses building credibility', 'Growing companies with multiple touchpoints', 'Rebrands with moderate scope'],
        sections: [
          { title: 'Discovery & Strategy', items: ['Brand direction check-in/kick-off', 'Competitive landscape review', 'Mood board & visual direction presentation'] },
          { title: 'Logo & Core Identity', items: ['Logo concept exploration (3–4 directions)', 'Logo refinement, variations & responsive lockups', 'Colour palette (primary, secondary, accent, neutrals)', 'Typography system (heading, body, accent)'] },
          { title: 'Brand Assets', items: ['Custom illustration style (1 direction + 3 spot illustrations)', 'Brand patterns/textures (2–3 patterns)', 'Curated stock image direction (mood + sourcing guidelines)', 'Custom icon set (8 icons)', 'Application examples (business card, social, email sig)'] },
          { title: 'Brand Guide', items: ['Complete brand guide document (8–12 pages)', 'Logo usage rules & clear space', 'Colour specs (HEX, RGB, CMYK)', 'Typography hierarchy & usage', "Do's and don'ts", 'File exports & organisation'] },
          { title: 'Revisions & Delivery', items: ['2 rounds of revisions', 'Revisions implementation', 'Final handoff & walkthrough'] },
          { title: 'Project Management', items: ['Status updates, async feedback, Slack/email', 'Mid-project check-in call', 'Final presentation & walkthrough'] },
        ],
      },
      {
        tier: 'Custom',
        name: 'Custom Branding',
        tagline: 'Fully tailored. Deliverables scoped after a discovery call.',
        bestFor: ['Established brands repositioning', 'Companies launching publicly', 'Premium products & services', 'Deeper rebrands requiring strategic depth'],
        sections: [
          { title: 'What to Expect', items: ['In-depth brand strategy & positioning, including naming & visual identities', 'Comprehensive competitive & audience research', 'Comprehensive visual identity system', 'Brand patterns & textures (beyond base scope)', 'Custom icon sets (beyond base scope)', 'Custom photography direction/image sourcing', 'Extended brand asset library', 'Detailed brand guidelines', 'Motion/animation direction', 'Digital-first systems that adapt across platforms', 'Multi-channel templates (e.g. social media)', 'Ongoing collaboration until launch', 'Dedicated creative lead throughout'] },
        ],
        note: 'Scope defined together based on your brand\'s unique needs, timeline, and complexity.',
      },
    ],
  },
  {
    id: 'websites',
    title: 'Websites',
    subtitle: 'Designed and built in-house. No external developer needed.',
    packages: [
      {
        tier: 'Essential',
        name: 'Essential Website',
        delivery: 'Approx 3–5 days',
        tagline: 'A bespoke, one-page site for brands that need to get online fast.',
        bestFor: ['Small businesses needing a web presence', 'New projects & MVPs', 'Personal brands & portfolios', 'Landing pages for product or service launches'],
        sections: [
          { title: 'Discovery & Planning', items: ['Kick-off call & brand direction check-in', 'Content structure & section planning', 'Hero, About, Services, Testimonials, Contact, Footer'] },
          { title: 'Design', items: ['Wireframe/layout planning (all sections)', 'Visual design — full page, desktop', 'Mobile responsive design adaptation', 'Asset sourcing & integration'] },
          { title: 'Build', items: ['Full page build with all sections', 'Responsive implementation (tablet + mobile)', 'Interactions & scroll animations', 'Contact form setup', 'SEO & AEO optimised'] },
          { title: 'Content & Launch', items: ['Content placement, copy formatting & image optimisation', 'Domain connection & hosting setup', 'Cross-browser & device testing'] },
          { title: 'Revisions', items: ['1 round of design/build revisions', 'Final QA & go-live'] },
        ],
        note: 'Option: Add content/messaging creation for a more comprehensive package.',
      },
      {
        tier: 'Growth',
        name: 'Growth Website',
        delivery: 'Approx 1–2 weeks',
        tagline: 'A comprehensive 5-page website, conversion-ready and built to grow.',
        bestFor: ['Start-ups ready to level up', 'Service businesses driving leads', 'Growing companies with multiple offerings', 'Rebrands needing a full digital refresh'],
        sections: [
          { title: 'Discovery & Strategy', items: ['Kick-off call check-in', 'Sitemap, user flows & content hierarchy for 5 pages'] },
          { title: 'Pages Included', items: ['Homepage — hero, value prop, services preview, testimonials, CTA', 'About — story, team, mission/values', 'Services — offerings breakdown, pricing or packages', 'Contact — form, location/map, socials', 'Blog or Portfolio — listing page with CMS'] },
          { title: 'Design', items: ['Wireframes for all 5 pages', 'Visual design — homepage (desktop)', 'Visual design — 4 inner pages (desktop)', 'Mobile responsive design pass (all pages)'] },
          { title: 'Build', items: ['Component system & global styles setup', 'Homepage + 4 inner page builds', 'CMS setup — blog or portfolio collection', 'Interactions, hover states & scroll animations', 'Contact form & integrations (email, analytics)', 'SEO setup (meta tags, sitemap, OG images, structured data)'] },
          { title: 'Content & QA', items: ['Content placement, formatting & image optimisation', 'Cross-browser & multi-device testing', 'Performance audit & optimisation'] },
          { title: 'Revisions & Launch', items: ['2 rounds of design/build revisions', 'Revision implementation', 'Domain, DNS & go-live'] },
          { title: 'Project Management', items: ['Status updates', 'Mid-project review call', 'Launch walkthrough & editor handoff'] },
        ],
        note: 'Option: Add expert messaging/content creation for a more comprehensive package.',
      },
      {
        tier: 'Custom',
        name: 'Premium Website',
        tagline: 'Fully tailored. Platform, scope, and timeline defined after a discovery call.',
        bestFor: ['Established brands with complex requirements', 'Companies launching publicly', 'E-commerce or content-heavy platforms', 'Products needing custom functionality'],
        sections: [
          { title: 'What to Expect', items: ['In-depth UX/UI strategy & user research', 'Custom design system & component library', 'Unlimited pages scoped to your needs', 'Advanced interactions, animations & transitions', 'CMS architecture for complex content models', 'Third-party integrations (analytics, CRM, payments)', 'Performance optimisation & accessibility audit', 'Ongoing revisions until launch', 'Dedicated creative lead throughout'] },
        ],
        note: 'Platform: Next.js, Framer, or custom — based on project needs.',
      },
    ],
  },
  {
    id: 'decks',
    title: 'Investor Pitch & Sales Decks',
    subtitle: 'Designed in Figma. Delivered as editable files + PDF.',
    packages: [
      {
        tier: 'Essential',
        name: 'Essential Deck',
        delivery: 'Approx 2–3 days',
        tagline: 'A high-quality, on-brand deck using our proven methodology.',
        bestFor: ['Founders preparing investor pitches', 'Sales teams needing a polished deck', 'Small businesses presenting capabilities', 'Internal team presentations'],
        sections: [
          { title: 'Discovery & Direction', items: ['Kick-off call — deck purpose, audience & key message', 'Content outline & slide structure planning'] },
          { title: 'Slide Design', items: ['13 custom-designed slides using proven pitch methodology:', 'Cover, Problem, Solution, Product overview, How it works', 'Market analysis, Business model, Traction & social proof', 'Competition, Team, Projections, The Ask, Contact', 'Icon & image sourcing/integration'] },
          { title: 'File Prep & Delivery', items: ['Figma file cleanup & component organisation', 'PDF export (presentation-ready)'] },
          { title: 'Revisions', items: ['1 round of revisions', 'Final adjustments & sign-off'] },
        ],
        note: 'Optional: Add messaging & narrative creation for a more comprehensive package.',
      },
      {
        tier: 'Growth',
        name: 'Growth Deck',
        delivery: 'Approx 1–2 weeks',
        tagline: 'Full visual system and narrative tailored by our content experts.',
        bestFor: ['Start-ups and scale-ups raising funding', 'Companies pitching to enterprise clients', 'Brand launches & product reveals', 'Conference or keynote presentations'],
        sections: [
          { title: 'Discovery & Strategy', items: ['Kick-off call — goals, audience, narrative arc', 'Competitive deck review (2–3 references)', 'Content outline, messaging hierarchy & slide map'] },
          { title: 'Slide Design', items: ['Bespoke slides tailored to your brand (up to 15)', 'Full proven methodology slide set', 'Custom illustrations, diagrams, or infographics (2–3)'] },
          { title: 'Content Refinement', items: ['Copy editing & messaging tightening', 'Visual storytelling flow review'] },
          { title: 'File Prep & Delivery', items: ['Figma file cleanup & organised components', 'PDF export (presentation-ready)', 'Speaker notes'] },
          { title: 'Revisions', items: ['2 rounds of revisions', 'Final adjustments & sign-off'] },
        ],
      },
    ],
  },
  {
    id: 'video',
    title: 'Video & Animation',
    subtitle: 'Bring your story to life on screen.',
    packages: [
      {
        tier: 'Essential',
        name: 'Video Essentials',
        tagline: 'A screen recording of your product with a crafted narrative — fast and effective.',
        bestFor: ['Founders needing a quick explainer', 'Products with a strong visual flow', 'Pitch support & investor follow-ups', 'Social media & landing page content'],
        sections: [
          { title: 'What You Get', items: ['Narrative writing & scripting', 'Storyboarding', 'Screen recording of your prototype or product', 'Professional editing & pacing', 'Optimised for under 1 minute (recommended)'] },
          { title: 'The Upside', items: ['Cheaper and faster than motion graphics', 'Still lets you tell an engaging, visual story', 'Perfect for products with a clear user flow'] },
          { title: 'The Downside', items: ['Not as dynamic as animation or live footage', 'Works best when the product UI is visually strong'] },
        ],
      },
      {
        tier: 'Premium',
        name: 'Oscar Winners',
        tagline: 'Animation, film, and AI — combined for maximum impact.',
        bestFor: ['Start-ups raising funding', 'Product launches needing a wow factor', 'Brands wanting premium, polished content', 'Conference & keynote presentations'],
        sections: [
          { title: 'We Combine', items: ['Animation (motion graphics)', 'Stock film footage & bespoke shots (filmed by us)', 'Carefully crafted AI film (no AI slop)', 'Screen recordings where appropriate'] },
          { title: 'The Upside', items: ['Fully polished, dynamic, and engaging', 'High-end look that builds trust', 'Complete creative freedom — the world is your oyster'] },
          { title: 'The Downside', items: ['Takes longer and requires multiple skillsets', 'More expensive than screen recordings', 'Needs a clear brief and creative direction'] },
          { title: 'Approaches We\'ve Used', items: ['Benefits-led software explainers (mix of live footage, screenshots & animation)', 'Fully AI-generated film (dystopian metaphor for real-world problems)', 'Purpose-led narratives (motion graphics + stock footage for social impact)', 'Short & punchy product demos (animated graphics + platform shots)', 'Live footage storytelling (real people + screen recordings)', 'Cartoon-style character animation for apps', 'Cut-out / paper craft animation for social media'] },
        ],
        note: 'We\'ll share examples and discuss approaches in a discovery call.',
      },
    ],
  },
  {
    id: 'prototype',
    title: '5-Day Prototype',
    subtitle: 'Nail your vision. Align stakeholders. Land funding.',
    packages: [
      {
        tier: 'Flagship',
        name: '5-Day Prototype',
        delivery: '5 days',
        tagline: 'A clickable, hi-res prototype of your idea — in one week.',
        bestFor: ['Founders validating an idea', 'Teams pitching to investors or stakeholders', 'Companies exploring a new product direction', 'Anyone who needs to show, not tell'],
        sections: [
          { title: 'What You Get', items: ['Half-day online workshop to nail down the best version of your idea', 'Mid-week touchdown meeting with live changes', 'Handover meeting on day 5 with final live changes', 'Clickable prototype optimised for mobile or desktop', 'Based on the core flow that defines your central offer', 'Delivered as a Figma file and project', 'All design elements for consistent brand use'] },
          { title: 'Terms', items: ['All IP generated is owned by you', 'Full confidentiality & non-compete', 'Payment within 28 days of completion'] },
        ],
      },
    ],
  },
  {
    id: 'pdaas',
    title: 'Product Design as a Service',
    subtitle: 'Ongoing, flexible access to a full product team.',
    packages: [
      {
        tier: 'Retainer',
        name: 'Product Design as a Service',
        tagline: 'A multi-disciplinary team on tap — without the full-time commitment.',
        bestFor: ['Companies needing ongoing product design', 'Teams without in-house design leadership', 'Products scaling from prototype to production', 'Businesses needing developer collaboration'],
        sections: [
          { title: 'Your Team Includes', items: ['UI/UX experts for user flows, usability & aesthetics', 'Senior product strategists who\'ve built, scaled & exited', 'Technology leaders ensuring strategic alignment'] },
          { title: 'What We Do', items: ['Lead both designers and developers', 'Build design systems & component libraries in Figma', 'Ensure smooth developer handoff', 'Help select and onboard the right developers', 'User testing and interviews', 'SaaS collateral: landing pages, ads, explainers, reels', 'Weekly progress reviews with your product lead'] },
          { title: 'Terms', items: ['All designs and solutions belong entirely to you', 'Full confidentiality', 'Flexible hours per month (specified in contract)'] },
        ],
        note: 'No VAT required. Hours allocated flexibly across design, strategy, and dev collaboration.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Custom Business Tools',
    subtitle: 'Stop paying for software that does 10% of what you need.',
    packages: [
      {
        tier: 'Custom',
        name: 'Custom Business Tools',
        tagline: 'Bespoke CRMs, lead magnets, landing page generators, and internal tools — built for how you actually work.',
        bestFor: ['Businesses paying for too many SaaS subscriptions', 'Teams with unique workflows no platform fits', 'Companies needing tools that integrate with their website', 'Start-ups wanting to automate go-to-market'],
        sections: [
          { title: 'What We Can Build', items: ['Custom CRM connected to your website (leads sync automatically)', 'Lead magnets with automated email delivery & CRM capture', 'Landing page generator — AI-assisted, deployed at custom URLs', 'Gated content systems for newsletters, guides, reports', 'Internal dashboards pulling data from Meta, Google, Stripe, etc.', 'Newsletter tools with templates and subscriber management', 'Admin panels for managing content, users, or settings', 'Task planners linked to clients or projects', 'Client portals for shared project status and files'] },
          { title: 'How It Works', items: ['Supabase + Next.js + Vercel stack for reliability and scale', 'Claude Code accelerates development (weeks, not months)', 'Design-led approach with Figma components', 'You own the code, the data, and the IP forever', 'Optional: we can host and maintain, or hand over completely'] },
          { title: 'Why Build vs Buy', items: ['Most SaaS tools are overkill — you use 10% of features', 'Custom tools fit your exact workflow (not someone else\'s)', 'No per-seat pricing or vendor lock-in', 'Easy to change when your business changes', 'Integrates with everything else you\'re already using'] },
        ],
        note: 'Scope and timeline defined together. Can start small (single tool) or full ecosystem. Take a look at our free Build Guide for more on the approach.',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Expandable section component
// ---------------------------------------------------------------------------

function ExpandablePackage({ pkg }: { pkg: ServicePackage }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8 cursor-pointer hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block px-2.5 py-0.5 bg-lime rounded-full text-[10px] font-semibold uppercase tracking-wider">
                {pkg.tier}
              </span>
              {pkg.delivery && (
                <span className="text-xs text-gray-400 font-satoshi">{pkg.delivery}</span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
            <p className="text-sm md:text-base text-gray-500 font-satoshi">{pkg.tagline}</p>
          </div>
          <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Best For — as a titled list */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-gray-700 mb-1.5">Best for</p>
          <ul className="space-y-0.5">
            {pkg.bestFor.map((item, i) => (
              <li key={i} className="text-sm text-gray-500 font-satoshi pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100 pt-6 motion-safe:animate-[fadeInUp_0.3s_ease-out_both]">
          <div className="space-y-6">
            {pkg.sections.map((section, i) => (
              <div key={i}>
                <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{section.title}</h4>
                <ul className="space-y-1.5">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-500 font-satoshi pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {pkg.note && (
            <p className="text-xs text-gray-400 font-satoshi mt-5 pt-4 border-t border-gray-50 italic">
              {pkg.note}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function ServicePackages() {
  const productCategories = CATEGORIES.filter((c) => PRODUCT_SECTION_IDS.includes(c.id))
  const businessCategories = CATEGORIES.filter((c) => !PRODUCT_SECTION_IDS.includes(c.id))

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-16 md:py-24 lg:py-36 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/Our packages.png"
            alt="SmplCo packages — services for founders and scale-ups"
            width={756}
            height={612}
            className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[450px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-offwhite border-t border-gray-100">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">For founders &amp; scale-ups</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Services & Packages — everything a founder needs{' '}
              <span className="font-editorial italic">under one roof</span>
            </h1>
            <p className="text-base text-gray-500 font-satoshi leading-relaxed">
              SmplCo offers six packaged services: the 5-Day Prototype, Product Design as a Service, Branding, Websites, Investor Pitch &amp; Sales Decks, and Video &amp; Animation. Each is fixed-scope, fixed-price, and covers the essentials a founder or scale-up needs to go from idea to growth without assembling a dozen separate vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Bring your product to life */}
      <section className="py-16 md:py-20 border-t border-gray-100 bg-gray-900 text-white">
        <div className="container-main">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-lime font-medium mb-3">01 — Product</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#ffffff' }}>
              Bring your product{' '}
              <span className="font-editorial italic text-lime">to life</span>
            </h2>
            <p className="text-base text-gray-400 font-satoshi leading-relaxed">
              Nail your idea, build something users will love, and prove it works. From five-day prototypes to ongoing product design — we help you go from rough concept to real product.
            </p>
          </div>
        </div>
      </section>

      {productCategories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-16 md:py-20 border-t border-gray-100">
          <div className="container-main">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                {cat.title}
              </h2>
              {cat.subtitle && (
                <p className="text-sm md:text-base text-gray-500 font-satoshi leading-relaxed">
                  {cat.subtitle}
                </p>
              )}
            </div>
            <div className="space-y-4">
              {cat.packages.map((pkg, i) => (
                <ExpandablePackage key={i} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Section 2: Bring your business to life */}
      <section className="py-16 md:py-20 border-t border-gray-100 bg-gray-900 text-white">
        <div className="container-main">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-lime font-medium mb-3">02 — Business</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#ffffff' }}>
              Bring your business{' '}
              <span className="font-editorial italic text-lime">to life</span>
            </h2>
            <p className="text-base text-gray-400 font-satoshi leading-relaxed">
              Everything you need to look credible, pitch with confidence, and get in front of the right people. Branding, websites, decks, and video — the go-to-market support that turns your idea into a business.
            </p>
          </div>
        </div>
      </section>

      {businessCategories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-16 md:py-20 border-t border-gray-100">
          <div className="container-main">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                {cat.title}
              </h2>
              {cat.subtitle && (
                <p className="text-sm md:text-base text-gray-500 font-satoshi leading-relaxed">
                  {cat.subtitle}
                </p>
              )}
            </div>
            <div className="space-y-4">
              {cat.packages.map((pkg, i) => (
                <ExpandablePackage key={i} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons */}
      <section className="py-16 md:py-20 bg-offwhite border-t border-gray-100">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Optional{' '}
              <span className="font-editorial italic">Add-ons</span>
            </h2>
            <p className="text-sm text-gray-500 font-satoshi">
              These can be added to any package and are scoped separately.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Copywriting & content strategy',
              'Custom photography / image sourcing',
              'Email template design',
              'Blog setup & content migration',
              'Analytics & tracking setup',
              'Ongoing maintenance retainer',
              'Marketing strategy & launch plan',
              'Animation & motion direction',
              'Google Slides / PowerPoint conversion',
            ].map((addon, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-sm font-satoshi text-gray-700">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-gray-100">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Not sure which{' '}
                <span className="font-editorial italic">package?</span>
              </h2>
              <p className="text-sm text-gray-500 font-satoshi leading-relaxed mb-6">
                Book a free discovery call. We&apos;ll help you figure out what you need, scope it properly, and give you an honest recommendation — even if it&apos;s &quot;you don&apos;t need us yet.&quot;
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-200 text-gray-900 text-xs font-medium rounded-full hover:bg-gray-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="bg-offwhite rounded-2xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Say hello</p>
              <h3 className="text-lg font-semibold mb-1">Andreas Melvær</h3>
              <p className="text-sm text-gray-500 font-satoshi mb-1">Managing Director, SmplCo</p>
              <a href="mailto:andreas@smpl.as" className="text-sm text-gray-900 font-medium underline decoration-lime decoration-2 underline-offset-4">
                andreas@smpl.as
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
