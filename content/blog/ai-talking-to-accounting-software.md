---
title: "When AI Starts Talking to Your Accounting Software"
description: "I wired Claude into PowerOfficeGo. Then I called the lawyers at CMS Kluge. Notes from the build, the legal grey zones, and the event on 4 June."
hero_image: "/images/blog/ai-talking-to-accounting-software.webp"
slug: "ai-talking-to-accounting-software"
date: "2026-05-13"
author: "Andreas Melvær"
excerpt: "I wired Claude into our accounting software. Then I called the lawyers. Notes from the build, the legal grey zones, and the 4 June event with CMS Kluge."
tags: ["AI", "MCP", "Vibe coding", "Legal", "Internal Tools"]
published: true
readTime: "5 min read"
faqs:
  - question: "What is an MCP?"
    answer: "MCP stands for Model Context Protocol. It is a structured bridge between an AI model and another software system. The AI can perform specific actions on specific data through the MCP, in a way the underlying system understands and can audit. It is the layer that lets you talk to your accounting system, your CRM, or your ad platform via natural language instead of clicking through interfaces."
  - question: "Is it legal to connect an AI model to my accounting system?"
    answer: "It depends. The laws were not written for this case, and most of the legal grey zones are about data flow rather than the AI itself. GDPR matters, accounting-law obligations matter, and where the model is hosted matters. The safe path is to keep the model inside a controlled environment (your existing Microsoft enterprise sandbox, for example), define what the AI is allowed to touch and what it must not, and have a lawyer look at the integration before sensitive data starts flowing. Do not assume yes, do not assume no, ask."
  - question: "What is the biggest mistake people make with AI-assisted development?"
    answer: "Skipping the planning step. The building part now works in an afternoon, so the temptation is to skip the slow part and go straight to the fun part. The planning is what separates a useful internal tool from a Frankenstein. Map workflows, friction, data flows, permissions, and the actions the AI should and should not be allowed to take. Make the model explain the plan back to you before any code gets written."
  - question: "What is Tech-Forum Stavanger?"
    answer: "Tech-Forum Stavanger is a regional gathering for industry leaders in the Stavanger region. The 4 June 2026 edition focuses on AI-assisted coding and the legal grey zones it opens up for companies who want to build their own digital tools. It is hosted at CMS Kluge's offices in Herbarium, with speakers from Easee, Aline, SmplCo, and CMS Kluge. Food, drinks, and industry networking afterwards."
---

**In short:** On Thursday 4 June I am speaking at Tech-Forum Stavanger at CMS Kluge's offices, alongside the CFO of Easee, the MD of Aline AS, and two of CMS Kluge's lawyers. The format is unusual: I present a working AI-coded tool, the lawyers do a live risk analysis of it on stage, and we see what survives. To set it up I wired Claude into PowerOfficeGo, our accounting system. This is what I learned in the process and why we asked the lawyers to be in the room.

## Why I built it

Before every board meeting I find myself fighting the same interfaces. Reporting tools I use four times a year. Filters I half-remember. Date ranges I always have to double-check. None of it is hard. It is slow enough that I dread the half hour before each meeting.

The other thing is the small administrative tax that sits across every consultancy. New client. New project number. Sprint complete, draft an invoice. Each task takes two minutes. Each task gets done forty times a year. Multiply across a team and you are paying real money for clicking through forms.

So I started wondering what would happen if I could just talk to the software instead of operating it.

## What I built

PowerOfficeGo were generous enough to give me API access in a test environment. The piece that connects an AI model to another system is called an MCP. Model Context Protocol. Think of it as a bridge with rails on it: the AI can do specific things on specific data, in a way the underlying system understands.

What I built is that bridge. Now I can sit in Claude and say things like:

- "Create a new client called Menu."
- "Create a five-day sprint project for Menu about checkout systems."
- "We finished the sprint. Draft the invoice."
- "Show me the latest board reports."

And the system does it.

It feels properly futuristic the first few times. Then it just feels like the way software should have worked all along.

## Why I called the lawyers

