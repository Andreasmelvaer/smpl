import Image from 'next/image'

export default function Share50() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-500 to-red-600 px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="text-center">
                <div className="text-8xl lg:text-9xl font-bold mb-4">
                  Share
                  <br />
                  <span className="bg-white text-red-600 px-8 py-4 rounded-2xl inline-block">50</span>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Share50 – Ad Revenue</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    <strong>Share50</strong> makes it easy for local organisations, from sports clubs to charities, 
                    to raise money, and do it without selling anything, asking for donations, or asking more 
                    from their volunteers.
                  </p>
                  <p>
                    We began by using our <strong>5-Day Prototype</strong> service to define the digital vision, 
                    value proposition, and key user journeys needed to create an intuitive, engaging experience for users.
                  </p>
                  <p>
                    This vision became the basis of Share50's MVP, which turned ad views into meaningful financial 
                    support for local communities, while giving advertisers access to a highly targeted and engaged audience.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">UI/UX Design</span>
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">Branding</span>
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">illustration</span>
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">Prototype</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/share50/man-running-hero.jpg"
                alt="Share50 Hero - Man Running"
                width={768}
                height={264}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>
      </section>

      {/* App Mockups Section 1 - Red Theme */}
      <section className="relative bg-gradient-to-br from-red-500 to-red-600 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform rotate-3">
              <Image 
                src="/images/share50/man-walking.jpg"
                alt="Man Walking"
                width={600}
                height={360}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="transform -rotate-2">
              <Image 
                src="/images/share50/man-riding-ev.jpg"
                alt="Man Riding EV"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="transform rotate-1">
              <Image 
                src="/images/share50/woman-running.jpg"
                alt="Woman Running"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Decorative runner icons */}
        <div className="absolute top-10 left-10 w-8 h-8 text-white opacity-30">
          <span className="text-2xl">🏃</span>
        </div>
        <div className="absolute bottom-10 right-10 w-8 h-8 text-white opacity-30">
          <span className="text-2xl">🏃‍♀️</span>
        </div>
      </section>

      {/* ODEON Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image 
            src="/images/share50/odeon-section.jpg"
            alt="ODEON Partnership Section"
            width={847}
            height={476}
            className="w-full h-auto rounded-3xl shadow-2xl mx-auto"
          />
        </div>
      </section>

      {/* More App Sections - Red Theme */}
      <section className="relative bg-gradient-to-br from-red-500 to-red-600 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform -rotate-1">
              <Image 
                src="/images/share50/woman-in-garden.jpg"
                alt="Woman In The Garden"
                width={600}
                height={360}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="transform rotate-2">
              <Image 
                src="/images/share50/woman-night-view.jpg"
                alt="Woman Night View"
                width={600}
                height={360}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="transform -rotate-2">
              <Image 
                src="/images/share50/features-1.jpg"
                alt="Features 1"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center text-white">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl">👋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Welcome to</h3>
                <h4 className="text-2xl font-bold text-red-400">Share50</h4>
                <p className="text-gray-400 mt-4">Turn your daily activities into fundraising opportunities for your local community</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-24 h-24 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Of course,</h3>
                <h4 className="text-2xl font-bold text-red-400">it's 50/50</h4>
                <p className="text-gray-400 mt-4">Fair revenue sharing between you and your chosen causes</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-24 h-24 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl">🏃</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Just</h3>
                <h4 className="text-2xl font-bold text-red-400">Run/Membership</h4>
                <p className="text-gray-400 mt-4">Simple membership model that rewards staying active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final App Mockups */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform rotate-1">
              <Image 
                src="/images/share50/features-1.jpg"
                alt="Dashboard Features"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="transform -rotate-1">
              <Image 
                src="/images/share50/features-2.jpg"
                alt="Leaderboard Features"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Explore</h2>
            <h3 className="text-4xl font-bold">More Success Stories</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="/work/tilsig" className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-blue-100 flex items-center justify-center">
                  <span className="text-gray-400">Where2O Cover</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Tilsig – Energy / Flow Monitoring</h4>
                  <div className="flex space-x-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">5-Day Prototype</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Development</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/work/share50" className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-red-100 flex items-center justify-center">
                  <span className="text-gray-400">Man Running</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Share50 – Ad Revenue</h4>
                  <div className="flex space-x-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">5-Day Prototype</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Development</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: 'Share50 - Ad Revenue | SmplCo',
  description: 'Share50 makes it easy for local organisations to raise money without selling anything or asking for donations. SmplCo created the MVP using our 5-Day Prototype service.',
}