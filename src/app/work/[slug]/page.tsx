import { getPostData, getAllPosts, getAllPostsData } from '@/lib/markdown'
import { generateWorkMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollZoomImage from '@/components/ScrollZoomImage'
import { CreativeWorkJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

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

// Strip markdown content to just the prose (no headings like Gallery, Services, h1)
function cleanContent(html: string): string {
  return html
    .replace(/<h1[^>]*>.*?<\/h1>/gi, '')
    .replace(/<h2[^>]*>Gallery<\/h2>/gi, '')
    .replace(/<h2[^>]*>Services Delivered<\/h2>[\s\S]*?(?=<h2|$)/gi, '')
    .replace(/<img[^>]*>/gi, '') // Remove inline images (gallery is separate)
    .replace(/<p>\s*<\/p>/gi, '') // Remove empty paragraphs
}

// Card images for related work thumbnails
const cardImages: Record<string, string> = {
  bas: '/images/cases/bas-card.jpg',
  compera: '/images/cases/compera-card.jpg',
  altien: '/images/cases/altien-card.jpg',
  nucase: '/images/cases/nucase-card.jpg',
  share50: '/images/cases/share50-card.jpg',
  enquip: '/images/cases/enquip-card.jpg',
  '2040': '/images/cases/2040-card.jpg',
  tilsig: '/images/tilsig/hydropower-plant.jpg',
  orli: '/images/orli/orli-face-cover.jpg',
  resani: '/images/resani/woman-lips-hero.jpg',
  paperdrop: '/work/paperdrop-hero.jpg',
}

async function RelatedWork({ currentSlug }: { currentSlug: string }) {
  const allProjects = await getAllPostsData('work')
  const related = allProjects
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 2)

  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <Image
            src="/images/illustrations/smplco-illustration-notebook.png"
            alt="SmplCo case study notebook illustration"
            width={80}
            height={80}
            className="shrink-0"
          />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="font-editorial italic">Explore</span>
            <br />
            More Success Stories
          </h2>
        </div>

        {/* Related project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {related.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={cardImages[project.slug] || project.hero_image || ''}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function WorkProject({ params }: Props) {
  const { slug } = await params
  try {
    const project = await getPostData('work', slug)

    // Extract gallery images from raw markdown
    const galleryRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
    const galleryImages: { alt: string; src: string }[] = []
    let match
    while ((match = galleryRegex.exec(project.rawContent || '')) !== null) {
      galleryImages.push({ alt: match[1], src: match[2] })
    }

    const clientName = project.client || project.title.split('–')[0].split('—')[0].trim()

    return (
      <article className="min-h-screen">
        <CreativeWorkJsonLd post={project} />
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', href: '/' },
            { name: 'Work', href: '/work' },
            { name: project.title, href: `/work/${slug}` },
          ]}
        />
        {/* ============ BRAND HERO — full width edge-to-edge ============ */}
        <section className="w-full" style={{ backgroundColor: '#f0ece6' }}>
          {project.hero_image && (
            <Image
              src={project.hero_image}
              alt={project.title}
              width={1920}
              height={660}
              className="w-full h-auto"
              priority
            />
          )}
        </section>

        {/* ============ PROJECT INFO ============ */}
        <section className="py-16 md:py-24">
          <div className="container-main max-w-3xl">
            <h1 className="text-2xl md:text-3xl leading-tight mb-6 text-gray-400">
              {project.title}
            </h1>

            {/* Body content */}
            <div
              className="prose max-w-none mb-8 [&>p]:text-gray-500 [&>p]:leading-relaxed [&_strong]:text-gray-700"
              dangerouslySetInnerHTML={{ __html: cleanContent(project.content) }}
            />

            {/* Service pills */}
            {project.services && project.services.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.services.map((service: string) => (
                  <span
                    key={service}
                    className="text-sm text-gray-500 font-satoshi px-5 py-2 rounded-full border border-gray-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ IMAGE GALLERY ============ */}
        {galleryImages.length > 0 && (
          <section className="py-8 md:py-12">
            <div className="container-main">
              <div className="space-y-6">
                {galleryImages.map((img, i) => {
                  // Alternate: first image full-width, then pairs of 2
                  const isFullWidth = i === 0 || (i > 0 && i % 3 === 0)
                  const isPairStart = !isFullWidth && (i % 3 === 1)

                  if (isFullWidth) {
                    return (
                      <ScrollZoomImage
                        key={i}
                        src={img.src}
                        alt={img.alt || project.title}
                        className="bg-gray-100"
                        priority={i === 0}
                      />
                    )
                  }
                  if (isPairStart && galleryImages[i + 1]) {
                    return (
                      <div key={i} className="grid md:grid-cols-2 gap-6">
                        <ScrollZoomImage
                          src={img.src}
                          alt={img.alt || project.title}
                          className="bg-gray-100"
                        />
                        <ScrollZoomImage
                          src={galleryImages[i + 1].src}
                          alt={galleryImages[i + 1].alt || project.title}
                          className="bg-gray-100"
                        />
                      </div>
                    )
                  }
                  // Skip the second item in a pair (already rendered above)
                  if (!isFullWidth && i % 3 === 2) return null
                  // Odd item at end without a pair
                  return (
                    <ScrollZoomImage
                      key={i}
                      src={img.src}
                      alt={img.alt || project.title}
                      className="bg-gray-100"
                    />
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============ RELATED WORK ============ */}
        <RelatedWork currentSlug={slug} />

        {/* ============ CTA ============ */}
        <section className="py-16 md:py-24 bg-offwhite">
          <div className="container-main text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                &larr; Back to Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
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
