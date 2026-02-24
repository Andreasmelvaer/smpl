import { getPostData } from '@/lib/markdown'

export default async function Contact() {
  try {
    const contactData = await getPostData('pages', 'contact')
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{contactData.title}</h1>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: contactData.content }}
        />
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p>Contact page content will be migrated soon...</p>
      </div>
    )
  }
}