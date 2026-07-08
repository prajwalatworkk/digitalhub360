"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import { AnimatedStat } from "./animated-stat";
import { HeroLeadForm } from "./hero-lead-form";
import { tickerItems } from "@/content/home/data";

export function Hero() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 180, damping: 18 });

  const handleTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(-relY * 7);
    tiltY.set(relX * 7);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section id="hero" className="relative scroll-mt-28 overflow-hidden px-6 pb-24 pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="orbit-ring left-1/2 top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-spinSlow md:block" />
        <div className="orbit-ring left-1/4 top-1/3 hidden h-[760px] w-[760px] animate-spinSlow opacity-60 md:block" />
        <div className="grid-drift absolute inset-0 opacity-20 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:36px_36px] text-foreground/30" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,var(--accent-tertiary)_0%,var(--accent-secondary)_33%,var(--accent-primary)_66%,var(--accent-tertiary)_100%)] opacity-[0.08] blur-3xl animate-spinSlow" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted">
              <MapPin size={13} className="text-accent-primary" /> Bangalore, India
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted">
              <Star size={13} className="text-accent-secondary" /> 360° Growth Studio
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Best Digital Marketing Agency in{" "}
            <span className="gradient-shimmer bg-gradient-to-r from-accent-primary via-accent-tertiary to-accent-secondary bg-clip-text text-transparent">
              Bangalore
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Strategy, websites, SEO, performance ads, and AI-powered video — fused into one always-on
            growth engine that turns clicks into customers.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Leads in 30 days, not vague brand promises",
              "Transparent reporting — you see every rupee's work",
              "One team for ads, web, content, and automation"
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent-primary" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-4">
            <AnimatedStat target={212} label="Growth Experiments" />
            <AnimatedStat target={38} label="Industries Served" />
            <AnimatedStat target={4.7} label="Avg. ROAS" />
          </div>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <motion.div
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            style={{ rotateX, rotateY, transformPerspective: 1100 }}
          >
            <HeroLeadForm />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-6xl">
        <div className="marquee glass rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.4em] text-muted">
          <div className="marquee-track">
            {tickerItems.concat(tickerItems).map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent-primary/60" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
