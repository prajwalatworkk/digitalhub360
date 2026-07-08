export type AdShowcaseItem = {
  id: string;
  brand: string;
  streamUrl?: string;
  posterUrl?: string;
  aspect?: "9/16" | "16/9";
};

// Self-hosted clips (compressed 540p/640p H.264), lazy-loaded on scroll.
export const adShowcase: AdShowcaseItem[] = [
  {
    id: "astro-siddhi",
    brand: "Astro Siddhi",
    streamUrl: "/videos/astro-siddhi.mp4",
    posterUrl: "/videos/posters/astro-siddhi.jpg",
    aspect: "9/16"
  },
  {
    id: "eduvyapar",
    brand: "EduVyapar",
    streamUrl: "/videos/edupyar.mp4",
    posterUrl: "/videos/posters/edupyar.jpg",
    aspect: "9/16"
  },
  {
    id: "jr-enterprises",
    brand: "JR Enterprises",
    streamUrl: "/videos/jr-enterprises.mp4",
    posterUrl: "/videos/posters/jr-enterprises.jpg",
    aspect: "9/16"
  },
  {
    id: "pets-unlimited",
    brand: "Pets Unlimited",
    streamUrl: "/videos/pets-unlimited.mp4",
    posterUrl: "/videos/posters/pets-unlimited.jpg",
    aspect: "9/16"
  },
  {
    id: "boultar",
    brand: "Boultar",
    streamUrl: "/videos/boultar.mp4",
    posterUrl: "/videos/posters/boultar.jpg",
    aspect: "9/16"
  }
];
