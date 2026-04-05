"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type IndustryKey = "realestate" | "edtech" | "healthcare" | "finance" | "hospitality" | "local";
type IndustryInputs = {
  cpl: number;
  qualRate: number;
  closeRate: number;
  avgValue: number;
};

const modes = {
  growth: {
    title: "Growth Engine Blueprint",
    copy: "Integrated strategy, conversion-focused web, SEO dominance, and always-on ad velocity.",
    bullets: ["90-day growth roadmap", "Full-funnel tracking stack", "Weekly experiments + wins"]
  },
  performance: {
    title: "Performance Blitz",
    copy: "High-velocity paid media backed by creative testing, landing page sprints, and ROAS tuning.",
    bullets: ["Creative velocity studio", "Paid channel orchestration", "Attribution + LTV focus"]
  },
  brand: {
    title: "Brand Recode",
    copy: "Positioning, storytelling, and identity systems that make you the obvious choice.",
    bullets: ["Brand strategy sprint", "Signature visual system", "Launch + demand plan"]
  }
};

const services = [
  {
    title: "Brand Gravity",
    copy: "Positioning, narrative, and creative systems that make your market lean in.",
    tag: "Strategy + Identity"
  },
  {
    title: "Conversion Architecture",
    copy: "High-converting websites, funnels, and landing systems built for speed.",
    tag: "Web + CRO"
  },
  {
    title: "Website Development",
    copy: "High-performance marketing sites and landing systems engineered to convert.",
    tag: "Web + UX"
  },
  {
    title: "App Development",
    copy: "Mobile and web apps built for speed, retention, and product-market fit.",
    tag: "iOS + Android"
  },
  {
    title: "Search Domination",
    copy: "Technical SEO + content ops that turn search into your best rep.",
    tag: "SEO + Content"
  },
  {
    title: "Performance Media",
    copy: "Paid media sprints engineered to cut CPA and lift LTV.",
    tag: "Google + Meta"
  },
  {
    title: "Automation Layer",
    copy: "CRM, funnels, and retention flows wired to keep revenue moving.",
    tag: "CRM + Ops"
  },
  {
    title: "Intelligence Hub",
    copy: "Dashboards, analytics, and decision loops that keep you ahead.",
    tag: "Data + BI"
  }
];

const caseStudies = [
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
    outcome: "Pipeline velocity doubled after CRO revamp and sales enablement.",
    tag: "Web + CRO",
    metrics: ["2x pipeline", "38% MQL lift", "12 new funnels"]
  }
];

const testimonials = [
  {
    quote:
      "DigitalHub360 didn’t just run ads — they engineered a growth system that finally feels predictable.",
    name: "Rhea S.",
    role: "CMO, Retail Group"
  },
  {
    quote:
      "We went from scattered channels to a single revenue engine. The ROI Lab is scary accurate.",
    name: "Arjun P.",
    role: "Founder, SaaS Platform"
  },
  {
    quote:
      "Their creative velocity and data clarity helped us outperform competitors in under 90 days.",
    name: "Zoya M.",
    role: "Growth Lead, HealthTech"
  }
];

const industryBenchmarks: Record<IndustryKey, { label: string } & IndustryInputs> = {
  realestate: { label: "Real Estate", cpl: 400, qualRate: 50, closeRate: 2, avgValue: 7500000 },
  edtech: { label: "Education / EdTech", cpl: 180, qualRate: 60, closeRate: 20, avgValue: 30000 },
  healthcare: { label: "Healthcare / Clinics", cpl: 180, qualRate: 70, closeRate: 30, avgValue: 5000 },
  finance: { label: "Finance / Insurance", cpl: 350, qualRate: 50, closeRate: 15, avgValue: 25000 },
  hospitality: { label: "Hospitality (Hotels/Cafes)", cpl: 150, qualRate: 65, closeRate: 20, avgValue: 8000 },
  local: { label: "Local Services (Salons/Gyms)", cpl: 120, qualRate: 70, closeRate: 25, avgValue: 3000 }
};

