---
title: "We Automated a Beer Festival in an Afternoon. Most Workflow Fixes Are Like This Now."
description: "We built an automation tool for the Mash beer festival in Barcelona in an afternoon. The point: improving how an organisation works doesn't have to take months."
hero_image: "/images/blog/automated-beer-festival-in-an-afternoon.jpg"
slug: "automated-beer-festival-in-an-afternoon"
date: "2026-05-15"
author: "Andreas Melvaer"
excerpt: "We built an automation tool for the Mash beer festival in Barcelona in an afternoon. The point: improving how an organisation works doesn't have to take months."
tags: ["Vibecoding", "Custom Software", "Prototyping", "Strategy"]
published: true
readTime: "4 min read"
---

**Mash** is a small craft beer festival in Barcelona. Nahuel and I have been running it for eight editions now, and every year, somewhere between booking the breweries and opening the doors, the same set of jobs grows: festival posters, an Instagram post for each attending brewery, and the printed signage that goes up around the venue.

None of it is hard work. It is just slow, repetitive, and there is always more of it than you remember from last year. Dozens of breweries means dozens of little graphic jobs that all look slightly different — a logo to find, clean up, drop into a template, export, name correctly, upload. By the time you finish, you have made the same mistake three times and the festival is a week closer.

## What we actually did about it

So instead of clearing another weekend for it, I spent an afternoon and built a small tool for Mash — we have called it *a trip in tiles*. Underneath sits a deck of 160 hand-drawn black-and-white tiles (eyes, mushrooms, faces, suns, all the usual psychedelic suspects), and the tool composes them into the things we need:

- **Posters.** Pick a vibe — psychedelic, surreal, occult, take your pick — hit *summon poster*, and out comes an A2 festival poster on a 5×6 grid.
- **Brewery frames.** *"Paste a brewery's website. We fetch their logo, lay it inside a 5×5 deck of tiles with a 3×3 hole, and frame it in black or white."* That is the Instagram tile for every attending brewery, generated from a URL.
- **Signage** (coming next). Upload a spreadsheet of breweries and the tool generates the printed signage for the venue.

![The poster screen, generating a Mash festival poster from a vibe and a 5x6 grid of tiles.](/images/blog/inline/mash-poster-tool.jpg)
*The poster screen — pick a vibe, hit summon, out comes the festival poster.*

Every output gets logged in a gallery alongside the rest — handy when Nahuel and I need to argue about which one to use.

![The brewery frame screen, with a URL input that auto-fetches the brewery's logo and lays it inside a 5x5 deck of tiles.](/images/blog/inline/mash-brewery-frame.jpg)
*Paste a brewery's URL, the tool fetches their logo and frames it. Dozens of breweries used to be a long evening.*

## The actual point

Mash is a small festival. We are not the audience for a big "digital transformation" pitch. We did not need one.

What is interesting is that the tool took *an afternoon*. Not a month. Not a procurement cycle. Not a budget round. There was no agency involved, no kick-off meeting, no roadmap. I had an annoyance, I sat down, and by the end of the day it was largely gone. That maths is genuinely different from what it was even two years ago, and most organisations have not caught up to it yet.

If something costs your team a few hours every quarter, it is probably already worth automating. If it costs you a few evenings every year, it was worth automating a long time ago. The reason people put it off is usually not the cost of building — it is the assumption that *building* is a project. It no longer has to be.

The same logic scales. If an afternoon of work can do this for a small festival in Barcelona, the same thinking applied to a finance team's monthly reporting, a sales team's onboarding flow, or whatever quietly chewed-up corner of an organisation you can think of, is hard to argue with.

Most of the things that grind down a team's evenings are not glamorous problems. They are small, repetitive, slightly different every time. Those are exactly the problems this current generation of tooling is suspiciously good at chewing through.

## If something is eating your evenings

If there is a thing in your organisation that everyone groans about every quarter, it probably does not need a project. It needs an afternoon.

We've [written before](/blog/saas-audit-build-custom-tools) about the same shift on the SaaS side — the maths on building vs buying has moved, and most companies are still paying for software that does ten times more than they need. The festival tool is the same idea in miniature: the things that used to be too small to justify building are not too small any more.

If you've got a workflow that's been quietly costing you nights, [get in touch](/contact) and we'll take a look at which afternoon it needs.
