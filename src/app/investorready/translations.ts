// ---------------------------------------------------------------------------
// Investor Ready — "What Kind of Founder Are You?" quiz
// English only (plain British English, no dialect)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// UI strings
// ---------------------------------------------------------------------------

export const ui = {
  subtitle: 'Investor Ready 2026',
  title1: 'What kind of',
  titleHighlight: 'founder',
  title2: 'are you?',
  tagline: '6 questions. Total honesty.\nYour investors will thank you. Maybe.',
  start: 'Find out',
  disclaimer: 'Your results may be uncomfortably accurate.',
  next: 'Next',
  prev: '←',
  seeResult: 'Show me the truth',
  youAre: 'You are…',
  diagnosis: 'Diagnosis',
  strength: 'Superpower',
  weakness: 'Blind spot',
  prescription: 'Advice',
  share: 'Share on LinkedIn',
  copied: 'Copied!',
  retake: 'Take it again',
  browseAll: 'All the founder types',
  ctaTitle: 'Ready to get investor-ready for real?',
  ctaSubtitle: 'We help founders prep their pitch, prototype their product,\nand get in front of the right investors.',
  ctaButton: 'Get your free Pitch Prep Guide →',
} as const

// ---------------------------------------------------------------------------
// Slider labels
// ---------------------------------------------------------------------------

export const sliderLabels = {
  runway: 'How much runway makes you sleep at night?',
  pitchStyle: 'Pick your pitch style',
  teamSize: 'How big is your dream team?',
  pivotCount: 'How many pivots deep are you?',
  riskAppetite: 'How much risk can you stomach?',
  investorType: 'Pick your ideal investor',
} as const

// ---------------------------------------------------------------------------
// Slider commentary
// ---------------------------------------------------------------------------

export const sliderCommentary = {
  runway: [
    "3 months. You like living dangerously. Your accountant has given up.",
    "6 months. Sensible. Boring, but sensible. Like a Volvo.",
    "12 months. The sweet spot. You've read a blog about runway management.",
    "18 months. You're either very funded or very frugal. Either way, respect.",
    "24+ months. You're not a startup, you're a savings account with a pitch deck.",
  ],
  pitchStyle: [
    "All data, no story. Your deck is a spreadsheet with a logo on it.",
    "Data-led with some narrative. Safe. Investors will nod politely.",
    "Balanced. Equal parts vision and evidence. You've done this before.",
    "Story-first. You could sell ice to a penguin. Numbers are an afterthought.",
    "Pure vibes. No deck. You just walk in, make eye contact, and start talking about your childhood.",
  ],
  teamSize: [
    "Solo founder. You do everything. Sleep is a myth. You are the MVP.",
    "Two co-founders. The classic duo. One builds, one sells. Hopefully.",
    "3-5 people. A proper team. You've had your first argument about equity.",
    "6-15 people. Growing fast. You spend more time in meetings than building.",
    "16+. You're not a startup anymore, you just haven't admitted it yet.",
  ],
  pivotCount: [
    "Zero pivots. You knew from day one. Visionary or delusional — jury's still out.",
    "One pivot. Normal. Healthy. You listened to the market. Good for you.",
    "Two pivots. Starting to look indecisive, but you'll say it's 'iteration'.",
    "Three pivots. Your original idea and your current product share nothing but a logo.",
    "Four+ pivots. At this point you're just starting new companies and calling it strategy.",
  ],
  riskAppetite: [
    "Minimal risk. You have a backup plan for your backup plan. And a pension.",
    "Calculated risk. You weigh the odds. Spreadsheets are involved.",
    "Moderate. You'll take a bet, but you'll lose sleep over it.",
    "High risk. You remortgaged the house. Your partner may or may not know.",
    "All in. You've burned the boats, the bridges, and possibly some relationships.",
  ],
  investorType: [
    "Angels. Nice people with money and advice. Sometimes too much advice.",
    "Family offices. Old money, patient capital. They'll wait. You hope.",
    "VCs. Fast money, high expectations. They want 10x or nothing.",
    "Syndicates. Lots of small cheques. Lots of opinions. Good luck.",
    "Government grants. Free money with a 47-page application and quarterly reporting forever.",
  ],
} as const

// ---------------------------------------------------------------------------
// Archetype types
// ---------------------------------------------------------------------------

