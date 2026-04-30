'use client'

import { useState, FormEvent } from 'react'
import BookCallPrompt from './BookCallPrompt'

const inputClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent appearance-none'

export default function AttentionGuideForm() {
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
      biggestChallenge: formData.get('biggestChallenge'),
      wantsConsultation: formData.get('wantsConsultation') === 'on',
    }

    try {
      const res = await fetch('/api/attention-guide', {
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
        <img
          src="/images/attention-guide-promo.png"
          alt="Attention Is New Gold guide"
          className="w-40 mx-auto rounded-lg mb-6"
        />
        <h3 className="text-xl font-semibold mb-2">Your guide is ready!</h3>
        <p className="text-gray-700 mb-6">
          Click below to download. We&apos;ve also sent a copy to your inbox.
        </p>
        <a
          href="/downloads/attention-is-new-gold.pdf"
          download
          className="inline-block px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Download the Guide
        </a>
        <BookCallPrompt />
      </div>
    )
  }

  return (
    <div className="bg-offwhite rounded-2xl p-8 md:p-10">
      <h3 className="text-xl font-semibold mb-2">Get the free guide</h3>
      <p className="text-sm text-gray-500 font-satoshi mb-6">
        6 pages of practical frameworks — TRUTH storytelling, behavioural science, and field lessons from real brand-building.
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
            name="biggestChallenge"
            className={inputClass}
            placeholder="Your biggest attention challenge? (optional)"
          />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="wantsConsultation"
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-lime accent-lime cursor-pointer"
          />
          <span className="text-sm text-gray-600 font-satoshi">
            I&apos;d also like a <strong>free consultation</strong> on brand & storytelling
          </span>
        </label>
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
      </form>
    </div>
  )
}
