// ---------------------------------------------------------------------------
// Yggdrasil – All UI text in Stavanger dialect (NO) and Scouse dialect (EN)
// ---------------------------------------------------------------------------

export type Locale = 'no' | 'en'

export function getDefaultLocale(): Locale {
  if (typeof navigator === 'undefined') return 'no'
  const lang = navigator.language.toLowerCase()
  return lang.startsWith('no') || lang.startsWith('nb') || lang.startsWith('nn')
    ? 'no'
    : 'en'
}

// ---------------------------------------------------------------------------
// Generic UI strings
// ---------------------------------------------------------------------------

export const ui = {
  no: {
    subtitle: 'Yggdrasil 2026',
    title1: 'Ka slags',
    titleHighlight: 'designer',
    title2: 'e du, egentlig?',
    tagline: '5 spørsmål. Null dømming.\nOk då, kanskje litt.',
    start: 'Finn det ud, om du tørr då',
    disclaimer: 'Resultatå dine kan bli brukt mot deg. Ikkje juridisk. Bare sosialt.',
    next: 'Neste',
    prev: 'Tilbake',
    seeResult: 'Vis meg sannheita',
    youAre: 'Du e…',
    diagnosis: 'Diagnose',
    strength: 'Styrke',
    weakness: 'Svakheit',
    prescription: 'Resept',
    share: 'Del resultatet',
    copied: 'Kopiert!',
    retake: 'Ta testen på nytt',
    ctaTitle: 'Vil du sjå ka ekte designarar faktisk levere?',
    ctaSubtitle: 'Teamet vårt har designa produkt for 125+ selskap.\nIngen shade. Ok, litt shade.',
    ctaButton: 'Sjå porteføljen →',
    langToggle: 'EN',
  },
  en: {
    subtitle: 'Yggdrasil 2026',
    title1: 'Go ed then, what kind of',
    titleHighlight: 'designer',
    title2: 'are yer?',
    tagline: "5 questions. No judgment.\nAlright, maybe a bit.",
    start: "Go ed then, if yer 'ard enough",
    disclaimer: "Yer results will be used against yer. Not legally like. Just socially.",
    next: 'Go ed',
    prev: 'Back',
    seeResult: 'Go ed, give us the truth',
    youAre: 'Right, so you are…',
    diagnosis: 'Diagnosis',
    strength: 'Dead good at',
    weakness: 'Bit of a nightmare',
    prescription: 'Doctor\'s orders',
    share: 'Share it with yer mates',
    copied: 'Sound, copied!',
    retake: 'Have another go',
    ctaTitle: "Wanna see what proper designers actually ship?",
    ctaSubtitle: "Our lot have designed stuff for 125+ companies.\nNo shade. Alright, a bit of shade.",
    ctaButton: 'See the portfolio →',
    langToggle: 'NO',
  },
} as const

// ---------------------------------------------------------------------------
// Slider commentary — changes at each slider position
// ---------------------------------------------------------------------------

