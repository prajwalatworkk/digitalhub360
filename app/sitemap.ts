import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { products } from "@/content/products";

const BASE_URL = "https://digitalhub360.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/products", "/knowledge-hub", "/roi-lab", "/contact"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date()
  }));

  const productRoutes = products
    .filter((product) => product.status === "live")
    .map((product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      lastModified: new Date()
    }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${BASE_URL}/knowledge-hub/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}
