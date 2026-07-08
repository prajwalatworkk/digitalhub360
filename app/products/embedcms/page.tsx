import type { Metadata } from "next";
import { embedcms } from "@/content/products/embedcms";
import { ProductDetail } from "@/components/products/product-detail";

export const metadata: Metadata = {
  title: embedcms.name,
  description: embedcms.description
};

export default function EmbedCmsPage() {
  return <ProductDetail product={embedcms} />;
}
