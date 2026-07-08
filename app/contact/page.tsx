import type { Metadata } from "next";
import { ContactSection } from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to DigitalHub360 — Bangalore digital marketing agency. Book a free strategy session for SEO, ads, web, or AI video."
};

export default function ContactPage() {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-6 pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Let&apos;s Talk Growth</p>
        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-muted">
          Tell us your goal — we&apos;ll map the fastest path to revenue and get back within one
          working day.
        </p>
      </div>
      <ContactSection />
    </main>
  );
}
