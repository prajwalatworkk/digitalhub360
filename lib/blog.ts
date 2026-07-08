import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "blog", "posts");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  ogImage?: string;
  draft?: boolean;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Post = PostSummary & {
  content: string;
};

function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostSummary[] {
  const posts = getAllSlugs().map((slug) => {
    const { data, content } = readPostFile(slug);
    const frontmatter = data as PostFrontmatter;
    return {
      slug,
      ...frontmatter,
      readingTime: readingTime(content).text
    };
  });

  return posts
    .filter((post) => !post.draft || process.env.NODE_ENV !== "production")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const { data, content } = readPostFile(slug);
    const frontmatter = data as PostFrontmatter;
    return {
      slug,
      ...frontmatter,
      readingTime: readingTime(content).text,
      content
    };
  } catch {
    return undefined;
  }
}
