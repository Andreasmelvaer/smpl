import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How SmplCo collects, uses, and protects your personal data — including data used for Meta, LinkedIn, and Google advertising integrations.',
  alternates: { canonical: 'https://smpl.as/privacy' },
  openGraph: {
    title: 'Privacy Policy — SmplCo',
    description: 'How SmplCo collects, uses, and protects your personal data.',
    url: 'https://smpl.as/privacy',
    type: 'website',
    siteName: 'SmplCo',
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '24 April 2026'

export default function PrivacyPolicy() {
  return (
    <article className="min-h-screen py-16 md:py-24 bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
        ]}
      />
      <div className="container-main max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>1. Who we are</h2>
          <p>
            SmplCo AS (&ldquo;SmplCo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a digital
            product studio registered in Norway. Our registered office is at Ryfylkegata 9,
            4014 Stavanger, Norway.
          </p>
          <p>
            For any privacy-related question, contact us at{' '}
            <a href="mailto:hello@smpl.as">hello@smpl.as</a>.
          </p>
          <p>
            SmplCo is the data controller for personal data collected through this website
            (smpl.as) and associated services.
          </p>

          <h2>2. What this policy covers</h2>
          <p>This policy describes how we handle personal data when you:</p>
          <ul>
            <li>Visit smpl.as or any of our subdomains.</li>
            <li>
              Submit a contact, booking, lead-magnet, or quiz form on our site.
            </li>
            <li>
              Interact with our content via third-party platforms where we run advertising
              (including Meta, LinkedIn, and Google).
            </li>
            <li>
              Engage with SmplCo as a client, partner, or supplier.
            </li>
          </ul>

          <h2>3. What information we collect</h2>

          <h3>Information you give us</h3>
          <ul>
            <li>
              Contact details you provide in forms: name, email address, company, role, and
              phone number where supplied.
            </li>
            <li>
              Message content you send via forms or email.
            </li>
            <li>
              Answers and preferences you provide in interactive content such as the Founder
              Quiz (/investorready) or the Designer Quiz (/yggdrasil).
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>
              Browser, device, referrer, and page-view data via Vercel Analytics. This data
              is anonymous and cookie-free.
            </li>
            <li>
              IP address (transiently, for rate-limiting, anti-abuse, and delivery of content).
            </li>
            <li>
              Standard server logs (response codes, timing, errors).
            </li>
          </ul>

          <h3>Information from third parties</h3>
          <ul>
            <li>
              Aggregated and pseudonymous campaign performance data from advertising
              platforms including Meta, LinkedIn, and Google.
            </li>
            <li>
              Publicly available business information when researching prospective clients
              or partners.
            </li>
          </ul>

          <h2>4. How we use your data</h2>
          <ul>
            <li>To respond to your enquiry and deliver the services or resources you request.</li>
            <li>
              To send you relevant marketing communications, where permitted by law and
              where you have opted in.
            </li>
            <li>
              To run, measure, and optimise advertising campaigns on Meta, LinkedIn, Google,
              and other platforms.
            </li>
            <li>To improve our website and services using aggregated usage patterns.</li>
            <li>To keep our systems secure and prevent fraud or abuse.</li>
            <li>To meet legal, regulatory, and tax obligations.</li>
          </ul>

          <p>
            Under the EU/UK GDPR, the lawful bases we rely on are: <strong>contract</strong>{' '}
            (to deliver services you request), <strong>legitimate interest</strong> (for
            analytics, security, and business operations), <strong>consent</strong> (for
            marketing and certain advertising activities, which you can withdraw at any time),
            and <strong>legal obligation</strong> (for tax and regulatory compliance).
          </p>

          <h2>5. Cookies and similar technologies</h2>
          <p>
            Smpl.as uses minimal cookies. Our primary analytics tool, Vercel Analytics, is
            cookie-free and collects only anonymised information.
          </p>
          <p>
            When you engage with SmplCo content on third-party platforms such as Meta,
            LinkedIn, or Google, those platforms may place cookies or use similar
            technologies. Their own privacy policies govern those interactions:
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com/policy.php" rel="noopener" target="_blank">
                Meta Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/legal/privacy-policy"
                rel="noopener"
                target="_blank"
              >
                LinkedIn Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">
                Google Privacy Policy
              </a>
            </li>
          </ul>

          <h2>6. Advertising and Meta integration</h2>
          <p>
            SmplCo uses Meta&apos;s advertising tools, including Meta Ads Manager and the
            Meta Marketing API, to run advertising campaigns on Facebook, Instagram, and
            other Meta-owned properties. Through these integrations:
          </p>
          <ul>
            <li>
              We may receive aggregated and pseudonymous performance data about our
              campaigns, including reach, impressions, clicks, and conversions.
            </li>
            <li>
              We may upload hashed email addresses to create Custom Audiences, Lookalike
              Audiences, or suppression lists, only where we have a lawful basis to do so.
            </li>
            <li>
              We use Meta&apos;s business tools to measure campaign effectiveness and reach
              audiences likely to be interested in SmplCo&apos;s services.
            </li>
          </ul>
          <p>
            This integration is governed by Meta&apos;s data-processing terms. We do not
            sell personal data. We apply Meta&apos;s data-matching requirements and follow
            the principle of data minimisation — we upload only the minimum information
            necessary to run a campaign.
          </p>

          <h2>7. Service providers and sharing</h2>
          <p>We share personal data with a limited set of trusted service providers:</p>
          <ul>
            <li>
              <strong>Vercel, Inc.</strong> — website hosting and performance analytics.
            </li>
            <li>
              <strong>Google (Workspace, Calendar, Gmail SMTP)</strong> — email delivery,
              calendaring, and business communications.
            </li>
            <li>
              <strong>Meta Platforms, Inc.</strong> — advertising and campaign measurement.
            </li>
            <li>
              <strong>LinkedIn Corporation</strong> — advertising and professional outreach.
            </li>
            <li>
              Our internal CRM, hosted on SmplCo infrastructure at go.smpl.as, used for lead
              and relationship management.
            </li>
            <li>
              Payment and invoicing providers (used only where a commercial engagement
              requires it).
            </li>
            <li>
              Professional advisors (accountants, lawyers) under confidentiality obligations.
            </li>
          </ul>
          <p>
            <strong>We do not sell personal data to third parties.</strong>
          </p>

          <h2>8. International data transfers</h2>
          <p>
            SmplCo is based in Norway, within the EEA. Some of our service providers
            (including Vercel, Google, and Meta) process data in the United States and
            other jurisdictions. Where personal data is transferred outside the EEA, we
            rely on Standard Contractual Clauses, Data Processing Agreements, and the
            relevant provider&apos;s own compliance programmes.
          </p>

          <h2>9. How long we keep data</h2>
          <ul>
            <li>
              Contact form enquiries and lead-magnet submissions: up to 24 months unless an
              active commercial engagement follows.
            </li>
            <li>
              Client relationship data: for the duration of the engagement plus up to seven
              years to meet Norwegian tax and accounting requirements.
            </li>
            <li>
              Marketing email lists: until you unsubscribe or after 24 months of inactivity.
            </li>
            <li>
              Advertising and analytics data: per the retention windows set by the relevant
              platforms (typically 90&ndash;180 days).
            </li>
          </ul>

          <h2>10. Your rights</h2>
          <p>Under the GDPR and comparable laws, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion, subject to legal retention obligations.</li>
            <li>Object to certain processing, including direct marketing.</li>
            <li>Restrict processing in specific circumstances.</li>
            <li>Request data portability.</li>
            <li>
              Withdraw consent at any time, without affecting the lawfulness of processing
              based on consent before its withdrawal.
            </li>
            <li>
              Lodge a complaint with a supervisory authority. In Norway, this is{' '}
              <a href="https://www.datatilsynet.no" rel="noopener" target="_blank">
                Datatilsynet
              </a>
              .
            </li>
          </ul>
          <p>
            California residents have additional rights under the CCPA, including the right
            to know what personal information is collected, to delete it, and to opt out of
            its sale or sharing (we do not sell personal information).
          </p>
          <p>
            To exercise any of these rights, email{' '}
            <a href="mailto:hello@smpl.as">hello@smpl.as</a>. We will respond within 30 days.
          </p>

          <h2>11. Children&apos;s privacy</h2>
          <p>
            Our site and services are not directed at children under 16. We do not
            knowingly collect personal data from children. If you believe we have collected
            such data in error, contact us and we will delete it.
          </p>

          <h2>12. Security</h2>
          <p>
            We apply appropriate technical and organisational measures to protect personal
            data, including:
          </p>
          <ul>
            <li>TLS encryption on all traffic — smpl.as serves HTTPS only.</li>
            <li>
              Encrypted email transport (STARTTLS) for business email delivered via Gmail.
            </li>
            <li>Access controls and least-privilege principles for internal systems.</li>
            <li>Regular software updates and dependency patching.</li>
          </ul>
          <p>
            No online system is perfectly secure. If you believe your data may have been
            compromised, contact{' '}
            <a href="mailto:hello@smpl.as">hello@smpl.as</a> immediately.
          </p>

          <h2>13. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be reflected
            at <a href="https://smpl.as/privacy">smpl.as/privacy</a> with an updated
            &ldquo;Last updated&rdquo; date. Where required by law, we will notify affected
            users directly.
          </p>

          <h2>14. Contact us</h2>
          <p>
            Questions or requests about this policy, or about the personal data we hold
            about you:
          </p>
          <ul>
            <li>
              Email: <a href="mailto:hello@smpl.as">hello@smpl.as</a>
            </li>
            <li>Post: SmplCo AS, Ryfylkegata 9, 4014 Stavanger, Norway</li>
          </ul>
        </div>
      </div>
    </article>
  )
}
