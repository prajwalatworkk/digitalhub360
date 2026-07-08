"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Rocket,
  ShoppingBag,
  TrendingUp,
  type LucideIcon
} from "lucide-react";
import { useEffect, useState } from "react";
import { caseStudies } from "@/content/home/data";
import { Reveal } from "./reveal";

const studyIcons: Record<string, LucideIcon> = {
  "Real Estate Growth Network": Building2,
  "D2C Brand Scale": ShoppingBag,
  "EdTech Scale-Up": GraduationCap,
  "B2B SaaS Momentum": Rocket
};

export function CaseStudyCarousel() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const study = caseStudies[caseIndex];
  const Icon = studyIcons[study.title] ?? TrendingUp;

  return (
    <section id="impact" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Impact Stories</h2>
          <p className="mt-3 text-muted">Real wins engineered in 360°.</p>
        </Reveal>
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={study.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="gradient-border glass rounded-3xl p-8 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-glow">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{study.title}</h3>
                    <p className="mt-2 max-w-xl text-muted">{study.outcome}</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent-primary/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent-primary">
                  {study.tag}
                </span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {study.metrics.map((metric, idx) => (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background/30 px-5 py-4"
                  >
                    <TrendingUp size={18} className="shrink-0 text-accent-primary" />
                    <span className="font-display text-lg font-semibold text-foreground">{metric}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {caseStudies.map((item, idx) => (
                <button
                  key={item.title}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === caseIndex ? "w-8 bg-accent-primary" : "w-2.5 bg-border hover:bg-accent-primary/40"
                  }`}
                  onClick={() => setCaseIndex(idx)}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                aria-label="Previous case study"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-muted transition hover:border-accent-primary hover:text-accent-primary"
                onClick={() => setCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next case study"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-muted transition hover:border-accent-primary hover:text-accent-primary"
                onClick={() => setCaseIndex((prev) => (prev + 1) % caseStudies.length)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
