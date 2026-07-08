import type { Metadata } from "next";
import { sheetpilot } from "@/content/products/sheetpilot";
import { ProductDetail } from "@/components/products/product-detail";

export const metadata: Metadata = {
  title: sheetpilot.name,
  description: sheetpilot.description
};

export default function SheetPilotPage() {
  return <ProductDetail product={sheetpilot} />;
}
