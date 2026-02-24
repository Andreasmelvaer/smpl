import { getPostData } from '@/lib/markdown'

export default async function EagleLabs() {
  try {
    const eagleLabsData = await getPostData('pages', 'eaglelabs')
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{eagleLabsData.title}</h1>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: eagleLabsData.content }}
        />
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Barclays Eagle Labs</h1>
        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Exclusive Member Discount</h2>
          <p className="text-lg">
            Barclays Eagle Labs member? Grab your discount using our exclusive offer 
            with Eagle Labs member rewards.
          </p>
        </div>
        <p className="text-gray-600">
          Content being migrated by WorkCasesCrawler...
        </p>
      </div>
    )
  }
}