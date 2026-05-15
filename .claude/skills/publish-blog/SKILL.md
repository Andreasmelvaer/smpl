---
name: publish-blog
description: "Publish blog articles to the SmplCo website (smpl.as/blog). Use when the user wants to publish a blog post, write an article, create blog content, or says 'publish blog', 'new blog post', 'write article', 'blog post about...'. Also trigger when the user provides article content (text, markdown, notes, ideas) and wants it published."
argument-hint: "[topic or file path]"
user-invocable: true
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch
---

# SmplCo Blog Publisher

You take ideas, drafts, or finished articles and turn them into polished blog posts on smpl.as/blog. The bar is **good editorial prose**, not "AI-written content with SEO bolted on." Write like a person who has read books.

## Project Setup

- **Repo**: The current git repository root (Next.js on Vercel)
- **Blog content**: `content/blog/{slug}.md` (Markdown with YAML frontmatter)
- **Hero images**: `public/images/blog/{slug}.{jpg|png|webp}`
- **Inline images**: `public/images/blog/inline/{descriptive-name}.{jpg|png|webp}`
- **GitHub remote**: `Andreasmelvaer/smpl` on `main` branch
- **Auto-deploys**: Push to `main` triggers Vercel deploy to smpl.as
- **Lede styling**: The first paragraph of every blog post is auto-rendered as an ingress — larger font, darker colour, more breathing room. Treat it as a unit (see step 4).

## Step-by-Step Workflow

### 1. Understand the Input

The user may provide a topic, rough notes, a finished draft, or a file path. Make smart decisions about angle, structure, and length without asking unless it's genuinely ambiguous.

### 2. Decide the Author Voice First

Before writing a word, decide whose voice the post is in. There are two, and they don't sound the same. Author choice affects every paragraph that follows.

**Andreas Melvaer** — reflective, anecdote-led, prose-driven
- Opens with a personal observation or a specific scene (a conference, a board meeting, a beer festival in Barcelona). Not "In short:" or a stat dump.
- Lets the story carry the argument. Few lists, rarely a heavy structural skeleton.
- Slightly self-deprecating, comfortable with rough edges. Norwegian / Stavanger context lands naturally where relevant.
- British English. Plain sentences. Lands the close in one clean declarative line — "That is the whole point.", "Polished is not the goal. Memorable is."
- References: [polished-is-forgettable](content/blog/polished-is-forgettable.md), [saas-audit-build-custom-tools](content/blog/saas-audit-build-custom-tools.md), [automated-beer-festival-in-an-afternoon](content/blog/automated-beer-festival-in-an-afternoon.md).

**Michael Millar** — counterintuitive, structured, culturally aware
- Hooks with a fact that doesn't seem to fit ("A legal AI firm just hired Jude Law. Not a lawyer. Not an AI expert. **Jude Law.**").
- Short fragmentary openings for rhythm. Strong bolding for emphasis.
- Uses lists when each item is a *full thought with rhythm*, not a four-word bullet. Pub-test paragraphs alongside cited research.
- Has published trivia/humour non-fiction (*The Five Minute Failure*, *The Secret Lives of Numbers*) and fiction (*The Revenge of Jimmy Mac* series) — the voice is light-hearted, curious, fact-first.
- Cultural references and marketing-adage callbacks ("Sell the sizzle, not the sausage", "Would you ask someone to marry you on the first date?").
- Reference: [jude-law-legora-storytelling](content/blog/jude-law-legora-storytelling.md).

**Both share**: British English (organisation, recognised, colour), "we"/"you" address, specific real examples over abstractions, no corporate jargon. Default to Andreas's voice when the topic is operational/reflective; default to Michael's when the topic is brand/marketing/cultural commentary. Always confirm with the user if unsure.

### 3. Ask About Images

> "Do you have images for this post? If not, I'll find some on Unsplash."

If the user has them, place them at `public/images/blog/{slug}.{ext}` (hero) and `public/images/blog/inline/{descriptive-name}.{ext}` (inline). If not, search Unsplash for editorial / contemporary / non-stock-photo-looking shots. Avoid handshake-and-laptop clichés. Hero at 1200×750.

### 4. Write the Article — Prose First, Lists Rarely

**Default to paragraphs.** Lists are a tool for genuinely list-shaped content: numbered steps, parallel options with parameters, real checklists. If a thought can be a paragraph, write it as a paragraph. A page of bullet points is the single surest signal that AI wrote it.

One numbered or bulleted list per post is usually plenty. Many of our best posts have zero (see [polished-is-forgettable](content/blog/polished-is-forgettable.md) — entirely flowing prose).

