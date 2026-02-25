import Image from 'next/image'

export default function Nucase() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#B8F542] to-[#9EE62F] px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-black">nucase</h1>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-black">Nucase — Home Renovation</h2>
                <div className="space-y-4 text-lg text-black">
                  <p>
                    <strong>NuCase</strong> takes the (unpleasant!) surprises out of planning home renovations, making the process fast and effortless.
                  </p>
                  <p>
                    We took Nucase from concept to market in just 5 weeks, using our{' '}
                    <strong>5-Day Prototype</strong>, <strong>Strategic Business Advisory</strong>, and{' '}
                    <strong>Digital Design as a Service</strong>. The platform smashed its launch targets, 
                    building a solid market presence and hitting 10,000 visitors in just over a month.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">UI/UX design</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Branding</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Prototype</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Illustration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 border-2 border-black rounded-full opacity-30"></div>
              <div className="absolute -bottom-5 -left-5 w-12 h-12 border-2 border-black rounded-full opacity-30"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-black rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
        {/* Abstract decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-black opacity-20 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-black opacity-20 transform -rotate-12"></div>
      </section>

      {/* App Mockups Section 1 */}
      <section className="relative bg-gradient-to-br from-[#B8F542] to-[#9EE62F] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl transform rotate-3">
                <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Home Screen UI</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl transform -rotate-2">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Modal Beaver</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-xl transform rotate-1">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Modal Entrance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-8 h-8 bg-black rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-6 h-6 bg-black rounded-full opacity-20"></div>
      </section>

      {/* 3D Building Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-80 bg-gray-200 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
              <span className="text-gray-400">3D Building Model</span>
            </div>
            {/* Decorative elements around 3D model */}
            <div className="absolute -top-5 -left-5 w-10 h-10 border-2 border-gray-400 rounded-full opacity-40"></div>
            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-2 border-gray-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </section>

      {/* App Mockups Section 2 */}
      <section className="relative bg-gradient-to-br from-[#B8F542] to-[#9EE62F] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl transform -rotate-2">
                <div className="aspect-[9/16] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Screen UI 2</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl transform rotate-1">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Beaver Nap</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-xl transform -rotate-1">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Can We Fix it? Yes We Can!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Mockup Section */}
      <section className="relative bg-gradient-to-br from-[#B8F542] to-[#9EE62F] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative inline-block">
            <div className="w-64 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center">
                <span className="text-gray-400 text-sm">Phone Mockup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Review</h2>
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-2xl text-gray-600 italic mb-8">
              "SmplCo delivered my product, Nucase, seamlessly."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-400">Photo</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Petter Støldal</h3>
                <p className="text-gray-600">Founder, Nucase</p>
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
  title: 'Nucase - Home Renovation | SmplCo',
  description: 'NuCase takes the surprises out of planning home renovations. SmplCo delivered from concept to market in 5 weeks using our 5-Day Prototype and Strategic Business Advisory.',
}