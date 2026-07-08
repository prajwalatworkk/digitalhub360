import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/knowledge-hub/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post || (post.draft && process.env.NODE_ENV === "production")) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post!.title,
    description: post!.description,
    datePublished: post!.date,
    author: { "@type": "Organization", name: "DigitalHub360" }
  };

  return (
    <main className="px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <Link href="/knowledge-hub" className="text-xs uppercase tracking-[0.3em] text-muted hover:text-accent-primary">
          ← Knowledge Hub
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
          <time dateTime={post!.date}>
            {new Date(post!.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
          </time>
          <span>·</span>
          <span>{post!.readingTime}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">{post!.title}</h1>
        <p className="mt-4 text-lg text-muted">{post!.description}</p>
        <div className="mt-8">
          <MDXRemote
            source={post!.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
