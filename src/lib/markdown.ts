import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostData {
  slug: string
  title: string
  description?: string
  date?: string
  content: string
  [key: string]: any
}

export async function getPostData(folder: string, slug: string): Promise<PostData> {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    ...data,
  } as PostData
}

export function getAllPosts(folder: string): string[] {
  const fullPath = path.join(contentDirectory, folder)
  if (!fs.existsSync(fullPath)) return []
  
  const fileNames = fs.readdirSync(fullPath)
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''))
}

export async function getAllPostsData(folder: string): Promise<PostData[]> {
  const slugs = getAllPosts(folder)
  const posts = await Promise.all(
    slugs.map(slug => getPostData(folder, slug))
  )
  
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}