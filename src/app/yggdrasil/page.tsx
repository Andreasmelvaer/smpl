import type { Metadata } from 'next'
import DesignerQuiz from './DesignerQuiz'

export const metadata: Metadata = {
  title: 'What Kind of Designer Are You?',
  description:
    'Ta denne quizen og finn din designer-arketype. E du ein nevrotisk piksel-tellar, ein kaotisk kreativ, eller noko verre? 5 sliders. Full diagnose.',
  alternates: { canonical: 'https://smpl.as/yggdrasil' },
  openGraph: {
    title: 'What Kind of Designer Are You?',
    description:
      'A provocative personality quiz for designers. Find your archetype.',
    url: 'https://smpl.as/yggdrasil',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/whatdesignerareyou/og-image.png',
        width: 1200,
        height: 630,
        alt: 'What Kind of Designer Are You? — SmplCo Quiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://smpl.as/whatdesignerareyou/og-image.png'],
  },
}

export default function YggdrasilPage() {
  return <DesignerQuiz />
}
