import type { Metadata } from 'next'
import BingoGame from './BingoGame'

export const metadata: Metadata = {
  title: 'Bingo — Yggdrasil 2026',
  description: 'Spel bingo under Andreas sitt foredrag! Marker orda du høyre og vinn eit Gnu rabattkort.',
  alternates: { canonical: 'https://smpl.as/bingo' },
  openGraph: {
    title: 'Bingo — Yggdrasil 2026',
    description: 'Spel bingo under foredraget. Fem på rad = Gnu rabattkort!',
    url: 'https://smpl.as/bingo',
    type: 'website',
    siteName: 'SmplCo',
  },
}

export default function BingoPage() {
  return <BingoGame />
}
