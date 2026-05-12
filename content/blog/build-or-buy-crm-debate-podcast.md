---
title: "I Built My Own CRM. Then a HubSpot Partner Took Me On."
description: "A licensed HubSpot partner invited me on their podcast to debate dropping HubSpot for a self-built CRM. Six things to think through before you do the same."
hero_image: "/images/blog/build-or-buy-crm-debate-podcast.webp"
slug: "build-or-buy-crm-debate-podcast"
date: "2026-05-12"
author: "Andreas Melvær"
excerpt: "A licensed HubSpot partner invited me on to defend the decision to drop HubSpot. Here is what their CTO and I actually disagreed on, and six things to think through if you are tempted to build your own."
tags: ["CRM", "Vibe coding", "Build vs Buy", "Custom Software", "AI"]
published: true
readTime: "6 min read"
faqs:
  - question: "Should small teams build their own CRM instead of using HubSpot?"
    answer: "It depends on team size and where the cost actually sits. A small senior team can usually replace a HubSpot subscription with a custom CRM in a week or two of focused work using AI-assisted development tools, and own the data, the speed of iteration, and the workflow. The trade-off is the maintenance burden once the team grows beyond the original builder. If you are scaling a multi-person revenue motion with people coming and going, the standardised process layer HubSpot provides is usually worth paying for."
  - question: "What is the door problem in CRM terms?"
    answer: "The door problem is a phrase from game development that describes how a feature that looks simple (a door in a game) hides huge complexity underneath (animation, collision, NPCs, lighting, audio, permissions). Dorian McFarland used the same idea to explain why a CRM is not one feature but a structured workflow from end to end. The visible part of a CRM is small. The maintenance, evolution, integration, and governance underneath is most of the actual work."
  - question: "What did Dorian McFarland argue against vibe-coded CRMs?"
    answer: "Three main points. First, that great digital systems are sculpture and that off-the-shelf products like HubSpot are subtraction that other product teams already worked out via thousands of customer-feedback sessions. Second, that a vibe-coded internal tool is yours until you have to migrate it, integrate it with a fourth system, or hire to maintain it, and you lose the cognitive investment when AI agents do most of the building. Third, that we are in a phase where the volume of software is about to explode and the bottleneck shifts from building to judging quality."
  - question: "What does Andreas's CRM actually do?"
    answer: "It tracks people from first contact (a webinar attendance or a blog click) all the way to a signed contract. Gated-content downloads trigger a calendar booking link automatically. Meetings get auto-summarised by Gemini and attached to the contact. Contract conversions update the CRM automatically. It runs on top of SmplCo's existing Google Workspace stack rather than as a standalone system."
  - question: "When does HubSpot still make sense over a custom CRM?"
    answer: "When you are scaling a multi-person revenue team and need a system of record that survives turnover. Sales, marketing and customer-success people coming and going on the same pipeline need a shared, standardised layer. HubSpot is built for exactly that. Building your own becomes more cost than benefit the moment you have more than one or two people maintaining it."
---

**In short:** A Norwegian consultancy called Frei is a licensed HubSpot partner. They invited me onto their podcast to defend the decision to drop HubSpot and build SmplCo's own CRM. Their CTO is a former sculptor. The most useful 45 minutes I have spent on the build-versus-buy question.

