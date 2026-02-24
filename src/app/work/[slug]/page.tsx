import { getPostData, getAllPosts } from '@/lib/markdown'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export default async function WorkProject({ params }: { params: Params }) {
  try {
    const projectData = await getPostData('work', params.slug)
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
        {projectData.description && (
          <p className="text-xl text-gray-600 mb-8">{projectData.description}</p>
        )}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: projectData.content }}
        />
      </div>
    )
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  const projects = getAllPosts('work')
  return projects.map((slug) => ({
    slug,
  }))
}