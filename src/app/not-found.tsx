import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="text-center max-w-lg px-6">
        <p className="text-sm font-mono text-gray-400 mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/work"
            className="inline-block px-6 py-3 bg-lime text-gray-900 rounded-full text-sm font-medium hover:bg-lime-bright transition-colors"
          >
            View our work
          </Link>
        </div>
      </div>
    </div>
  )
}
