---
title: "Is Your Website AI-Ready? 5 Tips for Maximum AEO"
description: "AEO is the new SEO. Here are 5 tips SmplCo used to make our website visible to ChatGPT, Perplexity, and Google AI Overviews."
hero_image: "/images/blog/aeo-hero.png"
thumbnail_image: "/images/blog/aeo-hero-thumb.png"
hero_border: true
slug: "aeo-tips"
date: "2026-03-20"
author: "Michael Millar, Partner, SmplCo"
excerpt: "AEO is the new SEO. Here's exactly how we optimised our website for AI search — and the 5 tips you can steal today."
tags: ["AEO", "SEO", "AI Search", "Digital Marketing", "Website"]
published: true
readTime: "4 min read"
faqs:
  - question: "What is AEO?"
    answer: "AEO stands for Answer Engine Optimization. It is the practice of structuring a website so that AI search engines like ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini can understand, ingest, and cite the content when answering user questions. Where SEO is about ranking in a list of links, AEO is about being the source the AI quotes from."
  - question: "How is AEO different from SEO?"
    answer: "Traditional SEO optimises for Google's ranking algorithm — keywords, backlinks, page experience. AEO optimises for AI engines that consume content as structured information rather than as a webpage to display. AEO leans heavily on schema markup (JSON-LD), an /llms.txt manifest, structured headings, and content written as direct answers to specific questions. Done well, the same site ranks for both — most of the techniques overlap."
  - question: "How do I make my website visible to ChatGPT and Perplexity?"
    answer: "Five fast wins: (1) publish a /llms.txt manifest at the root of your domain, (2) add JSON-LD structured data (Organization, BlogPosting, FAQPage where relevant), (3) write content as direct answers to questions a user might ask, (4) use clear hierarchical headings (H2/H3) for AI snippet extraction, (5) ensure your robots.txt allows the major AI crawlers (GPTBot, ClaudeBot, PerplexityBot)."
  - question: "What is llms.txt and why does my site need one?"
    answer: "llms.txt is an emerging standard, similar to robots.txt, that gives a single readable file at /llms.txt summarising what the site is, what it sells, and where to find its key content. AI crawlers can ingest it as a manifest in one request rather than navigating the whole site. SmplCo publishes one at smpl.as/llms.txt — it is shorter to read than the homepage, but tells an AI engine everything it needs to cite the company correctly."
  - question: "Does Google's AI Overview use the same signals as traditional Google search?"
    answer: "Mostly yes, but with three differences. Google's AI Overviews give greater weight to (1) content that directly answers question-style queries, (2) entities defined in structured data (Organization, Product, FAQPage), and (3) freshness signals on rapidly-evolving topics. Pages that rank well for traditional SEO tend to also surface in AI Overviews, but adding FAQ-style content and structured data can lift AI Overview citation specifically."
---

We ran an AEO (Answer Engine Optimisation) audit to see how visible SmplCo’s site was to AI search engines. The results weren’t pretty.

“SmplCo has strong content and brand foundations,” the report, created in Claude AI, began. So far so good.

But it went rapidly downhill from there.

“The site is currently near-invisible to AI answer engines,” the report went on, giving us a 4.5/10 AEO score and concluding that “significant improvements needed before AI answer engines will feature.”

Eek.

---

## What Even Is AEO?

Using the best practise steps outlined below we set about fixing things. And - spoiler alert - when we ran the audit again we go a 9.6/10. Hooray!

In a minute we’ll tell you exactly how we did it - and how you can do it too - but first let’s get our heads around AEO.

Try this little experiment. Open ChatGPT, Perplexity, Claude Chat or Google's AI Overview and search for something in your industry. Now ask yourself: does your website show up as a source?

If the answer is no — or "I have no idea" — then you've got an AEO problem.

AEO is best seen as a new generation of SEO (Search Engine Optimisation). Instead of optimising to rank on a search results page, you're optimising to be *cited* by AI. And the rules are different enough that most websites aren't ready for it.

---

## Why does AEO matter?

Traditional SEO is about getting to page one of Google. AEO is about being the source that AI tools pull from when someone asks a question — in ChatGPT, in Perplexity, in Google's AI Overviews (or in whatever comes next!)

The shift matters because AI search doesn't show ten blue links. It shows one answer. If that answer isn't you, **you're invisible**.

AEO is particularly important to SmplCo because we’re operating in a space where tech-savvy founders and innovation teams will go to AI chat ask questions like "how long does it take to build an MVP?", "what is vibe coding?", or " do I need a prototype to attract investors?"

All this means AEO is arguably more valuable (to us, anyway) than SEO, because it places SmplCo directly in the moment of consideration. 

It puts us closer to potential clients who are actively considering buying all the (extremely high quality!) stuff that we provide.

That's why we put the time and effort into auditing and rebuilding the SmplCo website with this in mind.

And here’s what we did to resurrect our score from a miserable 4.5 to the 9.6 we're really quite proud of - and how you can do it too.

---

