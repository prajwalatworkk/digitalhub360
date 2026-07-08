import { Mail, MapPin, Phone } from "lucide-react";
import { HeroLeadForm } from "./hero-lead-form";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Hire the Best Digital Marketing Agency in Bangalore
          </h2>
          <p className="mt-3 text-muted">
            Get a free strategy session — tell us your goal and we&apos;ll map the fastest path to
            leads, sales, and growth.
          </p>
          <div className="mt-8 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 text-accent-primary">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Email</p>
                <a href="mailto:info@digitalhub360.in" className="text-foreground hover:text-accent-primary">
                  info@digitalhub360.in
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 text-accent-primary">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Phone</p>
                <a href="tel:+917892218476" className="text-foreground hover:text-accent-primary">
                  +91 78922 18476
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 text-accent-primary">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">HQ</p>
                <p className="text-foreground">HSR Layout, Bangalore</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <HeroLeadForm />
        </Reveal>
      </div>
    </section>
  );
}
