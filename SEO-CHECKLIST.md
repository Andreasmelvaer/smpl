# SmplCo search-readiness checklist

A working doc for getting smpl.as found in Google + AI search engines.
Tick items off as you go. Re-run the audit skill (`/audit smpl.as` style)
whenever you make a meaningful content or schema change.

## One-time setup (do this once)

- [ ] **Google Search Console** — verify smpl.as as a Domain property (DNS TXT)
      — `https://search.google.com/search-console`
- [ ] In Search Console → Sitemaps → submit `https://smpl.as/sitemap.xml`
- [ ] **Bing Webmaster Tools** — verify smpl.as
      — `https://www.bing.com/webmasters/`
- [ ] In Bing Webmaster → submit the same sitemap
- [ ] **Google Analytics 4** (or Vercel Analytics) — confirm tracking is firing
      on every page, including form submissions
- [ ] **Google Business Profile** — at least one office (Stavanger/London)
      registered with smpl.as as the website. Helps LocalBusiness schema rank.

## Ongoing — weekly (10 min)

- [ ] Search Console → Performance → check impressions, clicks, average position
      for the last 28 days. Note any new queries showing up.
- [ ] Search Console → Coverage → confirm no new "excluded" or "error" pages.
- [ ] When you publish a blog post or case study, paste the URL into Search
      Console's "URL Inspection" tool and click **Request Indexing** —
      this typically halves the time-to-first-impression.

## Ongoing — monthly (30 min)

- [ ] Re-run the SEO audit on the homepage and the most recent blog post:
      `python3 ~/.claude/skills/seo-audit/scripts/audit.py https://smpl.as`
- [ ] Re-run with `--crawl` once a quarter to catch site-wide drift.
- [ ] Update `public/llms.txt` when you publish meaningful new content
      — this is the AI-search equivalent of a sitemap.
- [ ] Search Console → Links report → look at top external linking sites.
      Email anyone linking to a 404 to fix it.

## Content principles (the high-leverage stuff)

- **Long-tail beats head-term.** "5-Day Prototype" alone is a hard query
  to rank. "5-Day Prototype process for fintech founders" is winnable.
  Pick 3–5 long-tail queries per quarter and write to them specifically.
- **Cite-able paragraphs.** Open every blog section with a self-contained
  2–3 sentence answer that an AI engine could quote standalone. Specific
  numbers, named tools, dated examples. Concrete > vague.
- **One H1 per page.** Every page must have exactly one. The audit
  enforces this; don't add a second.
- **FAQ schema where it fits.** /pitch-prep, /ai-playbook, /attention-guide,
  /build-guide, /contact, /about and /services already emit FAQPage schema.
  Add FAQs to any new landing page that has a Q-and-A section.
- **Internal linking.** When you write a new blog post, find at least 3
  earlier posts to link to it from. Anchor text should include the target
  page's main keyword.

## AEO (AI search engine) specifics

- **llms.txt is comprehensive** — keep it updated. Each new lead magnet
  or service page should be added to the relevant section.
- **Schema density wins.** Pages with more JSON-LD types tend to be cited
  more often by ChatGPT / Perplexity / Claude / Gemini. The current
  baseline:
  - Homepage: BreadcrumbList, LocalBusiness, Organization, WebSite
  - Blog post: BlogPosting + Article, BreadcrumbList, Organization
  - Case study: BreadcrumbList, CreativeWork, Organization
  - Lead magnet: BreadcrumbList, FAQPage, Organization
- **Author bylines.** AI engines weigh author authority. Every blog post
  should have a real `author:` in frontmatter, not "SmplCo Team".

## Structural fixes shipped (April 2026)

- ✓ BAS blog meta description trimmed to fit Google's 160-char SERP
- ✓ BlogPostJsonLd now declares both BlogPosting and Article types,
  emits inLanguage, articleSection, wordCount
- ✓ Homepage hero subtitle has keyword-rich anchor text linking to
  /services and /work
- ✓ llms.txt published at /llms.txt and /llms-full.txt
- ✓ Heartbeat ping from every transactional email send goes to
  go.smpl.as so we can see deliverability live

## Recovery timeline expectations

- **Weeks 1–4 after this checklist is fully ticked:** Google starts
  indexing properly, queries begin appearing in Search Console.
- **Months 2–4:** measurable impressions for branded queries
  ("SmplCo", "smpl.as", founders' names).
- **Months 4–8:** non-brand long-tail queries start ranking.
- **Months 8–12:** broader queries IF backlinks are being earned
  (podcasts, conference talks, client logos linking back).

The on-page work is necessary but not sufficient. The biggest unknown
isn't on the site — it's whether anyone is linking to us. Backlinks
remain the dominant ranking signal.
