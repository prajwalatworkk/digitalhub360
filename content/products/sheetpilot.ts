import type { Product } from "./types";

export const sheetpilot: Product = {
  slug: "sheetpilot",
  name: "SheetPilot",
  tagline: "Your Google Sheet, Supercharged",
  domain: "sheetpilot.in",
  logo: "/logos/products/sheetpilot.png",
  description:
    "SheetPilot automates the reporting and alerting work small and mid-size businesses in Bangalore already do in Google Sheets — no rip-and-replace software, no new system to learn.",
  features: [
    "Automated daily reports delivered via email and WhatsApp on a schedule",
    "Stock alerts when inventory falls below a set threshold",
    "Payment reminders that auto-follow-up on overdue invoices (D+7, D+15, D+30)",
    "Live dashboards that auto-refresh with your current business status",
    "One-click invoice generation and PDF delivery",
    "WhatsApp integration for critical, time-sensitive alerts"
  ],
  audience:
    "Bangalore SMEs across retail & garments, FMCG distribution, manufacturing, restaurants & hospitality, real estate, healthcare, e-commerce, and logistics.",
  pricing: [
    { plan: "One-time setup", price: "₹9,999 – ₹49,999", note: "No recurring cost — runs on Google's free infrastructure" }
  ],
  status: "live"
};
