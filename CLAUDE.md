# SmplCo Website (smpl.as)

## Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Hosting**: Vercel (auto-deploys from main branch)
- **Domain**: smpl.as
- **Styling**: Tailwind CSS v4
- **Email**: Gmail SMTP via nodemailer (hello@smpl.no)

## Key directories
- `src/app/` — Pages and API routes (App Router)
- `src/components/` — Shared React components
- `src/lib/` — Utilities (markdown, metadata)
- `content/blog/` — Blog posts as Markdown with YAML frontmatter
- `content/work/` — Case studies as Markdown
- `public/` — Static assets (images, downloads, fonts)

## Blog publishing
Use the `/publish-blog` skill to create and publish new blog posts.

## Important notes
- This is a **Next.js** site, NOT Framer. The migration from Framer was completed in March 2026.
- All pages are in `src/app/` — edit them there, not in any external CMS.
- Pushing to `main` triggers automatic deployment to smpl.as via Vercel.
- The downloadable PDF at /pitch-prep is at `public/downloads/pitch-prep-guide.pdf`.
