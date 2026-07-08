import { embedcms } from "./embedcms";
import { sheetpilot } from "./sheetpilot";
import { shiptrack } from "./shiptrack";
import { weflux } from "./weflux";
import type { Product } from "./types";

export const products: Product[] = [weflux, sheetpilot, embedcms, shiptrack];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export type { Product } from "./types";
