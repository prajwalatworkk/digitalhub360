export type IndustryKey = "realestate" | "edtech" | "healthcare" | "finance" | "hospitality" | "local";

export type IndustryInputs = {
  cpl: number;
  qualRate: number;
  closeRate: number;
  avgValue: number;
};

export const modes = {
  growth: {
    title: "Growth Engine Blueprint",
    copy: "Strategy, conversion-ready web, SEO dominance, and always-on ad velocity — fused into one system.",
    bullets: ["90-day growth roadmap", "Full-funnel tracking stack", "Weekly experiments + wins"]
  },
  performance: {
    title: "Performance Blitz",
    copy: "High-velocity paid media backed by creative testing, landing-page sprints, and ROAS tuning.",
    bullets: ["Creative velocity studio", "Paid channel orchestration", "Attribution + LTV focus"]
  },
  brand: {
    title: "Brand Recode",
    copy: "Positioning, storytelling, and identity systems that make you the obvious choice.",
    bullets: ["Brand strategy sprint", "Signature visual system", "Launch + demand plan"]
  }
} as const;

export const services = [
  {
    title: "Digital Marketing Strategy",
    copy: "A complete 360\u00b0 growth plan for your business \u2014 where to spend, what to say, and which channels will actually bring customers.",
    tag: "Growth Planning"
  },
  {
    title: "SEO Services",
    copy: "Rank higher on Google for the searches your customers make. Technical SEO, local SEO, and content that compounds month after month.",
    tag: "Google Rankings"
  },
  {
    title: "Social Media Marketing",
    copy: "Instagram, Facebook, and LinkedIn handled end-to-end \u2014 content calendars, reels, community management, and growth.",
    tag: "Insta + FB + LinkedIn"
  },
  {
    title: "Google & Meta Ads",
    copy: "Performance marketing that pays for itself \u2014 search ads, shopping, and social campaigns tuned weekly to cut cost per lead.",
    tag: "Performance Marketing"
  },
  {
    title: "Website Design & Development",
    copy: "Fast, mobile-first websites and landing pages engineered to turn visitors into enquiries \u2014 not just look pretty.",
    tag: "Web + Landing Pages"
  },
  {
    title: "App Development",
    copy: "iOS, Android, and web apps built for speed, retention, and product-market fit.",
    tag: "iOS + Android"
  },
  {
    title: "AI Video Creation",
    copy: "Scroll-stopping video ads and UGC-style creatives produced in-house with AI \u2014 scalable, fast, and affordable.",
    tag: "Video Ads + UGC"
  },
  {
    title: "WhatsApp Marketing",
    copy: "Broadcast campaigns, auto-replies, and customer journeys on WhatsApp \u2014 powered by our own platform, Weflux.",
    tag: "Powered by Weflux"
  },
  {
    title: "Branding & Creative Design",
    copy: "Logos, brand identity, and creative systems that make your business instantly recognizable and trusted.",
    tag: "Identity + Design"
  },
  {
    title: "Marketing Automation & CRM",
    copy: "Lead follow-ups, pipelines, and retention flows on autopilot \u2014 so no enquiry ever slips through the cracks.",
    tag: "CRM + Ops"
  },
  {
    title: "Analytics & Reporting",
    copy: "Live dashboards that show exactly what every rupee of marketing returned \u2014 no jargon, no hiding.",
    tag: "Data + BI"
  },
  {
    title: "E-commerce Marketing",
    copy: "Product feeds, marketplace ads, and conversion optimization for D2C and e-commerce brands ready to scale.",
    tag: "D2C + Shopify"
  }
];

export const caseStudies = [
  {
    title: "Real Estate Growth Network",
    outcome: "Qualified inquiries up 2.6x with localized SEO and lead-routing automation.",
    tag: "Search + UX",
    metrics: ["+2.6x leads", "35% lower CPL", "18 locations"]
  },
  {
    title: "D2C Brand Scale",
    outcome: "ROAS up 3.1x with creative testing and a conversion-first funnel rebuild.",
    tag: "Performance Media",
    metrics: ["+3.1x ROAS", "22% repeat lift", "8-week sprint"]
  },
  {
    title: "EdTech Scale-Up",
    outcome: "CPA down 42% with creative testing and new ad sequencing.",
    tag: "Performance Media",
    metrics: ["-42% CPA", "+2.4x ROAS", "6-week sprint"]
  },
  {
    title: "B2B SaaS Momentum",
    outcome: "Pipeline velocity doubled after a CRO revamp and sales enablement.",
    tag: "Web + CRO",
    metrics: ["2x pipeline", "38% MQL lift", "12 new funnels"]
  }
];

export const testimonials = [
  {
    quote:
      "DigitalHub360 didn't just run ads — they engineered a growth system that finally feels predictable.",
    name: "Rhea S.",
    role: "CMO, Retail Group"
  },
  {
    quote: "We went from scattered channels to a single revenue engine. The ROI Lab is scary accurate.",
    name: "Arjun P.",
    role: "Founder, SaaS Platform"
  },
  {
    quote: "Their creative velocity and data clarity helped us outperform competitors in under 90 days.",
    name: "Zoya M.",
    role: "Growth Lead, HealthTech"
  }
];

export const industryBenchmarks: Record<IndustryKey, { label: string } & IndustryInputs> = {
  realestate: { label: "Real Estate", cpl: 400, qualRate: 50, closeRate: 2, avgValue: 7500000 },
  edtech: { label: "Education / EdTech", cpl: 180, qualRate: 60, closeRate: 20, avgValue: 30000 },
  healthcare: { label: "Healthcare / Clinics", cpl: 180, qualRate: 70, closeRate: 30, avgValue: 5000 },
  finance: { label: "Finance / Insurance", cpl: 350, qualRate: 50, closeRate: 15, avgValue: 25000 },
  hospitality: { label: "Hospitality (Hotels/Cafes)", cpl: 150, qualRate: 65, closeRate: 20, avgValue: 8000 },
  local: { label: "Local Services (Salons/Gyms)", cpl: 120, qualRate: 70, closeRate: 25, avgValue: 3000 }
};

export const tickerItems = [
  "Digital Marketing",
  "SEO Services",
  "Social Media Marketing",
  "Google & Meta Ads",
  "Website Development",
  "App Development",
  "AI Video Creation",
  "WhatsApp Marketing",
  "Branding & Design",
  "Marketing Automation"
];

export const sectionNav = [
  { id: "hero", label: "Home", short: "Home" },
  { id: "ecosystem", label: "Ecosystem", short: "Eco" },
  { id: "impact", label: "Impact", short: "Wins" },
  { id: "contact", label: "Contact", short: "Start" }
];

export const pulseOptions = [
  {
    label: "I need leads fast",
    response: "Let's build a lead engine that delivers in 30 days."
  },
  {
    label: "I need sales now",
    response: "We'll tighten ROAS, lift conversion, and scale revenue."
  },
  {
    label: "I need brand authority",
    response: "We'll craft positioning + proof that makes buyers trust you."
  }
];

export const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;
