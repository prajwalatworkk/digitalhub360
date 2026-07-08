export type ProductPricing = {
  plan: string;
  price: string;
  note?: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  domain: string;
  logo?: string;
  badge?: string;
  description: string;
  features: string[];
  audience?: string;
  pricing?: ProductPricing[];
  status: "live" | "content-pending";
};
