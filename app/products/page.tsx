import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/product-grid";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "In-house SaaS products built by DigitalHub360 — SheetPilot, EmbedCMS, Weflux, and ShipTrack."
};

export default function ProductsPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Built In-House</p>
          <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">Our Products</h1>
          <p className="mt-4 text-muted">
            Beyond agency work, we build and run our own SaaS products — battle-tested on real businesses first.
          </p>
        </div>
        <ProductGrid />
      </div>
    </main>
  );
}
