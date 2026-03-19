import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ShimmerGrid from '@/components/ShimmerGrid'

export const metadata: Metadata = {
  title: 'Our Work | SmplCo – Projects & Case Studies',
  description: 'Explore our portfolio of digital products, prototypes, and case studies for startups and enterprises.',
  alternates: { canonical: 'https://smpl.as/work' },
}

export default async function Work() {
  const allProjects = await getAllPostsData('work')
  // Show only the 6 featured projects that match the Framer site
  const featuredSlugs = ['compera', 'nucase', 'share50', 'enquip', '2040', 'altien']
  const projects = allProjects.filter(p => featuredSlugs.includes(p.slug))
  // Sort to match Framer order
  projects.sort((a, b) => featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug))

  // Card images for the work grid (different from case study hero images)
  const cardImages: Record<string, string> = {
    compera: '/images/cases/compera-card.jpg',
    altien: '/images/cases/altien-card.jpg',
    nucase: '/images/cases/nucase-card.jpg',
    share50: '/images/cases/share50-card.jpg',
    enquip: '/images/cases/enquip-card.jpg',
    '2040': '/images/cases/2040-card.jpg',
  }

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-44 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/Our work.png"
            alt="SmplCo portfolio — projects and case studies"
            width={700}
            height={400}
            className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[560px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* ============ PORTFOLIO INTRO ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
            <p className="text-gray-600 font-satoshi leading-relaxed">
              Here are some examples from the 100+ digital products and services
              we&apos;ve brought to life for clients ranging from early stage start-ups to
              corporate innovation departments at global leaders.
            </p>
          </div>

          {/* ============ PROJECT GRID ============ */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block bg-offwhite rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {project.hero_image && (
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <Image
                      src={cardImages[project.slug] || project.hero_image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors" style={{ fontSize: '14px' }}>
                    {project.title}
                  </h3>
                  {project.services && Array.isArray(project.services) && (
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 3).map((s: string) => (
                        <span key={s} className="text-xs text-gray-500 font-satoshi px-3 py-1 rounded-full border border-gray-200">
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
      </section>
    </div>
  )
}
