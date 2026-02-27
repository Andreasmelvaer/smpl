import { getPostData, getAllPosts } from '@/lib/markdown'
import { generateWorkMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const project = await getPostData('work', slug)
    return generateWorkMetadata(project)
  } catch {
    return { title: 'Project Not Found' }
  }
}

export default async function WorkProject({ params }: Props) {
  const { slug } = await params
  try {
    const project = await getPostData('work', slug)

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
            {project.category && (
              <p className="text-sm font-medium text-gray-500 mb-3">{project.category}</p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            {project.services && project.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.services.map((service: string) => (
                  <span
                    key={service}
                    className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Hero image */}
          {project.hero_image && (
            <div className="mb-12 rounded-2xl overflow-hidden max-w-5xl">
              <img
                src={project.hero_image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose max-w-3xl"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  const projects = getAllPosts('work')
  return projects.map((slug) => ({ slug }))
}