export type ArchetypeKey =
  | 'visionary'
  | 'reluctantCeo'
  | 'serialPivoter'
  | 'techCofounder'
  | 'hustler'
  | 'bootstrapper'
  | 'deckPolisher'
  | 'accidentalFounder'

export interface ArchetypeData {
  name: string
  tagline: string
  description: string
  diagnosis: string
  strength: string
  weakness: string
  prescription: string
}

// Character images — reusing designer blob characters
export const archetypeImages: Record<ArchetypeKey, string> = {
  visionary: '/whatdesignerareyou/Kaos-Kunstnaren.png',
  reluctantCeo: '/whatdesignerareyou/Den Tause Pikselsnekkaren.png',
  serialPivoter: '/whatdesignerareyou/Lurendreiaren Som Faen Meg Levere.png',
  techCofounder: '/whatdesignerareyou/notdsesigner.png',
  hustler: '/whatdesignerareyou/Komponent-Kongen med Kontrollbehov.png',
  bootstrapper: '/whatdesignerareyou/Helvetica-Noye.png',
  deckPolisher: '/whatdesignerareyou/Piksel-Pedanten.png',
  accidentalFounder: '/whatdesignerareyou/gridDictator.png',
}

export const archetypes: Record<ArchetypeKey, ArchetypeData> = {
  visionary: {
    name: 'The Visionary',
    tagline: "I don't do roadmaps. I do revolutions.",
    description:
      "You see the future so clearly it's almost annoying. You can articulate a ten-year vision before your morning coffee, but ask you what's shipping next Tuesday and you'll need a moment. Investors love your energy. Your team wishes you'd answer Slack.",
    diagnosis: 'Chronic future-gazing with acute present-blindness',
    strength: 'Can inspire a room full of sceptics to write cheques',
    weakness: "Has used the phrase 'we're not just building a product, we're building a movement' unironically",
    prescription: "Ship something this week. Anything. A button that works. Start there.",
  },
  reluctantCeo: {
    name: 'The Reluctant CEO',
    tagline: 'I just wanted to build the thing.',
    description:
      "You started this company because you had a great idea, not because you wanted to manage people, do sales calls, and explain your burn rate to strangers. Every board meeting feels like a hostage situation. You'd rather be coding. Or literally anything else.",
    diagnosis: 'Leadership aversion with compulsive delegation avoidance',
    strength: "Deep product knowledge that makes investors trust you'll actually build it",
    weakness: "Has 'replied all' to a board email with just 'k'",
    prescription: "Hire a COO. Seriously. Let someone else do the spreadsheets.",
  },
  serialPivoter: {
    name: 'The Serial Pivoter',
    tagline: "It's not a pivot, it's strategic evolution.",
    description:
      "Your company has changed direction so many times that your pitch deck has a version number in the triple digits. You call it 'responding to the market.' Your investors call it 'concerning.' But somehow, each pivot gets slightly closer to something real.",
    diagnosis: 'Chronic directional instability with optimistic reframing',
    strength: "Adaptability that would make a chameleon jealous",
    weakness: "Your earliest employees have no idea what the company does anymore",
    prescription: "Pick a direction. Any direction. Commit to it for 6 months. Set a timer.",
  },
  techCofounder: {
    name: 'The Technical Co-founder',
    tagline: "Have you tried turning the business model off and on again?",
    description:
      "You can build anything. Literally anything. The problem is nobody asked you to build most of it. You've rewritten the backend three times because the architecture 'wasn't elegant enough.' Your co-founder has aged visibly since you started.",
    diagnosis: 'Over-engineering syndrome with commercial awareness deficit',
    strength: "Can ship a working MVP in a weekend (then spend 6 months refactoring it)",
    weakness: "Once described a sales call as 'a waste of engineering time'",
    prescription: "Talk to a customer this week. A real one. Not your mum.",
  },
  hustler: {
    name: 'The Hustler',
    tagline: 'I know a guy who knows a guy.',
    description:
      "You've never met a networking event you didn't dominate. Your LinkedIn has more connections than most people's contact lists. You can get a meeting with anyone. The only problem is you occasionally promise things the product can't actually do. Yet.",
    diagnosis: 'Chronic over-promising with intermittent delivery',
    strength: "Can open doors that don't technically exist",
    weakness: "Has described a Google Sheet as 'our proprietary platform' to an investor",
    prescription: "Under-promise once. Just once. See how it feels.",
  },
  bootstrapper: {
    name: 'The Bootstrapper',
    tagline: "VC money? I'd rather eat my own shoes.",
    description:
      "You've built this business on nothing but revenue, stubbornness, and a suspiciously cheap office. You view fundraising as selling your soul. You're profitable but growing slowly, and every time someone mentions 'blitzscaling' you feel physically ill.",
    diagnosis: 'Acute funding aversion with puritanical growth disorder',
    strength: "Actually profitable, which is more than most funded startups can say",
    weakness: "Turns down meetings with investors out of principle, even when the bank balance is concerning",
    prescription: "Taking money isn't selling out. It's buying time. At least take the meeting.",
  },
  deckPolisher: {
    name: 'The Deck Polisher',
    tagline: 'Just one more revision and it will be perfect.',
    description:
      "Your pitch deck has been 'nearly finished' for four months. You've changed the font six times. The colour palette has been A/B tested with friends. You know more about slide transitions than unit economics. The deck looks incredible. The business is waiting.",
    diagnosis: 'Perfectionist procrastination with presentation fixation',
    strength: "When you finally pitch, the slides will make investors weep with joy",
    weakness: "Has spent more time on the 'team slide' photo layout than on the financial model",
    prescription: "Send the deck. Today. It's good enough. It was good enough three months ago.",
  },
  accidentalFounder: {
    name: 'The Accidental Founder',
    tagline: "I was just solving my own problem.",
    description:
      "You didn't set out to start a company. You just built something you needed, showed it to a few people, and now somehow you have customers, a Stripe account, and an accountant asking about your 'corporate structure.' You're not sure how you got here but you're too far in to stop.",
    diagnosis: 'Unintentional entrepreneurship with bewildered competence',
    strength: "Built something people actually want, which is surprisingly rare",
    weakness: "Still introduces yourself as 'not really a CEO' at networking events",
    prescription: "Own it. You're a founder. Print business cards. Tell your mum.",
  },
}

