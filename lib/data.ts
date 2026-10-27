export const personalInfo = {
  name: "Gianluca DeRossi",
  title: "Product Manager",
  tagline:
    "Building B2B SaaS products and ad programs that grow revenue, reduce churn, and give teams clarity on what's working.",
  email: "your@email.com",
  linkedin: "https://www.linkedin.com/in/gianluca-derossi/",
  resumeUrl: "/resume.pdf",
  location: "New York / New Jersey Metro Area",
};

export const caseStudies = [
  {
    id: "influencer-saas",
    company: "Real Grader",
    role: "Product Manager, Influencer Program",
    period: "2024–2025",
    tags: ["SaaS", "Retention", "Vendor Strategy"],
    headline: "Reduced monthly churn by 33% through onboarding redesign",
    problem:
      "A white-label SaaS platform serving real estate agent influencer clients was seeing 9% monthly churn, largely driven by a confusing onboarding experience and gaps in client support resources.",
    approach:
      "Led end-to-end product ownership of the platform built on a Cloud Campaign partnership. Redesigned the onboarding flow based on drop-off data and client feedback. Coordinated API integrations with the CTO and backend engineering. Sourced and onboarded international staffing vendor GetMagic after a structured competitive evaluation.",
    outcome:
      "Monthly churn dropped from 9% to 6%, a 33% relative improvement. Vendor sourcing reduced operational costs while maintaining service quality. The onboarding redesign became the foundation for future retention initiatives.",
    metrics: [
      { value: "9% → 6%", label: "Monthly churn" },
      { value: "33%", label: "Churn reduction" },
      { value: "1", label: "Vendor sourced & onboarded" },
    ],
  },
  {
    id: "google-ads-reporting",
    company: "Real Grader",
    role: "Product Manager, Google Local Ads",
    period: "2021–2024",
    tags: ["AdTech", "Data", "Automation"],
    headline: "Scaled an 80-client ad program with automated reporting infrastructure",
    problem:
      "Managing Google Local Services Ads for up to 80 real estate agent clients through a subscription model created reporting overhead and data visibility gaps for both the team and clients paying $150–$300/month.",
    approach:
      "Built a scalable automated reporting system in Google Sheets: a private master metrics sheet fed individual client-facing sheets automatically. Each client received visibility into their own performance without exposing aggregate data. Operated a centralized Google Ads manager account while maintaining individual client spend accountability.",
    outcome:
      "Eliminated manual reporting overhead across 80 clients. Each client received automated, accurate performance data, improving transparency and reducing churn driven by confusion about ad ROI.",
    metrics: [
      { value: "80", label: "Clients managed" },
      { value: "$150–300", label: "Per client / month" },
      { value: "100%", label: "Reporting automated" },
    ],
  },
  {
    id: "ellucca",
    anchorId: "case-ellucca",
    visitUrl: "https://www.ellucca.com",
    company: "Ellucca",
    role: "Founder",
    period: "2025",
    tags: ["AI Product", "Consumer", "Founder"],
    headline: "Founded and launched an AI-powered film recommendation platform from 0 to live",
    problem:
      "Most film recommendation tools surface popular titles rather than genuinely personalized picks. There was no product that combined taste-based AI recommendations with social features that let friends discover films together.",
    approach:
      "Founded Ellucca and built the entire platform solo using Claude Code and the Claude API. Designed and shipped personalized AI recommendations with reasoning explanations, a recommendation strength scoring system based on user rating history, Tonight's Vibe mood filters, a Friends system with taste match percentages, group watching recommendations, and a Watch Later list. Acquired the ellucca.com domain and filed for trademark.",
    outcome:
      "A fully functional, live consumer product at ellucca.com — built entirely solo from concept to launch. Demonstrates end-to-end product ownership, hands-on AI development capability, and the ability to ship independently without a team or external resources.",
    metrics: [
      { value: "0 → 1", label: "Built from scratch" },
      { value: "Solo", label: "Entire product built independently" },
      { value: "Live", label: "Deployed at ellucca.com" },
    ],
  },
];

