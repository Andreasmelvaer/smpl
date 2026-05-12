---
title: "I Built My Own CRM. Then Went on a HubSpot Partner's Podcast."
description: "A licensed HubSpot partner invited me onto their podcast to defend dropping HubSpot for a self-built CRM. Here is what their CTO and I actually disagreed on."
hero_image: "/images/blog/saas-audit-build-custom-tools.jpg"
slug: "build-or-buy-crm-debate-podcast"
date: "2026-05-12"
author: "Andreas Melvær"
excerpt: "A licensed HubSpot partner invited me on for a build-versus-buy debate. The CTO is a former sculptor. The most useful 45 minutes I have spent on the subject."
tags: ["CRM", "Vibe coding", "Build vs Buy", "Custom Software", "AI"]
published: true
readTime: "5 min read"
faqs:
  - question: "Should small teams build their own CRM instead of using HubSpot?"
    answer: "It depends on team size and where the cost sits. A small senior team can usually replace a HubSpot subscription with a custom CRM in a week or two of focused work using AI-assisted development tools, and own the data and the speed of iteration. The trade-off is the maintenance burden once the team grows. If you are scaling a multi-person sales motion with people coming and going, the standardised layer HubSpot provides is worth paying for."
  - question: "What did Dorian McFarland argue against vibe-coded CRMs?"
    answer: "Three main points. One, great digital systems are about subtraction, and off-the-shelf products represent subtraction that other product teams have already worked out via thousands of customer-feedback sessions. Two, a vibe-coded internal tool is ours until someone has to migrate it, integrate it with a fourth system, or hire to maintain it. Three, we are in a Cambrian-Explosion phase for software where volume will explode and the bottleneck will shift from building to judging quality."
  - question: "What is the spreadsheet parallel for vibe coding?"
    answer: "Before VisiCalc and Lotus 1-2-3, spreadsheets were done on paper with pencils and mechanical calculators. The moment electronic spreadsheets arrived, the friction of producing one collapsed and the volume of spreadsheet files exploded. New friction emerged: navigating a labyrinth of personal Excel files nobody else can read. AI-assisted coding is doing the same thing to software now."
  - question: "When does it still make sense to buy HubSpot?"
    answer: "When you are scaling a multi-person revenue team where the standardised process layer is worth paying for. Sales, marketing and customer-success people coming and going on the same pipeline need a system of record that survives turnover. That is exactly what HubSpot and similar products are built for, and that is exactly when building your own becomes more cost than benefit."
---

**In short:** Frei is a licensed HubSpot partner in Norway. They invited me onto their podcast to defend the decision to drop HubSpot and build SmplCo's own CRM in-house. Their CTO is a former sculptor. The most useful 45 minutes I have spent on the build-versus-buy question.

A couple of weeks ago I [wrote about](/blog/build-your-own-digital-ecosystem) why we dropped HubSpot and built our own CRM. The piece landed in front of Frei, a Norwegian consultancy. Frei is a licensed HubSpot partner. They consult on HubSpot daily. When their producer asked if I would come on the podcast for a build-versus-buy debate I half expected them to politely decline once they realised what they were inviting.

They did the opposite. They sharpened up.

## Dorian, the sculptor

