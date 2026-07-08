"use client";

import { useMemo, useState } from "react";
import { industryBenchmarks, type IndustryInputs, type IndustryKey } from "@/content/home/data";

export function useRoiLab() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("edtech");
  const [budget, setBudget] = useState(20000);
  const [industryInputs, setIndustryInputs] = useState<Record<IndustryKey, IndustryInputs>>(() => {
    const entries = Object.entries(industryBenchmarks).map(([key, value]) => [
      key,
      { cpl: value.cpl, qualRate: value.qualRate, closeRate: value.closeRate, avgValue: value.avgValue }
    ]);
    return Object.fromEntries(entries) as Record<IndustryKey, IndustryInputs>;
  });

  const updateIndustryInput = (field: keyof IndustryInputs, value: number) => {
    setIndustryInputs((prev) => ({
      ...prev,
      [activeIndustry]: {
        ...prev[activeIndustry],
        [field]: value
      }
    }));
  };

  const metrics = useMemo(() => {
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

  return {
    activeIndustry,
    setActiveIndustry,
    budget,
    setBudget,
    updateIndustryInput,
    metrics
  };
}

export type RoiLabState = ReturnType<typeof useRoiLab>;