export const aiProjects = [
  {
    id: "leukocyte-realms",
    title: "Leukocyte Realms",
    subtitle: "An immune system bullet hell dungeon crawler, playable in the browser",
    tags: ["Game Design", "Browser Game", "Built with Claude"],
    stats: [
      { value: "9", label: "unique bosses" },
      { value: "40+", label: "collectible items" },
      { value: "Live", label: "on itch.io" },
    ],
    description:
      "You play a white blood cell fighting through a patient's body. Dodge dense bullet patterns, collect items that stack into ridiculous builds, and break nine guardian bosses. Inspired by The Binding of Isaac and Realm of the Mad God.",
    role: [
      "Defined the core loop and cut features that diluted it (removed the dodge roll so dodging bullets stays the core skill)",
      "Ran my own new player playtests with separate save slots, then retuned early difficulty and pacing from what I saw",
      "Added in-game telemetry and a feedback box to see where first sessions dropped off",
      "Shipped the public release on itch.io, including the store page, art and screenshots",
    ],
    primaryButton: { label: "Play free", url: "https://grownupgamer.itch.io/leukocyte-realms" },
    secondaryButton: null as null | { label: string; url: string },
    cover: {
      src: "/projects/leukocyte/cover.jpg",
      alt: "Leukocyte Realms title art: a white blood cell surrounded by a spiral of enemy bullets",
    },
    screenshots: [
      { src: "/projects/leukocyte/boss.jpg", alt: "A guardian boss firing rings of bullets at the player" },
      { src: "/projects/leukocyte/loot.jpg", alt: "Item pickup screen showing a rare upgrade" },
      { src: "/projects/leukocyte/evolution.jpg", alt: "A weapon evolution unlocking mid run" },
      { src: "/projects/leukocyte/shop.jpg", alt: "The between-run shop where players spend earned currency" },
    ],
  },
  {
    id: "tile-rush",
    title: "Tile Rush",
    subtitle: "A live three-player word race with skill ratings",
    tags: ["Multiplayer", "Real-time", "Supabase + Vercel"],
    stats: [
      { value: "3", label: "players per match" },
      { value: "Elo", label: "skill ratings" },
      { value: "Live", label: "real-time play" },
    ],
    description:
      "A modern remake of Phrase Frenzy, the old GSN online word game. Three players race to solve category boards of hidden tiles, scoring for every word they find, while revealing a tile costs points. Ratings, a leaderboard and lifetime points keep people coming back.",
    role: [
      "Rebuilt a game I loved from memory into a spec: rules, scoring, round structure and the cost of revealing tiles",
      "Chose a chess-style Elo rating plus lifetime points, so players get both a skill rank and a reward for showing up",
      "Picked the stack (Supabase for real-time lobbies and data, Vercel for hosting) and shipped it as a real web app",
      "Playtested live matches with friends and family and iterated on the game feel",
    ],
    primaryButton: { label: "Play", url: "https://tile-rush.vercel.app" },
    secondaryButton: null as null | { label: string; url: string },
    cover: {
      src: "/projects/tilerush/cover.jpg",
      alt: "A Tile Rush game board with category tiles and three players' scores",
    },
    screenshots: [],
  },
  {
    id: "ellucca-project",
    title: "Ellucca",
    subtitle: "AI taste-matching for film people",
    tags: ["AI Product", "Consumer", "Claude API"],
    stats: [
      { value: "0 to 1", label: "solo founder" },
      { value: "Beta", label: "live and free" },
      { value: "Claude API", label: "powers the picks" },
    ],
    description:
      "A film recommendation app that learns your taste from a few ratings, then picks films you will actually like, filtered to the streaming services you pay for. Pick a mood, or merge tastes with a friend in group mode to find something you will both enjoy.",
    role: [
      "Founded it solo and owned everything from positioning to launch",
      "Designed the taste profile, mood picker and group mode around one problem: too much scrolling, not enough watching",
      "Built it with Claude Code and used the Claude API for recommendations with visible reasoning",
      "Planning the early-user launch sequence: BetaList, then AI directories, then Product Hunt",
    ],
    primaryButton: { label: "Try it", url: "https://www.ellucca.com" },
    secondaryButton: { label: "Read the case study", url: "#case-ellucca" } as null | { label: string; url: string },
    cover: {
      src: "/projects/ellucca/cover.jpg",
      alt: "Ellucca's personalized film picks with match scores",
    },
    screenshots: [],
  },
];

export const skills = [
  {
    category: "Product Management",
    items: [
      "Roadmapping",
      "User Research",
      "Onboarding Design",
      "Retention Optimization",
      "OKRs",
      "Go-to-Market Strategy",
    ],
  },
  {
    category: "Ads & Monetization",
    items: [
      "Google Local Services Ads",
      "Google Ads Manager",
      "Subscription Pricing",
      "Performance Advertising",
      "Campaign Management",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Google Sheets (Advanced)",
      "Excel",
      "Dashboard Design",
      "Funnel Analysis",
      "Churn Modeling",
      "KPI Reporting",
    ],
  },
  {
    category: "SaaS & Integrations",
    items: [
      "White-Label SaaS",
      "API Coordination",
      "Vendor Evaluation",
      "Cloud Campaign",
      "Cross-functional Leadership",
    ],
  },
  {
    category: "AI & Development",
    items: [
      "Claude Code",
      "Claude API",
      "LLM Prototyping",
      "Prompt Engineering",
      "AI Product Design",
    ],
  },
];
