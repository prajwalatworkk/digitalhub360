import Link from "next/link";

export interface CMSPost {
  id: string;
  title: string;
  slug: string;
  description?: string;
  excerpt?: string;
  summary?: string;
  content?: string;
  body?: string;
  html?: string;
  publishedAt?: string;
  createdAt?: string;
  date?: string;
  tags?: string[] | string;
  coverImage?: string;
  image?: string;
  ogImage?: string;
  readingTime?: string | number;
}

export interface CMSSite {
  name: string;
  themeColor?: string;
}

export interface CMSBlogIndexProps {
  site: CMSSite;
  posts: CMSPost[];
  contentType?: string;
  basePath?: string;
}

export function CMSBlogIndex({ site, posts = [], basePath = "/knowledge-hub" }: CMSBlogIndexProps) {
  // Normalize posts to ensure consistent schema across CMS variations
  const normalizedPosts = (posts || []).map((post) => {
    const rawDate = post.date || post.publishedAt || post.createdAt || new Date().toISOString();
    const formattedDate = new Date(rawDate).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

    let tagsArray: string[] = [];
    if (Array.isArray(post.tags)) {
      tagsArray = post.tags;
    } else if (typeof post.tags === "string" && post.tags) {
      tagsArray = post.tags.split(",").map((t) => t.trim());
    }

    const description = post.description || post.excerpt || post.summary || "No description provided.";
    const coverImage = post.coverImage || post.image || post.ogImage;

    return {
      ...post,
      formattedDate,
      tagsArray,
      description,
      coverImage
    };
  });

  return (
    <main className="px-6 py-24 min-h-screen relative overflow-hidden">
      {/* Background ambient orbs matching existing theme */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="ambient-orb ambient-orb-navy" />
        <div className="ambient-orb ambient-orb-red" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-primary font-semibold">
            {site?.name || "DigitalHub360"} Knowledge Hub
          </p>
          <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl font-bold tracking-tight">
            Playbooks &amp; Field Notes
          </h1>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Practical marketing, SEO, and growth breakdowns — direct from our CMS.
          </p>
        </div>

        {normalizedPosts.length === 0 ? (
          <div className="glass rounded-3xl p-12 text-center border border-border">
            <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 012 2v8a2 2 0 01-2 2h-3M5 18h14M5 14h14M5 10h14"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl text-foreground mb-3">No articles published yet</h3>
            <p className="text-muted max-w-md mx-auto">
              Our content team is preparing updates and articles for you. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {normalizedPosts.map((post) => (
              <Link
                key={post.id || post.slug}
                href={`${basePath}/${post.slug}`}
                className="group glass block rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-accent-primary/30"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {post.coverImage && (
                    <div className="w-full md:w-1/3 aspect-[16/10] relative rounded-2xl overflow-hidden border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                      <time dateTime={post.date || post.publishedAt || post.createdAt}>{post.formattedDate}</time>
                      {post.readingTime && (
                        <>
                          <span>·</span>
                          <span>{post.readingTime} read</span>
                        </>
                      )}
                    </div>
                    <h2 className="mt-3 font-display text-2xl text-foreground group-hover:text-accent-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted leading-relaxed">{post.description}</p>
                    {post.tagsArray.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.tagsArray.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-accent-primary bg-accent-primary/5 font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