export const sliderCommentary = {
  shape: {
    no: [
      'Skarpe hjørna. Du e typen som stryke skjortene sine. Og kalkulatoren.',
      'Litt avrunda. Du prøve å verka chill, men du e det ikkje.',
      'Squircle. Du bruke iPhone og har latt Apple bestemma smaken din.',
      'Nesten sirkel. Du huske ikkje sist du brukte ein linjal.',
      'Perfekt sirkel. Du har ikkje grensar. Bokstavelig talt.',
    ],
    en: [
      "Sharp corners. Yer the type who irons their shirts, aren't yer. And the calculator an all.",
      "Bit rounded. Tryin to look chill but yer dead not. We can all tell.",
      "Squircle. Got an iPhone, haven't yer. Let Apple decide yer whole taste. Sound.",
      "Nearly a circle. Can't remember the last time yer used a ruler, can yer.",
      "Perfect circle. No boundaries whatsoever. Literally none. Are yer alright?",
    ],
  },
  typography: {
    no: [
      'Monospace. Du skriv kode i terminalen og kalle det \"design\".',
      'Sans-serif. Du e trygg. Kjedelig, men trygg. Som ein Grandiosa.',
      'Slab serif. Du har ein \"vintage\" sykkel og ein kaffikvern frå Japan.',
      'Serif. Du trur du e betre enn alle andre. Og du har kanskje rett.',
      'Old style. Du har lest minst tre bøger om typografi. Ingen ba deg.',
      'Papyrus. Du har gitt opp. Som han som lagde Avatar-logoen. Ryan Gosling græt.',
    ],
    en: [
      "Monospace. Yer writin code in the terminal and callin it \"design\". Behave.",
      "Sans-serif. Dead safe. Boring, but safe. Like a chippy tea on a Friday.",
      "Slab serif. Got a \"vintage\" bike, haven't yer. And a coffee grinder from Japan. Boss that.",
      "Serif. Think yer better than everyone, don't yer. And honest to God, yer might be right.",
      "Old style. Yer've read three books on typography. Nobody asked yer to.",
      "Papyrus. Yer've given up, haven't yer. Like the fella who did the Avatar logo. Ryan Gosling's fumin.",
    ],
  },
  layout: {
    no: [
      'Ein kolonne. Du les avisa og like det enkelt. Som bestefa.',
      'To kolonnar. Du e ein ansvarleg vaksen. Kjedelig, men funksjonell.',
      'Grid. Du har eit regneark for alt. Inkludert følelsår.',
      'Asymmetrisk. Du trur du e kunstnar. Utviklaren din græt.',
      'Ingen grid. Kaos. Du lagrar ikkje filene dine heller, gjer du vel?',
    ],
    en: [
      "One column. Read the paper, like it simple. Sound as, like yer nan.",
      "Two columns. Yer a responsible adult, aren't yer. Dead dull, but it works.",
      "Grid. Got a spreadsheet for everythin, haven't yer. Includin feelings an all.",
      "Asymmetric. Think yer an artist, don't yer. Yer developer's in bits over it.",
      "No grid. Pure chaos. Yer don't save yer files either, do yer? Honest to God.",
    ],
  },
  colour: {
    no: [
      'Svart og kvitt. Du e enten ein minimalist eller ein vampyr.',
      'Jordfargar. Du kjøpe møbler på Fretex og kalle det \"kuratert\".',
      'Brand-fargar. Du følge reglane. HR elske deg. Ingen andre gjer det.',
      'Neon. Du har ikkje sove på 3 dagar og det SER ut som det.',
      'Full regnboge. Du e enten 6 år gammal eller ein genial galansen.',
    ],
    en: [
      "Black and white. Yer either a minimalist or a vampire. Could go either way honestly.",
      "Earth tones. Buyin furniture off Facebook Marketplace and callin it \"curated\". Nice one.",
      "Brand colours. Yer follow the rules, don't yer. HR love yer. Nobody else does.",
      "Neon. Haven't slept in 3 days and it SHOWS. Are yer alright?",
      "Full rainbow. Yer either 6 years old or an absolute mad genius. No in-between.",
    ],
  },
  motion: {
    no: [
      'Ingen animasjon. Du trur bevegelse e ein distraksjon. Du e gøy på festar.',
      'Subtil fade. Du e den typen som seie \"less is more\" uironisk.',
      'Smooth ease. Du e balansert. Mistenkelig balansert.',
      'Spring/bounce. Du har for mykje energi og alle rundt deg e heilt utslitne.',
      'Total sirkus. Du e eit menneskeleg ADHD-fyrverkeri og eg elske det.',
    ],
    en: [
      "No animation. Think motion's a distraction, don't yer. Bet yer dead fun at parties an all.",
      "Subtle fade. Yer the type who says \"less is more\" without a shred of irony. Behave.",
      "Smooth ease. Yer balanced. Suspiciously balanced. What yer hidin?",
      "Spring/bounce. Too much energy, yer. Everyone round yer is absolutely knackered.",
      "Total sirkus. Yer a human ADHD firework and honest to God, I love it.",
    ],
  },
  shadow: {
    no: [
      'Ingen skugge. Du e flat. Bokstavelig og personlegheitsmessig.',
      'Litt skugge. Du vil ha dybde, men e redd for å forplikta deg.',
      'Medium skugge. Balansert. Du les sikkert designbloggår og.',
      'Tung skugge. Du savne 2012. Alle knappane dine ser ut som dei flyg.',
      'MEGA skugge. Du e ein PowerPoint-designer og du har ingen skam.',
    ],
    en: [
      "No shadow. Yer flat. Literally and personality-wise.",
      "Bit of shadow. Want depth but yer scared of commitment, aren't yer.",
      "Medium shadow. Balanced. Yer probably read design blogs an all.",
      "Heavy shadow. Yer miss 2012, don't yer. All yer buttons look like they're floatin.",
      "MEGA shadow. Yer a PowerPoint designer and yer've got no shame. Respect.",
    ],
  },
} as const

// ---------------------------------------------------------------------------
// Slider labels (shown above slider)
// ---------------------------------------------------------------------------

