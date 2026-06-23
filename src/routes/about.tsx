import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - DetailWeb" },
      { name: "description", content: "DetailWeb is a one-person studio in Paphos, Cyprus, building websites and handling digital growth for small businesses." },
      { property: "og:title", content: "About - DetailWeb" },
      { property: "og:description", content: "The story behind DetailWeb." },
      { property: "og:url", content: "https://detailweb.org/about" },
    ],
    links: [{ rel: "canonical", href: "https://detailweb.org/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24">
        <p className="label">About</p>
        <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-balance italic font-light">
          A focused studio. <span className="not-italic font-normal">Helping small businesses show up online.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-24 grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full rounded-sm border border-border bg-secondary/40 overflow-hidden grain">
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <p className="label">Est. 2026</p>
                <p className="label">Paphos · CY</p>
              </div>
              <div className="flex flex-col items-center justify-center px-2 gap-3 text-center">
                <span className="font-display font-light text-ink leading-none select-none text-[clamp(2.5rem,6.5vw,4.5rem)] tracking-[-0.03em]">
                  Detail<span className="italic text-accent">Web</span>
                </span>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-border" />
                  <span className="label">Studio</span>
                  <span className="h-px w-8 bg-border" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between border-t border-border pt-3">
                  <span className="label">Founder</span>
                  <span className="font-display text-lg">Karim Maalouf</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="label">Focus</span>
                  <span className="font-display italic text-right leading-tight whitespace-pre-line">Online shop{"\n"}Physical product{"\n"}Service</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="label">From</span>
                  <span className="font-display">€500<span className="text-accent"> upfront</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-pretty">
          <p>
            I'm Karim, the studio behind DetailWeb. I build websites for businesses and handle the work that helps people actually find them. The pattern I keep seeing is impossible to ignore: <em className="italic">great businesses, weak websites, lost customers.</em>
          </p>
          <p className="text-muted-foreground">
            So I put together a simple offer: a website that actually works, plus the services that help people find it - SEO, Google Business Profile, social content and a monthly check-up.
          </p>
          <div className="text-muted-foreground space-y-4">
            <p className="font-display text-xl not-italic font-bold">Our Services</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Website build — €500</li>
              <li>SEO and GEO optimisation — €200</li>
              <li>One month of daily social media content — €200</li>
              <li>Professional photo shoot — €50</li>
            </ul>
            <p>Buy any service individually, or get everything in one starter package for €950.</p>
            <p className="font-display text-xl not-italic font-bold pt-2">After Launch</p>
            <p>Monthly support plans starting at €250 or €300, depending on your needs. Both include website updates and changes.</p>
            <p className="text-sm">Note: If you choose the website only, you handle your own marketing.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="font-display text-4xl">€500</p>
              <p className="label mt-2">Website build</p>
            </div>
            <div>
              <p className="font-display text-4xl">2–5</p>
              <p className="label mt-2">Days to ship</p>
            </div>
            <div>
              <p className="font-display text-4xl">€950</p>
              <p className="label mt-2">Full starter pack</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteShell>
  );
}
