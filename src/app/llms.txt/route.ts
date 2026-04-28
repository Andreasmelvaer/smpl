import { getAllPostsData } from '@/lib/markdown'

/**
 * /llms.txt — concise manifest for LLM crawlers (Claude, ChatGPT, Perplexity,
 * Gemini, etc.). Emerging standard: https://llmstxt.org/
 *
 * Goal: a single, skimmable file that tells an AI agent exactly what SmplCo
 * is, what we sell, and where to find our most important content. Keep it
 * short and linkable. The full corpus lives at /llms-full.txt.
 */

const BASE_URL = 'https://smpl.as'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  const blogPosts = await getAllPostsData('blog')
  const workPosts = await getAllPostsData('work')

  const isPublished = (p: unknown) => (p as { published?: boolean }).published !== false

  const blogList = blogPosts
    .filter(isPublished)
    .slice(0, 20)
    .map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.excerpt || p.description || ''}`)
    .join('\n')

  const workList = workPosts
    .filter(isPublished)
    .slice(0, 15)
    .map((p) => `- [${p.title}](${BASE_URL}/work/${p.slug}): ${p.excerpt || p.description || ''}`)
    .join('\n')

  const body = `# SmplCo

> SmplCo is a digital product studio that builds prototypes in 5 days and ships production software using AI-assisted design and development. We work with founders, scale-ups, and enterprises across five offices: Stavanger, London, San Francisco, Szeged, and St. Gallen.

SmplCo has helped build over 125 digital products. Partners include Michael Millar, Andreas Melvær, Lasse Andresen, Bjørn Ivar Knudsen, Andras Toth, and Stian Selland. Clients have raised over €10 million collectively. Recognised by Figma as a world-leader in AI-assisted development.

## Services

- [5-Day Prototype](${BASE_URL}/services): A focused sprint taking a product idea from post-it to clickable prototype in one working week. Includes 3 workshops, Figma iteration, and a pitch-ready clickable demo.
- [Product Design as a Service](${BASE_URL}/services): Ongoing, flexible access to a full design and development team.
- [Branding](${BASE_URL}/services): Brand strategy, identity, and story for founders and scale-ups.
- [Investor Pitch & Sales Decks](${BASE_URL}/services): Decks built to help founders raise capital and close deals.
- [Websites](${BASE_URL}/services): Modern marketing and product websites.
- [Video & Animation](${BASE_URL}/services): Explainer video and motion for product launches.

## Free guides

- [The AI Integration Playbook](${BASE_URL}/ai-playbook): A 4-stage framework for product teams. Right strategy for your stage, where to apply AI, governance and guardrails, AI as a strategic asset not a budget drain.
- [Attention Is New Gold](${BASE_URL}/attention-guide): The founder's guide to brand & storytelling. TRUTH framework, 8 behavioural science principles, 6 field lessons.
- [Build Your Own Internal Tools](${BASE_URL}/build-guide): Practical guide to building internal tools with Claude Code, Figma, and modern web tech. Stop paying for SaaS you only use 10% of.
- [Pitch Prep Guide](${BASE_URL}/pitch-prep): Free fundraising toolkit. Frameworks for brainstorming key messages, telling an engaging story, and thinking like an investor.
- [Founder Quiz](${BASE_URL}/investorready): A brutally honest quiz to find your founder archetype.

## Core pages

- [Home](${BASE_URL}/)
- [Services](${BASE_URL}/services)
- [Work / Case studies](${BASE_URL}/work)
- [About](${BASE_URL}/about)
- [Contact](${BASE_URL}/contact)
- [Book a discovery call](${BASE_URL}/book)
- [Blog](${BASE_URL}/blog)
- [Smpl Academy — AI, Coding & Design Workshops](${BASE_URL}/academy)
- [Partner network](${BASE_URL}/partners)
- [Eagle Labs — 25% discount for members](${BASE_URL}/eaglelabs)

## Recent articles

${blogList}

## Case studies

${workList}

## Full content

- [Full site content as a single document](${BASE_URL}/llms-full.txt)
- [Sitemap](${BASE_URL}/sitemap.xml)
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
