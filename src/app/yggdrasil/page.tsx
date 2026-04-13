import type { Metadata } from 'next'
import DesignerQuiz from './DesignerQuiz'

export const metadata: Metadata = {
  title: 'What Kind of Designer Are You?',
  description:
    'Take this sassy quiz to find your designer archetype. Are you a Pixel Perfectionist, a Vibes-Only Designer, or something worse?',
  alternates: { canonical: 'https://smpl.as/yggdrasil' },
  openGraph: {
    title: 'What Kind of Designer Are You?',
    description:
      'A provocative personality quiz for designers. Find your archetype.',
    url: 'https://smpl.as/yggdrasil',
    type: 'website',
    siteName: 'SmplCo',
  },
}

export default function YggdrasilPage() {
  return <DesignerQuiz />
}
