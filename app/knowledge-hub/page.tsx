import { notFound } from "next/navigation";
import { CMSBlogIndex } from "@/components/CMSBlog";

export const metadata = {
  title: "Knowledge Hub",
  description: "Practical marketing, SEO, and growth playbooks from the DigitalHub360 team."
};

export default async function KnowledgeHubPage() {
  const res = await fetch(
    "https://cms.serves.in/api/v1/posts?site=pub_0b118e097c041c2fdd4679688170dbb8&type=blog",
    {
      next: { revalidate: 60 }
    }
  );
  if (!res.ok) notFound();
  const data = await res.json();

  return <CMSBlogIndex site={data.site} posts={data.posts} contentType="blog" basePath="/knowledge-hub" />;
}
