"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Flame, Sparkles } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/content/products/types";

export function ProductCard({ product, defaultOpen = false }: { product: Product; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const isPending = product.status === "content-pending";

  return (
    <motion.div
      layout
      className={`glass overflow-hidden rounded-3xl border transition-colors ${
        product.badge ? "border-accent-secondary/60 shadow-glow" : "border-border"
      }`}
    >
      {product.badge && (
        <div className="flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
          <Flame size={14} /> {product.badge}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-5 px-6 py-6 text-left sm:px-8"
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-soft">
          {product.logo ? (
            <Image
              src={product.logo}
              alt={`${product.name} logo`}
              width={64}
              height={64}
              className="h-full w-auto object-contain"
            />
          ) : (
            <Sparkles size={24} className="text-accent-primary" />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-xl font-semibold text-foreground">{product.name}</span>
            <span className="rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted">
              {product.domain}
            </span>
          </span>
          <span className="mt-1 block text-sm text-accent-primary">{product.tagline}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-border px-6 pb-8 pt-5 sm:px-8">
              <p className="text-sm leading-relaxed text-muted">{product.description}</p>

              {product.features.length > 0 && (
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <Sparkles size={14} className="mt-1 shrink-0 text-accent-secondary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              )}

              {product.pricing && product.pricing.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {product.pricing.map((tier) => (
                    <div key={tier.plan} className="rounded-2xl border border-border bg-background/40 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{tier.plan}</p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">{tier.price}</p>
                      {tier.note && <p className="mt-0.5 text-xs text-muted">{tier.note}</p>}
                    </div>
                  ))}
                </div>
              )}

              {isPending && (
                <p className="mt-4 text-sm text-muted">
                  Full details coming soon — visit the live product site in the meantime.
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-5">
                {!isPending && product.features.length > 0 && (
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-accent-primary"
                  >
                    Learn more <ArrowUpRight size={14} />
                  </Link>
                )}
                <a
                  href={`https://${product.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:scale-[1.03]"
                >
                  Visit {product.domain} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
