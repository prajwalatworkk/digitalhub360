import type { Metadata } from "next";
import { BranchCard } from "@/components/branches/branch-card";
import { ContactSection } from "@/components/home/contact-section";
import { branches } from "@/content/branches";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "Visit DigitalHub360 in Bengaluru — our BTM 1st Stage head office and HSR Layout branch. Call, email, or book a free strategy session at the location nearest you.",
  alternates: { canonical: "/branches" }
};

// LocalBusiness entries help Google associate the brand with both addresses.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": branches.map((branch) => ({
    "@type": "LocalBusiness",
    "@id": `https://digitalhub360.in/branches#${branch.slug}`,
    name: `DigitalHub360 — ${branch.name}`,
    description:
      "Digital marketing agency in Bengaluru offering SEO, Google and Meta ads, social media marketing, website development, and AI video production.",
    url: "https://digitalhub360.in/branches",
    telephone: branch.phone,
    email: branch.email,
    image: "https://digitalhub360.in/logo-transparent.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.addressLines.join(", ") || branch.locality,
      addressLocality: branch.locality,
      addressRegion: branch.state,
      ...(branch.postalCode ? { postalCode: branch.postalCode } : {}),
      addressCountry: "IN"
    },
    areaServed: "Bengaluru, Karnataka, India"
  }))
};

export default function BranchesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="px-6 pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Visit Us</p>
          <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">Our Branches</h1>
          <p className="mt-4 text-muted">
            Two offices in Bengaluru. Walk in, call, or send an enquiry to the branch nearest you —
            we respond within one working day.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {branches.map((branch, index) => (
            <BranchCard key={branch.slug} branch={branch} index={index} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-5xl text-center text-xs text-muted">
          Prefer email? Write to{" "}
          <a href="mailto:info@digitalhub360.in" className="text-accent-primary hover:underline">
            info@digitalhub360.in
          </a>{" "}
          and we&apos;ll route your enquiry to the right team.
        </p>
      </section>

      <ContactSection />
    </main>
  );
}
