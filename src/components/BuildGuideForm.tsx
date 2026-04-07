'use client'

import { useState, FormEvent } from 'react'

const inputClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent appearance-none'

export default function BuildGuideForm() {
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
      currentTools: formData.get('currentTools'),
    }

    try {
      const res = await fetch('/api/build-guide', {
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
        <h3 className="text-xl font-semibold mb-2">Your guide is ready!</h3>
        <p className="text-gray-700 mb-6">
          Click below to download. We&apos;ve also sent a copy to your inbox.
        </p>
        <a
          href="/downloads/build-your-own-tools-guide.pdf"
          download
          className="inline-block px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Download the Guide
        </a>
      </div>
    )
  }

  return (
    <div className="bg-offwhite rounded-2xl p-8 md:p-10">
      <h3 className="text-xl font-semibold mb-2">Get the free guide</h3>
      <p className="text-sm text-gray-500 font-satoshi mb-6">
        8 pages of practical advice on building internal tools with AI coding assistants and Figma.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            className={inputClass}
            placeholder="Company name (optional)"
          />
        </div>
        <div>
          <input
            type="text"
            name="currentTools"
            className={inputClass}
            placeholder="What tools are you frustrated with? (optional)"
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
