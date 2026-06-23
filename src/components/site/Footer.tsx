import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">DetailWeb<span className="text-accent">.</span></p>
          <p className="mt-4 max-w-sm text-muted-foreground text-sm leading-relaxed">
            A small studio building websites and handling digital growth for small businesses. Paphos, Cyprus - working worldwide.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="label">Studio</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/process" className="hover:text-accent">Process</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="label">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:kmscalez@gmail.com" className="hover:text-accent">kmscalez@gmail.com</a></li>
            <li><a href="tel:+35794089314" className="hover:text-accent">+357 94 089 314</a></li>
            <li className="text-muted-foreground">Paphos, Cyprus</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-6 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DetailWeb - Karim Maalouf</p>
          <p>Crafted in Paphos, Cyprus</p>
        </div>
      </div>
    </footer>
  );
}
