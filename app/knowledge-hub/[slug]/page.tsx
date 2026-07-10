import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  try {
    const res = await fetch(`https://cms.serves.in/api/v1/posts/${slug}?site=pub_0b118e097c041c2fdd4679688170dbb8`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return {};
    const data = await res.json();
    const post = data.post || data;
    if (!post || post.error) return {};

    const title = post.title || "Blog Post";
    const description = post.description || post.excerpt || post.summary || "";
    const image = post.coverImage || post.image || post.ogImage;

    return {
      title,
      description,
      alternates: { canonical: `/knowledge-hub/${slug}` },
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime: post.publishedAt || post.date || post.createdAt,
        images: image ? [{ url: image }] : []
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : []
      }
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const res = await fetch(`https://cms.serves.in/api/v1/posts/${slug}?site=pub_0b118e097c041c2fdd4679688170dbb8`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) notFound();

  const data = await res.json();
  const post = data.post || data;

  if (!post || post.error) {
    notFound();
  }

  const rawDate = post.publishedAt || post.date || post.createdAt;
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    : null;

  let tagsArray: string[] = [];
  if (Array.isArray(post.tags)) {
    tagsArray = post.tags;
  } else if (typeof post.tags === "string" && post.tags) {
    tagsArray = post.tags.split(",").map((t: string) => t.trim());
  }

  const contentHtml = post.content || post.body || post.html || "";
  const coverImage = post.coverImage || post.image || post.ogImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || post.excerpt || post.summary || "",
    datePublished: rawDate,
    author: { "@type": "Organization", name: data.site?.name || "DigitalHub360" },
    image: coverImage ? [coverImage] : []
  };

  return (
    <main className="px-6 py-24 min-h-screen relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="ambient-orb ambient-orb-navy" />
        <div className="ambient-orb ambient-orb-red" />
      </div>

      <article className="mx-auto max-w-3xl relative z-10">
        <Link
          href="/knowledge-hub"
          className="text-xs uppercase tracking-[0.3em] text-muted hover:text-accent-primary transition-colors"
        >
          ← Back to Knowledge Hub
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
          {formattedDate && (
            <>
              <time dateTime={rawDate}>{formattedDate}</time>
              <span>·</span>
            </>
          )}
          {post.readingTime && (
            <>
              <span>{post.readingTime} read</span>
              <span>·</span>
            </>
          )}
          <span>By {post.authorName || data.site?.name || "DigitalHub360"}</span>
        </div>

        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl font-bold tracking-tight">
          {post.title}
        </h1>

        {(post.description || post.excerpt || post.summary) && (
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
            {post.description || post.excerpt || post.summary}
          </p>
        )}

        {tagsArray.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tagsArray.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-accent-primary bg-accent-primary/5 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {coverImage && (
          <div className="mt-8 aspect-[21/9] w-full relative rounded-3xl overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={coverImage} alt={post.title} className="object-cover w-full h-full" />
          </div>
        )}

        <div className="cms-content mt-12 leading-relaxed" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
