"use client";

import { useState } from "react";
import { formatCurrency, industryBenchmarks } from "@/content/home/data";
import { sendLead } from "@/lib/send-lead";
import { Reveal } from "./reveal";
import type { RoiLabState } from "./use-roi-lab";

export function RoiLab({ roiLab }: { roiLab: RoiLabState }) {
  const { activeIndustry, setActiveIndustry, budget, setBudget, updateIndustryInput, metrics } = roiLab;
  const [roiFormMessage, setRoiFormMessage] = useState("");

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
      message: `Industry: ${industryBenchmarks[activeIndustry].label}\nLeads: ${metrics.leads}\nQualified: ${metrics.qualified}\nSales-ready: ${metrics.salesReady}\nRevenue: ${formatCurrency(metrics.revenue)}\nROI: ${metrics.roi}x\nCPL: ${formatCurrency(metrics.cpl)}\nQualification rate: ${metrics.qualRate}%\nClose rate: ${metrics.closeRate}%\nAvg value: ${formatCurrency(metrics.avgValue)}`
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
    <section id="roi" className="scroll-mt-28 bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Build Your Forecast</h2>
          <p className="mt-3 text-muted">Pick your industry, set real benchmarks, and see the forecast.</p>
        </Reveal>
        <Reveal className="grid gap-8 rounded-3xl border border-border bg-surface p-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <label className="text-xs uppercase tracking-[0.4em] text-muted">Monthly investment</label>
            <input
              type="range"
              min={20000}
              max={150000}
              step={1000}
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              className="mt-4 w-full accent-accent-primary"
            />
            <div className="mt-6 text-2xl font-semibold text-foreground">{formatCurrency(budget)} / month</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {Object.entries(industryBenchmarks).map(([key, industry]) => (
                <button
                  key={key}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    activeIndustry === key
                      ? "border-accent-primary bg-accent-primary/10 text-foreground"
                      : "border-border text-muted"
                  }`}
                  onClick={() => setActiveIndustry(key as typeof activeIndustry)}
                >
                  {industry.label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Adjust benchmarks below for accuracy. These defaults are just starting points.
            </p>
            <details className="mt-6 rounded-2xl border border-border bg-background/40 p-4 text-xs text-muted">
              <summary className="cursor-pointer text-xs uppercase tracking-[0.3em] text-muted">
                Benchmark Inputs
              </summary>
              <div className="mt-4 grid gap-4">
                <BenchmarkSlider
                  label="Cost per lead (CPL)"
                  value={metrics.cpl}
                  display={formatCurrency(metrics.cpl)}
                  min={50}
                  max={2000}
                  step={10}
                  onChange={(value) => updateIndustryInput("cpl", value)}
                />
                <BenchmarkSlider
                  label="Qualification rate"
                  value={metrics.qualRate}
                  display={`${metrics.qualRate}%`}
                  min={20}
                  max={90}
                  step={1}
                  onChange={(value) => updateIndustryInput("qualRate", value)}
                />
                <BenchmarkSlider
                  label="Sales close rate"
                  value={metrics.closeRate}
                  display={`${metrics.closeRate}%`}
                  min={1}
                  max={40}
                  step={1}
                  onChange={(value) => updateIndustryInput("closeRate", value)}
                />
                <BenchmarkSlider
                  label="Avg. revenue per sale"
                  value={metrics.avgValue}
                  display={formatCurrency(metrics.avgValue)}
                  min={1000}
                  max={10000000}
                  step={1000}
                  onChange={(value) => updateIndustryInput("avgValue", value)}
                />
              </div>
            </details>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Est. Leads" value={metrics.leads.toString()} caption="Monthly" />
            <MetricCard label="Qualified Leads" value={metrics.qualified.toString()} caption="Monthly" />
            <MetricCard label="Projected Revenue" value={formatCurrency(metrics.revenue)} caption="Monthly" />
            <MetricCard label="ROI Multiple" value={`${metrics.roi}x`} caption="Average" />
          </div>
        </Reveal>
        <form
          className="mt-8 grid gap-4 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[1.1fr_1fr_auto]"
          onSubmit={handleForecastSubmit}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Save this forecast</p>
            <p className="mt-2 text-sm text-muted">
              Drop your details and we&apos;ll send a tailored forecast based on this ROI setup.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 text-sm font-semibold text-white"
          >
            Send My Forecast
          </button>
          {roiFormMessage && <p className="text-xs text-accent-primary md:col-span-3">{roiFormMessage}</p>}
        </form>
      </div>
    </section>
  );
}

function BenchmarkSlider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
        <span>{label}</span>
        <span className="text-accent-primary">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 w-full accent-accent-primary"
      />
    </div>
  );
}

function MetricCard({ label, value, caption }: { label: string; value: string; caption: string }) {
  return (
    <div className="glass rounded-2xl px-5 py-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-foreground">{value}</p>
      <p className="text-xs text-muted">{caption}</p>
    </div>
  );
}
