import type { Product } from "./types";

export const embedcms: Product = {
  slug: "embedcms",
  name: "EmbedCMS",
  tagline: "A content platform for websites you don't want to rebuild",
  domain: "cms.serves.in",
  logo: "/logos/products/embedcms.png",
  description:
    "EmbedCMS is a headless CMS you drop into an existing site with a single embed snippet — like Google Tag Manager, but for content. Publish once, and it appears live on your site instantly, no rebuild or plugin required.",
  features: [
    "Single embed snippet install — one script tag and one div",
    "Works with WordPress, Webflow, and fully custom sites",
    "No plugins or site rebuilds required",
    "Instant publishing — content goes live the moment you hit publish",
    "Own your content — export it as a standalone site at any time"
  ],
  audience: "Website owners and content teams managing existing sites who don't want to rebuild them to add a blog or resource hub.",
  status: "live"
};
