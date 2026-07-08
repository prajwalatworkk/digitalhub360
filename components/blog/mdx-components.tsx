import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

function slugify(text: ReactNode): string {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const mdxComponents: MDXComponents = {
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => {
    const id = slugify(children);
    return (
      <h2 id={id} className="mt-10 scroll-mt-28 font-display text-2xl text-foreground">
        {children}
      </h2>
    );
  },
  h3: ({ children }: ComponentPropsWithoutRef<"h3">) => {
    const id = slugify(children);
    return (
      <h3 id={id} className="mt-8 scroll-mt-28 font-display text-xl text-foreground">
        {children}
      </h3>
    );
  },
  p: ({ children }: ComponentPropsWithoutRef<"p">) => <p className="mt-4 leading-relaxed text-muted">{children}</p>,
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">{children}</ul>,
  ol: ({ children }: ComponentPropsWithoutRef<"ol">) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted">{children}</ol>,
  li: ({ children }: ComponentPropsWithoutRef<"li">) => <li>{children}</li>,
  table: ({ children }: ComponentPropsWithoutRef<"table">) => (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-border bg-surface px-4 py-3 text-xs uppercase tracking-[0.2em] text-muted">{children}</th>
  ),
  td: ({ children }: ComponentPropsWithoutRef<"td">) => <td className="border-b border-border px-4 py-3 text-foreground/90">{children}</td>,
  a: ({ href, children }: ComponentPropsWithoutRef<"a">) => (
    <a href={href} className="text-accent-primary underline underline-offset-4">
      {children}
    </a>
  ),
  Callout: ({ children }: { children: ReactNode }) => (
    <div className="glass mt-6 rounded-2xl border-l-4 border-accent-primary px-5 py-4 text-foreground/90">{children}</div>
  )
};
