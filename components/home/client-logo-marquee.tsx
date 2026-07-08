import Image from "next/image";
import { clients } from "@/content/clients/clients";
import { Reveal } from "./reveal";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((word) => word[0] === word[0]?.toUpperCase())
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function ClientLogoMarquee() {
  const track = clients.concat(clients);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Brands We&apos;ve Grown</h2>
          <p className="mt-3 text-muted">A few of the teams we&apos;ve built revenue systems for.</p>
        </Reveal>
        <div className="marquee marquee-hover-pause">
          <div className="marquee-track items-stretch">
            {track.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex w-52 shrink-0 flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1.5 hover:border-accent-primary/50 hover:shadow-glow"
              >
                <span className="flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-white px-4 py-2">
                  {client.logoPath ? (
                    <Image
                      src={client.logoPath}
                      alt={`${client.name} logo`}
                      width={200}
                      height={96}
                      unoptimized
                      className="max-h-20 w-auto max-w-full object-contain transition duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary font-display text-lg font-semibold text-white">
                      {initials(client.name)}
                    </span>
                  )}
                </span>
                <span className="text-center font-display text-sm font-semibold leading-snug text-foreground">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
