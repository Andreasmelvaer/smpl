'use client'

import { useState, FormEvent } from 'react'
import BookCallPrompt from './BookCallPrompt'

const selectClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent appearance-none'
const inputClass = selectClass

export default function PitchPrepForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [consultation, setConsultation] = useState('no-thanks')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data: Record<string, unknown> = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      consultation: formData.get('consultation'),
    }

    if (consultation === 'investor-ready-audit') {
      data.businessStage = formData.get('businessStage')
      data.raiseAmount = formData.get('raiseAmount')
      data.businessDescription = formData.get('businessDescription')
    } else if (consultation === 'investment-story-audit') {
      data.productStage = formData.get('productStage')
      data.hasPitchDeck = formData.get('hasPitchDeck')
      data.keyMessage = formData.get('keyMessage')
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
        <h3 className="text-xl font-semibold mb-2">Your guide is ready!</h3>
        <p className="text-gray-700 mb-6">
          Click below to download. We&apos;ve also sent a copy to your inbox.
        </p>
        <a
          href="/downloads/pitch-prep-guide.pdf"
          download
          className="inline-block px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Download Pitch Prep Guide
        </a>
        <BookCallPrompt />
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
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Want a free 30-min consultation?
          </label>
          <div className="space-y-2">
            <label className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition-colors has-[:checked]:border-lime has-[:checked]:bg-lime/10">
              <input
                type="radio"
                name="consultation"
                value="investor-ready-audit"
                className="mt-0.5 accent-gray-900"
                onChange={() => setConsultation('investor-ready-audit')}
              />
              <div>
                <span className="text-sm font-medium text-gray-900">Investor-Ready Audit</span>
                <span className="block text-xs text-gray-500">With Neil Wood &amp; Michael Millar. Focus: your journey to landing investment.</span>
              </div>
            </label>
            <label className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition-colors has-[:checked]:border-lime has-[:checked]:bg-lime/10">
              <input
                type="radio"
                name="consultation"
                value="investment-story-audit"
                className="mt-0.5 accent-gray-900"
                onChange={() => setConsultation('investment-story-audit')}
              />
              <div>
                <span className="text-sm font-medium text-gray-900">Investment Story Audit</span>
                <span className="block text-xs text-gray-500">With Michael Millar &amp; Andreas Melvær. Focus: how to best tell your story to investors.</span>
              </div>
            </label>
            <label className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition-colors has-[:checked]:border-lime has-[:checked]:bg-lime/10">
              <input
                type="radio"
                name="consultation"
                value="no-thanks"
                defaultChecked
                className="mt-0.5 accent-gray-900"
                onChange={() => setConsultation('no-thanks')}
              />
              <span className="text-sm text-gray-500">Just the guide, thanks</span>
            </label>
          </div>
        </div>

        {/* Investor-Ready Audit questions */}
        {consultation === 'investor-ready-audit' && (
          <div className="space-y-3 pt-1">
            <p className="text-xs font-medium text-gray-700">A few quick questions so we can prepare:</p>
            <select name="businessStage" className={selectClass} defaultValue="">
              <option value="" disabled>Where is your business?</option>
              <option value="pre-revenue">Pre-revenue</option>
              <option value="some-early-revenue">Some early revenue</option>
              <option value="generating-revenue">Generating revenue</option>
            </select>
            <select name="raiseAmount" className={selectClass} defaultValue="">
              <option value="" disabled>How much are you looking to raise?</option>
              <option value="under-250k">Under £250k</option>
              <option value="250k-1m">£250k – £1m</option>
              <option value="1m-5m">£1m – £5m</option>
              <option value="5m-plus">£5m+</option>
            </select>
            <textarea
              name="businessDescription"
              className={inputClass + ' resize-none'}
              rows={2}
              placeholder="Tell us briefly what your business does"
            />
          </div>
        )}

        {/* Investment Story Audit questions */}
        {consultation === 'investment-story-audit' && (
          <div className="space-y-3 pt-1">
            <p className="text-xs font-medium text-gray-700">A few quick questions so we can prepare:</p>
            <select name="productStage" className={selectClass} defaultValue="">
              <option value="" disabled>What stage is your product?</option>
              <option value="just-an-idea">Just an idea</option>
              <option value="sketches-or-wireframes">Have sketches or wireframes</option>
              <option value="have-a-prototype">Have a prototype</option>
              <option value="mvp-or-live-product">Have an MVP or live product</option>
            </select>
            <select name="hasPitchDeck" className={selectClass} defaultValue="">
              <option value="" disabled>Do you have a pitch deck?</option>
              <option value="yes">Yes</option>
              <option value="working-on-it">Working on it</option>
              <option value="not-yet">Not yet</option>
            </select>
            <textarea
              name="keyMessage"
              className={inputClass + ' resize-none'}
              rows={2}
              placeholder="What do you most want investors to understand?"
            />
          </div>
        )}

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
