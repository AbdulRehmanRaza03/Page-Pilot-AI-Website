import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "For individuals getting started.",
    features: [
      "1 Facebook Page",
      "Unified inbox",
      "Basic automation",
      "Up to 100 conversations/mo",
      "Community support",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    desc: "For growing businesses and teams.",
    features: [
      "Up to 10 Facebook Pages",
      "Unlimited conversations",
      "Advanced automations",
      "Campaigns & scheduling",
      "AI assistant (limited)",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    desc: "For agencies and multi-brand teams.",
    features: [
      "Unlimited Pages",
      "Unlimited team members",
      "Full AI assistant",
      "Custom campaigns",
      "Advanced analytics & export",
      "API & webhooks",
      "Dedicated support",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Start free, upgrade when you grow. No hidden fees.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="h-full">
              <div
                className={`relative h-full rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-indigo-500/60 bg-slate-900 shadow-3d ring-1 ring-indigo-500/50"
                    : "border-slate-800 bg-slate-900/60"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://page-pilot-ai-theta.vercel.app/login"
                  className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                    plan.featured
                      ? "shine bg-indigo-600 text-white hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-glow"
                      : "border border-slate-700 text-white hover:bg-slate-800 hover:-translate-y-0.5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
