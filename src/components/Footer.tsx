import Link from 'next/link'
import Image from 'next/image'

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Academy', href: '/academy' },
  { name: 'About', href: '/about' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog' },
]

const resources = [
  { name: 'AI Integration Playbook', href: '/ai-playbook' },
  { name: 'Attention Is New Gold', href: '/attention-guide' },
  { name: 'Build Your Own Tools', href: '/build-guide' },
  { name: 'Pitch Prep Guide', href: '/pitch-prep' },
  { name: 'Founder Quiz', href: '/investorready' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-main py-12 md:py-16">
        {/* Top row: logo left, nav right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <Link href="/" className="block">
            <Image src="/images/smpl-logo.svg" alt="SmplCo" width={80} height={26} className="h-6 w-auto brightness-0 invert" />
          </Link>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <nav className="flex flex-col gap-3">
              <p className="text-gray-500 text-xs font-satoshi uppercase tracking-wider mb-1">Site</p>
              {footerNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-satoshi"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-3">
              <p className="text-gray-500 text-xs font-satoshi uppercase tracking-wider mb-1">Free resources</p>
              {resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-satoshi"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom row: copyright + socials left, CTA right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <p className="text-gray-500 text-sm">
              Copyright &copy; {new Date().getFullYear()} SmplCo.
              <br />
              All rights reserved. &middot;{' '}
              <Link href="/privacy" className="underline hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/smplcoas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://dribbble.com/SmplCo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.82zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-9.36c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.8 0-1.56.1-2.31.3l-.09.12zm10.14 3.39c-.21.29-1.905 2.49-5.67 4.02.226.46.44.93.645 1.404.073.17.14.335.21.505 3.39-.425 6.75.26 7.09.33-.02-2.42-.88-4.64-2.27-6.26z" />
                </svg>
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white text-sm font-medium rounded-full hover:bg-white hover:text-gray-900 transition-colors font-satoshi"
          >
            Build With Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
