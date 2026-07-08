import { adShowcase } from "@/content/ads/showcase";
import { LazyVideo } from "@/components/video/lazy-video";
import { Reveal } from "./reveal";

export function VideoAdShowcase() {
  return (
    <section className="bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">AI Video Ads for Our Clients</h2>
          <p className="mt-3 text-muted">
            In-house studio and creative team — scalable, affordable video production powered by AI.
          </p>
        </Reveal>
        <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:justify-items-center lg:overflow-visible lg:px-0">
          {adShowcase.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.08}
              className="w-[240px] max-w-[72vw] shrink-0 snap-start lg:w-full lg:max-w-none"
            >
              <LazyVideo item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