A couple of weeks ago I [wrote about](/blog/build-your-own-digital-ecosystem) why we dropped HubSpot and built our own CRM. The post landed on the LinkedIn feed of [Frei](https://frei.no/), a Norwegian consultancy. Frei consults on HubSpot every day. They are a licensed partner. I sent their producer a half-serious DM: "Is this too hot to talk about, given HubSpot?"

Their answer was the opposite of what I expected. They sharpened their pencils.

## Who I was debating

The man across the table from me was Dorian McFarland, CTO at Frei. The first thing Dorian told me about himself was that he was a stonecutter. A sculptor. Trained as an artist 30 years ago, self-taught into technology, mostly through making mistakes for two decades. I liked him immediately.

The host is Andreas Oddane. He framed the format up front. They wanted dialectic, not consensus. He asked us both to hold our positions a beat longer than was comfortable, on the theory that the middle ground gets watered down too quickly when reasonable people meet.

It worked. We ended up somewhere I didn't expect.

## What I had actually built

For listeners who hadn't read the original post, I summarised. SmplCo's CRM is a small custom system tied to our Google Workspace stack. It picks people up the moment they touch us (a webinar, a blog click, a gated download), drops them a Calendar booking link, and follows them through to a first meeting without anyone touching it. After the meeting, Gemini writes a summary and attaches it to the contact. When a contract is signed, the record updates itself.

It replaced HubSpot. It converts our leads better than the team-managed pipeline did. It costs us roughly nothing per month.

That's the version I went in with.

## The door problem

Dorian's first move was to question whether what I had built was actually a CRM. He pulled in a phrase from game development: the *door problem*. In a video game, a door looks simple. Until you try to build one. Animation states, collision detection, NPC pathing, lighting, audio, who has the key, what happens when two people open it at once. The visible part is one percent of the actual work.

His point: a CRM isn't a feature. It's a structured workflow from end to end. Most of what makes a CRM worth paying for is the part you don't see. Audit history. Governance. Permissions. The decade of edge cases other product teams have already worked through.

He had a number for it: 80 percent of the system gets built in the first weekend. 10 percent in the next week. The remaining 10 percent is the rest of the system's life, because it never finishes. New needs land. Integrations break. People leave. That last 10 percent is where the actual cost lives.

That landed. I had no clean counter to it on the call.

## The sculptor's argument

The strongest moment in the conversation, for me, came when Dorian pulled in his old craft. He started as a stonecutter. The work of a sculptor, he said, is to find the form already inside the stone and carve away everything that isn't it. Michelangelo's job description, more or less.

He used this to explain HubSpot. An enterprise CRM is a block of marble. You don't add features to make it fit your business. You hide them. You shape the interface down until what's left is the form your team actually needs. The work is subtraction, and the marble has already been quarried.

Building your own is the other approach. You start with a lump of clay and shape upward. You also become responsible for every feature that does or doesn't exist.

I had not heard the subtraction frame put that cleanly before. It will stay with me.

## The new vendor lock-in

The other strong point Dorian made was about lock-in. We tend to think of SaaS lock-in as the thing we're escaping by building our own. Investing time in HubSpot becomes a cost the moment you want to leave. Fair enough.

But Dorian's argument was that we are trading one form of lock-in for another. He called it *Development as a Service*. When an AI agent writes the code, you own the output, but you don't own the cognitive investment. You don't quite know how it works. Agents write documentation, but be honest: who reads it?

Andreas Oddane sharpened the point. The moment the human task gets handed to the agent, learning stops. You build a thing that works, but you don't learn the thing the way you would if you had built it yourself. And the agent's price will rise, slowly, until it sits just below the cost of a human doing the same work. That is the same lock-in we have always had with vendors. It just has a different shape.

I conceded ground here. I don't have a clean answer for what happens to SmplCo's CRM the day I leave SmplCo. The person who inherits it will inherit something they did not design and can't ask the original engineer about.

## Where I held ground

The threshold for "business critical" has moved. Two years ago, vibe-coding internal tools would have been irresponsible for almost any team. Today the codegen is better, the patterns are stable, and the debugging loop is faster. A small senior team replacing a chunk of its SaaS stack with custom tools is genuinely different from a small team trying to do the same in 2023.

The other thing I held on was the speed of the iteration loop. In a small team that uses what I built, I can see friction in real time. Someone struggles with a field, I rebuild the field that afternoon, we test it in a meeting that evening. Most importantly, I take things away. The Meta Ads agent I built isn't there because I love automation. It's there because I never want to log into Meta Ads Manager again.

Andreas Oddane pointed out that the willingness to remove things is, in his experience, the rarest behaviour he sees in software teams. People will add forever. Almost nobody will subtract.

That, more than anything, is the reason I think a built-our-own approach can work. It only works if you are the kind of operator who can delete things.

## Six things to consider before you build your own

If this debate has piqued your interest, here are the questions I'd run through honestly first. They came out of the conversation; they're not a marketing list.

**1. Do you have a clear data model?** Not a database schema. A clear picture of what entities exist in your business and how they relate. Without it, you'll build a Frankenstein and call it integration.

**2. Is your team small enough that one builder equals most users?** The 80-10-10 rule says the long tail of your system is maintenance. If you are the only one who can maintain it, that's fine while you're three people. It is a serious risk by the time you are 15.

**3. Can you actually take things away?** Dorian's sculpting metaphor cuts both ways. If you can't subtract, you'll end up with a homemade HubSpot in two years. With fewer engineers fixing it.

**4. Are you replicating, or building something that didn't exist?** Dorian noted that when photography arrived, people used it to take portraits. When AI arrived, the first thing companies ask is whether HubSpot can be made to behave like Excel. Don't build a CRM that imitates the CRM you just dropped. Build the thing that the old shape made impossible.

**5. What's your data foundation?** AI is mostly useful when there is clean, structured data sitting underneath. If you build a CRM on a clean foundation, your agents will get smarter as you grow. If you build it on duct tape, you have a duct-tape stack that AI just makes louder.

**6. What's your security and compliance posture?** Dorian is testing an MCP between Claude and PowerOffice, the accounting system. He's doing it with a corporate-law firm in the room. Anyone wiring an AI agent into commercial data without thinking about GDPR is asking for an interesting year. Move fast, but not on the legal stuff.

## What I'd actually advise

If you are small, senior, and clear-headed about your workflow, the case for building is stronger than it has ever been. The tooling has arrived. The cost has collapsed. You will own the result.

If you are not small, or not yet sure about the workflow, or worried about the day your only builder leaves the company, buy. HubSpot is a serious product. So is the standardised layer it gives you, especially as the data underneath becomes the substrate AI agents work on. Frei spends every day helping companies make that work.

If you want a third option, it's the one we run at SmplCo all the time: build something small enough that the team that uses it can also maintain it, on a foundation that the rest of the world can integrate with. It's the version most companies don't realise is available to them. If you want help thinking through whether it fits your situation, [get in touch](/contact). We are not the only people who can build it, but we have done it for our own house, and for clients, often enough to have a few opinions about what works.

The full debate is in Norwegian. Forty-five minutes of two people who actually disagree, hosted with civility.

Listen on [**Spotify**](https://open.spotify.com/episode/6XJKvkwhIDDtSbozeN5x8M) or [**Apple Podcasts**](https://podcasts.apple.com/no/podcast/5-vibe-or-die-eller-stole-p%C3%A5-det-som-er-bygget-debatt/id1874113969?i=1000767276048).

Thanks to Dorian McFarland, host Andreas Oddane, the team at [Frei](https://frei.no/), and producer [Top of Mind](https://topofmind.no/) for taking the conversation seriously.

Related reading:
- [We replaced our SaaS stack with custom internal tools](/blog/build-your-own-digital-ecosystem)
- [The case for disciplined vibecoding](/blog/vibecoding-how-we-actually-ship-products)
