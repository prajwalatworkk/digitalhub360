"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Clapperboard,
  Compass,
  Globe,
  Megaphone,
  MessageCircle,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  ThumbsUp,
  Workflow,
  type LucideIcon
} from "lucide-react";
import { services } from "@/content/home/data";
import { useLeadModal } from "@/components/layout/lead-modal";
import { Reveal } from "./reveal";

const serviceIcons: Record<string, LucideIcon> = {
  "Digital Marketing Strategy": Compass,
  "SEO Services": Search,
  "Social Media Marketing": ThumbsUp,
  "Google & Meta Ads": Megaphone,
  "Website Design & Development": Globe,
  "App Development": Smartphone,
  "AI Video Creation": Clapperboard,
  "WhatsApp Marketing": MessageCircle,
  "Branding & Creative Design": Palette,
  "Marketing Automation & CRM": Workflow,
  "Analytics & Reporting": BarChart3,
  "E-commerce Marketing": ShoppingCart
};

export function ServicesGrid() {
  const { open } = useLeadModal();

  return (
    <section id="ecosystem" className="scroll-mt-28 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">The 360° Ecosystem</p>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            Digital Marketing Services That Drive Real Revenue
          </h2>
          <p className="mt-3 text-muted">
            SEO, ads, social media, websites, video, and automation — everything your business needs
            to get found, get leads, and grow. One connected team, one accountable system.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title] ?? Sparkles;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.05}>
                <motion.button
                  type="button"
                  onClick={() => open(service.title)}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass group h-full w-full cursor-pointer rounded-2xl p-6 text-left"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 text-accent-primary transition group-hover:from-accent-primary group-hover:to-accent-secondary group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.copy}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-accent-primary">
                    {service.tag}
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </span>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
