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
              {/* Technical diagram mockup */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  {/* Hydropower plant diagram */}
                  <div className="text-center">
                    <div className="inline-block bg-blue-100 rounded-xl p-4 mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-2xl">⚡</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-blue-600">Hydropower plant</p>
                  </div>
                  
                  {/* Connection lines and sensors */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-lg">📊</span>
                      </div>
                      <p className="text-xs text-purple-600">Pump 2</p>
                      <p className="text-xs text-gray-500">Monitoring</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-lg">💧</span>
                      </div>
                      <p className="text-xs text-blue-600">Water level</p>
                      <p className="text-xs text-gray-500">Sensor</p>
                    </div>
                  </div>
                </div>
                
                {/* Connection lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    <path 
                      d="M200,80 L120,180 M200,80 L280,180" 
                      stroke="#6366f1" 
                      strokeWidth="2" 
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Tablet Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl transform rotate-3 inline-block">
              <div className="w-96 h-72 bg-white rounded-2xl p-6 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-left">Dashboard Overview</h3>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-blue-600 font-medium">Water Flow</p>
                      <p className="text-lg font-bold text-blue-800">1,247 L/s</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs text-purple-600 font-medium">Pressure</p>
                      <p className="text-lg font-bold text-purple-800">2.3 bar</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-20 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Real-time Chart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Tables and Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Unit Status</h3>
              <div className="space-y-3">
                {[
                  { unit: 'Unit Alpha', status: 'Operational', value: '98.2%' },
                  { unit: 'Unit Beta', status: 'Maintenance', value: '0%' },
                  { unit: 'Unit Gamma', status: 'Operational', value: '94.7%' },
                  { unit: 'Unit Delta', status: 'Operational', value: '99.1%' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-gray-900">{item.unit}</p>
                      <p className="text-sm text-gray-500">{item.status}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Operational' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center">
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Error</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-red-600">Water depth</p>
                      <p className="text-2xl font-bold text-red-800">108.40</p>
                    </div>
                    <div>
                      <p className="text-sm text-red-600">Threshold exceeded</p>
                      <p className="text-xl font-bold text-red-800">107.25</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-2">Water Flow</p>
                  <p className="text-lg font-semibold text-blue-800">Normal Range</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schematics and Technical Views */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">System Overview</h3>
              <div className="space-y-4">
                {[
                  { label: 'Intake A1', value: '847 m³/h', status: 'active' },
                  { label: 'Intake B2', value: '623 m³/h', status: 'active' },
                  { label: 'Intake C3', value: '901 m³/h', status: 'active' },
                  { label: 'Intake D4', value: '0 m³/h', status: 'maintenance' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                      <span className="font-medium text-gray-900">{item.label}</span>
                    </div>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Weather Forecast</span>
                  <div className="flex space-x-2">
                    <span className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs">☀</span>
                    <span className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center text-white text-xs">☁</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">System Schematic</h3>
              <div className="relative bg-blue-50 rounded-xl p-6 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full max-w-48 max-h-32" viewBox="0 0 200 100">
                    {/* Main pipeline */}
                    <rect x="20" y="45" width="160" height="10" fill="#3b82f6" rx="5"/>
                    
                    {/* Sensors */}
                    <circle cx="60" cy="30" r="8" fill="#8b5cf6"/>
                    <circle cx="100" cy="30" r="8" fill="#8b5cf6"/>
                    <circle cx="140" cy="30" r="8" fill="#8b5cf6"/>
                    
                    {/* Connection lines */}
                    <line x1="60" y1="38" x2="60" y2="45" stroke="#6b7280" strokeWidth="2"/>
                    <line x1="100" y1="38" x2="100" y2="45" stroke="#6b7280" strokeWidth="2"/>
                    <line x1="140" y1="38" x2="140" y2="45" stroke="#6b7280" strokeWidth="2"/>
                    
                    {/* Flow direction */}
                    <polygon points="170,50 185,45 185,55" fill="#3b82f6"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between text-xs text-gray-600">
                  <span>Intake</span>
                  <span>Monitoring Points</span>
                  <span>Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Analytics Dashboard */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Analytics Dashboard</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg p-3 mb-2">
                      <p className="text-2xl font-bold text-blue-800">108.40</p>
                    </div>
                    <p className="text-xs text-gray-600">Current Level</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 rounded-lg p-3 mb-2">
                      <p className="text-2xl font-bold text-red-800">Error</p>
                    </div>
                    <p className="text-xs text-gray-600">Status</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-3 mb-2">
                      <p className="text-2xl font-bold text-green-800">12</p>
                    </div>
                    <p className="text-xs text-gray-600">Active Units</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400">Flow Rate Chart</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Control Panel</h3>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">ON</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-6">
                  {['⚙️', '📊', '🔧', '⚠️', '📋', '🔄'].map((icon, index) => (
                    <button key={index} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center">
                      <span className="text-xl">{icon}</span>
                    </button>
                  ))}
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
  title: 'Tilsig - Energy / Flow Monitoring | SmplCo',
  description: 'Tilsig specialises in real-time water monitoring for the hydropower industry. SmplCo helped prototype a comprehensive vision integrating IoT sensors and encrypted data transmission.',
}