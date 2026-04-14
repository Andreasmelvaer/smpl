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
    title2: 'e du eigentleg?',
    tagline: '5 spørsmål. Null dømming.\nOk, kanskje litt.',
    start: 'Finn ut (om du tør)',
    disclaimer: 'Resultata dine blir brukt mot deg. Ikkje juridisk. Sosialt.',
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
    ctaTitle: 'Vil du sjå ka ekte designarar faktisk lage?',
    ctaSubtitle: 'Teamet vårt har designa produkt for 125+ selskap.\nIngen shade. Ok, litt shade.',
    ctaButton: 'Sjå porteføljen →',
    langToggle: 'EN',
  },
  en: {
    subtitle: 'Yggdrasil 2026',
    title1: 'What kind of',
    titleHighlight: 'designer',
    title2: 'are you, like?',
    tagline: "5 questions. Zero judgment.\nAlright, maybe a bit.",
    start: "Find out (if you're 'ard enough)",
    disclaimer: "Your results will be used against you. Not legally. Socially, la.",
    next: 'Next',
    prev: 'Back',
    seeResult: 'Show me the truth',
    youAre: 'You are…',
    diagnosis: 'Diagnosis',
    strength: 'Strength',
    weakness: 'Weakness',
    prescription: 'Prescription',
    share: 'Share your result',
    copied: 'Copied, la!',
    retake: 'Take the quiz again',
    ctaTitle: "Wanna see what proper designers actually ship?",
    ctaSubtitle: "Our team's designed products for 125+ companies.\nNo shade. Alright, some shade.",
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
      'Skarpe hjørne. Du e typen som stryke skjortene sine. Og kalkulatoren.',
      'Litt avrunda. Du prøve å virka chill, men du e det ikkje.',
      'Squircle. Du bruke ein iPhone og du har latt Apple bestemma smaken din.',
      'Nesten sirkel. Du huske ikkje sist du brukte ein linjal.',
      'Perfekt sirkel. Du har ikkje grenser. Bokstavelig talt.',
    ],
    en: [
      "Sharp corners. You iron your shirts. And your calculator, la.",
      "Bit rounded. You're tryin' to seem chill but you're dead not.",
      "Squircle. You've got an iPhone and you let Apple decide your taste.",
      "Nearly a circle. Can't remember the last time you used a ruler.",
      "Perfect circle. You've got no boundaries. Literally.",
    ],
  },
  typography: {
    no: [
      'Monospace. Du skriv kode i terminalen og kalle det \"design\".',
      'Sans-serif. Du e trygg. Kjedelig, men trygg. Som Grandiosa.',
      'Slab serif. Du har ein \"vintage\" sykkel og ein kaffi-kvern frå Japan.',
      'Serif. Du trur du e betre enn alle andre. Og du har kanskje rett.',
      'Old style. Du har lese minst tre bøker om typografi. Ingen bad deg.',
      'Wild West-font. Du har gitt opp. Respekt.',
    ],
    en: [
      "Monospace. You write code in the terminal and call it \"design\", la.",
      "Sans-serif. You're safe. Boring, but safe. Like beans on toast.",
      "Slab serif. You've got a \"vintage\" bike and a coffee grinder from Japan.",
      "Serif. You think you're better than everyone. And you might be right.",
      "Old style. You've read at least three books about typography. Nobody asked you to.",
      "Wild West font. You've given up. Respect.",
    ],
  },
  layout: {
    no: [
      'Ein kolonne. Du les avisa og du like det enkelt. Som bestefar.',
      'To kolonnar. Du e ein ansvarleg vaksen. Kjedelig, men funksjonell.',
      'Grid. Du har eit rekneark for alt. Inkludert kjensler.',
      'Asymmetrisk. Du trur du e kunstnar. Utviklaren din gret.',
      'Ingen grid. Kaos. Du lagrar ikkje filene dine heller, gjer du?',
    ],
    en: [
      "One column. You read the paper and like it simple. Like your nan.",
      "Two columns. You're a responsible adult. Dull, but functional.",
      "Grid. You've got a spreadsheet for everything. Including feelings.",
      "Asymmetric. You think you're an artist. Your developer's cryin'.",
      "No grid. Chaos. You don't save your files either, do ya?",
    ],
  },
  colour: {
    no: [
      'Svart og kvitt. Du e enten ein minimalist eller ein vampyr.',
      'Jordtonar. Du kjøpe møbler på Fretex og kalle det \"kuratert\".',
      'Brand-fargar. Du følgje reglane. HR elske deg. Ingen andre gjer det.',
      'Neon. Du har ikkje sove på 3 dagar og det SER ut som det.',
      'Full regnboge. Du e enten 6 år eller ein genial galning.',
    ],
    en: [
      "Black and white. You're either a minimalist or a vampire.",
      "Earth tones. You buy furniture from charity shops and call it \"curated\".",
      "Brand colours. You follow the rules. HR loves you. Nobody else does.",
      "Neon. You haven't slept in 3 days and it SHOWS, la.",
      "Full rainbow. You're either 6 years old or a proper mad genius.",
    ],
  },
  motion: {
    no: [
      'Ingen animasjon. Du trur rørsle e ein distraksjon. Du e gøy på festar.',
      'Subtil fade. Du e den typen som seie \"less is more\" uironisk.',
      'Smooth ease. Du e balansert. Mistenkelig balansert.',
      'Spring/bounce. Du har for mykje energi og alle rundt deg e utslitne.',
      'Total sirkus. Du e eit menneskeleg ADHD-fyrverkeri og eg elske det.',
    ],
    en: [
      "No animation. You think motion is a distraction. You're fun at parties.",
      "Subtle fade. You're the type who says \"less is more\" unironically.",
      "Smooth ease. You're balanced. Suspiciously balanced.",
      "Spring/bounce. You've got too much energy and everyone round you is knackered.",
      "Full circus. You're a human ADHD firework and I proper love it.",
    ],
  },
} as const

