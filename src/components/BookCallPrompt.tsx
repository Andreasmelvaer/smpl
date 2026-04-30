import Link from 'next/link'

/**
 * Shown in the success state of every contact / lead-magnet form.
 * Soft prompt offering a same-day booking with the founders for users
 * who'd rather not wait for an email reply.
 */
export default function BookCallPrompt() {
  return (
    <div className="mt-6 pt-6 border-t border-gray-900/10 text-center">
      <p className="text-sm text-gray-700 mb-3">
        Want to talk right now? You can book a call with the founders directly in their calendars.
      </p>
      <Link
        href="/book"
        className="inline-block px-6 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-900/15 hover:bg-gray-50 transition-colors"
      >
        Book a call &rarr;
      </Link>
    </div>
  )
}
