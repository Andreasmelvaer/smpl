import Link from 'next/link'
import { getAllPostsData } from '@/lib/markdown'

export default async function HomePage() {
  const blogPosts = await getAllPostsData('blog')
  const workProjects = await getAllPostsData('work')
  const latestPosts = blogPosts.slice(0, 3)
  const featuredWork = workProjects.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container-main text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
            From <span className="highlight">Post-it</span>
            <br />
            …to product
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Put a rocket under your innovation plans. Our unique process and
            unbeatable experience puts you ahead of the game, while slashing
            risk, time, and cost.
          </p>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10">
            Join 125+ start-ups, scale-ups, and global brands who&apos;ve
            brought big ideas to life, backed by a team that has built and sold
            digital companies, including a $3bn tech unicorn.{' '}
            <span className="font-semibold">
              Recognised as a world-leader in AI-assisted development by Figma.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Get a free consultation
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ============ RECOGNITION ============ */}
      <section className="py-12 bg-offwhite border-y border-gray-200">
        <div className="container-main">
          <p className="text-xs font-medium text-gray-500 text-center mb-6 uppercase tracking-wider">
            Recognised by
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            {[
              { label: 'Global Exemplar', sub: 'Figma' },
              { label: 'SheBuilds Winner', sub: 'Lovable' },
              { label: 'Global Runner-Up', sub: 'Lovable' },
              { label: 'Digital Design Winner', sub: 'Marketing Awards' },
            ].map((award) => (
              <div key={award.label}>
                <p className="font-semibold text-gray-900 text-sm">{award.label}</p>
                <p className="text-xs text-gray-500 mt-1">{award.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Don&apos;t just take
            <br />
            our word for it
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Our clients trust us to bring their biggest ideas to life. Here&apos;s
            what some of them have to say.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-offwhite rounded-2xl p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;Smpl has done for us as the name implies — taken something
                complex and made it beautifully simple, helping us raise and
                helping us sell.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm text-gray-900">Kitty Harris</p>
                <p className="text-sm text-gray-500">Enquip Energy</p>
              </div>
            </div>
            <div className="bg-offwhite rounded-2xl p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;The 5-day prototype with SmplCo played a key role in
                shaping the core value of the company. The visual effects kick
                started a new journey for us.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm text-gray-900">Kine Norland</p>
                <p className="text-sm text-gray-500">Resani, Head of Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EAGLE LABS ============ */}
      <section className="py-16 bg-offwhite">
        <div className="container-main">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center border border-gray-100">
            <p className="text-sm font-medium text-gray-500 mb-3">Partnership</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Barclays Eagle Labs member?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Grab your discount using our exclusive offer with Eagle Labs member
              rewards.
            </p>
            <Link
              href="/eaglelabs"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TAILORED ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="highlight-bright">Tailored</span> to you
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Whether you&apos;re a start-up with a napkin sketch or an enterprise
            with a complex digital challenge, our process adapts to you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            {[
              {
                title: 'Talk to us',
                desc: 'Every great product starts with a conversation. We dive into your vision, challenges, and goals.',
              },
              {
                title: '5 Day Prototype',
                desc: 'In just five days, we transform your idea into a high-fidelity, clickable prototype ready to wow.',
              },
              {
                title: 'Build & Launch',
                desc: 'From MVP development to go-to-market strategy, we help you launch with confidence.',
              },
            ].map((step) => (
              <div key={step.title} className="bg-offwhite rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      {featuredWork.length > 0 && (
        <section className="py-24 md:py-32 bg-offwhite">
          <div className="container-main">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Our work
              </h2>
              <Link
                href="/work"
                className="hidden md:inline-flex text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredWork.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {project.hero_image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.hero_image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {project.category && (
                      <p className="text-xs font-medium text-gray-500 mb-2">
                        {project.category}
                      </p>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/work"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                View all work &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============ INSIGHTS ============ */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our thoughts on key industry trends, tales of success and
              disaster, and tips for getting ahead in a digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-offwhite rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                {post.tags && post.tags[0] && (
                  <span className="text-xs font-medium text-gray-500 mb-3 block">
                    {post.tags[0]}
                  </span>
                )}
                <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                {post.date && (
                  <p className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Ready to build?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Every great product starts with a conversation. Get in touch for a
            free consultation with our digital innovation experts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-lime text-gray-900 text-sm font-semibold rounded-full hover:bg-lime-bright transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}
