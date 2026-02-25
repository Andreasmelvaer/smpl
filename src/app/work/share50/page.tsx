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
            <div className="relative flex items-center justify-center">
              {/* Runner silhouette */}
              <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl text-red-500">🏃</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
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
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3">
                <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-red-400">Man Walking</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2">
                <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-red-400">Man Riding EV</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-1">
                <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-red-400">Woman Running</span>
                </div>
              </div>
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

      {/* ODEON Section - Dark Theme */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-800 rounded-3xl p-12 shadow-2xl">
            <div className="mb-8">
              <div className="bg-red-500 text-white px-8 py-4 rounded-lg text-2xl font-bold inline-block">
                ODEON
              </div>
              <div className="mt-4 text-gray-400">
                <div className="w-32 h-6 bg-gray-700 rounded mx-auto mb-2"></div>
                <div className="w-24 h-4 bg-gray-700 rounded mx-auto"></div>
              </div>
            </div>
            <div className="text-white space-y-4">
              <h3 className="text-xl font-bold">GO 100%</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Create the ultimate fundraising & exercise platform that turns movement into money for the causes that matter to your community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More App Sections - Red Theme */}
      <section className="relative bg-gradient-to-br from-red-500 to-red-600 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1">
              <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-red-400">Woman In The Garden</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-2">
              <div className="aspect-[9/16] bg-red-500 rounded-2xl flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center">
                    <span className="text-red-500 text-2xl">🏃</span>
                  </div>
                  <p className="text-sm font-medium">Share with your community</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2">
              <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-red-400">Activity Feed</span>
              </div>
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
            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-red-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center">
                    <span className="text-red-500 text-xl">💳</span>
                  </div>
                  <div>
                    <p className="font-bold">Dashboard</p>
                    <p className="text-sm opacity-80">Track your earnings</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-red-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center">
                    <span className="text-red-500 text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-bold">View leaderboard</p>
                    <p className="text-sm opacity-80">Pra individually</p>
                  </div>
                </div>
              </div>
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