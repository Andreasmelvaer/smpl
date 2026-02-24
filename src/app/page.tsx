import { getPostData } from '@/lib/markdown'

export default async function HomePage() {
  const homeData = await getPostData('pages', 'homepage')
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            From Post-it
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            …to product
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Put a rocket under your innovation plans. Our unique process and unbeatable experience 
            puts you ahead of the game, while slashing risk, time, and cost.
          </p>
          <p className="text-lg mb-12 max-w-5xl mx-auto">
            Join 125+ start-ups, scale-ups, and global brands who've brought big ideas to life, 
            backed by a team that has built and sold digital companies, including a $3bn tech unicorn. 
            <span className="font-semibold">Recognised as a world-leader in AI-assisted development by Figma.</span>
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-gray-600 mb-8 text-center">Recognised by</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            <div>
              <p className="font-medium text-gray-800">Global Exemplar</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">SheBuilds winner</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Global Runner-Up</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Digital Design Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Don't
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            just take our word for it
          </h2>
          
          {/* Eagle Labs CTA */}
          <div className="bg-blue-50 p-8 rounded-lg mb-16 max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              <span className="font-semibold">Barclays Eagle Labs member?</span>
            </p>
            <p>
              Grab your discount using our exclusive offer with Eagle Labs member rewards
            </p>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Tailored
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            to you
          </h2>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Insights
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-gray-600">
            Browse our thoughts on key industry trends, tales of success and disaster, 
            and tips for getting ahead in a digital world. All courtesy of innovators 
            who have seen it and done it all themselves.
          </p>
        </div>
      </section>
    </div>
  )
}