"use client";

import { LeadForecastPanel } from "@/components/home/lead-forecast-panel";
import { RoiLab } from "@/components/home/roi-lab";
import { useRoiLab } from "@/components/home/use-roi-lab";

export default function RoiLabPage() {
  const roiLab = useRoiLab();

  return (
    <main>
      <div className="mx-auto max-w-3xl px-6 pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Plan Before You Spend</p>
        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">ROI Lab</h1>
        <p className="mt-4 text-muted">
          Forecast leads, revenue, and return before you commit a single rupee of ad budget. Pick your
          industry, tune the benchmarks, and get a realistic picture.
        </p>
      </div>
      <RoiLab roiLab={roiLab} />
      <LeadForecastPanel roiLab={roiLab} />
    </main>
  );
}
