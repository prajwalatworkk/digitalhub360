"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedStat({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState("0");
  const isDecimal = !Number.isInteger(target);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(isDecimal ? value.toFixed(1) : Math.floor(value).toString())
    });
    return () => controls.stop();
  }, [inView, target, isDecimal]);

  return (
    <div className="glass rounded-2xl px-3 py-4 sm:px-4 sm:py-5">
      <p ref={ref} className="text-xl font-semibold text-foreground sm:text-2xl">
        {display}
      </p>
      <p className="text-xs leading-snug text-muted sm:text-sm">{label}</p>
    </div>
  );
}
