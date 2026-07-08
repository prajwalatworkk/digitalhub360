import type { Metadata } from "next";
import { ServicesGrid } from "@/components/home/services-grid";
import { QuickPulse } from "@/components/home/quick-pulse";
import { ContactSection } from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing services in Bangalore — SEO, performance ads, website & app development, social media, AI video creation, automation, and analytics."
};

export default function ServicesPage() {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-6 pt-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">What We Do</p>
        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">Services</h1>
        <p className="mt-4 text-muted">
          One team for everything growth — strategy, web, SEO, ads, video, and automation, engineered
          to compound each other.
        </p>
      </div>
      <ServicesGrid />
      <QuickPulse />
      <ContactSection />
    </main>
  );
}
