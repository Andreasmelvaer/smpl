import Image from "next/image";
import type { Metadata } from "next";
import ShimmerGrid from "@/components/ShimmerGrid";

export const metadata: Metadata = {
  title: "Book a Discovery Call | SmplCo",
  description:
    "Schedule a free 30-minute discovery call with the SmplCo team. We'll explore your idea, challenge, or project and map out next steps.",
  alternates: { canonical: "https://smpl.as/book" },
  openGraph: {
    title: "Book a Discovery Call | SmplCo",
    description:
      "Schedule a free 30-minute discovery call with the SmplCo team.",
    url: "https://smpl.as/book",
  },
};

const BOOKING_URL =
  "https://calendar.app.google/kTDEUizw376ypQ3T9";

const steps = [
  {
    num: "1",
    title: "Pick a time",
    desc: "Choose a slot that works for you. We check both calendars so the time is guaranteed.",
  },
  {
    num: "2",
    title: "Quick intro call",
    desc: "30 minutes with Andreas and Mike. No pitch, just a conversation about your idea.",
  },
  {
    num: "3",
    title: "Clear next steps",
    desc: "Walk away with honest feedback, a rough scope, and a plan if there's a fit.",
  },
];

export default function BookPage() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-44 relative overflow-hidden bg-offwhite">
        <ShimmerGrid />
        <div className="container-main text-center relative z-10">
          <Image
            src="/images/illustrations/smplco-illustration-speech-bubbles.png"
            alt="Book a discovery call with SmplCo"
            width={700}
            height={400}
            className="w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px] h-auto mx-auto"
            priority
          />
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Book a Discovery Call
            </h1>
            <p className="text-gray-600 font-satoshi text-lg leading-relaxed max-w-xl mx-auto">
              A free 30-minute call with Andreas and Mike to explore your idea,
              challenge, or project. No obligations, no sales pitch.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-20">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white text-base font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Choose a Time
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <p className="text-xs text-gray-400 mt-3 font-satoshi">
              Opens Google Calendar &middot; Pick any available slot
            </p>
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <span className="inline-flex w-10 h-10 rounded-full bg-lime text-sm font-bold items-center justify-center mb-4">
                  {step.num}
                </span>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 font-satoshi text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* DETAILS */}
          <div className="bg-offwhite rounded-2xl p-8 md:p-12">
            <h2 className="text-xl font-semibold mb-6">What to expect</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm font-satoshi text-gray-600">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-900 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>30 minutes, no more</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-900 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span>Google Meet video call</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-900 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <span>With Andreas &amp; Mike</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-900 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <span>Completely free, no strings</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
