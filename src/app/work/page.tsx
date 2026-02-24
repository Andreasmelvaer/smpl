import { getAllPostsData } from '@/lib/markdown'
import Link from 'next/link'

export default async function Work() {
  const workProjects = await getAllPostsData('work')
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workProjects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/work/${project.slug}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            {project.description && (
              <p className="text-gray-600">{project.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}