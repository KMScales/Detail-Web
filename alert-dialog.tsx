import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-10 mt-40">
      <div className="border-t border-border pt-20 grid gap-10 md:grid-cols-12 items-end">
        <div className="md:col-span-8">
          <p className="label">Next project</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance leading-[1.05]">
            Let's build the website your shop deserves.
          </h2>
        </div>
        <div className="md:col-span-4 md:text-right">
          <p className="text-muted-foreground max-w-sm md:ml-auto">
            Projects start at €500. Tell us about your shop and we'll send a tailored proposal within 24 hours.
          </p>
          <Link to="/contact" className="mt-6 inline-block font-display text-2xl italic border-b border-foreground pb-1 hover:text-accent hover:border-accent transition">
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  );
}
