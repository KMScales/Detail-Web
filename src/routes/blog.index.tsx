import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog - DetailWeb" },
      { name: "description", content: "Insights on websites, SEO, and digital growth for small businesses in Paphos and beyond." },
      { property: "og:title", content: "Blog - DetailWeb" },
      { property: "og:description", content: "Insights on websites, SEO, and digital growth for small businesses." },
      { property: "og:url", content: "https://detailweb.org/blog" },
    ],
    links: [{ rel: "canonical", href: "https://detailweb.org/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24">
        <p className="label">Blog</p>
        <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-balance">
          Insights on <em className="italic font-light">websites, SEO &amp; growth.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-24">
        <div className="border-t border-border">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-border py-12 grid gap-6 md:grid-cols-12 items-start"
            >
              <div className="md:col-span-2">
                <p className="label">{post.date}</p>
              </div>
              <div className="md:col-span-7">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="font-display text-2xl md:text-3xl hover:text-accent transition-colors"
                >
                  {post.title}
                </Link>
                <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
                  {post.excerpt}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="inline-flex items-center text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="h-32" />
    </SiteShell>
  );
}
