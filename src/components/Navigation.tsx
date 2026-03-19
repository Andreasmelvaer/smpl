'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Academy', href: '/academy' },
  { name: 'About', href: '/about' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog' },
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

  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const isContactActive = pathname === '/contact'

  const updatePill = useCallback(() => {
    const activeIndex = navigationItems.findIndex((item) => isActive(item.href))
    const activeEl = itemRefs.current[activeIndex]
    const navEl = navRef.current
    if (activeEl && navEl && !isContactActive) {
      const navRect = navEl.getBoundingClientRect()
      const itemRect = activeEl.getBoundingClientRect()
      setPillStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
        opacity: 1,
      })
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
    }
  }, [pathname])

  useLayoutEffect(() => {
    updatePill()
  }, [updatePill])

  useEffect(() => {
    window.addEventListener('resize', updatePill)
    return () => window.removeEventListener('resize', updatePill)
  }, [updatePill])

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
            <Image src="/images/smpl-logo.svg" alt="SmplCo" width={80} height={26} className="h-6 w-auto" />
          </Link>

          <nav ref={navRef} className="hidden md:flex items-center gap-6 relative">
            <div
              className="absolute top-0 h-full rounded-full bg-gray-900 transition-all duration-300 ease-in-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />
            {navigationItems.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                ref={(el) => { itemRefs.current[i] = el }}
                className={`relative z-10 text-sm font-medium transition-colors duration-200 font-satoshi px-3 py-1.5 rounded-full ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`relative z-10 ml-2 inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 font-satoshi ${
                isContactActive
                  ? 'bg-gray-900 text-white ring-2 ring-gray-900 ring-offset-2'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Contact Us
            </Link>
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

      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-white z-40 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-1">
          {navigationItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-2xl font-medium py-3 transition-all duration-300 ${
                isActive(item.href) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-full transition-all duration-300"
            style={{
              transitionDelay: mobileOpen ? `${navigationItems.length * 50}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
            }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
