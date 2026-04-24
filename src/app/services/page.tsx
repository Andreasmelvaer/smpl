import type { Metadata } from 'next'
import ServicePackages from './ServicePackages'
import { ServiceListJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

const SERVICES = [
  {
    name: '5-Day Prototype',
    description:
      'A focused sprint taking a product idea from post-it to clickable prototype in one working week. Includes 3 workshops, Figma iteration with your team, strategic insight from industry veterans, and a pitch-ready clickable demo. Used by founders raising capital and enterprise teams aligning stakeholders.',
    url: '/services',
    serviceType: 'Rapid prototyping',
  },
  {
    name: 'Product Design as a Service',
    description:
      'Ongoing, flexible access to a full product design and development team. For scale-ups that need continuous UI/UX, design ops, and senior strategy without hiring a full in-house team.',
    url: '/services',
    serviceType: 'Product design',
  },
  {
    name: 'Branding',
    description:
      'Brand strategy, verbal identity, visual identity, and brand story for founders and scale-ups. Ideal for companies rebranding after funding or positioning into a new market.',
    url: '/services',
    serviceType: 'Brand strategy and identity',
  },
  {
    name: 'Websites',
    description:
      'Modern marketing and product websites built in Next.js on Vercel. Fast, SEO-optimised, integrated with your CRM and analytics stack.',
    url: '/services',
    serviceType: 'Website design and development',
  },
  {
    name: 'Investor Pitch & Sales Decks',
    description:
      'Investor pitch decks, sales decks, and board decks built by a team that has raised capital themselves. Structure, narrative, and design for founders going into fundraising or enterprise sales.',
    url: '/services',
    serviceType: 'Pitch deck and sales presentation design',
  },
  {
    name: 'Video & Animation',
    description:
      'Explainer videos, product demo animation, and motion design for product launches, investor updates, and marketing.',
    url: '/services',
    serviceType: 'Video and motion design',
  },
]

const SERVICE_FAQS = [
  {
    question: 'What is a 5-Day Prototype?',
    answer:
      'A 5-Day Prototype is a focused, one-week sprint that takes a product idea from post-it to clickable prototype. Monday to Friday, SmplCo runs workshops with your team, iterates live in Figma, and delivers a pitch-ready clickable demo by the end of the week. It replaces months of discovery and is typically used by founders raising capital or enterprise teams aligning stakeholders.',
  },
  {
    question: 'How long does a prototype take at SmplCo?',
    answer:
      'Five working days — Monday to Friday. The 5-Day Prototype is a fixed-scope, fixed-time engagement. Longer projects (ongoing product design or custom software builds) run on separate timelines.',
  },
  {
    question: 'What services does SmplCo offer?',
    answer:
      'SmplCo offers six packaged services: the 5-Day Prototype, Product Design as a Service, Branding, Websites, Investor Pitch & Sales Decks, and Video & Animation. Packages are designed to cover the essentials a founder or scale-up needs to go from idea to growth without assembling a dozen separate vendors.',
  },
  {
    question: 'Who is SmplCo for?',
    answer:
      'Founders, scale-ups, and enterprise innovation teams. SmplCo has helped build over 125 digital products for companies raising from pre-seed to Series C, as well as established enterprises including Barclays Eagle Labs.',
  },
  {
    question: 'Where is SmplCo based?',
    answer:
      'SmplCo has five offices: Stavanger (HQ), London, San Francisco, Szeged, and St. Gallen. Most engagements run remotely or hybrid with on-site workshops where useful.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a free 30-minute discovery call at smpl.as/book, or email hello@smpl.as. SmplCo will map your goal to the right service and share a fixed-price proposal within 48 hours.',
  },
]

export const metadata: Metadata = {
  title: 'Services & Packages',
  description:
    'Branding, websites, pitch decks, prototypes, and product design — all under one roof. Explore our packaged services and find the right fit for your stage.',
  alternates: { canonical: 'https://smpl.as/services' },
  openGraph: {
    title: 'Services & Packages',
    description: 'Branding, websites, decks, prototypes, and product design. Packaged to fit your stage.',
    url: 'https://smpl.as/services',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'SmplCo Services & Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Packages',
    description: 'Branding, websites, decks, prototypes, and product design. Packaged to fit your stage.',
    images: ['/images/og-default.png'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServiceListJsonLd services={SERVICES} />
      <FAQJsonLd faqs={SERVICE_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />
      <ServicePackages />
    </>
  )
}