export const sliderLabels = {
  shape: {
    no: 'Ka form e du?',
    en: "Go ed, what shape are yer?",
  },
  typography: {
    no: 'Vel din font-sjel',
    en: "Pick yer font soul",
  },
  layout: {
    no: 'Kor organisert e du, egentlig?',
    en: "How organised are yer, honestly?",
  },
  colour: {
    no: 'Ka farge brenne du for?',
    en: "What colour gets yer goin?",
  },
  motion: {
    no: 'Kor mykje bevegelse tåle du?',
    en: "How much motion can yer handle?",
  },
  shadow: {
    no: 'Kor mykje drop shadow tåle du?',
    en: "How much drop shadow can yer handle?",
  },
} as const

// ---------------------------------------------------------------------------
// Archetype results
// ---------------------------------------------------------------------------

export type ArchetypeKey =
  | 'neurotic'
  | 'imposter'
  | 'helvetica'
  | 'gridDictator'
  | 'chaotic'
  | 'hoarder'
  | 'awkward'
  | 'notDesigner'

export interface ArchetypeData {
  name: string
  tagline: string
  description: string
  diagnosis: string
  strength: string
  weakness: string
  prescription: string
}

// Character illustration paths (shared between locales)
export const archetypeImages: Partial<Record<ArchetypeKey, string>> = {
  neurotic: '/whatdesignerareyou/Piksel-Pedanten.png',
  imposter: '/whatdesignerareyou/Lurendreiaren Som Faen Meg Levere.png',
  helvetica: '/whatdesignerareyou/Helvetica-Noye.png',
  chaotic: '/whatdesignerareyou/Kaos-Kunstnaren.png',
  hoarder: '/whatdesignerareyou/Komponent-Kongen med Kontrollbehov.png',
  awkward: '/whatdesignerareyou/Den Tause Pikselsnekkaren.png',
}

