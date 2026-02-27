'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navigationItems = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-[60px] md:h-[56px]">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
          >
            Smpl Co
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 font-satoshi ${
                  isActive(item.href)
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-gray-900"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40">
          <nav className="flex flex-col px-6 py-8 gap-1">
            <Link
              href="/"
              className={`text-2xl font-medium py-3 transition-colors ${
                pathname === '/' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl font-medium py-3 transition-colors ${
                  isActive(item.href) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
