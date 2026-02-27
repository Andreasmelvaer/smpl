import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of digital products, prototypes, and case studies for startups and enterprises.',
}

interface WorkProject {
  slug: string
  title: string
  category?: string
  hero_image?: string
  services?: string[]
  [key: string]: unknown
}

// All work cases — includes both markdown-based and hardcoded pages
const additionalCases: WorkProject[] = [
  { slug: 'resani', title: 'Resani – Hygiene', category: 'Healthcare / IoT', hero_image: '/images/resani/woman-lips-hero.jpg' },
  { slug: 'orli', title: 'Orli – Mental Health', category: 'Healthcare / Wellbeing', hero_image: '/images/orli/orli-hero.jpg' },
  { slug: 'tilsig', title: 'Tilsig – Energy / Flow Monitoring', category: 'Energy / SaaS', hero_image: '/images/tilsig/tilsig-hero.jpg' },
  { slug: 'share50', title: 'Share50 – Ad Revenue', category: 'AdTech / SaaS', hero_image: '/images/share50/share50-hero.jpg' },
  { slug: 'nucase', title: 'Nucase – Home Renovation', category: 'PropTech / Consumer', hero_image: '/images/nucase/nucase-hero.jpg' },
]

export default async function Work() {
  const markdownProjects = await getAllPostsData('work')

  // Merge markdown projects with hardcoded ones, avoiding duplicates
  const markdownSlugs = new Set(markdownProjects.map((p) => p.slug))
  const allProjects: WorkProject[] = [
    ...markdownProjects.map((p) => p as WorkProject),
    ...additionalCases.filter((c) => !markdownSlugs.has(c.slug)),
  ]

  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Our Work
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A selection of products, prototypes, and partnerships we&apos;ve
            delivered for startups, scale-ups, and global brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {allProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block bg-offwhite rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {project.hero_image && (
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={project.hero_image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                {project.category && (
                  <p className="text-xs font-medium text-gray-500 mb-2">
                    {project.category}
                  </p>
                )}
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h2>
                {project.services && Array.isArray(project.services) && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.services.slice(0, 3).map((s: string) => (
                      <span key={s} className="text-xs text-gray-500">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
