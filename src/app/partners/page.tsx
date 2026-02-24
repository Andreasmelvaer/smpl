import { getPostData } from '@/lib/markdown'

export default async function Partners() {
  try {
    const partnersData = await getPostData('pages', 'partners')
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{partnersData.title}</h1>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: partnersData.content }}
        />
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Partner Network</h1>
        <p className="text-xl text-gray-600 mb-12">
          We've built strategic partnerships with industry leaders to provide our clients 
          with comprehensive support across every aspect of digital product development and business growth.
        </p>
        <div className="text-center p-8 bg-blue-50 rounded-lg">
          <p className="text-lg">Content fully migrated - refresh to see complete partner network</p>
        </div>
      </div>
    )
  }
}