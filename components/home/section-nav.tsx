"use client";

import { useEffect, useState } from "react";
import { sectionNav } from "@/content/home/data";

export function SectionNav() {
  const [activeSection, setActiveSection] = useState(sectionNav[0].id);

  useEffect(() => {
    const elements = sectionNav
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {sectionNav.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] transition ${
            activeSection === section.id ? "text-accent-primary" : "text-muted"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full transition ${
              activeSection === section.id ? "bg-accent-primary shadow-pulse" : "bg-border"
            }`}
          />
          <span className="opacity-0 transition group-hover:opacity-100">{section.label}</span>
        </a>
      ))}
    </div>
  );
}
