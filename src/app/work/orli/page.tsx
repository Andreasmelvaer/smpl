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
              <Image 
                src="/images/orli/orli-face-cover.jpg"
                alt="Orli Characters"
                width={847}
                height={167}
                className="w-full h-auto"
                priority
              />
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
            <div className="transform rotate-2">
              <Image 
                src="/images/orli/orli-ui-pink.jpg"
                alt="Orli UI Element Pink"
                width={600}
                height={360}
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="transform -rotate-1">
              <Image 
                src="/images/orli/school-card-ui.jpg"
                alt="School Card UI"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="transform rotate-1">
              <Image 
                src="/images/orli/social-card-ui.jpg"
                alt="Social Card UI"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-xl"
              />
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
          <div className="text-center">
            <Image 
              src="/images/orli/orli-ui-green.jpg"
              alt="Orli UI Element Green"
              width={672}
              height={378}
              className="w-full max-w-4xl h-auto rounded-3xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image 
            src="/images/orli/orli-cards.jpg"
            alt="Orli Feature Cards"
            width={847}
            height={477}
            className="w-full h-auto rounded-3xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image 
            src="/images/orli/dashboard-1.jpg"
            alt="Dashboard Analytics"
            width={672}
            height={378}
            className="w-full max-w-3xl h-auto rounded-3xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Final UI Elements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform rotate-1">
              <Image 
                src="/images/orli/ui-elements-1.jpg"
                alt="UI Elements 1"
                width={292}
                height={300}
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="transform -rotate-1">
              <Image 
                src="/images/orli/ui-elements-2.jpg"
                alt="UI Elements 2"
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
              "Their ability to listen, communicate and transform complex ideas into reality meant that 
              we came away from our project as very happy bunnies - especially as our prototype played 
              a huge role in us securing investment."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image 
                src="/images/orli/dr-mark-cox.png"
                alt="Dr. Mark Cox Profile Picture"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full"
              />
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