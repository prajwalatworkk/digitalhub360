import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products/types";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/products" className="text-xs uppercase tracking-[0.3em] text-muted hover:text-accent-primary">
          ← All products
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl text-foreground sm:text-5xl">{product.name}</h1>
            <p className="mt-2 text-lg text-accent-primary">{product.tagline}</p>
          </div>
          <a
            href={`https://${product.domain}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Visit {product.domain} <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="mt-8 max-w-2xl text-lg text-muted">{product.description}</p>

        {product.features.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-muted">What it does</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="glass rounded-2xl px-5 py-4 text-sm text-foreground/90">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.audience && (
          <div className="mt-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-muted">Built for</h2>
            <p className="mt-3 text-muted">{product.audience}</p>
          </div>
        )}

        {product.pricing && product.pricing.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xs uppercase tracking-[0.4em] text-muted">Pricing</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.pricing.map((tier) => (
                <div key={tier.plan} className="rounded-2xl border border-border bg-surface px-5 py-4">
                  <p className="text-sm font-semibold text-foreground">{tier.plan}</p>
                  <p className="mt-1 text-lg text-accent-primary">{tier.price}</p>
                  {tier.note && <p className="mt-1 text-xs text-muted">{tier.note}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 rounded-3xl border border-border bg-surface p-8 text-center">
          <p className="text-muted">Want this built or customized for your business?</p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Talk to DigitalHub360
          </Link>
        </div>
      </div>
    </main>
  );
}
