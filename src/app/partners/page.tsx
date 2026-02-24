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
        <h1 className="text-4xl font-bold mb-8">Partners</h1>
        <p className="text-xl text-gray-600">
          Content being migrated by WorkCasesCrawler...
        </p>
      </div>
    )
  }
}