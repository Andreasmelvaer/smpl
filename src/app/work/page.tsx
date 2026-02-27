import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of digital products, prototypes, and case studies for startups and enterprises.',
}

export default async function Work() {
  const allProjects = await getAllPostsData('work')

  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Our Work
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-satoshi">
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
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                  <Image
                    src={project.hero_image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
                      <span key={s} className="text-xs text-gray-500 font-satoshi">
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
