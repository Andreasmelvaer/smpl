import Link from 'next/link'
import Image from 'next/image'
import type { PostData } from '@/lib/markdown'

interface Props {
  current: PostData
  posts: PostData[]
  max?: number
}

/**
 * Related Posts — picks up to `max` other posts, scoring by tag overlap first
 * then falling back to recency. Renders as a simple card grid.
 */
export default function RelatedPosts({ current, posts, max = 3 }: Props) {
  const currentTags: string[] = Array.isArray(current.tags) ? current.tags : []

  const candidates = posts
    .filter((p) => p.slug !== current.slug && p.published !== false)
    .map((p) => {
      const tags: string[] = Array.isArray(p.tags) ? p.tags : []
      const overlap = tags.filter((t) => currentTags.includes(t)).length
      return { post: p, overlap }
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap
      const aDate = a.post.date ? new Date(a.post.date).getTime() : 0
      const bDate = b.post.date ? new Date(b.post.date).getTime() : 0
      return bDate - aDate
    })
    .slice(0, max)
    .map((c) => c.post)

  if (candidates.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-gray-200 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Keep reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {candidates.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            {(post.thumbnail_image || post.hero_image) && (
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={post.thumbnail_image || post.hero_image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold leading-snug group-hover:text-gray-600 transition-colors mb-2">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
