import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-40">
      <div className="border-t border-border pt-20 grid gap-10 md:grid-cols-12 items-end">
        <div className="md:col-span-8">
          <p className="label">Be the first</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance leading-[1.05]">
            Get Your Website + SEO Starting at €500
          </h2>
        </div>
        <div className="md:col-span-4 md:text-right">
          <p className="text-muted-foreground max-w-sm md:ml-auto">
            Professional websites built in 2 weeks. Monthly SEO + content management for €200/month. More customers. Zero hassle.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-accent transition">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