**The lede** (first paragraph) is auto-styled as the ingress. It should:
- Stand alone if read in isolation — 40–60 words
- Hook with a fact, scene, or specific observation. *Not* "In today's fast-paced world…" or "In essence…"
- Avoid `**In short:**` openers unless the user is explicitly Michael and that's the chosen pattern

**Body structure**:
- H2 headings only (H1 is set in frontmatter). One H2 every ~250 words is plenty. Don't bullet-point every section break.
- Phrase at least one H2 as a question someone would type into Google or ChatGPT (AEO win).
- Vary sentence length deliberately. Short. Medium. Long with a subordinate clause and a pivot. Repeat.
- Specific over generic, always. Real numbers, real names, real dates, real outcomes.

**Internal links** (use 2+ per post):
- `/work` — case studies
- `/contact` — get in touch
- `/blog/{slug}` — related articles
- `/services`, `/academy`, `/about` — when relevant

**Word count**: 600–1500. Andreas's posts often run 600–800. Michael's run 900–1500. Don't pad.

### 4a. Words and Constructions to Avoid (AI Tells)

Treat these as a blocklist. Each one, seen once, reads as a first draft. Seen twice, reads as a parody.

**Words to delete on sight**: delve, leverage, navigate, embark, transformative, dynamic, foster, holistic, robust, seamless, ever-evolving, fast-paced, cutting-edge, paradigm, synergy, ecosystem (when used metaphorically), unlock (as a verb for ideas), supercharge, game-changer, in essence, at its core, when it comes to.

**Phrases to delete**: "In today's [adjective] world", "In the ever-evolving landscape of", "This isn't just X — it's Y", "It's not about A, it's about B", "More than ever before", "Now more than ever", "The future of X is here".

**Structural tells**:
- Every section closing with a one-line meta-summary
- H2 every 100 words
- Bolding the first phrase of every paragraph
- Three or more em-dashes in a single paragraph
- Triplet stacks ("[a], [b], and [c]") in nearly every sentence
- Lists where each bullet is one short line — turn those into prose
- Numbered lists where the items aren't actually sequential

**The smell test**: would either Andreas or Michael actually say this out loud? If you can't picture them saying it, rewrite.

### 5. Create the Frontmatter

```yaml
---
title: "Your Compelling Title Here"
description: "150-160 character meta description with primary keyword and clear value prop. Ends with a period."
excerpt: "1-2 sentence summary used on listing cards and social shares. Can be slightly longer than description."
hero_image: "/images/blog/{slug}.jpg"
date: "YYYY-MM-DD"
author: "Andreas Melvaer" # or "Michael Millar" — auto-adds author bio at post bottom
readTime: "X min read"
tags: ["Tag1", "Tag2", "Tag3"]
published: true
slug: "{slug}"
---
```

Optional fields: `thumbnail_image`, `hero_border: true`, `faqs: [{question, answer}, ...]` — FAQs render as schema.org/FAQPage automatically.

**Tag pool** (prefer reusing): Prototyping, AI Development, MVP, Vibecoding, Product Development, Lovable, AI, Development, Brand Strategy, Digital Innovation, Marketing, Custom Software, No-Code, Hackathon, Power Apps, SaaS, News, Awards, Eagle Labs, Storytelling, LinkedIn, Strategy.

### 6. Pre-Publish Self-Review

Before saving anything, run through these five questions out loud and rewrite if needed:

1. **Lists vs prose** — Could any bullet list here be a paragraph instead? If yes, rewrite.
2. **The lede** — Does the first paragraph stand alone as a 40–60 word piece that pulls a reader in?
3. **AI tells** — Any words from the blocklist? Any structural tells (over-headed, over-bulleted, em-dash addiction)?
4. **Author voice** — Does this sound like Mike *or* Andreas — not a generic "SmplCo blog voice"?
5. **Specificity** — Is there at least one concrete real-world detail per section (a number, a name, a date, a quote, a scene)?

Then the SEO/AEO pass:

- [ ] Title 50–60 chars, primary keyword front-loaded
- [ ] Meta description 150–160 chars, ends with period
- [ ] First paragraph reads cleanly as a 40–60 word standalone answer to "what's this post about?"
- [ ] At least one H2 is phrased as a question
- [ ] 2+ internal links
- [ ] All images have descriptive alt text
- [ ] Hero image filename matches slug
- [ ] FAQs in frontmatter if relevant (boosts AEO via FAQ schema)

### 7. Save, Show, Confirm — Then Push

