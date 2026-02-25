import Image from 'next/image'

export default function Resani() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-purple-600">Resani</h1>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Resani – Hygiene</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Resani's existing platform focused on <strong>hand hygiene monitoring</strong> in healthcare settings. 
                    We worked with them to enhance their system, creating a more intuitive, data-driven prototype that 
                    improved how healthcare facilities track and manage hygiene practices.
                  </p>
                  <p>
                    Our 5 Day Prototype enhanced the <strong>visual representation</strong> of hand hygiene data, 
                    providing clearer insights into compliance and performance.
                  </p>
                  <blockquote className="border-l-4 border-purple-400 pl-6 italic text-gray-600">
                    "The 5-day prototype with SmplCo played a key role in shaping the core value of the company. 
                    The visual effects kick started a new journey for us, which is differentiating us from our competitors."
                    <br />
                    <strong className="text-purple-600">— Kine Norland</strong>, Head of Growth
                  </blockquote>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">UI/UX Design</span>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Prototyping</span>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Branding</span>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Illustration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Gradient blob decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-full opacity-60 absolute top-10 right-10"></div>
                <div className="w-12 h-12 bg-pink-400 rounded-full opacity-40 absolute bottom-20 left-10"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full opacity-50 absolute top-32 left-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tablet Mockup Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl transform rotate-12 inline-block">
              <div className="w-96 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl p-8 flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-gray-800 mb-4">50%</div>
                <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Sections */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="aspect-[9/16] bg-gradient-to-b from-purple-100 to-white rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Hygiene Status</h3>
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Wash hands', 'Sanitize area', 'Check temp', 'Daily check'].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-purple-50 rounded-xl p-4">
                    <p className="text-sm text-purple-800 font-medium">Daily Goal 8/8</p>
                    <p className="text-xs text-purple-600">Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl opacity-30 blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg h-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 rounded-full opacity-80 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Hygiene Data Analytics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">Hand wash compliance</span>
                    <span className="font-bold text-purple-600">92%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="text-sm text-gray-700">Daily completions</span>
                    <span className="font-bold text-pink-600">847</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">Active locations</span>
                    <span className="font-bold text-purple-600">23</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-70 blur-lg"></div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Real-time Monitoring</h3>
                <div className="space-y-3">
                  {['Station A', 'Station B', 'Station C', 'Station D'].map((station, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">{station}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-gray-600">Active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Gradient Section */}
      <section className="py-32 bg-gradient-to-br from-purple-200 to-pink-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 rounded-full mx-auto opacity-60 blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-80 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Mockup Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl transform -rotate-6 inline-block">
              <div className="w-96 h-64 bg-white rounded-2xl p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl">🧼</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Resani Dashboard</h3>
                  <p className="text-sm text-gray-600">Healthcare Hygiene Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final UI Components */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">20</div>
                  <p className="text-sm text-gray-600">Active Stations</p>
                </div>
                <div className="space-y-3">
                  {['Medical Unit A', 'Surgery Wing', 'ICU Station', 'Emergency'].map((unit, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700">{unit}</span>
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Online</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 text-center">Compliance Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-purple-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <p className="text-xs text-purple-600">Today</p>
                  </div>
                  <div className="text-center bg-pink-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-pink-600">94%</div>
                    <p className="text-xs text-pink-600">Week</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl h-24 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Compliance Chart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Review</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl text-gray-600 italic mb-8">
              "Our 5 Day Prototype helped us finally see something we had been dreaming of, and allowed us to 
              understand how our digital future could look, feel and work."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-400">Photo</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Andrew Smith</h3>
                <p className="text-gray-600">Senior Designer, Resani</p>
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
  title: 'Resani - Hygiene | SmplCo',
  description: 'Resani focuses on hand hygiene monitoring in healthcare settings. SmplCo enhanced their system with a 5-Day Prototype, creating more intuitive, data-driven hygiene tracking.',
}