const tickerItems = [
  "Website Development",
  "App Development",
  "SEO Dominance",
  "Performance Media",
  "Conversion Architecture",
  "Automation Layer",
  "Data Intelligence",
  "Brand Gravity"
];

const sectionNav = [
  { id: "hero", label: "Home", short: "Home" },
  { id: "roi", label: "ROI Lab", short: "ROI" },
  { id: "ecosystem", label: "Ecosystem", short: "Eco" },
  { id: "impact", label: "Impact", short: "Wins" },
  { id: "contact", label: "Contact", short: "Start" }
];

const engagementPrompts: Record<string, { question: string; cta: string; href: string }> = {
  hero: {
    question: "Quick check: ready to outpace your competitors?",
    cta: "Start with ROI Lab",
    href: "#roi"
  },
  roi: {
    question: "Pick your industry and see your real forecast.",
    cta: "Tune the ROI Lab",
    href: "#roi"
  },
  ecosystem: {
    question: "What if your website could convert 2x more?",
    cta: "Talk to us",
    href: "#contact"
  },
  impact: {
    question: "Want your brand to be the next win story?",
    cta: "Book a strategy call",
    href: "#contact"
  },
  contact: {
    question: "Prefer a quick roadmap instead of a long call?",
    cta: "Request the roadmap",
    href: "#contact"
  }
};