**Writing the file is reversible. Pushing to main is a live deploy. These need different gates.**

1. **Save**: write the markdown to `content/blog/{slug}.md`. No confirmation needed — the file is reversible.
2. **Show the draft**: tell the user the post is saved and offer to read it back. Wait for them to OK the content before going further. Be ready to iterate.
3. **Optional local preview**: run `npm run dev`, fetch the rendered page, verify hero + inline images load and the lede shows correctly.
4. **Confirm before commit**: explicitly wait for a clear "push live" / "commit" / "ship it" signal from the user.
5. **Commit**: `git add` the post file + any images, commit with `Publish blog: {short title}`.
6. **Push**: `git push origin main` (or merge into main first if working on a branch/worktree). Vercel auto-deploys within ~60s.

### 8. Post-Publish — Verify + Submit to Google

After push:

1. Wait ~60s, then verify the post is live:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" https://smpl.as/blog/{slug}
   ```
   Expect `200`.

2. **Submit to Google Search Console** to accelerate indexing:
   ```bash
   node scripts/submit-to-gsc.mjs https://smpl.as/blog/{slug}
   ```
   - If `GSC_SERVICE_ACCOUNT_KEY_FILE` is set in `.env.local`, the script auto-submits via the Indexing API and prints the response.
   - If the env var is missing, the script prints setup instructions — OR the user can paste the URL into [Google Search Console](https://search.google.com/search-console) URL Inspector and click "Request Indexing" manually.

3. Report the live URL and the GSC submission result back to the user.

---

## One-Time Setup: Google Search Console Indexing API

This only needs to be done once per dev machine. After that, every publish auto-submits.

1. **Create a Google Cloud project** at https://console.cloud.google.com (or reuse an existing one).
2. **Enable the Indexing API**: APIs & Services → Library → search "Indexing API" → Enable.
3. **Create a service account**: IAM & Admin → Service Accounts → Create. Name it `gsc-indexer` or similar. No roles needed at the project level.
4. **Create a JSON key**: Keys → Add Key → Create new key → JSON. Save the downloaded file somewhere safe *outside* the repo (e.g. `~/.config/smpl/gsc-key.json`).
5. **Add the service account as an Owner** in Search Console:
   - Open https://search.google.com/search-console
   - Select the `smpl.as` property → Settings → Users and permissions → Add user
   - Paste the service account's email (looks like `gsc-indexer@your-project.iam.gserviceaccount.com`)
   - Permission: **Owner** (the Indexing API requires Owner — Full user isn't enough)
6. **Set the env var in `.env.local`** (gitignored):
   ```
   GSC_SERVICE_ACCOUNT_KEY_FILE=/Users/andreasmelvaer/.config/smpl/gsc-key.json
   ```
7. **Test it**:
   ```bash
   node scripts/submit-to-gsc.mjs https://smpl.as/blog/automated-beer-festival-in-an-afternoon
   ```
   You should see a JSON response with a `notifyTime` field. If you see an auth error, the service account isn't an Owner yet (step 5).

**Caveat**: Google officially restricts the Indexing API to `JobPosting` and `BroadcastEvent` schemas. In practice it works for blog content, but Google reserves the right to reject. If submission ever stops working, fall back to the manual URL Inspector step.

---

## Example: voice-matched opening paragraph

Andreas voice:

> A small craft beer festival opens in Barcelona this October. It is called Mash, I co-founded it with Nahuel, and somewhere between booking the breweries and opening the doors there is a set of jobs that always seems to grow: festival posters, an Instagram post for each attending brewery, and the printed signage that goes up around the venue.

Michael voice:

> A legal AI firm just hired Jude Law. Not a lawyer. Not an AI expert. **Jude Law.** The company is Legora and it's just hit $100m in ARR and is on track to hit $250m by the end of the year. They've spent some of that money on a Hollywood actor opening a campaign with the line: *"It's fair to assume I know quite a bit about law — after all, my name is Jude."*

Both: a specific scene or fact, in the first ~50 words, that makes the reader want sentence two.

---

## Important Notes

- **NEVER commit or push without an explicit user OK on the final content.** Writing the file is fine without approval — the file is reversible. Commits and pushes are not.
- **The skill is a guide, not a template.** If a post needs to break a rule for a real editorial reason, break the rule and tell the user why.
- **One commit per blog post.** Don't bundle unrelated changes.
- **Worktree-aware**: if working in a `.claude/worktrees/` worktree, commit on the branch, then cherry-pick or fast-forward into main from the main repo directory before pushing to origin.
