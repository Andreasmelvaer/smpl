import { getPostData } from '@/lib/markdown'

export default async function About() {
  const aboutData = await getPostData('pages', 'about')
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{aboutData.title}</h1>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: aboutData.content }}
      />
    </div>
  )
}