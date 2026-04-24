import type { Metadata } from 'next'
import FounderQuiz from './FounderQuiz'

export const metadata: Metadata = {
  title: 'What Kind of Founder Are You?',
  description:
    'Take this brutally honest quiz to find your founder archetype. Are you The Visionary, The Deck Polisher, or The Serial Pivoter? 6 questions. Total honesty.',
  alternates: { canonical: 'https://smpl.as/investorready' },
  openGraph: {
    title: 'What Kind of Founder Are You?',
    description: 'A brutally honest personality quiz for founders. Find your archetype.',
    url: 'https://smpl.as/investorready',
    type: 'website',
    siteName: 'SmplCo',
    images: [
      {
        url: '/whatdesignerareyou/notmyname2.jpg',
        width: 2486,
        height: 1906,
        alt: 'What Kind of Founder Are You? — SmplCo Quiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://smpl.as/whatdesignerareyou/notmyname2.jpg'],
  },
}

export default function InvestorReadyPage() {
  return <FounderQuiz />
}
