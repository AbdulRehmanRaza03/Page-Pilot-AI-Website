import { Globe, MessageSquare, Rocket } from "lucide-react";
import { TiltCard } from "./tilt-card";

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
    <section id="how-it-works" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-brand-600 shadow-sm">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Three simple steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Three simple steps to turn your Facebook presence into a growth engine.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <TiltCard key={s.step} maxTilt={8} className="h-full">
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-3d">
                <span className="pointer-events-none absolute right-6 top-4 text-6xl font-black text-slate-100/80">
                  {s.step}
                </span>
                <div
                  className={`mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110`}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.desc}
                </p>

                {i < steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 md:block">
                    <div className="h-0.5 w-6 bg-gradient-to-r from-indigo-300 to-transparent" />
                  </div>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
