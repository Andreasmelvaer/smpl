---
title: "Pick one user. Even when you've already shipped to six."
description: "BAS TrustDesk had a live product, real customers, and six audiences competing for the first screen. Here's how a 5-day sprint reset the brief."
hero_image: "/images/blog/bas-trustdesk.jpg"
slug: "bas-trustdesk-pick-one-user"
date: "2026-04-29"
author: "Andreas Melvær"
excerpt: "BAS TrustDesk had a live product, paying customers, and six audiences competing for the first screen. Here's how a 5-day sprint reset the brief — and the design system the team rebuilt on."
tags: ["SaaS", "5-Day Prototype", "Design System", "Strategy", "Product Strategy", "BAS TrustDesk"]
published: true
readTime: "5 min read"
---

In January, [Mike](https://www.linkedin.com/in/michaelmillarfrsa/) and I ran a 5-Day Prototype for [**BAS TrustDesk**](https://bastrustdesk.com), a strategy-to-execution validation platform for boards and investors. They came to us with something we don't see every week: a live product, real paying customers, and a vibe-coded prototype of where the founder thought the next version needed to go.

It was a different kind of brief from the average startup engagement. They didn't need us to figure out what to build — they had usage. They needed us to figure out **who to build for first**.

That answer turned out to be the most important thing the week produced.

## What BAS TrustDesk does

When a board asks "are we actually building what the strategy said?", most companies can't answer with anything tougher than a vibe.

Strategy lives in slide decks. Execution lives in Jira, Azure DevOps and GitHub. The board pack is a self-graded report card with no link back to the strategy artefacts that started it. Investors and non-execs end up asking the same uncomfortable questions twice a year and getting answers that depend more on the CTO's storytelling than on the data.

TrustDesk fixes that. It connects read-only to the systems where execution actually happens, ingests the strategy artefacts, and produces a traceable report on whether what's being built lines up with what the strategy committed to. It also flags whether the team has validated the underlying assumptions before signing off on engineering spend — which, for governance audiences, is often the more important question.

![BAS TrustDesk overall strategy score](/images/bas/bas-strategy-score.jpg)

The product was already in production. Real customers, real usage. So why did it need a sprint?

## Six audiences. One first screen.

In the weeks before we started, the founder Tor Einar had vibe-coded a prototype of where he believed TrustDesk needed to go next. It was directionally opinionated, feature-rich, and built — as so many of these prototypes are — by one person, alone, on a theory of what users needed.

It tried to greet six audiences at once:

- Series C CTOs as configurators
- Non-executive directors reading the board pack
- VC partners running diligence
- Angel investors doing light DD
- Enterprise PMO directors
- Founders running TrustDesk on their own companies

All six are real. All six matter. None of them, however, can be the first screen for the same product.

This is one of the most common patterns we see in mid-stage SaaS: the temptation to keep every audience warm because each one represents a potential expansion path. The problem is that "warm for everyone" usually means "first-screen-clear to nobody" — and it makes the next eighteen months of engineering disproportionately harder, because every feature ends up having to carry six justifications instead of one.

Tor Einar's ask to us was unusually sharp:

1. Pick **one** primary user to build for first.
2. Lay a design-system foundation the team could keep building on long-term.

Both asks are bets on focus, not features. Which is exactly the kind of conversation the [5-Day Prototype](/services/5-day-prototype) is built for.

## Five days, one decision, one foundation

We ran the sprint in early January 2026, with the design system delivered in the same week.

By day three the centre of gravity was obvious in hindsight: **the CTO as the primary operator and configurator**, **the board-pack PDF as the first real artefact**, everything else sequenced behind that. The CTO is the one who sets the system up, who configures what gets pulled from Jira and Azure, who shapes what the board ultimately sees. Everyone else — NEDs, VCs, angels — consumes downstream. So the first screens needed to serve the CTO well. The reading audiences would be served by the artefacts the CTO produced.

![BAS TrustDesk task workflow cards linked to Jira and GitHub](/images/bas/bas-tasks.jpg)

By day five Tor Einar had a hi-res clickable prototype and a system of tokens, components and patterns his engineers could carry straight into production.

The week did more than validate a concept. It reset the product brief.

## The rebuild that followed

What followed wasn't a tweak. TrustDesk rebuilt the application end-to-end on top of the new design system, cut scope, and carried a single visual and interaction language through every screen.

The current version is sharper, clearer about the problem it solves, and easier to use. The before-and-after isn't a UI refresh — it's the difference between a product trying to be six things at once and a product confident about the one thing it's for.

> "We came in with a live product, a handful of customers, and a vibe-coded prototype of where we thought the next version needed to go. Five days with SmplCo gave us two things we could not easily have got on our own: the discipline to pick one primary user, and a design system that has carried through every screen of the rebuild."
>
> **Tor Einar Enne**, Founder, BAS Trust Systems

## The lesson worth borrowing

If you're a founder with a live product and a list of six possible primary users, the temptation to keep building for all of them is enormous. Every retention chart, every roadmap meeting, every investor pitch will remind you why each audience matters.

The 5-day sprint isn't magic. What it does is force a decision that's hard to make in your own head while customer support tickets are still coming in. You step out of the live product for a week, pick the user whose journey matters most for the next twelve months, and carry that decision into the rebuild.

For BAS TrustDesk, the user was the CTO. For your product, it'll be someone else. But the discipline is the same: one user first, the rest sequenced behind them, and a design-system foundation that lets every future feature ship inside the same DNA.

## Find out more

[BAS TrustDesk](https://bastrustdesk.com) is live and adding customers, with the rebuilt product running on the design system we delivered in January.

If you've got a live product with too many primary users, or you're staring down a major rebuild and want to lay a foundation that'll outlast the first months of feature pressure, [come and have a chat with us](/contact). The 5-Day Prototype works on greenfield builds — and, as BAS proved, just as well on products that already have customers.
