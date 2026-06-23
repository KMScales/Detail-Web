import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - DetailWeb" },
      { name: "description", content: "Website builds, SEO and GEO optimisation, social media content, photo shoots and monthly care plans for small businesses." },
      { property: "og:title", content: "Services - DetailWeb" },
      { property: "og:description", content: "Digital services built for small businesses." },
      { property: "og:url", content: "https://detailweb.org/services" },
    ],
    links: [{ rel: "canonical", href: "https://detailweb.org/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.body,
              provider: { "@type": "Organization", name: "DetailWeb" },
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", title: "Website build", price: "€500", body: "Custom, hand-built site that reflects your business. No templates, no bloat - typography, layout and copy tuned to your brand and services. One flat fee paid up front." },
  { n: "02", title: "SEO and GEO optimisation", price: "€200", body: "Keyword research, on-page optimisation, local schema and Google Business Profile alignment so your site shows up where your customers are searching." },
  { n: "03", title: "Daily social media content", price: "€200 / month", body: "One month of ready-to-post daily content for your social profiles. Formatted for your business, designed to keep you visible and consistent." },
  { n: "04", title: "Professional photo shoot", price: "€50", body: "High-quality photos of your business, products or space to use across your website and social channels." },
  { n: "05", title: "Monthly care plan - Core", price: "€250 / month", body: "Rankings monitoring, Google Business Profile updates, review management, 2 blog posts and website changes/updates. Cancel any time." },
  { n: "06", title: "Monthly care plan - Growth", price: "€300 / month", body: "Everything in the Core plan plus 4 blog posts and website changes/updates. More visibility, more content, more momentum." },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24">
        <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-balance">
          Digital Growth <em className="italic font-light">Services.</em>
        </h1>
        <div className="grid gap-8 md:grid-cols-12 items-end border-t border-border pt-10 mt-10">
          <div className="md:col-span-7">
            <p className="label text-accent">The full starter pack</p>
            <p className="mt-4 font-display text-2xl md:text-3xl leading-[1.2] text-balance">
              Get the website, SEO, one month of social content and a photo shoot for <em className="italic font-light">€950</em> - one time payment.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl">
              Every service is available on its own. You can buy just the website for €500 and handle your own marketing, or add SEO, social content and the photo shoot as you need them.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-sm text-muted-foreground max-w-xs md:ml-auto">
              After launch, optional monthly care plans keep your site and profiles updated for €250–300/month.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-24">
        <ul className="border-t border-border">
          {services.map((s) => (
            <li key={s.n} className="group relative border-b border-border py-12 grid gap-6 md:grid-cols-12 items-start transition-colors hover:bg-secondary/40">
              <span className="font-display text-2xl md:col-span-1 text-accent italic font-light">{s.n}</span>
              <div className="md:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-3 label text-accent">{s.price}</p>
              </div>
              <p className="md:col-span-6 text-muted-foreground text-lg leading-relaxed text-pretty">
                {s.body}
              </p>
              <span aria-hidden className="pointer-events-none hidden md:block absolute right-6 top-6 font-display italic font-light text-foreground/0 group-hover:text-accent/30 transition-colors duration-500 text-2xl">→</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </SiteShell>
  );
}
