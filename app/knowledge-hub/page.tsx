import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Practical marketing, SEO, and growth playbooks from the DigitalHub360 team."
};

export default function KnowledgeHubPage() {
  const posts = getAllPosts();

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Knowledge Hub</p>
          <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">Playbooks &amp; Field Notes</h1>
          <p className="mt-4 text-muted">Practical marketing and growth breakdowns — no fluff, just what actually works.</p>
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
