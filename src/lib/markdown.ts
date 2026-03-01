import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostData {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  hero_image: string
  tags: string[]
  published: boolean
  readTime: string
  content: string
  [key: string]: unknown
}

/**
 * Get all posts/pages of a given type (e.g. 'blog').
 * Returns an array sorted by date descending.
 */
export async function getAllPostsData(type: string): Promise<PostData[]> {
  const dir = path.join(contentDirectory, type)

  if (!fs.existsSync(dir)) {
    return []
  }

  const filenames = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const filePath = path.join(dir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      author: data.author || '',
      excerpt: data.excerpt || '',
      hero_image: data.hero_image || '',
      tags: data.tags || [],
      published: data.published !== false,
      readTime: data.readTime || '',
      content,
      ...data,
    } as PostData
  })

  // Filter out unpublished, sort by date descending
  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single post by type and slug.
 * e.g. getPostData('blog', 'my-post') reads content/blog/my-post.md
 */
export async function getPostData(
  type: string,
  slug: string
): Promise<PostData> {
  const filePath = path.join(contentDirectory, type, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    author: data.author || '',
    excerpt: data.excerpt || '',
    hero_image: data.hero_image || '',
    tags: data.tags || [],
    published: data.published !== false,
    readTime: data.readTime || '',
    content,
    ...data,
  } as PostData
}

/**
 * Get all slugs for a content type — useful for generateStaticParams.
 */
export async function getAllSlugs(type: string): Promise<string[]> {
  const dir = path.join(contentDirectory, type)

  if (!fs.existsSync(dir)) {
    return []
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
