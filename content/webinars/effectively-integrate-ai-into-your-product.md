---
title: "Effectively integrate AI into your product"
description: "Andreas Melvær and Michael Millar of SmplCo share how to choose the right AI strategy for your stage, where to put AI inside your product, how to manage governance and guardrails, and how to turn AI into a strategic asset rather than a budget drain. A live webinar with Barclays Eagle Labs."
slug: "effectively-integrate-ai-into-your-product"
date: "2026-04-29"
youtube_id: "i8dAJ1O4WRg"
duration: "PT1H1M30S"
speakers: ["Andreas Melvær", "Michael Millar"]
host: "Luke Hampson"
host_organisation: "Barclays Eagle Labs"
publisher_name: "Barclays Eagle Labs"
hero_image: "/images/blog/ai-from-risk-to-advantage.jpg"
excerpt: "How do you turn AI from a risky expense into a scalable product advantage, without burning cash or slowing execution? Andreas Melvær and Michael Millar of SmplCo cover AI as a building tool vs AI inside the product, common cost traps, vibe-coding risks, and how to defend a product when everyone can suddenly code."
tags: ["AI", "Product strategy", "Webinar", "Barclays Eagle Labs", "Founder advice"]
published: true
readTime: "62 minutes"
---

## What this webinar covers

Andreas Melvær and Michael Millar of [SmplCo](https://smpl.as) joined Luke Hampson of Barclays Eagle Labs for a one-hour webinar aimed at founders and product teams trying to integrate AI without burning cash or shipping fragile software.

The talk is built around a question every product team is wrestling with right now: **how do you turn AI from a risky expense into a scalable product advantage?**

## Key takeaways

### 1. AI to *build with* is not the same as AI *inside* your product

A lot of founders conflate "we use AI" with "our product is an AI product". They are completely different decisions, with completely different costs and risks.

Andreas walked through two SmplCo-built examples:

- **A coaching tool for kids' hockey training** — built with Claude Code, but if AI disappeared tomorrow the product would still work. The technology underneath is conventional: a CMS, a database, a frontend. AI was the construction tool, not the engine.
- **A platform that writes coaching plans on demand** — uses Gemini under the hood with carefully tuned prompts. Without AI, the core service does not exist.

Both are valid. They just have different cost profiles, different risks, and different defensibility questions. Conflating them leads to poor strategy.

### 2. Tokens cost money — every single one

When AI is *inside* your product, the model serves users at runtime, and every interaction costs tokens. Andreas was direct: **"Tokens cost money. You've got to be really careful how you do this."**

Volume play matters. A free feature that calls a model on every keystroke is a different proposition from a paid premium feature that calls it once per session. Map your usage before you ship — not after.

### 3. Plan before you "vibe-code"

Vibe coding (talking to an agent and letting it build) is real and it works. But it works *much* better when you plan first: data model, system architecture, user journeys, where the data flows, which services are involved.

The most common SmplCo sees: founders bringing in vibe-coded prototypes that look fabulous on the dashboard but are spaghetti underneath. Untangling that is expensive.

The fix is cheap: spend an hour writing the data model and architecture down (AI can help draft it) before the live coding starts.

### 4. Guardrails, governance and the "sleep at night" test

If AI is in your product, it is an attack surface. Andreas covered the practical risks: prompt injection, token-bill abuse, exposure of unintended endpoints, hallucinations and bias.

The mitigations are well understood — guardrails on what the model is allowed to discuss, scoped credentials, rate-limiting, evals on outputs — but they need someone owning them. SmplCo works with security specialists for client production deployments, and recommends the same for any team putting an LLM in front of users.

The test Mike came back to: **how well do you sleep at night?** If you cannot answer that question about your own AI product, you have not done enough.

### 5. Defensibility when everyone can code

When everyone can vibe-code an MVP in a weekend, "we built it" is no longer a moat. The investor question — *what's your differentiator?* — gets sharper, not softer, in an AI world.

Some real moats Andreas and Mike covered: proprietary data, distribution, brand, deep domain expertise, regulated workflow integrations. Some non-moats: "we used GPT-5", "we have a clever prompt", "we wrap a foundation model". If you are reselling Anthropic tokens, that is a feature, not a defence.

### 6. AI for the *business*, not just the product

The conversation everyone has is about putting AI in the product. The bigger near-term ROI for most founders is putting AI inside their *business*: replacing the SaaS stack they only use 10% of with internal tools they own.

SmplCo replaced most of its own internal tooling — including a custom CRM Andreas built — with AI-built systems. That stuff used to require an engineering team and a six-figure SaaS bill. Today it is a weekend of focused work for a non-engineer who knows what they want.

This is also covered in detail in the [Build Your Own Internal Tools guide](/build-guide).

## Useful links

- The full [AI Integration Playbook](/ai-playbook) — the framework Andreas and Mike walked through
- The [Build Your Own Internal Tools guide](/build-guide) — for the "AI for your business" theme
- [Free 25%-off discovery offer](/eaglelabs) for Eagle Labs members
- [Barclays Eagle Labs](https://labs.uk.barclays/) — the Eagle Labs membership and event programme

## Want to talk about your AI strategy?

If you are figuring out where AI fits in your product or your business, [book a call](/book) — we will help you map it out without the hype.