The man I was debating is [Dorian McFarland](https://www.linkedin.com/in/dorianmcfarland/), CTO at Frei. Before he was a CTO, Dorian was a stonecutter. A sculptor. And he talked about great digital systems the way a sculptor talks about a finished piece: the work is mostly subtraction. You do not add features to reveal the shape. You take features away.

That is the exact frame I wish more product teams would adopt. It is also the strongest argument against what I did with our CRM. The easiest way to subtract features is to choose a tool someone else already subtracted them from. Off-the-shelf SaaS is subtraction by negotiation, by product team, by ten thousand customer-feedback sessions. When you build your own, the subtraction is your job. Done well, you get a tool that fits. Done badly, you get bloat that happens to be yours.

I had not heard the subtraction frame put that cleanly before. It will stay with me.

## The Cambrian Explosion

The conversation kept escaping the CRM question. Dorian pulled in a comparison to the Cambrian Explosion, 500 million years ago, when basic biological building blocks (eyes, skeletons, nervous systems) had finally evolved and the variety of life forms exploded almost overnight. The combinations had been impossible. Then they were possible. Then they were everywhere.

Software is having a Cambrian moment. The basic building blocks (model APIs, frameworks, standardised infrastructure, AI codegen) are now available to everybody. The result is not just more developers. It is more *kinds* of builders. People who used to be product designers, marketers, founders, are shipping working software.

Andreas Oddane, the host, added a parallel I think will stick with me even longer. Before VisiCalc and Lotus 1-2-3, spreadsheets were done by hand. Pencils, rulers, mechanical calculators. The friction of producing one was high enough that very few people did spreadsheets in earnest. Then a Harvard student and his MIT-programmer friend shipped the electronic spreadsheet. Friction collapsed.

The explosion that followed was not an explosion of *valuable* spreadsheets. It was an explosion of *spreadsheet files*. Every business is now buried under personal Excel labyrinths that nobody else can read. The friction did not disappear. It moved.

## Where I conceded

Dorian was direct about maintenance. A vibe-coded CRM is ours until the day we have to migrate it, integrate it with a fourth system, or hire someone to maintain it. At that point "ours" becomes "his" or "no-one's". The maintenance burden is the cost most people miss.

I gave him that. Our CRM works because the team that built it is the team that uses it. If I left SmplCo tomorrow, the next person would inherit a system they did not design. That is a real risk and I did not have a clean answer for it on the call.

## The Pixar argument for HubSpot

A few days after the episode dropped, one of Frei's founders posted a long thread that made me pause for a second time. He compared where CRM is going to Pixar.

People who watch Toy Story do not think about the renderer. They watch the story. Pixar happens to be one of the most advanced technology companies on the planet (render farms, physics engines, simulation systems) but the audience never sees any of it. The technology is invisible. The story is the entire experience.

CRM has never managed to close its hood. The technology that should be underneath has become the workplace. Most CRM users spend their day digging in side panels, fiddling with object fields, and rebuilding broken reports. That is the opposite of Pixar. The tech is the experience, and the actual work (talking to customers, selling things, marketing things) gets squeezed.

Frei's argument is that AI is finally going to push CRM's plumbing under the hood. The new workspace will be conversational. You ask, the system answers, the system acts. The data underneath gets used to operationalise strategy instead of being the strategy.

If that prediction is right, then HubSpot's value goes up, not down. You want a clean, structured, queryable substrate for AI to work on. Building your own CRM from scratch gives you a substrate. Buying HubSpot also gives you one, with a decade of integrations and someone else maintaining it.

This is the version of the build-vs-buy debate I find genuinely hard. It is also the version most takes on LinkedIn never get to.

## Where I held ground

The threshold for "business critical" has shifted. Two years ago, vibe-coding internal tools was risky for any team. Today the tooling has matured. The codegen is better, the debugging loop is faster, the patterns are stable. A small senior team replacing 30% of their SaaS stack with custom tools they own is not the same risk it was three years ago. The post I wrote in April is one example. The way we ship client work at SmplCo is another. We are not the only ones doing it.

## Who should build their own

If you are a small senior team with a clear picture of the half-dozen workflows that drive your business, building your own internal tools is one of the best calls available to you. You own the data, you own the speed of iteration, and you stop paying per seat for features you do not use.

If you are scaling a multi-person sales or marketing team across functions, buy the standardised layer. Sales, marketing and CS people coming and going on the same pipeline need a system of record that survives turnover. That is what HubSpot is built for and that is when it earns its money.

Most of us are somewhere between. That is where the real debate sits and that is where Dorian and I ended up. Civilised, honest, and useful. If you are weighing build versus buy on your own stack, this hour is worth the time.

[**Listen to the episode on Spotify**](https://open.spotify.com/episode/6XJKvkwhIDDtSbozeN5x8M).

Related reading:
- [We replaced our SaaS stack with custom internal tools](/blog/build-your-own-digital-ecosystem)
- [The case for disciplined vibecoding](/blog/vibecoding-how-we-actually-ship-products)

Thanks to Dorian McFarland, host Andreas Oddane, the team at [Frei](https://frei.no/), and producer [Top of Mind](https://topofmind.no/) for setting it up.
