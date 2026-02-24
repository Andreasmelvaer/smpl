import { getPostData } from '@/lib/markdown'

export default async function UIEnergyDesign() {
  try {
    const uiEnergyData = await getPostData('pages', 'ui-energy-design')
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{uiEnergyData.title}</h1>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: uiEnergyData.content }}
        />
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">UI Energy Design</h1>
        <p className="text-xl text-gray-600 mb-8">
          Special landing page content being migrated...
        </p>
        <p className="text-gray-600">
          Content being migrated by WorkCasesCrawler...
        </p>
      </div>
    )
  }
}