// ---------------------------------------------------------------------------
// Slider labels (shown above slider)
// ---------------------------------------------------------------------------

export const sliderLabels = {
  shape: {
    no: 'Ka form e du?',
    en: "What shape are you, la?",
  },
  typography: {
    no: 'Velg din font-sjel',
    en: "Pick your font soul",
  },
  layout: {
    no: 'Kor organisert e du eigentleg?',
    en: "How organised are you really?",
  },
  colour: {
    no: 'Ka farge brenne du for?',
    en: "What colour gets you goin'?",
  },
  motion: {
    no: 'Kor mykje rørsle tåle du?',
    en: "How much motion can you handle?",
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

export const archetypes: Record<Locale, Record<ArchetypeKey, ArchetypeData>> = {
  no: {
    neurotic: {
      name: 'Piksel-Nevrotikaren',
      tagline: 'E den 1px ute? Ja. Ja, det e den.',
      description:
        'Du har zooma inn te 6400% fleire gonger enn du har ringt mora di. Du dør på haugen av optisk justering, og ærlig talt? Den haugen ser fantastisk kerna ut. Figma-filene dine e plettfrie. Fristane dine e ein vits.',
      diagnosis: 'Terminal kerning-angst med kronisk piksel-dysmorphi',
      strength: 'Handverk som får andre designarar te å grina i stillheit',
      weakness: 'Har aldri levert noko før universet kollapsar',
      prescription: 'Gå ut. Ta på gras. Pikslane e der når du kjem tilbake.',
    },
    imposter: {
      name: 'Svindlaren Som Levere',
      tagline: 'Eg aner ikkje ka eg gjer og det funke kver gong.',
      description:
        'Du datt inn i design fordi någen sa \"du har god smak\" og nå e du her, 4 år inn, og krangle om border-radius. Du lærte Figma på YouTube. Det første designsystemet ditt va eit Google Doc. Du e likavel den beste designaren på teamet og du aner ikkje korfor.',
      diagnosis: 'Kronisk bedragarsyndrom med paradoksal kompetanse',
      strength: 'Pragmatisme som puristar hemmeleg misunne',
      weakness: 'Har begått synden å designa i nettlesaren',
      prescription: 'Slutt å samanlikna deg med folk på Dribbble. Dei faker det og.',
    },
    helvetica: {
      name: 'Helvetica-Fanatikaren',
      tagline: 'Ein font. Ein font løyste alt.',
      description:
        'Du trur typografi nådde toppen i 1957 og alt etterpå e støy. Du har ein t-skjorte med Helvetica på. Du har FLEIRE t-skjorter med Helvetica på. Når någen bruke Comic Sans dør ein liten del av deg. Den delen veks aldri tilbake.',
      diagnosis: 'Monotypografisk tvangsliding med akutt font-intoleranse',
      strength: 'Konsistens som ville fått eit sveitsisk tog te å rødma',
      weakness: 'Har avvist eit design fordi fonten \"mangla sjel\" (det va Arial)',
      prescription: 'Prøv ein ny font. Bare ein. Du klare det. Kanskje.',
    },
    gridDictator: {
      name: 'Grid-Diktatoren',
      tagline: 'Det der e ikkje på 8px-gridet.',
      description:
        'Du har namngitt kvar einaste nyanse av grått. To gonger. Du skreiv eit 47-siders dokument om knapp-tilstandar og kjente berre glede. Du ser ein uautorisert border-radius og auget ditt rykke. Du trur på systemet. Systemet e alt.',
      diagnosis: 'Obsessiv-kompulsiv grid-forstyrring (OKGF)',
      strength: 'Orden som ville fått Marie Kondo te å føla seg rotete',
      weakness: 'Har nekta eit design fordi \"Coral ikkje e i paletten\"',
      prescription: 'Flytt ein komponent 3px te venstre. Pust. Du lever fortsatt.',
    },
    chaotic: {
      name: 'Kaos-Kreansen',
      tagline: 'Grid? Aldri høyrt om det.',
      description:
        'Ingen grid. Ingen reglar. Ingen lagra filer. Du designar som du lever — farleg og rotehovud. Moodboarda dine har moodboard. Du har ein gong kalt ein knapp \"emosjonelt utilgjengeleg\". Kundane elske presentasjonane dine. Utviklare vil ha deg arrestert.',
      diagnosis: 'Kreativt kaos-syndrom med anti-autoritær layout-tendens',
      strength: 'Kan få ein 404-side te å kjennast som ein åndelig opplevelse',
      weakness: 'Har brukt \"den treng berre å pusta\" i ein designgjennomgang',
      prescription: 'Lagre filen. LAGRE FILEN. Ctrl+S. Gjer det nå.',
    },
    hoarder: {
      name: 'Komponent-Kongen med Tvangstankår',
      tagline: 'Det der e ikkje i komponentbiblioteket.',
      description:
        'Du har 847 komponentar i Figma-biblioteket ditt. 12 av dei e i bruk. Du har variantar av variantar. Auto-layout inni auto-layout inni auto-layout. Filene dine e arkitektoniske meisterverk som ingen tør å røra.',
      diagnosis: 'Komponent-hamstring med kronisk over-engineering',
      strength: 'Designsystemet ditt e eit kunstverk',
      weakness: 'Bruke 4 timar på å laga ein komponent ingen ba om',
      prescription: 'Slett ein komponent. Berre ein. Sjå ka som skjer. Hint: ingenting.',
    },
    awkward: {
      name: 'Handverkaren Som Ikkje Snakke',
      tagline: 'Eg kommunisere berre gjennom Figma-kommentarar.',
      description:
        'Du seie ikkje eit ord i møter. Du nikke, tar notat, og gjer akkurat det du vil etterpå uansett. Designa dine e fantastiske. Presentasjonane dine e eit krigsområde. Du har sagt \"berre sjå i Figma-fila\" minst 400 gonger.',
      diagnosis: 'Sosial designar-angst med selektiv kommunikasjonssvikt',
      strength: 'Lagar ting som e so bra at folk gløyme at du aldri snakka i møtet',
      weakness: 'Har sendt ein Figma-lenke som svar på \"kordan går det?\"',
      prescription: 'Sei ein ting i neste møte. Ka som helst. \"Fin knapp\" tel.',
    },
    notDesigner: {
      name: '\"Eg E Eigentleg Ikkje Ein Designar\"',
      tagline: 'Eg sko jo bli utviklar.',
      description:
        'Du hamna i design ved ein feil og nå e det for seint å snu. Du kan koda. Du kan designa. Du kan ingenting av det ordentleg, men på ein eller annan måte e du betre enn dei fleste. Kollegaene dine trur du e ein genial hybrid. Du veit at du berre e forvirra.',
      diagnosis: 'Identitetskrise med tverrfagleg forvirring',
      strength: 'Kan levera eit heilt produkt åleine (og hata kvar einaste piksel)',
      weakness: 'Har googla \"e det for seint å bli noko anna\" minst 200 gonger',
      prescription: 'Aksepter det. Du e ein designar. Det e for seint. Velkommen.',
    },
  },
  en: {
    neurotic: {
      name: 'The Neurotic Pixel-Counter',
      tagline: "Is that 1px off? Yeah. Yeah it is.",
      description:
        "You've zoomed into 6400% more times than you've called your mum. You'll die on the hill of optical alignment, and honestly? That hill looks beautifully kerned. Your Figma files are immaculate. Your deadlines are a joke, la.",
      diagnosis: 'Terminal kerning anxiety with chronic pixel dysmorphia',
      strength: 'Craft that makes other designers quietly cry',
      weakness: "Has never shipped anything before the heat death of the universe",
      prescription: 'Go outside. Touch grass. The pixels will still be there.',
    },
    imposter: {
      name: 'The Imposter Who Ships',
      tagline: "Haven't got a scooby what I'm doing and it works every time.",
      description:
        "You fell into design cos someone said \"you've got good taste\" and now here you are, 4 years deep, arguing about border-radius values. You learned Figma from YouTube. Your first design system was a Google Doc. You're somehow the best designer on the team and you haven't got a clue why, la.",
      diagnosis: 'Chronic imposter syndrome with paradoxical competence',
      strength: 'Pragmatism that purists secretly envy',
      weakness: "Has committed the sin of designing in the browser",
      prescription: "Stop comparing yourself to people on Dribbble. They're blagging it too.",
    },
    helvetica: {
      name: 'The Helvetica Supremacist',
      tagline: 'One font. One font solved everything.',
      description:
        "You reckon typography peaked in 1957 and everything since is noise. You've got a Helvetica t-shirt. You've got SEVERAL Helvetica t-shirts. When someone uses Comic Sans, a small part of you dies. That part never grows back, la.",
      diagnosis: 'Monotypographic obsession with acute font intolerance',
      strength: "Consistency that'd make a Swiss train blush",
      weakness: 'Rejected a design because the font "lacked soul" (it was Arial)',
      prescription: "Try a new font. Just one. You can do it. Maybe.",
    },
    gridDictator: {
      name: 'The Grid Dictator',
      tagline: "That's not on the 8px grid, la.",
      description:
        "You've named every shade of grey. Twice. You wrote a 47-page document about button states and felt nothing but joy. You see a rogue border-radius and your eye twitches. You believe in the system. The system is everything.",
      diagnosis: 'Obsessive-Compulsive Grid Disorder (OCGD)',
      strength: "Order that'd make Marie Kondo feel messy",
      weakness: "Rejected a design because \"Coral isn't in the palette\"",
      prescription: "Move a component 3px to the left. Breathe. You're still alive.",
    },
    chaotic: {
      name: 'The Chaotic Creative',
      tagline: "Grid? Never heard of her.",
      description:
        "No grid. No rules. No saved files. You design like you live — dangerously and disorganised. Your mood boards have mood boards. You once described a button as \"emotionally unavailable.\" Stakeholders love your presentations. Developers want you arrested, la.",
      diagnosis: 'Creative chaos disorder with anti-authoritarian layout tendencies',
      strength: 'Can make a 404 page feel like a spiritual experience',
      weakness: 'Has used "it just needs to breathe" in a design review',
      prescription: "Save the file. SAVE THE FILE. Ctrl+S. Do it now.",
    },
    hoarder: {
      name: 'The OCD Component Hoarder',
      tagline: "That's not in the component library.",
      description:
        "You've got 847 components in your Figma library. 12 of them are in use. You've got variants of variants. Auto-layout inside auto-layout inside auto-layout. Your files are architectural masterpieces that nobody dares touch.",
      diagnosis: 'Component hoarding with chronic over-engineering',
      strength: "Your design system is a work of art",
      weakness: "Spends 4 hours building a component nobody asked for",
      prescription: "Delete a component. Just one. See what happens. Hint: nothing.",
    },
    awkward: {
      name: 'The Socially Awkward Craftsperson',
      tagline: 'I communicate exclusively through Figma comments.',
      description:
        "You don't speak in meetings. You nod, take notes, and do exactly what you want afterwards anyway. Your designs are boss. Your presentations are a war zone. You've said \"can you just look at the Figma file\" at least 400 times, la.",
      diagnosis: 'Social designer anxiety with selective communication disorder',
      strength: "Makes things so good people forget you never spoke in the meeting",
      weakness: 'Has sent a Figma link in response to "how are you?"',
      prescription: "Say one thing in the next meeting. Anything. \"Nice button\" counts.",
    },
    notDesigner: {
      name: "\"I'm Not Really A Designer\"",
      tagline: 'I was supposed to be a developer.',
      description:
        "You fell into design by accident and now it's too late to turn back. You can code. You can design. You can't do either properly, but somehow you're better than most. Your colleagues think you're a genius hybrid. You know you're just confused, la.",
      diagnosis: 'Identity disorder with cross-disciplinary confusion',
      strength: "Can deliver an entire product alone (and hate every single pixel)",
      weakness: 'Has googled "is it too late to become something else" at least 200 times',
      prescription: "Accept it. You're a designer. It's too late. Welcome.",
    },
  },
} as const
