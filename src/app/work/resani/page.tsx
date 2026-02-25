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
              <Image 
                src="/images/resani/woman-lips-hero.jpg"
                alt="Resani Hero - Woman"
                width={847}
                height={167}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Tablet Mockup Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <Image 
              src="/images/resani/resani-top-mockup.jpg"
              alt="Resani Top Mockup"
              width={600}
              height={360}
              className="w-full max-w-3xl h-auto rounded-3xl shadow-2xl mx-auto transform rotate-12"
            />
          </div>
        </div>
      </section>

      {/* Mobile App Sections */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform rotate-2">
              <Image 
                src="/images/resani/woman.jpg"
                alt="Woman"
                width={600}
                height={360}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="transform -rotate-1">
              <Image 
                src="/images/resani/woman-side-pose.jpg"
                alt="Woman Side Pose"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="transform rotate-1">
              <Image 
                src="/images/resani/woman-look-camera.jpg"
                alt="Woman Look Into The Camera"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image 
            src="/images/resani/resani-home-screen.jpg"
            alt="Resani Home Screen"
            width={600}
            height={360}
            className="w-full max-w-3xl h-auto rounded-3xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Illustration Section */}
      <section className="py-20 bg-gradient-to-br from-purple-200 to-pink-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image 
            src="/images/resani/resani-illustration.jpg"
            alt="Resani Illustration"
            width={847}
            height={476}
            className="w-full h-auto rounded-3xl shadow-xl mx-auto"
          />
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
            <div className="transform rotate-1">
              <Image 
                src="/images/resani/resani-ui-3.jpg"
                alt="Resani UI 3"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="transform -rotate-1">
              <Image 
                src="/images/resani/resani-ui-4.jpg"
                alt="Resani UI 4"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
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
              <Image 
                src="/images/resani/andrew-smith.jpg"
                alt="Andrew Smith Profile Picture"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
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