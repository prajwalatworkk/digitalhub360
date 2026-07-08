"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ROI Lab", href: "/roi-lab" },
  { label: "SaaS Products", href: "/products" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Contact Us", href: "/contact" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const resolveHref = (href: string) => (pathname === "/" ? href.replace("/#", "#") : href);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold text-foreground">
          <Image src="/logo-transparent.png" alt="DigitalHub360 logo" width={40} height={40} priority className="rounded-xl p-0.5 dark:bg-white" />
          <span className="hidden sm:inline">DigitalHub360</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} className="transition hover:text-accent-primary" href={resolveHref(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            className="rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2 text-sm font-semibold text-white shadow-glow"
            href={resolveHref("/#contact")}
          >
            Book Strategy
          </Link>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/80"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 text-sm md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-foreground/80 hover:text-accent-primary"
              href={resolveHref(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-3 text-center text-sm font-semibold text-white shadow-glow"
            href={resolveHref("/#contact")}
            onClick={() => setMenuOpen(false)}
          >
            Book Strategy
          </Link>
        </div>
      )}
    </header>
  );
}
