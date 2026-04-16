import type { Metadata } from 'next'
import ServicePackages from './ServicePackages'

export const metadata: Metadata = {
  title: 'Business Essentials — Services & Packages | SmplCo',
  description:
    'Branding, websites, pitch decks, prototypes, and product design — all under one roof. Explore our packaged services and find the right fit for your stage.',
  alternates: { canonical: 'https://smpl.as/services' },
  openGraph: {
    title: 'Business Essentials — Services & Packages | SmplCo',
    description: 'Branding, websites, decks, prototypes, and product design. Packaged to fit your stage.',
    url: 'https://smpl.as/services',
    type: 'website',
    siteName: 'SmplCo',
  },
}

export default function ServicesPage() {
  return <ServicePackages />
}
