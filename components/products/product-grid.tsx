import { products } from "@/content/products";
import { ProductCard } from "./product-card";

export function ProductGrid() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