// ---------------------------------------------------------------------------
// Character reactions
// ---------------------------------------------------------------------------

export interface Reaction {
  character: ArchetypeKey
  comment: string
}

export const reactions: Record<string, Reaction> = {
  // Runway — all positions
  'runway:0': { character: 'bootstrapper', comment: "3 months?! That's not runway, that's a sprint to bankruptcy." },
  'runway:1': { character: 'hustler', comment: "6 months. I could close a round in that time. Probably. Maybe." },
  'runway:2': { character: 'deckPolisher', comment: "12 months. Finally, enough time to perfect the deck." },
  'runway:3': { character: 'reluctantCeo', comment: "18 months. That's a lot of board meetings to survive." },
  'runway:4': { character: 'visionary', comment: "24 months?! By then the market will have moved. Ship something!" },
  // Pitch style
  'pitchStyle:0': { character: 'visionary', comment: "All data? Where's the STORY? Where's the DREAM?!" },
  'pitchStyle:4': { character: 'techCofounder', comment: "No deck? No data? I'm going to need a moment." },
  // Team size
  'teamSize:0': { character: 'hustler', comment: "Solo? Who's doing the sales calls while you're building?" },
  'teamSize:4': { character: 'bootstrapper', comment: "16 people?! Do you know what that COSTS every month?!" },
  // Pivot count
  'pivotCount:0': { character: 'serialPivoter', comment: "Zero pivots? Either genius or hasn't spoken to a customer yet." },
  'pivotCount:4': { character: 'reluctantCeo', comment: "Four pivots. At that point just start a new company, honestly." },
  // Risk
  'riskAppetite:0': { character: 'hustler', comment: "Minimal risk? You're not building a startup, you're building a hobby." },
  'riskAppetite:4': { character: 'bootstrapper', comment: "All in?! That's not courage, that's a cry for help." },
  // Investor type
  'investorType:0': { character: 'visionary', comment: "Angels are lovely. But lovely doesn't scale to Series A." },
  'investorType:2': { character: 'bootstrapper', comment: "VCs. Great. Enjoy your board seats and quarterly existential crises." },
  'investorType:4': { character: 'hustler', comment: "Government grants? Hope you like paperwork more than product." },
}
