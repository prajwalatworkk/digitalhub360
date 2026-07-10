import type { MetadataRoute } from "next";
import { products } from "@/content/products";

const BASE_URL = "https://digitalhub360.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(
      "https://cms.serves.in/api/v1/posts?site=pub_0b118e097c041c2fdd4679688170dbb8&type=blog",
      {
        next: { revalidate: 3600 }
      }
    );
    if (res.ok) {
      const data = await res.json();
      const posts = data.posts || [];
      postRoutes = posts.map((post: any) => {
        const rawDate = post.date || post.publishedAt || post.createdAt || new Date().toISOString();
        return {
          url: `${BASE_URL}/knowledge-hub/${post.slug}`,
          lastModified: new Date(rawDate)
        };
      });
    }
  } catch (e) {
    console.error("Failed to fetch posts for sitemap", e);
  }

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}
