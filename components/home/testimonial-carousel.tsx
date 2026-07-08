"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/home/data";
import { Reveal } from "./reveal";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
}

export function TestimonialCarousel() {
  const [testiIndex, setTestiIndex] = useState(0);
  const [autoTestimonial, setAutoTestimonial] = useState(true);

  useEffect(() => {
    if (!autoTestimonial) return;
    const timer = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [autoTestimonial]);

  const testimonial = testimonials[testiIndex];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Client Signals</h2>
          <p className="mt-3 text-muted">Trusted by founders, operators, and marketing leaders.</p>
        </Reveal>
        <div
          className="relative"
          onMouseEnter={() => setAutoTestimonial(false)}
          onMouseLeave={() => setAutoTestimonial(true)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass relative rounded-3xl p-8 text-center sm:p-12"
            >
              <span className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-white shadow-glow">
                <Quote size={18} />
              </span>
              <div className="flex justify-center gap-1 pt-2" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + idx * 0.06, type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Star size={18} className="fill-accent-secondary text-accent-secondary" />
                  </motion.span>
                ))}
              </div>
              <blockquote className="mt-5 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-tertiary to-accent-primary font-display text-sm font-semibold text-white">
                  {initials(testimonial.name)}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold text-foreground">{testimonial.name}</span>
                  <span className="block text-xs text-muted">{testimonial.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === testiIndex ? "w-8 bg-accent-primary" : "w-2.5 bg-border hover:bg-accent-primary/40"
                }`}
                onClick={() => setTestiIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
