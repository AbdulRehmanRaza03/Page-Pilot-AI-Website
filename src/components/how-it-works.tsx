import { Globe, MessageSquare, Rocket } from "lucide-react";
import { Reveal } from "./reveal";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Connect your Pages",
    desc: "Connect one or many Facebook Pages with secure OAuth — no technical setup required.",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Automate & engage",
    desc: "Unify your inbox, capture leads, and let automations handle repetitive conversations.",
    accent: "from-indigo-500 to-purple-600",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Grow on autopilot",
    desc: "Launch campaigns, follow up with the AI assistant, and watch your pipeline fill up.",
    accent: "from-purple-500 to-fuchsia-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-900/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three simple steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Three simple steps to turn your Facebook presence into a growth
            engine.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120} className="h-full">
              <div className="relative h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50">
                <span className="pointer-events-none absolute right-6 top-4 text-6xl font-bold text-slate-800">
                  {s.step}
                </span>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-lg`}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
