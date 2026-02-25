import Image from 'next/image'

export default function Orli() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Floating Characters */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-black">orli</h1>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-black">Orli – Mental Health</h2>
                <div className="space-y-4 text-lg text-black">
                  <p>
                    <strong>Orli</strong> is helping alleviate the UK's mental health crisis, using an AI-driven, 
                    emotional support platform that is backed by science and built to unlock children's potential.
                  </p>
                  <p>
                    Using our <strong>5-Day Prototype</strong> service, we designed an intuitive platform that 
                    not only helps kids, but gives Orli multiple opportunities to engage with partners & customers, 
                    ranging from schools, to local authorities, and the NHS.
                  </p>
                  <p>
                    As a result of our work together, Orli landed investment and a place on the UK's highly-regarded 
                    Bethnal Green Ventures accelerator programme.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">UI/UX Design</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Branding</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Prototype</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Illustration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Floating character elements */}
              <div className="absolute -top-10 -right-10 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">😊</span>
              </div>
              <div className="absolute -bottom-5 -left-5 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">😌</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">😄</span>
              </div>
              <div className="absolute top-20 left-10 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">😍</span>
              </div>
              <div className="absolute bottom-20 right-20 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🥰</span>
              </div>
            </div>
          </div>
        </div>
        {/* More floating elements */}
        <div className="absolute top-10 left-1/4 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-red-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-1/4 w-5 h-5 bg-indigo-400 rounded-full opacity-70"></div>
      </section>

      {/* App Mockups Section 1 - Pink Theme */}
      <section className="relative bg-gradient-to-br from-pink-200 to-pink-300 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-xl transform rotate-2">
              <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Orli UI Element Pink</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-xl transform -rotate-1">
              <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">School Card UI</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-xl transform rotate-1">
              <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Social Card UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School/Chat Partnerships Section - Purple Theme */}
      <section className="relative bg-gradient-to-br from-purple-400 to-purple-500 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl transform -rotate-2">
              <div className="aspect-[9/16] bg-purple-100 rounded-2xl flex items-center justify-center">
                <span className="text-purple-400">School or Chat Partnerships</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl transform rotate-2">
              <div className="aspect-[9/16] bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-blue-400">Social Wellbeing</span>
              </div>
            </div>
          </div>
        </div>
        {/* Character decorations */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center opacity-80">
          <span className="text-white">😊</span>
        </div>
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center opacity-80">
          <span className="text-white">😌</span>
        </div>
      </section>

      {/* Chat Interface Section - Green Theme */}
      <section className="relative bg-gradient-to-br from-green-200 to-green-300 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-xl transform rotate-1">
              <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Orli UI Element Green</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-xl transform -rotate-2">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Reading List for Kids</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-xl transform rotate-2">
              <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Chat Interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Purple Theme */}
      <section className="relative bg-gradient-to-br from-purple-300 to-purple-400 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Chat Challenges',
              'School Wellbeing',
              'Mood Tracking',
              'Daily Exercises',
              'Parent Dashboard',
              'Teacher Tools',
              'Progress Reports',
              'Safe Space'
            ].map((feature, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">😊</span>
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section - Blue Theme */}
      <section className="relative bg-gradient-to-br from-blue-200 to-blue-300 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl transform -rotate-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Dashboard Analytics</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl transform rotate-1">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Progress Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final UI Elements - Light Theme */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg transform rotate-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                <span className="text-purple-400">UI Elements 1</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg transform -rotate-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                <span className="text-orange-400">UI Elements 2</span>
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
              "Their ability to listen, communicate and transform complex ideas into reality meant that 
              we came away from our project as very happy bunnies - especially as our prototype played 
              a huge role in us securing investment."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-400">Photo</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dr. Mark Cox</h3>
                <p className="text-gray-600">Co-founder Orli</p>
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
  title: 'Orli - Mental Health | SmplCo',
  description: 'Orli is helping alleviate the UK\'s mental health crisis with an AI-driven emotional support platform for children. SmplCo designed the platform using our 5-Day Prototype service.',
}