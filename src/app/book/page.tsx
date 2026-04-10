import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Discovery Call | SmplCo',
  description:
    'Schedule a free 30-minute discovery call with the SmplCo team. We'll explore your idea, challenge, or project and see how we can help.',
  alternates: { canonical: 'https://smpl.as/book' },
}

const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2dNE4ZRcGeXoTEiwHFiLghkuATnFoBjS0XGzQF-nIRvKgvDjDymlIk4104XK0pHlUGWfaspmNp?gv=true'

export default function BookPage() {
  redirect(BOOKING_URL)
}
