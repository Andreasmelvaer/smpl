import { getPostData } from '@/lib/markdown'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

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
          <p className="text-lg text-gray-600 leading-relaxed font-satoshi">
            Deeply passionate about bringing Big Ideas to life and making magic
            happen. Founded by international entrepreneurs who have built, sold
            and invested in digital companies.
          </p>
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How we work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Conversation & Workshops',
                desc: 'Every great product starts with a conversation. We dive into your vision, challenges, and goals, collaborating through discussions and workshops to turn ideas into a solid concept.',
              },
              {
                step: '02',
                title: '5-Day Prototype',
                desc: 'In just five days, we transform your idea into a high-fidelity, clickable prototype that is ready to wow stakeholders and investors.',
              },
              {
                step: '03',
                title: 'Design as a Service',
                desc: 'Our ultra-lean Design as a Service gives you the expert resources you need to design your MVP. You get a full design team for the cost of a single designer.',
              },
              {
                step: '04',
                title: 'Development',
                desc: 'We partner with highly skilled developers to transform your prototype into a functional product. Our network of experienced, AI-powered engineers ensures a smooth and efficient development process.',
              },
              {
                step: '05',
                title: 'Marketing',
                desc: 'A great product deserves great marketing. We create high-quality websites, compelling videos, and a full suite of marketing materials to showcase your product.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-offwhite rounded-2xl p-8">
                <span className="text-sm font-mono text-gray-400 mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-satoshi">
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
                  <p className="text-gray-600 text-sm font-satoshi">{benefit.desc}</p>
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
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2 font-satoshi">
                      <span className="text-pink mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Meet the <span className="font-editorial">team</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: '/images/team/team-fullbody-man-cap-glasses.jpg', name: 'Andreas Melvær', role: 'Founder & CEO' },
              { src: '/images/team/team-woman-dark-hair-bw.jpg', name: 'Line Hjartarson', role: 'Design' },
              { src: '/images/team/team-man-glasses-bw.jpg', name: 'Michael Millar', role: 'Content & Growth' },
              { src: '/images/team/team-woman-business-outdoor.jpg', name: 'Team Member', role: 'Strategy' },
            ].map((member) => (
              <div key={member.name + member.role} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                  <Image src={member.src} alt={`${member.name} — ${member.role} at SmplCo`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-gray-500 text-xs font-satoshi">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let&apos;s build something great
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto font-satoshi">
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
