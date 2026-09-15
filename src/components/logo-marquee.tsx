import { Reveal } from "./reveal";

// Placeholder brand names (styled text, no external assets needed).
const brands = [
  "Bloom Agency",
  "Nexa Retail",
  "StudioHub",
  "MarketReach",
  "CloudNest",
  "BrightPath",
  "Vertex Studio",
  "Orbit Labs",
  "Pulse Media",
  "Summit Co.",
];

export function LogoMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="border-y border-slate-800 bg-slate-900/30 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
            Built for modern Facebook teams
          </p>
        </Reveal>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="animate-marquee flex w-max items-center gap-16">
            {loop.map((brand, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-xl font-semibold text-slate-600 transition-colors hover:text-slate-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
