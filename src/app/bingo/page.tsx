import type { Metadata } from 'next'
import BingoGame from './BingoGame'

export const metadata: Metadata = {
  title: 'Bingo — Yggdrasil 2026',
  description: 'Spel bingo under Andreas sitt foredrag! Marker orda du høyre og vinn eit Gnu rabattkort.',
  alternates: { canonical: 'https://smpl.as/bingo' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Bingo — Yggdrasil 2026',
    description: 'Spel bingo under foredraget. Fem på rad = Gnu rabattkort!',
    url: 'https://smpl.as/bingo',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Bingo — Yggdrasil 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bingo — Yggdrasil 2026',
    description: 'Spel bingo under foredraget. Fem på rad = Gnu rabattkort!',
    images: ['/images/og-default.png'],
  },
}

export default function BingoPage() {
  return <BingoGame />
}
