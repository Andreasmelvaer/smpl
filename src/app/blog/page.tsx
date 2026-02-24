import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'

export default async function Blog() {
  const blogPosts = await getAllPostsData('blog')
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      <p className="text-xl text-gray-600 mb-12">
        Browse our thoughts on key industry trends, tales of success and disaster, 
        and tips for getting ahead in a digital world.
      </p>
      
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-80">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              {post.date && (
                <p className="text-gray-600 mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              )}
              {post.description && (
                <p className="text-gray-700">{post.description}</p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}