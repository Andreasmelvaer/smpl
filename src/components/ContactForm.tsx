'use client'

import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      interest: formData.get('interest'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Something went wrong')
      }

      setStatus('sent')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-offwhite rounded-2xl p-12 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-bold mb-2">Message sent!</h3>
        <p className="text-gray-600 font-satoshi">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Company{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
          placeholder="Your company"
        />
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          What are you interested in?
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow appearance-none"
        >
          <option value="">Select an option</option>
          <option value="5-day-prototype">5 Day Prototype</option>
          <option value="design-service">Design as a Service</option>
          <option value="mvp-development">MVP Development</option>
          <option value="marketing">Marketing &amp; Go-to-Market</option>
          <option value="consultation">Free Consultation</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Tell us about your idea
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow resize-none"
          placeholder="What are you building? Where are you at? How can we help?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600 text-center font-satoshi">
          {errorMsg || 'Something went wrong. Please try again.'}
        </p>
      )}

      <p className="text-xs text-gray-400 text-center font-satoshi">
        We&apos;ll get back to you within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
