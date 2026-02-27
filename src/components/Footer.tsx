import Link from 'next/link'

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: '5 Day Prototype', href: '/about' },
    { name: 'Product Development', href: '/about' },
    { name: 'Product Marketing', href: '/about' },
  ],
  locations: [
    'Stavanger, Norway',
    'London, UK',
    'San Francisco, USA',
    'Szeged, Hungary',
    'St. Gallen, Switzerland',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-main py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Smpl Co
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed font-satoshi">
              From Post-it to product. We help startups and enterprises prototype
              and build smart digital products in weeks.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-satoshi"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-satoshi"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Offices
            </h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((location) => (
                <li key={location} className="text-gray-400 text-sm font-satoshi">
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Smpl Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/smplco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
