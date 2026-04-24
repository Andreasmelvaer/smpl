import type { Metadata } from 'next'
import ServicePackages from './ServicePackages'

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
  return <ServicePackages />
}
