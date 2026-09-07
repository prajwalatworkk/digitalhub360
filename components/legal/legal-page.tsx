import type { ReactNode } from "react";
import { formatAddress, primaryBranch } from "@/content/branches";

// Shared shell for the legal pages (privacy, terms, data deletion).
// Long-form text, so readability wins over decoration: narrow measure,
// generous leading, and muted body copy against the theme background.

export function LegalPage({
  title,
  intro,
  lastUpdated,
  children
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="px-6 pb-24 pt-16">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-border pb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Legal</p>
          <h1 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">{title}</h1>
          <p className="mt-4 text-muted">{intro}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
            Last updated: {lastUpdated}
          </p>
        </header>
        <div className="mt-10 space-y-10">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl text-foreground sm:text-2xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalContactCard() {
  return (
    <div className="glass rounded-2xl p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Reach us</p>
      <ul className="mt-4 space-y-2 text-sm text-foreground">
        <li>
          Email:{" "}
          <a href="mailto:info@digitalhub360.in" className="text-accent-primary hover:underline">
            info@digitalhub360.in
          </a>
        </li>
        <li>
          Phone:{" "}
          <a href="tel:+917892218476" className="text-accent-primary hover:underline">
            +91 78922 18476
          </a>
        </li>
        <li>Address: {formatAddress(primaryBranch)}, India</li>
      </ul>
    </div>
  );
}
