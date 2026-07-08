import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

// Brand icons inlined from Feather Icons (MIT) — this lucide-react version
// ships no social/brand glyphs.
type IconProps = { size?: number; strokeWidth?: number };

const brandSvgProps = (size: number, strokeWidth: number) =>
  ({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }) as const;

function InstagramIcon({ size = 17, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...brandSvgProps(size, strokeWidth)}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 17, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...brandSvgProps(size, strokeWidth)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 17, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...brandSvgProps(size, strokeWidth)}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GoogleBusinessIcon({ size = 17, strokeWidth = 1.8 }: IconProps) {
  return <MapPin size={size} strokeWidth={strokeWidth} />;
}

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/digitalhub360.in", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/digitalhub360in/", Icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/digitalhub360.in", Icon: FacebookIcon },
  { label: "Google Business", href: "https://share.google/qAh7wqPTSbB2eqaed", Icon: GoogleBusinessIcon }
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ROI Lab", href: "/roi-lab" },
  { label: "SaaS Products", href: "/products" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Contact Us", href: "/contact" }
];

const serviceLinks = [
  "SEO Services",
  "Google & Meta Ads",
  "Social Media Marketing",
  "Website Development",
  "AI Video Creation",
  "WhatsApp Marketing"
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40 px-6 pb-8 pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="DigitalHub360 logo"
              width={44}
              height={44}
              className="rounded-xl p-0.5 dark:bg-white"
            />
            <span className="font-display text-lg font-semibold text-foreground">DigitalHub360</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">
            Bangalore&apos;s 360° growth studio — SEO, ads, websites, AI video, and automation engineered
            to turn clicks into customers.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-accent-primary hover:to-accent-secondary hover:text-white hover:shadow-glow"
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-foreground/80 transition hover:text-accent-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((service) => (
              <li key={service}>
                <Link href="/services" className="text-foreground/80 transition hover:text-accent-primary">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Get In Touch</p>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a
                href="mailto:info@digitalhub360.in"
                className="flex items-center gap-3 text-foreground/80 transition hover:text-accent-primary"
              >
                <Mail size={16} className="shrink-0 text-accent-primary" /> info@digitalhub360.in
              </a>
            </li>
            <li>
              <a
                href="tel:+917892218476"
                className="flex items-center gap-3 text-foreground/80 transition hover:text-accent-primary"
              >
                <Phone size={16} className="shrink-0 text-accent-primary" /> +91 78922 18476
              </a>
            </li>
            <li className="flex items-center gap-3 text-foreground/80">
              <MapPin size={16} className="shrink-0 text-accent-primary" /> HSR Layout, Bangalore
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:scale-105"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} DigitalHub360. All rights reserved.</p>
        <p>
          Best Digital Marketing Agency in Bangalore · <span className="text-accent-primary">Made with ❤️ in HSR Layout</span>
        </p>
      </div>
    </footer>
  );
}
