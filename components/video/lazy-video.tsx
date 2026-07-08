"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { AdShowcaseItem } from "@/content/ads/showcase";

export function LazyVideo({ item }: { item: AdShowcaseItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!item.streamUrl || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [item.streamUrl]);

  const aspectClass = item.aspect === "16/9" ? "aspect-video" : "aspect-[9/16]";

  if (!item.streamUrl) {
    return (
      <div
        className={`group relative flex ${aspectClass} mx-auto w-full max-w-[240px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/25 via-accent-tertiary/15 to-accent-secondary/25 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:20px_20px] text-foreground/40" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-glow transition group-hover:scale-110 dark:bg-white/80">
          <Play size={22} className="ml-0.5" />
        </span>
        <span className="relative font-display text-base font-semibold text-foreground">{item.brand}</span>
        <span className="relative rounded-full border border-border bg-background/60 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-muted backdrop-blur">
          AI Ad · Dropping Soon
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className={`group relative mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-border bg-black ${aspectClass}`}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={item.posterUrl}
          src={shouldLoad ? item.streamUrl : undefined}
          preload="none"
          autoPlay
          playsInline
          muted
          loop
        />
        <button
          type="button"
          aria-label={`Play ${item.brand} ad with sound`}
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition group-hover:opacity-100">
            <Play size={18} />
          </span>
        </button>
        <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
          {item.brand}
        </span>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <video
            className={`max-h-[85vh] w-auto rounded-2xl ${aspectClass}`}
            src={item.streamUrl}
            poster={item.posterUrl}
            controls
            autoPlay
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
