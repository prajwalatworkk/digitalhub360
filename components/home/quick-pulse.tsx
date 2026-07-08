"use client";

import { useState } from "react";
import { pulseOptions } from "@/content/home/data";
import { Reveal } from "./reveal";

export function QuickPulse() {
  const [pulseChoice, setPulseChoice] = useState(pulseOptions[0]);

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-6 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Quick Pulse</p>
            <h3 className="mt-3 font-display text-2xl text-foreground">Pick your growth vibe</h3>
            <p className="mt-2 text-sm text-muted">Choose the goal that feels most urgent right now.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {pulseOptions.map((option) => (
                <button
                  key={option.label}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    pulseChoice.label === option.label
                      ? "border-accent-primary bg-accent-primary/10 text-foreground"
                      : "border-border text-muted"
                  }`}
                  onClick={() => setPulseChoice(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Suggested Orbit</p>
            <p className="mt-4 text-lg font-semibold text-foreground">{pulseChoice.response}</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent-primary">
              Turn this into a plan →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
