const items = [
  "Paphos",
  "Limassol",
  "Athens",
  "Valletta",
  "Dubai",
  "London",
  "Larnaca",
  "Nicosia",
  "Manchester",
  "Thessaloniki",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-border py-6 overflow-hidden">
      <div className="marquee">
        {loop.map((c, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl italic font-light text-foreground/70 whitespace-nowrap flex items-center gap-16"
          >
            {c}
            <span className="text-accent text-sm not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}