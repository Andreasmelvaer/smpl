import { getPostData, getAllSlugs } from '@/lib/markdown'
import { generatePageMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const project = await getPostData('work', slug)
    return generatePageMetadata(project)
  } catch {
    return { title: 'Project Not Found' }
  }
}

export default async function WorkProject({ params }: Props) {
  const { slug } = await params
  try {
    const project = await getPostData('work', slug)
    const category = project.category as string | undefined
    const services = project.services as string[] | undefined
    const website = project.website as string | undefined
    const description = project.description as string | undefined

    return (
      <article className="py-16 md:py-24">
        <div className="container-main">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          {/* Header */}
          <header className="mb-12 max-w-3xl">
            {category && (
              <p className="text-sm font-medium text-gray-500 mb-3">{category}</p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                {description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              {services && services.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {services.map((service: string) => (
                    <span
                      key={service}
                      className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Visit site &rarr;
                </a>
              )}
            </div>
          </header>

          {/* Hero image */}
          {project.hero_image && (
            <div className="mb-12 rounded-2xl overflow-hidden max-w-5xl">
              <Image
                src={project.hero_image}
                alt={project.title}
                width={1200}
                height={750}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose max-w-3xl"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200 max-w-3xl">
            <div className="bg-offwhite rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-xl font-semibold mb-3">
                Like what you see?
              </h3>
              <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
                We&apos;d love to hear about your project. Get a free consultation with our team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs('work')
  return slugs.map((slug) => ({ slug }))
}
