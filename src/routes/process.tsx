import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process - DetailWeb" },
      { name: "description", content: "Discovery, Design, Build, Launch - a focused process for shipping websites and digital growth for small businesses." },
      { property: "og:title", content: "Process - DetailWeb" },
      { property: "og:description", content: "How DetailWeb takes a business from brief to live website." },
      { property: "og:url", content: "https://detailweb.org/process" },
    ],
    links: [{ rel: "canonical", href: "https://detailweb.org/process" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { n: "01", title: "Discovery", time: "Day 1", body: "A 20–30 minute strategy call. We map your services, market and competitors. You leave with a written plan and a fixed quote." },
  { n: "02", title: "Design", time: "Day 1–2", body: "Wireframes then high-fidelity mockups. Previews shared the same day; you approve from your phone in minutes." },
  { n: "03", title: "Build", time: "Day 2–4", body: "Hand-coded site, SEO setup, analytics and a full performance pass. Optional social content and photo shoot are prepared in parallel." },
  { n: "04", title: "Launch & hand-off", time: "Day 5", body: "We push live, stay on standby through launch day, and walk you through everything you need to manage it." },
];

const faqs = [
  { q: "How long does a project take?", a: "Most website builds are ready in 2–5 days from kickoff. Larger custom builds may take a little longer." },
  { q: "What does it cost?", a: "Website build is €500. SEO + GEO optimisation is €200. One month of daily social content is €200. Professional photo shoot is €50. Every service is available separately - you can buy just the website and handle your own marketing, or add services as you need them. Or get the full starter package for €950. After launch, monthly care plans are €250 or €300." },
  { q: "What kind of businesses do you work with?", a: "Small businesses that need a website and ongoing visibility - local services, trades, studios, shops, consultants. If you're not sure, send a brief and I'll tell you honestly if it's a fit." },
  { q: "How many revisions are included?", a: "Unlimited inside the design phase. I don't stop until you'd happily put your name on it." },
  { q: "Who writes the content?", a: "I do. You answer a short questionnaire and I draft headlines, services and FAQs in your voice." },
  { q: "Can you keep maintaining the site after launch?", a: "Yes. The Core care plan (€250/mo) includes rankings monitoring, Google Business Profile updates, review management, 2 blog posts and website updates. The Growth plan (€300/mo) adds 4 blog posts and backlink building. Cancel any time." },
  { q: "What if I already have a site?", a: "Even better. I'll migrate your content and rebuild on the same domain so you avoid downtime." },
];

function ProcessPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24">
        <p className="label">How it works</p>
        <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-balance">
          From first call to launch - <em className="italic font-light">in 2 to 5 days.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-24">
        <ul className="border-t border-border">
          {steps.map((s) => (
            <li key={s.n} className="border-b border-border py-12 grid gap-6 md:grid-cols-12 items-start">
              <span className="label md:col-span-1">{s.n}</span>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 label">{s.time}</p>
              </div>
              <p className="md:col-span-6 text-muted-foreground text-lg leading-relaxed text-pretty">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-10 mt-40">
        <p className="label">FAQ</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">Questions, answered.</h2>
        <div className="mt-12 border-t border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-border py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display text-xl md:text-2xl">{f.q}</span>
                <span className="text-accent text-2xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl text-pretty">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteShell>
  );
}
