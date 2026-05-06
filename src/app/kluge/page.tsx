import type { Metadata } from 'next'
import KlugeGame from './KlugeGame'

export const metadata: Metadata = {
  title: 'Kluge — AI Buzzword Bingo',
  description: "Play during your next AI demo, panel, or overpromised pitch. Mark every buzzword you hear. Five in a row wins.",
  alternates: { canonical: 'https://smpl.as/kluge' },
  openGraph: {
    title: 'Kluge — AI Buzzword Bingo',
    description: 'Play during your next AI demo or pitch. Mark every buzzword you hear. Five in a row wins.',
    url: 'https://smpl.as/kluge',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Kluge — AI Buzzword Bingo by SmplCo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kluge — AI Buzzword Bingo',
    description: 'Play during your next AI demo or pitch. Mark every buzzword you hear. Five in a row wins.',
    images: ['/images/og-default.png'],
  },
}

export default function KlugePage() {
  return <KlugeGame />
}
