export interface Author {
  name: string
  slug: string
  role: string
  bio: string
  image: string
  linkedin: string
}

const authors: Record<string, Author> = {
  'andreas-melvaer': {
    name: 'Andreas Melvær',
    slug: 'andreas-melvaer',
    role: 'Managing Director & Co-founder, SmplCo',
    bio: 'Andreas is the MD and co-founder of SmplCo. A product nerd at heart, he leads the company\'s 5-Day Prototype service and has helped 125+ startups and enterprises turn ideas into working digital products. He builds with AI, ships with speed, and occasionally wins marketing awards.',
    image: '/images/team/andreas-melvaer.jpg',
    linkedin: 'https://www.linkedin.com/in/melvær/',
  },
  'michael-millar': {
    name: 'Michael Millar',
    slug: 'michael-millar',
    role: 'Partner & Co-founder, SmplCo',
    bio: 'Michael is a partner and co-founder of SmplCo. Before taking on go-to-market responsibilities for both SmplCo and our clients, he was a journalist (BBC, Reuters, Spectator), political lobbyist, and global comms leader.',
    image: '/images/team/michael-millar.png',
    linkedin: 'https://www.linkedin.com/in/michaelmillarfrsa/',
  },
}

/**
 * Match a blog post author string to a known author profile.
 * Handles variations like "Andreas Melvaer", "Andreas Melvær",
 * "Michael Millar", "Michael Millar, Partner, SmplCo", etc.
 */
export function getAuthor(authorString: string | undefined): Author | null {
  if (!authorString) return null

  const lower = authorString.toLowerCase()

  if (lower.includes('andreas')) return authors['andreas-melvaer']
  if (lower.includes('michael') || lower.includes('millar') || lower.includes('mike')) return authors['michael-millar']

  return null
}

export default authors
