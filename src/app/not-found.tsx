import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24">
      <div className="container-main text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/illustrations/smplco-illustration-signpost.png"
            alt=""
            width={160}
            height={160}
            className="opacity-80"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto font-satoshi">
          This page doesn&apos;t exist — but your next big idea might. Let&apos;s get you
          back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
