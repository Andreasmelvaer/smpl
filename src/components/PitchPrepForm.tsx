'use client'

import { useState, FormEvent } from 'react'

export default function PitchPrepForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
    }

    try {
      const res = await fetch('/api/pitch-prep', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-lime rounded-2xl p-8 md:p-10 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold mb-2">Check your inbox!</h3>
        <p className="text-gray-700 mb-6">
          We&apos;ve sent the Pitch Prep Guide Pack to your email.
        </p>
        <a
          href="/downloads/pitch-prep-guide.pdf"
          download
          className="inline-block px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Download now
        </a>
      </div>
    )
  }

  return (
    <div className="bg-offwhite rounded-2xl p-8 md:p-10">
      <h3 className="text-xl font-semibold mb-2">Get the free guide</h3>
      <p className="text-sm text-gray-500 font-satoshi mb-6">
        Enter your details and we&apos;ll send you the full 10-page Pitch Prep Guide Pack.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
            placeholder="Company name (optional)"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send me the guide'}
        </button>
        {status === 'error' && (
          <p className="text-sm text-red-500 text-center">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-xs text-gray-400 text-center">
          No spam, no sales pitch. Just the guide.
        </p>
      </form>
    </div>
  )
}
