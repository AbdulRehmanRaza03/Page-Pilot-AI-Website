import { Globe, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Connect your Pages",
    desc: "Connect one or many Facebook Pages with secure OAuth — no technical setup required.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Automate & engage",
    desc: "Unify your inbox, capture leads, and let automations handle repetitive conversations.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Grow on autopilot",
    desc: "Launch campaigns, follow up with the AI assistant, and watch your pipeline fill up.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Three simple steps to turn your Facebook presence into a growth engine.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <span className="text-4xl font-bold text-indigo-100">{s.step}</span>
                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-indigo-500/25">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
