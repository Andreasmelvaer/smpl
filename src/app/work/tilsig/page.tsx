import Image from 'next/image'

export default function Tilsig() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Technical Diagram */}
      <section className="relative min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Tilsig</h1>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Tilsig – Energy / Flow Monitoring</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Tilsig specialises in real-time water monitoring for the hydropower industry, enabling 
                    customers to reliably and accurately capture, then analyse, essential water level data. 
                    In just <strong>five days</strong>, we helped Tilsig <strong>prototype</strong> a comprehensive 
                    vision for a solution to integrate robust IoT sensors and encrypted data transmission into 
                    an intuitive digital product.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">UI/UX Design</span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Prototyping</span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Branding</span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Energy</span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Landing Page</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/tilsig/hydropower-plant.jpg"
                alt="Hydropower Plant Diagram"
                width={847}
                height={167}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Tablet Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <Image 
              src="/images/tilsig/dashboard-cover.jpg"
              alt="Dashboard Cover"
              width={672}
              height={378}
              className="w-full max-w-3xl h-auto rounded-3xl shadow-2xl mx-auto transform rotate-3"
            />
          </div>
        </div>
      </section>

      {/* Data Tables and Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform -rotate-1">
              <Image 
                src="/images/tilsig/unit-status.jpg"
                alt="Unit Status"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="transform rotate-1">
              <Image 
                src="/images/tilsig/water-depth.jpg"
                alt="Water Depth"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schematics and Technical Views */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image 
            src="/images/tilsig/schematics.jpg"
            alt="System Schematics"
            width={847}
            height={477}
            className="w-full h-auto rounded-3xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Final Analytics Dashboard */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform rotate-1">
              <Image 
                src="/images/tilsig/dalen-2.jpg"
                alt="Analytics Dashboard"
                width={600}
                height={360}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="transform -rotate-1">
                <Image 
                  src="/images/tilsig/weather-forecast.jpg"
                  alt="Weather Forecast"
                  width={292}
                  height={300}
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </div>
              <div className="transform rotate-2">
                <Image 
                  src="/images/tilsig/icons.jpg"
                  alt="Control Icons"
                  width={292}
                  height={300}
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
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
  title: 'Tilsig - Energy / Flow Monitoring | SmplCo',
  description: 'Tilsig specialises in real-time water monitoring for the hydropower industry. SmplCo helped prototype a comprehensive vision integrating IoT sensors and encrypted data transmission.',
}