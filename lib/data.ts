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
    metrics: ["9% to 6% churn", "33% improvement", "Vendor cost reduction"],
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
    metrics: ["80 clients managed", "$150–$300/mo per client", "Fully automated reporting"],
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
];