<div style="border: 1px solid black; border-radius: 12px; overflow: hidden; margin-bottom: 0.5rem;">

![AEO audit score improvement](/images/blog/inline/aeo-blog-image-2.png)

</div>

<p style="font-size: 0.85rem; color: #6b7280; margin-bottom: 2rem; font-style: italic;">Our full audit score ...not great</p>

## Tip 1: Structure Your Content Around Questions

AI engines are question-answering machines. They scan content looking for clear, direct answers to specific questions. If your website is full of vague brand prose ("We deliver transformative solutions for dynamic markets"), you're invisible to them.

**What to do:**
- Rewrite your key pages so they directly answer the questions your customers actually ask
- Use H2 and H3 headings phrased as questions: *"What is AEO?"*, *"How much does X cost?"*, *"What's the difference between X and Y?"*
- Lead with the answer in the first sentence of each section — don't bury it

Think of it less like writing copy and more like writing a really good FAQ. Because that's essentially what AI is looking for.

---

## Tip 2: Add Schema Markup (Structured Data)

This one is the most technical tip on the list, but it's worth doing. Schema markup is code you add to your website that tells search engines (and AI systems) exactly what your content *is* — not just what it says.

The types that matter most for AEO:
- **FAQPage schema** — marks up your Q&A content so AI can parse it directly
- **Article schema** — identifies your blog posts as credible, dateable content
- **Organization schema** — establishes who you are, what you do, and where you're based

We added JSON-LD schema across our key pages and blog posts. It's not glamorous work, but it's the difference between AI *guessing* what your content means and *knowing*.

---

## Tip 3: Write for Snippets, Not Just Rankings

Here's the practical version of Tip 1. When AI pulls a citation, it typically grabs a short, self-contained chunk of text — usually 40–60 words that answer a question cleanly and completely.

**The format AI loves:**

> *[Direct answer to the question in one sentence. Then 1–2 sentences of supporting context or nuance. Keep it under 60 words total.]*

Train yourself to write introductory paragraphs this way for every section. Lead with the answer. Follow with the detail. If someone could pull out just that first paragraph and share it as a complete response — you've nailed it.

We restructured several service pages on the SmplCo site using this approach. The change was subtle on the surface but significant for how AI engines read us.

---

## Tip 4: Build Your E-E-A-T Signals

E-E-A-T stands for **Experience, Expertise, Authoritativeness, and Trustworthiness**. It's a framework Google uses to evaluate content quality — and AI search engines have adopted similar signals to decide whose content is worth citing.

In plain English: AI needs to know you're credible before it quotes you.

**How to build E-E-A-T:**
- Add author bios with real credentials and links to their work
- Publish case studies with specific, verifiable outcomes (not just "we increased revenue")
- Link out to credible sources when you make claims
- Get mentioned and linked to from other reputable websites in your industry
- Keep your About page up to date with your actual team and history

The SmplCo blog now includes proper author attribution and links to real outcomes from client work. Small changes, but they signal legitimacy to both humans and machines.

---

## Tip 5: Keep Your Content Fresh and Factually Accurate

AI search engines aren't static. They're continuously learning, and they have a strong preference for content that is current, accurate, and not contradicted by more recent sources.

Stale content gets deprioritised. Outdated stats get ignored. Pages that haven't been touched in three years are a liability.

**What this looks like in practice:**
- Review your key pages every quarter — update stats, refresh examples, fix anything that's gone out of date
- Add a "last updated" date to long-form content
- When you publish new posts or case studies, link back to older relevant content (and update those older pages to link forward)
- Delete or consolidate thin pages that no longer serve a purpose

We now treat content hygiene as a regular task, not a one-off project. It compounds over time.

---

## The Bottom Line

AEO isn't a replacement for SEO — it's what SEO is becoming. The fundamentals of good content still apply: be clear, be helpful, be accurate. But the *delivery* of that content needs to be optimised for a world where AI is the first thing people ask, not a search bar.

The five tips above are exactly what we applied to the SmplCo website. None of them are secret sauce. They're just disciplined execution of things most websites skip.

**If you want help auditing your site for AI searchability, or rebuilding pages to be AEO-ready — [get in touch](/contact) or email me on [mike@smpl.as](mailto:mike@smpl.as).**

**It's the kind of thing we do well. And we have a report to prove it...**


---

<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
  <div style="width: 56px; height: 56px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
    <img src="/images/blog/inline/michael-millar.jpeg" alt="Michael Millar" style="width: 100%; height: 100%; object-fit: cover; object-position: center 60%; transform: scale(1.9); transform-origin: center 60%;" />
  </div>
  <h2 style="margin: 0;">About the Author</h2>
</div>

<a href="https://www.linkedin.com/in/michaelmillarfrsa/" target="_blank" rel="noopener noreferrer">Michael Millar</a> is a partner and founder of SmplCo. Before taking on Go-To-Market responsibilities for both SmplCo and our clients, he was a journalist (BBC, Reuters, Spectator, etc.), political lobbyist and global comms leader.
