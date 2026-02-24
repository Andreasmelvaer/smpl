import { getPostData, getAllPosts } from '@/lib/markdown'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export default async function BlogPost({ params }: { params: Params }) {
  try {
    const postData = await getPostData('blog', params.slug)
    
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        {postData.date && (
          <p className="text-gray-600 mb-4">Published: {new Date(postData.date).toLocaleDateString()}</p>
        )}
        {postData.description && (
          <p className="text-xl text-gray-600 mb-8">{postData.description}</p>
        )}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
      </div>
    )
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts('blog')
  return posts.map((slug) => ({
    slug,
  }))
}