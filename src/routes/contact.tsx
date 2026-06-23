import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - DetailWeb" },
      { name: "description", content: "Tell me about your project. I'll reply within 24 hours with a tailored proposal. Website builds from €500." },
      { property: "og:title", content: "Contact - DetailWeb" },
      { property: "og:description", content: "Start a project with DetailWeb." },
      { property: "og:url", content: "https://detailweb.org/contact" },
    ],
    links: [{ rel: "canonical", href: "https://detailweb.org/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "DetailWeb",
          url: "https://detailweb.org/",
          email: "kmscalez@gmail.com",
          telephone: "+357 94 089 314",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Paphos",
            addressCountry: "CY",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24">
        <p className="label">&nbsp;</p>
        <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-balance">
          Tell me about <em className="italic font-light">your business.</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty">
          &nbsp;
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-20 grid gap-16 md:grid-cols-12 items-start">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 space-y-8 border-t border-border pt-10"
        >
          {sent ? (
            <div className="py-16">
              <p className="label text-accent">Received</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Thanks - we'll be in touch within 24 hours.</h2>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Your name" name="name" />
                <Field label="Business name" name="business" />
                <Field label="Email" name="email" type="email" />
                <Field label="Website (if any)" name="site" />
              </div>
              <div>
                <label htmlFor="message" className="label">Tell us about your project</label>
                <textarea id="message" name="message" required rows={5} className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground transition" placeholder="Goals, services you need, timeline, anything you want us to know." />
              </div>
              <button type="submit" className="font-display text-xl italic border-b border-foreground pb-1 hover:text-accent hover:border-accent transition">
                Send brief →
              </button>
            </>
          )}
        </form>

        <aside className="md:col-span-4 md:col-start-9 space-y-10 border-t border-border pt-10">
          <div>
            <p className="label">Email</p>
            <a href="mailto:kmscalez@gmail.com" className="mt-3 block font-display text-2xl hover:text-accent transition break-all">kmscalez@gmail.com</a>
          </div>
          <div>
            <p className="label">Phone</p>
            <a href="tel:+35794089314" className="mt-3 block font-display text-2xl hover:text-accent transition">+357 94 089 314</a>
          </div>
          <div>
            <p className="label">Studio</p>
            <p className="mt-3 font-display text-2xl">Paphos, Cyprus</p>
            <p className="mt-2 text-sm text-muted-foreground">Working worldwide · UTC+2</p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="label">Response time</p>
            <p className="mt-3 font-display text-xl italic">Within 24 hours.</p>
          </div>
        </aside>
      </section>

      <div className="h-32" />
    </SiteShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="label">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground transition"
      />
    </div>
  );
}
