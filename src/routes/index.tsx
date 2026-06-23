import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Marquee } from "@/components/site/Marquee";
import whatIDoAsset from "@/assets/what-i-do.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Websites for Ambitious Businesses" },
      { name: "description", content: "Professional web design for growing businesses. Built to convert, optimized for results. From €500." },
      { property: "og:title", content: "Websites for Ambitious Businesses" },
      { property: "og:description", content: "Professional web design for growing businesses. Built to convert, optimized for results. From €500." },
      { property: "og:url", content: "https://detailweb.org/" },
    ],
    links: [{ rel: "canonical", href: "https://detailweb.org/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DetailWeb",
          url: "https://detailweb.org/",
          description:
            "Professional web design for growing businesses. Built to convert, optimized for results.",
          email: "kmscalez@gmail.com",
          telephone: "+357 94 089 314",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Paphos",
            addressCountry: "CY",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DetailWeb",
          url: "https://detailweb.org/",
        }),
      },
    ],
  }),
  component: HomePage,
});


function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label"
        >
          A web studio · Paphos, Cyprus
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-balance"
        >
          Fast websites that rank locally.{" "}
          <em className="italic font-light">Then we keep you visible.</em>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-12 grid gap-10 md:grid-cols-12 items-end"
        >
          <p className="md:col-span-7 text-lg text-muted-foreground max-w-xl text-pretty">
            I build websites that load fast and rank locally. Then I keep you visible with monthly updates, SEO, Google Business Profile, reviews, and social content. You stay on top of search. Customers find you.
          </p>
          <div className="md:col-span-5 md:text-right">
            <Link to="/contact" className="font-display text-2xl italic border-b border-foreground pb-1 hover:text-accent hover:border-accent transition">
              Start a project →
            </Link>
            <p className="mt-3 label">From €500 upfront</p>
          </div>
        </motion.div>
        </div>
      </section>


      {/* MARQUEE */}
      <section className="mt-32">
        <Marquee />
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-32 grid gap-10 md:grid-cols-5 border-b border-border pb-16">
        {[
          ["€500", "Website build"],
          ["€200", "SEO + GEO"],
          ["€200", "Social content"],
          ["€50", "PHOTOGRAPHY - CYPRUS"],
          ["€950", "Full starter pack"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="font-display text-5xl md:text-6xl">{n}</p>
            <p className="label mt-3">{l}</p>
          </div>
        ))}
      </section>

      {/* MANIFESTO */}
      <section className="relative mx-auto max-w-6xl px-6 lg:px-10 mt-40 grid gap-10 md:grid-cols-12">
        <span className="ornament hidden md:block text-[18rem] -top-32 right-6 leading-none">&amp;</span>
        <p className="label md:col-span-3">Approach</p>
        <div className="md:col-span-9 relative">
          <p className="font-display text-3xl md:text-5xl leading-[1.15] text-balance">
            I don't just build websites. I help small businesses <em className="italic font-light">get found, get chosen and get booked.</em>
          </p>
        </div>
      </section>

      {/* SPLIT */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-40 grid gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-5">
          <img src={whatIDoAsset.url} alt="Designing a website layout on a laptop" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={1200} height={1500} />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="label">What I do</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1] text-balance">
            Websites that convert, content that keeps you visible.
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["01", "Website design", "Custom, hand-built sites tailored to your business"],
              ["02", "SEO + GEO optimisation", "Rank locally and show up where your customers search"],
              ["03", "Social media content", "Daily posts for a month to keep your profiles active"],
              ["04", "Monthly care plans", "Rankings monitoring, GBP updates, reviews & blog posts"],
            ].map(([n, t, s]) => (
              <li key={n} className="py-5 flex items-baseline gap-6">
                <span className="label w-6">{n}</span>
                <div className="flex-1">
                  <p className="font-display text-xl">{t}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/services" className="mt-8 inline-block font-display italic text-lg border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition">
            All services →
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-40">
        <p className="label">Pricing</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1] text-balance">
          Simple Pricing. No Surprises.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="border border-border p-8 rounded-sm">
            <p className="label">One-time</p>
            <p className="mt-4 font-display text-5xl">€500</p>
            <p className="mt-2 text-muted-foreground">Website Build</p>
          </div>
          <div className="border border-border p-8 rounded-sm">
            <p className="label">Ongoing</p>
            <p className="mt-4 font-display text-5xl">€200</p>
            <p className="mt-2 text-muted-foreground">Monthly SEO Management</p>
          </div>
        </div>
        <ul className="mt-12 space-y-3 text-muted-foreground leading-relaxed">
          <li className="flex gap-3"><span className="text-accent">·</span><span>1 blog post per month</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Google Business Profile posting</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Review responses</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Website updates</span></li>
        </ul>
        <div className="mt-12 grid gap-6 md:grid-cols-2 border-t border-border pt-10">
          <div>
            <p className="label">First month</p>
            <p className="mt-2 font-display text-3xl">€700</p>
          </div>
          <div>
            <p className="label">Per year</p>
            <p className="mt-2 font-display text-3xl">€2,900</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteShell>
  );
}
