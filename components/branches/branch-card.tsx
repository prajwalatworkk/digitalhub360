"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageSquare, Navigation, Phone } from "lucide-react";
import { useLeadModal } from "@/components/layout/lead-modal";
import { telHref, type Branch } from "@/content/branches";

export function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const { open } = useLeadModal();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass flex h-full flex-col rounded-3xl p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl text-foreground">{branch.name}</h2>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-accent-primary">
            {branch.label}
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 text-accent-primary">
          <MapPin size={20} />
        </span>
      </div>

      <address className="mt-6 not-italic text-sm leading-relaxed text-muted">
        {branch.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block">
          {branch.locality}, {branch.city}
        </span>
        <span className="block">
          {branch.state}
          {branch.postalCode ? ` ${branch.postalCode}` : ""}, {branch.country}
        </span>
      </address>

      <ul className="mt-6 space-y-3 text-sm">
        <li>
          <a
            href={telHref(branch.phone)}
            className="flex items-center gap-3 text-foreground/85 transition hover:text-accent-primary"
          >
            <Phone size={16} className="shrink-0 text-accent-primary" />
            {branch.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${branch.email}`}
            className="flex items-center gap-3 text-foreground/85 transition hover:text-accent-primary"
          >
            <Mail size={16} className="shrink-0 text-accent-primary" />
            {branch.email}
          </a>
        </li>
        {branch.hours && (
          <li className="flex items-center gap-3 text-foreground/85">
            <Clock size={16} className="shrink-0 text-accent-primary" />
            {branch.hours}
          </li>
        )}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
        <button
          type="button"
          onClick={() => open(undefined, branch.name)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
        >
          <MessageSquare size={16} /> Enquire here
        </button>
        {branch.mapsUrl && (
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent-primary hover:text-accent-primary"
          >
            <Navigation size={16} /> Directions
          </a>
        )}
      </div>
    </motion.article>
  );
}
