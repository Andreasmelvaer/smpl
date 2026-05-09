import type { Metadata } from 'next'
import KlugeGame from './KlugeGame'

export const metadata: Metadata = {
  title: 'Kluge — Tech-Forum Stavanger',
  description: 'AI buzzword bingo for Tech-Forum Stavanger. Mark every buzzword you hear during the talks. Five in a row wins.',
  alternates: { canonical: 'https://smpl.as/kluge' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Kluge — Tech-Forum Stavanger',
    description: 'AI buzzword bingo for Tech-Forum Stavanger. Mark every buzzword you hear. Five in a row wins.',
    url: 'https://smpl.as/kluge',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Kluge — Tech-Forum Stavanger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kluge — Tech-Forum Stavanger',
    description: 'AI buzzword bingo for Tech-Forum Stavanger. Mark every buzzword you hear. Five in a row wins.',
    images: ['/images/og-default.png'],
  },
}

export default function KlugePage() {
  return <KlugeGame />
}