About a week in, I was reading something about Regnskapsloven (Norway's accounting law) and a small thought arrived: what happens when information that used to live safely inside an accounting system starts flowing through an external AI model?

The honest answer is I'm not sure. The slightly less honest answer is that probably nobody is. Most regulations were written long before someone could connect their accounting software to Claude over a weekend. We can now. The legal frameworks have not caught up.

That is why CMS Kluge will be in the room. Not to say yes or no, but to map the terrain. What sits inside GDPR. What sits outside it. Where the boundary is between safe experimentation and an exposure nobody noticed.

The interesting question is not whether AI in business is happening. It is happening, in every company, mostly outside official channels. The interesting question is whether the people building these tools understand what they are wiring together.

## What companies are underestimating

A lot of large organisations already have most of the safety infrastructure they need. Microsoft enterprise environments with sandboxing baked in. Permission systems tightened over years. Audit logs. Existing GDPR controls. Internal sign-off processes.

The opportunity is not really to replace any of that. It is to change how people inside the company interact with the systems they already have.

If you have spent serious time inside Meta Business Suite, Google Ads, or a large ERP, you know what I mean. Vast interfaces, layered with dashboards, settings, side panels, dropdowns. Most of the people who need a single answer from those systems are not specialists. The cost of operating them adds up fast.

A conversational layer over the same systems removes most of that friction. You stop navigating software and start asking it questions. The data is the same. The permissions are the same. The legal substrate is the same. The cognitive load drops by an order of magnitude.

That, more than any new app, is the change that will quietly compound over the next year inside companies that get it right.

## The mistake everyone makes

The biggest thing that goes wrong with AI-assisted development right now is people skipping the planning step.

The reason is obvious. The building part suddenly works. You sit down at lunch, you have an idea, you ask an agent, and by dinner you have something that runs. The temptation is to skip the slow part and go straight to the fun part. Most teams I have watched fall into this.

The slow part is the part that matters.

Before I built the MCP into PowerOfficeGo, I sat with Claude in planning mode for an afternoon. We mapped:

- Which workflows in our consultancy were worth automating
- Where the friction actually sat
- Which data needed to flow where
- Which fields the AI should never touch
- Which actions needed a human in the loop, and which were safe to run alone

Then I made Claude explain the plan back to me before writing a line of code. If the explanation did not make sense, the plan was wrong, and the build would have been wrong.

That sequence is boring. It is also the difference between a useful internal tool and a Frankenstein your future self has to apologise for.

## What I hope people leave the event with

A clear head, mostly.

There are useful AI-assisted automations sitting quietly on the table in most companies right now. Most are not moonshots. They are small bridges between tools the company already pays for, used by people who do not need a developer's permission to try something. That is most of the upside.

The other thing I want people to leave with is a compass for the trade-offs. Where the safe ground is inside their existing tech stack. Which pattern of human-in-the-loop makes sense for which task. Which connections are worth thinking carefully about before wiring them up. And a sense of when to call a lawyer rather than guessing.

The whole reason this is interesting is that the laws were not written for last summer's tech. We are figuring it out together. CMS Kluge is the right kind of room to do that figuring in.

## If you want to come

**Tech-Forum Stavanger**, Thursday 4 June 2026.
**Where**: CMS Kluge, Herbarium, Olav Kyrres gate 21, Stavanger.

**Programme**:
- 15:30: Doors, registration, food and drinks
- 16:00: Welcome by Linn Cathrine Jøsendal, CMS Kluge
- 16:05: Intro to AI-assisted coding, Line Hjartarson (Aline AS)
- 16:20: Presentation of an AI-coded tool with a live legal-and-risk analysis on stage. Me, plus Ove Andre Vanebo and Bernt Olav Thorsheim from CMS Kluge
- 16:50: Practical experience with AI-assisted coding, Øyvind Osjord (CFO, Easee ASA)
- 17:10: Panel discussion moderated by Bernt Olav Thorsheim, CMS Kluge
- 17:30: Wrap, with the option to stay on the rooftop terrace if the weather holds

Hosted by CMS Kluge alongside Laerdal Medical, Corporater, SpareBank 1 Sør-Norge, and Håmsø Patentbyrå.

[**Register here**](https://news.cms.law/s/de1d5df3ed24f05ff0b0c7aea49148290a7923b3).

If you cannot make it but want to talk about a specific build you are considering, [get in touch](/contact). We do this kind of work for clients at SmplCo every week. The plan-before-you-build framework, the MCP work, the integration layer that connects what you already use. Same playbook as the PowerOfficeGo build, scaled to the workflow that matters in your business.
