import { getPostData } from '@/lib/markdown'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getPostData('pages', 'about')
    return generatePageMetadata(data)
  } catch {
    return { title: 'About Us' }
  }
}

export default async function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We&apos;re a group of <span className="font-editorial">digital experts</span> from the four corners of the
            globe
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deeply passionate about bringing Big Ideas to life and making magic
            happen. Founded by international entrepreneurs who have built, sold
            and invested in digital companies.
          </p>
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How we work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Talk to us',
                desc: 'Every great product starts with a conversation. We dive into your vision, challenges, and goals, collaborating through discussions and workshops.',
              },
              {
                step: '02',
                title: '5 Day Prototype',
                desc: 'In just five days, we transform your idea into a high-fidelity, clickable prototype ready to wow stakeholders and investors.',
              },
              {
                step: '03',
                title: 'Product Development',
                desc: 'From MVP to full product, we build with modern tools including AI-assisted development for speed without sacrificing quality.',
              },
              {
                step: '04',
                title: 'Launch & Grow',
                desc: 'With deep expertise in SaaS entrepreneurship, we help position your product for a successful launch and sustainable growth.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-offwhite rounded-2xl p-8">
                <span className="text-sm font-mono text-gray-400 mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why <span className="highlight">5 Day Prototype</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { title: 'Risk reduction', desc: 'Test and validate ideas early before committing major resources.' },
              { title: 'Speed', desc: 'Lay foundations for rapid MVP development in days, not months.' },
              { title: 'Cost efficiency', desc: 'Learn fast without big investment — perfect for funding rounds.' },
              { title: 'Alignment', desc: 'All stakeholders get clear visibility into the product vision.' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-lime mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services overview */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Full-stack product services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Design & Prototype',
                items: ['UI/UX Design', 'High-fidelity prototypes', 'Clickable demos', 'Stakeholder presentations'],
              },
              {
                title: 'Build & Ship',
                items: ['MVP development', 'AI-assisted coding', 'Technical implementation', 'Quality assurance'],
              },
              {
                title: 'Launch & Market',
                items: ['Go-to-market strategy', 'Website & landing pages', 'Video production', 'Marketing materials'],
              },
            ].map((service) => (
              <div key={service.title} className="bg-offwhite rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-lime-bright mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let&apos;s build something great
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Whether you have a rough idea or a detailed plan, we&apos;re here to
            help you move fast and build smart.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-lime text-gray-900 text-sm font-semibold rounded-full hover:bg-lime-bright transition-colors"
          >
            Get a free consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
