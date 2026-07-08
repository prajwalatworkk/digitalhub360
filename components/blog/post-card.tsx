import Link from "next/link";
import type { PostSummary } from "@/lib/blog";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link href={`/knowledge-hub/${post.slug}`} className="glass block rounded-3xl p-8 transition hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
        </time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-3 font-display text-2xl text-foreground">{post.title}</h2>
      <p className="mt-3 text-muted">{post.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent-primary">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