const pulseOptions = [
  {
    label: "I need leads fast",
    response: "Let’s build a lead engine that delivers in 30 days."
  },
  {
    label: "I need sales now",
    response: "We’ll tighten ROAS, lift conversion, and scale revenue."
  },
  {
    label: "I need brand authority",
    response: "We’ll craft positioning + proof that makes buyers trust you."
  }
];

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function Home() {
  const [activeMode, setActiveMode] = useState<keyof typeof modes>("growth");
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("edtech");
  const [budget, setBudget] = useState(20000);
  const [caseIndex, setCaseIndex] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoTestimonial, setAutoTestimonial] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [pulseChoice, setPulseChoice] = useState(pulseOptions[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [industryInputs, setIndustryInputs] = useState<Record<IndustryKey, IndustryInputs>>(() => {
    const entries = Object.entries(industryBenchmarks).map(([key, value]) => [
      key,
      { cpl: value.cpl, qualRate: value.qualRate, closeRate: value.closeRate, avgValue: value.avgValue }
    ]);
    return Object.fromEntries(entries) as Record<IndustryKey, IndustryInputs>;
  });
  const [roasBoost, setRoasBoost] = useState(110);
  const [roiFormMessage, setRoiFormMessage] = useState("");
  const glowRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const roiMetrics = useMemo(() => {
    const inputs = industryInputs[activeIndustry];
    const leads = Math.max(1, Math.round(budget / inputs.cpl));
    const qualified = Math.round(leads * (inputs.qualRate / 100));
    const salesReady = Math.round(qualified * (inputs.closeRate / 100));
    const revenue = Math.round(salesReady * inputs.avgValue);
    const roi = budget > 0 ? Math.round((revenue / budget) * 10) / 10 : 0;
    return {
      leads,
      qualified,
      salesReady,
      revenue,
      roi,
      cpl: inputs.cpl,
      qualRate: inputs.qualRate,
      closeRate: inputs.closeRate,
      avgValue: inputs.avgValue
    };
  }, [budget, activeIndustry, industryInputs]);

  const activePrompt = engagementPrompts[activeSection] ?? engagementPrompts.hero;

  const updateIndustryInput = (field: keyof IndustryInputs, value: number) => {
    setIndustryInputs((prev) => ({
      ...prev,
      [activeIndustry]: {
        ...prev[activeIndustry],
        [field]: value
      }
    }));
  };

  const qualifiedLeads = roiMetrics.qualified;
  const salesReadyLeads = roiMetrics.salesReady;
  const leadStrength = Math.min(1, roiMetrics.leads / 1200);
  const leadPoints = [
    95 - leadStrength * 40,
    68 - leadStrength * 30,
    52 - leadStrength * 28,
    72 - leadStrength * 25,
    58 - leadStrength * 26,
    66 - leadStrength * 24
  ];
  const leadPath = `M10 ${leadPoints[0]} C 40 ${leadPoints[1]}, 80 ${leadPoints[2]}, 120 ${leadPoints[3]} C 150 ${leadPoints[4]}, 190 ${leadPoints[5]}, 230 ${leadPoints[2]}`;
  const roasFactor = roasBoost / 100;
  const metaRoas = Math.round(2.6 * roasFactor * 10) / 10;
  const googleRoas = Math.round(3.4 * roasFactor * 10) / 10;

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${event.clientX}px`;
      glowRef.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = sectionNav
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const statElements = document.querySelectorAll<HTMLElement>("[data-count]");
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          let current = 0;
          const increment = target / 60;

          const tick = () => {
            current += increment;
            if (current >= target) {
              el.textContent = Number.isInteger(target) ? `${target}` : target.toFixed(1);
              return;
            }
            el.textContent = Number.isInteger(target) ? `${Math.floor(current)}` : current.toFixed(1);
            requestAnimationFrame(tick);
          };

          tick();
          statObserver.unobserve(el);
        });
      },
      { threshold: 0.8 }
    );

    statElements.forEach((el) => statObserver.observe(el));
    return () => statObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    if (!autoTestimonial) return;
    const timer = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [autoTestimonial]);

  const sendLead = async (payload: Record<string, unknown>) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.status >= 500) {
      throw new Error("Request failed");
    }

    setToastMessage("Lead captured. We’ll reach out shortly.");
    setToastVisible(true);
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    toastTimer.current = setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData.get("company")) {
      setFormStatus("success");
      setFormMessage("Thanks! We’ll reach out shortly.");
      event.currentTarget.reset();
      return;
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      goal: formData.get("goal"),
      budget: formData.get("budget"),
      message: formData.get("message")
    };

    try {
      setFormStatus("loading");
      setFormMessage("");
      await sendLead(payload);
      setFormStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Something went wrong. Email us directly at info@digitalhub360.in");
    }
  };

  const handleForecastSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) return;

    const payload = {
      name,
      email,
      goal: "ROI Lab Forecast",
      budget: formatCurrency(budget),
      message: `Industry: ${industryBenchmarks[activeIndustry].label}\nLeads: ${roiMetrics.leads}\nQualified: ${roiMetrics.qualified}\nSales-ready: ${roiMetrics.salesReady}\nRevenue: ${formatCurrency(roiMetrics.revenue)}\nROI: ${roiMetrics.roi}x\nCPL: ${formatCurrency(roiMetrics.cpl)}\nQualification rate: ${roiMetrics.qualRate}%\nClose rate: ${roiMetrics.closeRate}%\nAvg value: ${formatCurrency(roiMetrics.avgValue)}`
    };

    try {
      setRoiFormMessage("");
      await sendLead(payload);
      event.currentTarget.reset();
    } catch (error) {
      setRoiFormMessage("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="relative">
      <div ref={glowRef} className="cursor-glow hidden md:block" aria-hidden="true" />

      <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 font-display text-lg font-semibold">
            <Image src="/logo.png" alt="DigitalHub360 logo" width={40} height={40} className="rounded-xl bg-white p-1" />
            <span className="hidden sm:inline">DigitalHub360</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="hover:text-neon" href="#roi">ROI Lab</a>
            <a className="hover:text-neon" href="#ecosystem">Ecosystem</a>
            <a className="hover:text-neon" href="#impact">Impact</a>
            <a className="hover:text-neon" href="#contact">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-neon hover:text-neon"
              href="#contact"
            >
              Client Portal
            </a>
            <a
              className="rounded-full bg-gradient-to-r from-neon to-flare px-5 py-2 text-sm font-semibold text-white shadow-glow"
              href="#contact"
            >
              Book Strategy
            </a>
          </div>
          <button
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
        <div className="h-[2px] w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-neon to-flare"
            style={{ width: `${Math.min(scrollProgress * 100, 100)}%` }}
          />
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 bg-black/90 px-6 py-6 text-sm md:hidden">
            <a className="hover:text-neon" href="#roi" onClick={() => setMenuOpen(false)}>ROI Lab</a>
            <a className="hover:text-neon" href="#ecosystem" onClick={() => setMenuOpen(false)}>Ecosystem</a>
            <a className="hover:text-neon" href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
            <a className="hover:text-neon" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a
              className="rounded-full bg-gradient-to-r from-neon to-flare px-5 py-3 text-sm font-semibold text-white shadow-glow"
              href="#contact"
            >
              Book Strategy
            </a>
          </div>
        )}
      </header>

      <main className="pb-40 pt-28">
        <section id="hero" className="relative scroll-mt-28 overflow-hidden px-6 pb-24 pt-14">
          <div className="absolute inset-0">
            <div className="orbit-ring left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-spinSlow" />
            <div className="orbit-ring left-1/4 top-1/3 h-[760px] w-[760px] animate-spinSlow opacity-60" />
            <div className="orbit-ring left-[65%] top-[55%] h-[980px] w-[980px] animate-spinSlow opacity-40" />
            <div className="absolute left-[70%] top-[30%] h-3 w-3 rounded-full bg-neon shadow-pulse animate-orbit" />
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="absolute left-1/2 top-10 h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neon/70 to-transparent animate-pulse" />
            <div className="absolute left-1/2 top-20 h-[1px] w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-flare/60 to-transparent animate-pulse" />
            <div className="absolute left-6 top-10 h-28 w-28 rounded-full bg-neon/10 blur-2xl animate-float" />
            <div className="absolute right-10 top-24 h-36 w-36 rounded-full bg-flare/10 blur-2xl animate-float" />
            <div className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-glow/10 blur-3xl animate-float" />
            <div className="absolute bottom-32 right-20 h-24 w-48 rotate-12 bg-gradient-to-r from-neon/20 to-transparent blur-2xl" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,#22d3ee33,#a855f733,#f43f5e33,#22d3ee33)] blur-3xl animate-spinSlow" />
            <div className="absolute left-[18%] top-[35%]">
              <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-neon/30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </div>
            <div className="absolute right-[20%] top-[30%]">
              <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-flare/30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flare" />
            </div>
            <div className="absolute bottom-[30%] right-[32%]">
              <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-glow/30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10" data-reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">A 360° Growth Studio</p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Build a growth engine that <span className="bg-gradient-to-r from-neon via-purple-400 to-flare bg-clip-text text-transparent">orbits revenue</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Strategy, design, SEO, and performance media fused into one always-on growth system.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-gradient-to-r from-neon to-flare px-6 py-3 font-semibold text-white shadow-glow"
                  href="#contact"
                >
                  Launch My Growth Plan
                </a>
                <a
                  className="rounded-full border border-white/20 px-6 py-3 text-white/80 transition hover:border-neon hover:text-neon"
                  href="#ecosystem"
                >
                  Explore The Ecosystem
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="glass rounded-2xl px-4 py-5">
                  <p className="text-2xl font-semibold" data-count="212">0</p>
                  <p className="text-sm text-slate-400">Growth Experiments</p>
                </div>
                <div className="glass rounded-2xl px-4 py-5">
                  <p className="text-2xl font-semibold" data-count="38">0</p>
                  <p className="text-sm text-slate-400">Industries Served</p>
                </div>
                <div className="glass rounded-2xl px-4 py-5">
                  <p className="text-2xl font-semibold" data-count="4.7">0</p>
                  <p className="text-sm text-slate-400">Avg. ROAS</p>
                </div>
              </div>
            </div>

            <div className="relative z-10" data-reveal>
              <div className="gradient-border glass p-6 pb-8 shadow-soft">
                <div className="grid grid-cols-3 place-items-center gap-2 sm:gap-3">
                  {Object.keys(modes).map((key) => (
                    <button
                      key={key}
                      className={`w-full whitespace-nowrap rounded-full border px-2 py-2 text-[9px] uppercase tracking-[0.2em] text-center transition sm:px-4 sm:text-xs sm:tracking-widest ${
                        activeMode === key ? "border-neon bg-neon/10 text-white" : "border-white/10 text-slate-400"
                      }`}
                      onClick={() => setActiveMode(key as keyof typeof modes)}
                    >
                      {key}
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">{modes[activeMode].title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{modes[activeMode].copy}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {modes[activeMode].bullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <a
                    className="mt-6 block w-full rounded-full bg-gradient-to-r from-neon to-flare px-6 py-3 text-center font-semibold text-white"
                    href="#contact"
                  >
                    Get The Blueprint
                  </a>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 text-[10px] text-slate-400 sm:mt-6 sm:text-xs">
                <div className="glass rounded-xl px-3 py-3 text-center">Multi-channel</div>
                <div className="glass rounded-xl px-3 py-3 text-center">Revenue focus</div>
                <div className="glass rounded-xl px-3 py-3 text-center">Always-on</div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto mt-12 max-w-6xl" data-reveal>
            <div className="marquee glass rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.4em] text-slate-300">
              <div className="marquee-track">
                {tickerItems.concat(tickerItems).map((item, index) => (
                  <span key={`${item}-${index}`} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-neon/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roi" className="scroll-mt-28 bg-ink px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-reveal>
              <h2 className="font-display text-3xl sm:text-4xl">ROI Lab</h2>
              <p className="mt-3 text-slate-300">Pick your industry, set real benchmarks, and see the forecast.</p>
            </div>
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_1.2fr]" data-reveal>
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Monthly investment</label>
                <input
                  type="range"
                  min={20000}
                  max={150000}
                  step={1000}
                  value={budget}
                  onChange={(event) => setBudget(Number(event.target.value))}
                  className="mt-4 w-full accent-neon"
                />
                <div className="mt-6 text-2xl font-semibold">{formatCurrency(budget)} / month</div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {Object.entries(industryBenchmarks).map(([key, industry]) => (
                    <button
                      key={key}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                        activeIndustry === key ? "border-neon bg-neon/10 text-white" : "border-white/10 text-slate-400"
                      }`}
                      onClick={() => setActiveIndustry(key as IndustryKey)}
                    >
                      {industry.label}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Adjust benchmarks below for accuracy. These defaults are just starting points.
                </p>
                <details className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300">
                  <summary className="cursor-pointer text-xs uppercase tracking-[0.3em] text-slate-400">
                    Benchmark Inputs
                  </summary>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        <span>Cost per lead (CPL)</span>
                        <span className="text-neon">{formatCurrency(roiMetrics.cpl)}</span>
                      </div>
                      <input
                        type="range"
                        min={50}
                        max={2000}
                        step={10}
                        value={roiMetrics.cpl}
                        onChange={(event) => updateIndustryInput("cpl", Number(event.target.value))}
                        className="mt-2 w-full accent-neon"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        <span>Qualification rate</span>
                        <span className="text-neon">{roiMetrics.qualRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={90}
                        step={1}
                        value={roiMetrics.qualRate}
                        onChange={(event) => updateIndustryInput("qualRate", Number(event.target.value))}
                        className="mt-2 w-full accent-neon"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        <span>Sales close rate</span>
                        <span className="text-neon">{roiMetrics.closeRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={40}
                        step={1}
                        value={roiMetrics.closeRate}
                        onChange={(event) => updateIndustryInput("closeRate", Number(event.target.value))}
                        className="mt-2 w-full accent-neon"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        <span>Avg. revenue per sale</span>
                        <span className="text-neon">{formatCurrency(roiMetrics.avgValue)}</span>
                      </div>
                      <input
                        type="range"
                        min={1000}
                        max={10000000}
                        step={1000}
                        value={roiMetrics.avgValue}
                        onChange={(event) => updateIndustryInput("avgValue", Number(event.target.value))}
                        className="mt-2 w-full accent-neon"
                      />
                    </div>
                  </div>
                </details>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass rounded-2xl px-5 py-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Est. Leads</p>
                  <p className="mt-3 text-3xl font-semibold">{roiMetrics.leads}</p>
                  <p className="text-xs text-slate-400">Monthly</p>
                </div>
                <div className="glass rounded-2xl px-5 py-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Qualified Leads</p>
                  <p className="mt-3 text-3xl font-semibold">{roiMetrics.qualified}</p>
                  <p className="text-xs text-slate-400">Monthly</p>
                </div>
                <div className="glass rounded-2xl px-5 py-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Projected Revenue</p>
                  <p className="mt-3 text-3xl font-semibold">{formatCurrency(roiMetrics.revenue)}</p>
                  <p className="text-xs text-slate-400">Monthly</p>
                </div>
                <div className="glass rounded-2xl px-5 py-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">ROI Multiple</p>
                  <p className="mt-3 text-3xl font-semibold">{roiMetrics.roi}x</p>
                  <p className="text-xs text-slate-400">Average</p>
                </div>
              </div>
            </div>
            <form className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.1fr_1fr_auto]" onSubmit={handleForecastSubmit}>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Save this forecast</p>
                <p className="mt-2 text-sm text-slate-300">
                  Drop your details and we’ll send a tailored forecast based on this ROI setup.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-neon to-flare px-6 py-3 text-sm font-semibold text-white"
              >
                Send My Forecast
              </button>
              {roiFormMessage && <p className="text-xs text-rose-300 md:col-span-3">{roiFormMessage}</p>}
            </form>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-reveal>
              <h2 className="font-display text-3xl sm:text-4xl">Lead Forecast</h2>
              <p className="mt-3 text-slate-300">Forecast based on your ROI Lab inputs — leads, quality, and ROAS.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="glass rounded-3xl p-6" data-reveal>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Projected Leads</p>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  <span>Monthly leads</span>
                  <span className="text-neon">{roiMetrics.leads}</span>
                </div>
                <div className="mt-6">
                  <svg viewBox="0 0 240 120" className="h-28 w-full">
                    <defs>
                      <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.7" />
                      </linearGradient>
                    </defs>
                    <path
                      className="chart-line-secondary"
                      d={leadPath}
                      fill="none"
                      stroke="rgba(148,163,184,0.35)"
                      strokeWidth="2"
                    />
                    <path
                      className="chart-line"
                      d={leadPath}
                      fill="none"
                      stroke="url(#lineGlow)"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Daily avg</span>
                  <span className="text-neon">{Math.max(1, Math.round(roiMetrics.leads / 30))}</span>
                </div>
                <p className="mt-3 text-xs text-slate-500">Based on ROI Lab budget + industry.</p>
              </div>

              <div className="glass rounded-3xl p-6" data-reveal>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Lead Quality</p>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  <span>Qualification rate</span>
                  <span className="text-neon">{roiMetrics.qualRate}%</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">Percent of leads that match your ideal customer.</p>
                <div className="mt-6 flex h-28 items-end gap-3">
                  {[1, roiMetrics.qualRate / 100, (roiMetrics.qualRate * 0.55) / 100].map((scale, index) => (
                    <div key={`${scale}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="bar h-20 w-full rounded-full bg-gradient-to-t from-neon/60 to-flare/80"
                        style={{ "--bar-scale": scale } as Record<string, number>}
                      />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                        {index === 0 ? "Leads" : index === 1 ? "Qualified" : "Sales-ready"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Qualified / Sales-ready</span>
                  <span className="text-neon">
                    {qualifiedLeads} / {salesReadyLeads}
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-500">Adjust benchmarks in ROI Lab for accuracy.</p>
              </div>

              <div className="glass rounded-3xl p-6" data-reveal>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Platform ROAS</p>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  <span>Creative efficiency</span>
                  <span className="text-neon">{roasBoost}%</span>
                </div>
                <input
                  type="range"
                  min={80}
                  max={140}
                  step={5}
                  value={roasBoost}
                  onChange={(event) => setRoasBoost(Number(event.target.value))}
                  className="mt-3 w-full accent-neon"
                />
                <div className="mt-6 space-y-4 text-xs text-slate-300">
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Meta Ads</span>
                      <span className="text-neon">{metaRoas}x</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-neon to-flare"
                        style={{ width: `${Math.min((metaRoas / 6) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Google Ads</span>
                      <span className="text-neon">{googleRoas}x</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-neon to-flare"
                        style={{ width: `${Math.min((googleRoas / 6) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Benchmarked from live Meta + Google campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.1fr_0.9fr]" data-reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Quick Pulse</p>
                <h3 className="mt-3 font-display text-2xl">Pick your growth vibe</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Choose the goal that feels most urgent right now.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {pulseOptions.map((option) => (
                    <button
                      key={option.label}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                        pulseChoice.label === option.label
                          ? "border-neon bg-neon/10 text-white"
                          : "border-white/10 text-slate-400"
                      }`}
                      onClick={() => setPulseChoice(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-6 text-sm text-slate-300">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Suggested Orbit</p>
                <p className="mt-4 text-lg font-semibold text-white">{pulseChoice.response}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neon"
                >
                  Turn this into a plan →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="scroll-mt-28 bg-ink px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-reveal>
              <h2 className="font-display text-3xl sm:text-4xl">The 360° Ecosystem</h2>
              <p className="mt-3 text-slate-300">Every orbit is connected. Every service compounds the next.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="glass rounded-2xl p-6 transition hover:-translate-y-2" data-reveal>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{service.copy}</p>
                  <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-neon">{service.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="scroll-mt-28 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-reveal>
              <h2 className="font-display text-3xl sm:text-4xl">Impact Stories</h2>
              <p className="mt-3 text-slate-300">Swipe through real wins engineered in 360°.</p>
            </div>
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              data-reveal
            >
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${caseIndex * 100}%)` }}
              >
                {caseStudies.map((study) => (
                  <div key={study.title} className="min-w-full px-2">
                    <div className="glass rounded-3xl p-8">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <h3 className="text-2xl font-semibold">{study.title}</h3>
                          <p className="mt-3 text-slate-300">{study.outcome}</p>
                        </div>
                        <span className="rounded-full bg-neon/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neon">
                          {study.tag}
                        </span>
                      </div>
                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {study.metrics.map((metric) => (
                          <div key={metric} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  {caseStudies.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-2.5 w-2.5 rounded-full ${idx === caseIndex ? "bg-neon" : "bg-white/20"}`}
                      onClick={() => setCaseIndex(idx)}
                      aria-label={`Go to case study ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300"
                    onClick={() => setCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
                  >
                    Prev
                  </button>
                  <button
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300"
                    onClick={() => setCaseIndex((prev) => (prev + 1) % caseStudies.length)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-reveal>
              <h2 className="font-display text-3xl sm:text-4xl">Client Signals</h2>
              <p className="mt-3 text-slate-300">Trusted by founders, operators, and marketing leaders.</p>
            </div>
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setAutoTestimonial(false)}
              onMouseLeave={() => setAutoTestimonial(true)}
              data-reveal
            >
              <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${testiIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="min-w-full px-2">
                    <div className="glass rounded-3xl p-8 text-center">
                      <p className="text-xl font-semibold">“{testimonial.quote}”</p>
                      <p className="mt-4 text-sm text-slate-300">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-2.5 w-2.5 rounded-full ${idx === testiIndex ? "bg-neon" : "bg-white/20"}`}
                    onClick={() => setTestiIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal>
              <h2 className="font-display text-3xl sm:text-4xl">Ready to build your 360° engine?</h2>
              <p className="mt-3 text-slate-300">Tell us about your goals and we’ll map the fastest path to revenue.</p>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</p>
                  <p>info@digitalhub360.in</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Phone</p>
                  <p>+91 78922 18476</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">HQ</p>
                  <p>HSR Layout</p>
                </div>
              </div>
            </div>
            <form className="glass rounded-3xl p-8" onSubmit={handleSubmit} data-reveal>
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Growth goal</label>
                  <select
                    name="goal"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                  >
                    <option>Generate more qualified leads</option>
                    <option>Lower CAC + increase ROAS</option>
                    <option>Reposition or rebrand</option>
                    <option>Launch a new product</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Monthly budget</label>
                  <select
                    name="budget"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                  >
                    <option>₹20k - ₹50k</option>
                    <option>₹50k - ₹1L</option>
                    <option>₹1L - ₹3L</option>
                    <option>₹3L - ₹7L</option>
                    <option>₹7L+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Tell us more</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/50"
                    placeholder="Share your goals"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-gradient-to-r from-neon to-flare px-6 py-3 font-semibold text-white"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Sending..." : "Send Strategy Request"}
              </button>
              {formMessage && formStatus === "error" && (
                <p className={`mt-4 text-sm ${formStatus === "error" ? "text-rose-300" : "text-emerald-300"}`}>
                  {formMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {toastVisible && (
        <div className="fixed top-24 left-1/2 z-50 w-[90%] max-w-[420px] -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0">
          <div className="glass flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200 shadow-glow">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-300/70" />
            </span>
            {toastMessage}
          </div>
        </div>
      )}

      {activePrompt && (
        <>
          <div className="fixed bottom-24 right-6 z-40 hidden lg:block">
            <div className="glass animate-float rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-200 shadow-glow">
              <span className="mr-3 text-slate-300">{activePrompt.question}</span>
              <a className="text-neon" href={activePrompt.href}>
                {activePrompt.cta}
              </a>
            </div>
          </div>
          <div className="fixed bottom-20 left-1/2 z-40 w-[92%] max-w-[420px] -translate-x-1/2 md:hidden">
            <div className="glass flex items-center justify-between rounded-2xl px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-200 shadow-glow">
              <span className="truncate pr-3 text-slate-300">{activePrompt.question}</span>
              <a className="text-neon" href={activePrompt.href}>
                {activePrompt.cta}
              </a>
            </div>
          </div>
        </>
      )}

      <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {sectionNav.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] transition ${
              activeSection === section.id ? "text-neon" : "text-slate-500"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full transition ${
                activeSection === section.id ? "bg-neon shadow-pulse" : "bg-white/20"
              }`}
            />
            <span className="opacity-0 transition group-hover:opacity-100">{section.label}</span>
          </a>
        ))}
      </div>

      <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-300 shadow-glow backdrop-blur-lg md:hidden">
        {sectionNav.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`rounded-full px-3 py-2 transition ${
              activeSection === section.id ? "bg-neon/15 text-white shadow-glow" : "text-slate-400"
            }`}
          >
            {section.short}
          </a>
        ))}
      </div>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} DigitalHub360. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#ecosystem" className="hover:text-neon">Services</a>
            <a href="#roi" className="hover:text-neon">ROI Lab</a>
            <a href="#contact" className="hover:text-neon">Contact</a>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span>Follow</span>
          <a className="hover:text-neon" href="https://www.instagram.com/digitalhub360.in" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="hover:text-neon" href="https://www.linkedin.com/company/digitalhub360in/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-neon" href="https://www.facebook.com/digitalhub360.in" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a className="hover:text-neon" href="https://share.google/qAh7wqPTSbB2eqaed" target="_blank" rel="noreferrer">
            Google Business
          </a>
        </div>
      </footer>
    </div>
  );
}
