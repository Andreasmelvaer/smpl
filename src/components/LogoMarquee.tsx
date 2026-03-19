'use client'

import Image from 'next/image'

const logos = [
  { src: '/images/logos/partners/orli-logo.png', alt: 'Orli', w: 100 },
  { src: '/images/logos/partners/zinc-network-logo.png', alt: 'Zinc Network', w: 90, small: true },
  { src: '/images/logos/partners/compera-logo.png', alt: 'Compera', w: 100 },
  { src: '/images/logos/partners/barclays-eagle-labs-logo-framer.png', alt: 'Eagle Labs', w: 160 },
  { src: '/images/logos/partners/w3-schools-logo.png', alt: 'W3Schools', w: 100 },
  { src: '/images/logos/partners/sparebank1-sor-norge-logo.png', alt: 'SpareBank 1', w: 120 },
  { src: '/images/logos/partners/thre360-energy-logo.png', alt: 'thre360', w: 100 },
  { src: '/images/logos/partners/keystone-logo.png', alt: 'Keystone', w: 100 },
  { src: '/images/logos/partners/capital-enterprise-logo-mono.png', alt: 'Capital Enterprise', w: 120 },
]

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden py-8 border-y border-gray-200">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render logos twice for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={40}
              className={`${logo.small ? 'h-5 md:h-6' : 'h-8 md:h-10'} object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              style={{ width: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
