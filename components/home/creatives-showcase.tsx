"use client";

import Image from "next/image";
import { Reveal } from "./reveal";

// Continuously sliding wall of static creatives. Images are auto-discovered
// from /public/creatives at build time (see app/page.tsx) — drop a file in,
// redeploy, and it appears. Two rows drift in opposite directions.

export function CreativesShowcase({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  const mid = Math.ceil(images.length / 2);
  const rows = images.length > 3 ? [images.slice(0, mid), images.slice(mid)] : [images];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Creatives Designed for Our Clients
          </h2>
          <p className="mt-3 text-muted">
            Static ads, posters, and social creatives from our in-house design studio.
          </p>
        </Reveal>
        <div className="space-y-6">
          {rows.map((row, rowIndex) => {
            const track = row.concat(row);
            return (
              <div key={rowIndex} className="marquee marquee-hover-pause">
                <div
                  className="marquee-track items-center"
                  style={{
                    animationDuration: `${Math.max(28, row.length * 9)}s`,
                    animationDirection: rowIndex % 2 === 1 ? "reverse" : "normal"
                  }}
                >
                  {track.map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className="group relative h-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent-primary/50 hover:shadow-glow"
                    >
                      <Image
                        src={`/creatives/${src}`}
                        alt="DigitalHub360 client creative"
                        width={400}
                        height={256}
                        unoptimized
                        className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
