"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import type { RoiLabState } from "./use-roi-lab";

export function LeadForecastPanel({ roiLab }: { roiLab: RoiLabState }) {
  const { metrics } = roiLab;
  const [roasBoost, setRoasBoost] = useState(110);

  const leadStrength = Math.min(1, metrics.leads / 1200);
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

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Lead Forecast</h2>
          <p className="mt-3 text-muted">Forecast based on your ROI Lab inputs — leads, quality, and ROAS.</p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Projected Leads</p>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
              <span>Monthly leads</span>
              <span className="text-accent-primary">{metrics.leads}</span>
            </div>
            <div className="mt-6">
              <svg viewBox="0 0 240 120" className="h-28 w-full">
                <defs>
                  <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="var(--accent-tertiary)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="var(--accent-tertiary)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <path className="chart-line-secondary" d={leadPath} fill="none" stroke="var(--border)" strokeWidth="2" />
                <path className="chart-line" d={leadPath} fill="none" stroke="url(#lineGlow)" strokeWidth="3" />
              </svg>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted">
              <span>Daily avg</span>
              <span className="text-accent-primary">{Math.max(1, Math.round(metrics.leads / 30))}</span>
            </div>
            <p className="mt-3 text-xs text-muted">Based on ROI Lab budget + industry.</p>
          </Reveal>

          <Reveal className="glass rounded-3xl p-6" delay={0.1}>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Lead Quality</p>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
              <span>Qualification rate</span>
              <span className="text-accent-primary">{metrics.qualRate}%</span>
            </div>
            <p className="mt-2 text-xs text-muted">Percent of leads that match your ideal customer.</p>
            <div className="mt-6 flex h-28 items-end gap-3">
              {[1, metrics.qualRate / 100, (metrics.qualRate * 0.55) / 100].map((scale, index) => (
                <div key={`${scale}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="bar h-20 w-full rounded-full bg-gradient-to-t from-accent-primary/60 to-accent-secondary/80"
                    style={{ "--bar-scale": scale } as React.CSSProperties}
                  />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                    {index === 0 ? "Leads" : index === 1 ? "Qualified" : "Sales-ready"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted">
              <span>Qualified / Sales-ready</span>
              <span className="text-accent-primary">
                {metrics.qualified} / {metrics.salesReady}
              </span>
            </div>
            <p className="mt-3 text-xs text-muted">Adjust benchmarks in ROI Lab for accuracy.</p>
          </Reveal>

          <Reveal className="glass rounded-3xl p-6" delay={0.2}>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Platform ROAS</p>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
              <span>Creative efficiency</span>
              <span className="text-accent-primary">{roasBoost}%</span>
            </div>
            <input
              type="range"
              min={80}
              max={140}
              step={5}
              value={roasBoost}
              onChange={(event) => setRoasBoost(Number(event.target.value))}
              className="mt-3 w-full accent-accent-primary"
            />
            <div className="mt-6 space-y-4 text-xs text-foreground/90">
              <div>
                <div className="flex items-center justify-between">
                  <span>Meta Ads</span>
                  <span className="text-accent-primary">{metaRoas}x</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-border">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                    style={{ width: `${Math.min((metaRoas / 6) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span>Google Ads</span>
                  <span className="text-accent-primary">{googleRoas}x</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-border">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                    style={{ width: `${Math.min((googleRoas / 6) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">Benchmarked from live Meta + Google campaigns.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