export const archetypes: Record<Locale, Record<ArchetypeKey, ArchetypeData>> = {
  no: {
    neurotic: {
      name: 'Piksel-Pedanten',
      tagline: 'E den 1px ute? Ja. Ja, det e den.',
      description:
        'Du har zooma inn te 6400% fleire gonger enn du har ringt mora di. Du dør på haugen av optisk justering, og ærlig talt? Den haugen ser fokkings fantastisk kerna ut. Figma-filene dine e plettfrie. Fristane dine e ein vits.',
      diagnosis: 'Terminal kerning-angst med kronisk piksel-dysmorphi',
      strength: 'Handverk som får andre designarar te å grina i stillheit',
      weakness: 'Har aldri levert noko før universet kollapsar',
      prescription: 'Gå ut. Ta på gras. Pikslane e der når du kjem tilbake.',
    },
    imposter: {
      name: 'Lurendreiaren Som Faen Meg Levere',
      tagline: 'Eg aner ikkje ka eg gjer og det funke kver gong.',
      description:
        'Du datt inn i design fordi någen sa \"du har god smak\" og nå e du her, 4 år seinare, og krangle om border-radius. Du lærte Figma på YouTube. Det første designsystemet ditt va eit Google Doc. Du e likevel den beste designaren på teamet og du aner ikkje korfor.',
      diagnosis: 'Kronisk bedragarsyndrom med paradoksal kompetanse',
      strength: 'Pragmatisme som puristar hemmeleg misunne',
      weakness: 'Har begått synden å designa i nettlesaren',
      prescription: 'Slutt å samanlikna deg med folk på Dribbble. Dei faker det og.',
    },
    helvetica: {
      name: 'Pastor Helvetica Nøye',
      tagline: 'Ein font. Ein font løyste alt.',
      description:
        'Du trur typografi nådde toppen i 1957 og alt etterpå e støy. Du har ein t-skjorte med Helvetica på. Du har FLEIRE t-skjorter med Helvetica på. Når någen bruke Comic Sans dør ein liten del av deg. Den delen veks aldri tilbake.',
      diagnosis: 'Monotypografisk tvangsnevrose med akutt font-intoleranse',
      strength: 'Konsistens som ville fått eit sveitsisk tog te å rødma',
      weakness: 'Har avvist eit design fordi fonten \"mangla sjel\" (det va Arial)',
      prescription: 'Prøv ein ny font. Bare ein. Du klare det. Kanskje.',
    },
    gridDictator: {
      name: 'Grid-Diktatoren',
      tagline: 'Det der e ikkje på 8px-gridet.',
      description:
        'Du har gitt namn te kvar einaste nyanse av grått. To gonger. Du skreiv eit 47-siders dokument om knapp-tilstandar og kjente berre glede. Du ser ein uautorisert border-radius og auget ditt ryk. Du trur på systemet. Systemet e alt.',
      diagnosis: 'Obsessiv-kompulsiv grid-forstyrring (OKGF)',
      strength: 'Orden som ville fått Marie Kondo te å føla seg rotete',
      weakness: 'Har nekta eit design fordi \"Coral ikkje e i paletten\"',
      prescription: 'Flytt ein komponent 3px te venstre. Pust. Du lever fortsatt.',
    },
    chaotic: {
      name: 'Kaos-Kunstnaren',
      tagline: 'Grid? Aldri høyrt om det.',
      description:
        'Ingen grid. Ingen reglar. Ingen lagra filer. Du designar som du lever — farleg og uorganisert. Moodboarda dine har moodboard. Du kalla ein gong ein knapp \"emosjonelt utilgjengelig\". Kundane elske presentasjonane dine. Utviklare vil ha deg arrestert.',
      diagnosis: 'Kreativt kaos-syndrom med anti-autoritær layout-tendens',
      strength: 'Kan få ein 404-side te å føles som ein åndelig opplevelse',
      weakness: 'Har brukt \"den treng berre å pusta\" i ein designgjennomgang',
      prescription: 'Lagre filen. LAGRE FILEN. Ctrl+S. Gjer det nå.',
    },
    hoarder: {
      name: 'Komponent-Kongen med Kontrollbehov',
      tagline: 'Det der e ikkje i komponentbiblioteket.',
      description:
        'Du har 847 komponentar i Figma-biblioteket ditt. 12 av dei e i bruk. Du har variantar av variantar. Auto-layout inni auto-layout inni auto-layout. Filene dine e arkitektoniske meisterverk som ingen tør å røra.',
      diagnosis: 'Komponent-hamstring med kronisk over-engineering',
      strength: 'Designsystemet ditt e eit kunstverk',
      weakness: 'Bruke 4 timar på å laga ein komponent ingen ba om',
      prescription: 'Slett ein komponent. Berre ein. Sjå ka som skjer. Hint: ingenting.',
    },
    awkward: {
      name: 'Den Tause Pikselsnekkaren',
      tagline: 'Eg kommunisere berre gjennom Figma-kommentarar.',
      description:
        'Du seie ikkje eit ord i møter. Du nikke, tar notat, og gjer akkurat det du vil etterpå uansett. Designa dine e fantastiske. Presentasjonane dine e eit krigsområde. Du har sagt \"berre sjå i Figma-fila\" minst 400 gonger.',
      diagnosis: 'Sosial designar-angst med selektiv kommunikasjonssvikt',
      strength: 'Lagar ting som e so bra at folk glemme at du aldri snakka i møtet',
      weakness: 'Har sendt ein Figma-lenke som svar på \"kordan går det?\"',
      prescription: 'Sei ein ting i neste møte. Ka som helst. \"Fin knapp\" tel.',
    },
    notDesigner: {
      name: '\"Eg E Eigentleg Ikkje Ein Designar\"',
      tagline: 'Eg sko jo bli utviklar.',
      description:
        'Du hamna i design ved ein feil og nå e det for seint å snu. Du kan koda. Du kan designa. Du kan ingenting av det ordentleg, men på ein eller annan måte e du betre enn dei fleste. Kollegane dine trur du e ein genial hybrid. Du veit at du berre e forvirra.',
      diagnosis: 'Identitetskrise med tverrfagleg forvirring',
      strength: 'Kan levera eit heilt produkt åleine (og hate kvar einaste piksel)',
      weakness: 'Har googla \"e det for seint å bli noko anna\" minst 200 gonger',
      prescription: 'Aksepter det. Du e ein designar. Det e for seint. Velkommen.',
    },
  },
  en: {
    neurotic: {
      name: 'The Pixel Pedant',
      tagline: "Is that 1px off? Yeah. Yeah it is.",
      description:
        "Yer've zoomed into 6400% more times than yer've rung yer ma. Yer'll die on the hill of optical alignment, and honestly? That hill looks dead beautifully kerned. Yer Figma files are immaculate. Yer deadlines are an absolute joke.",
      diagnosis: 'Terminal kerning anxiety with chronic pixel dysmorphia',
      strength: 'Craft that makes other designers quietly cry into their bevvies',
      weakness: "Has never shipped anythin before the heat death of the universe",
      prescription: "Go outside. Touch grass. The pixels will still be there when yer get back.",
    },
    imposter: {
      name: 'The Blag Artist Who Ships',
      tagline: "Haven't got a scooby what I'm doin and it works every time.",
      description:
        "Yer fell into design cos someone said \"yer've got good taste\" and now here yer are, 4 years deep, arguin about border-radius values. Learned Figma off YouTube, didn't yer. First design system was a Google Doc. Yer somehow the best designer on the team and yer haven't got a clue why. Mental that.",
      diagnosis: 'Chronic imposter syndrome with paradoxical competence',
      strength: 'Pragmatism that purists secretly envy, the divvies',
      weakness: "Has committed the cardinal sin of designin in the browser",
      prescription: "Stop comparin yerself to people on Dribbble. They're blaggin it an all.",
    },
    helvetica: {
      name: 'The Helvetica Supremacist',
      tagline: 'One font. One font solved everythin.',
      description:
        "Yer reckon typography peaked in 1957 and everythin since is noise. Yer've got a Helvetica t-shirt. Yer've got SEVERAL Helvetica t-shirts. When someone uses Comic Sans a small part of yer dies. That part never grows back. Yer've accepted this.",
      diagnosis: 'Monotypographic obsession with acute font intolerance',
      strength: "Consistency that'd make a Swiss train blush",
      weakness: "Rejected a design cos the font \"lacked soul.\" It was Arial. Behave.",
      prescription: "Try a new font. Just the one. Yer can do it. Maybe.",
    },
    gridDictator: {
      name: 'The Grid Dictator',
      tagline: "That's not on the 8px grid. Don't even start.",
      description:
        "Yer've named every shade of grey. Twice. Wrote a 47-page document about button states and felt nothin but pure joy. Yer see a rogue border-radius and yer eye goes. Yer believe in the system. The system is everythin. Don't even try it.",
      diagnosis: 'Obsessive-Compulsive Grid Disorder (OCGD)',
      strength: "Order that'd make Marie Kondo feel dead messy",
      weakness: "Rejected a design cos \"Coral isn't in the palette.\" Honest to God.",
      prescription: "Move a component 3px to the left. Breathe. Yer still alive.",
    },
    chaotic: {
      name: 'The Chaotic Creative',
      tagline: "Grid? Never heard of her.",
      description:
        "No grid. No rules. No saved files. Yer design like yer live — dangerously and all over the gaff. Yer mood boards have mood boards. Once described a button as \"emotionally unavailable.\" Clients love yer presentations. Developers want yer arrested.",
      diagnosis: 'Creative chaos disorder with anti-authoritarian layout tendencies',
      strength: "Can make a 404 page feel like a spiritual experience, honest",
      weakness: "Has used \"it just needs to breathe\" in a design review. Are yer jokin.",
      prescription: "Save the file. SAVE THE FILE. Ctrl+S. Do it now.",
    },
    hoarder: {
      name: 'The Component King with Control Issues',
      tagline: "That's not in the component library. Don't even.",
      description:
        "847 components in yer Figma library. 12 of them in use. Got variants of variants, haven't yer. Auto-layout inside auto-layout inside auto-layout. Yer files are architectural masterpieces that nobody dares touch. That's the way yer like it an all.",
      diagnosis: 'Component hoarding with chronic over-engineering',
      strength: "Yer design system is a proper work of art",
      weakness: "Spends 4 hours buildin a component nobody asked for. Every. Single. Time.",
      prescription: "Delete a component. Just the one. See what happens. Hint: nothin.",
    },
    awkward: {
      name: 'The Silent Pixel Craftsperson',
      tagline: "I communicate exclusively through Figma comments, don't I.",
      description:
        "Yer don't speak in meetings. Yer nod, take notes, and do exactly what yer want afterwards anyway. Yer designs are boss. Yer presentations are an absolute war zone. Yer've said \"just look at the Figma file\" at least 400 times. Nightmare.",
      diagnosis: 'Social designer anxiety with selective communication disorder',
      strength: "Makes things so good people forget yer never spoke in the meeting",
      weakness: "Has sent a Figma link in response to \"yer alright?\" Are yer havin a laugh.",
      prescription: "Say one thing in the next meeting. Anythin. \"Nice button\" counts.",
    },
    notDesigner: {
      name: "\"I'm Not Really A Designer, Me\"",
      tagline: "I was supposed to be a developer, wasn't I.",
      description:
        "Fell into design by accident and now it's too late to turn back, isn't it. Yer can code. Yer can design. Can't do either properly like, but somehow yer better than most. Yer colleagues think yer a genius hybrid. Yer know yer just confused. Heavy that.",
      diagnosis: 'Identity disorder with cross-disciplinary confusion',
      strength: "Can deliver an entire product alone (and hate every single pixel of it)",
      weakness: "Has googled \"is it too late to become somethin else\" at least 200 times",
      prescription: "Accept it, la. Yer a designer. It's too late. Welcome to the madness.",
    },
  },
} as const
