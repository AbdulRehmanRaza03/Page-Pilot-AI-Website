import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { TiltCard } from "./tilt-card";

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
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-brand-600">
          Pricing
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Start free, upgrade when you grow. No hidden fees.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const card = (
            <div
              className={`relative h-full rounded-2xl border p-8 ${
                plan.featured
                  ? "animate-pulse-glow border-brand-600 bg-white shadow-3d ring-1 ring-brand-600"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  </span>
                  <div className="absolute -inset-0.5 -z-10 rounded-[1.1rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-xl" />
                </>
              )}
              <h3 className="text-lg font-semibold text-navy">{plan.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{plan.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-navy">{plan.price}</span>
                <span className="text-sm text-slate-400">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="https://page-pilot-ai-theta.vercel.app/login"
                className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                  plan.featured
                    ? "shine bg-brand-600 text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-glow"
                    : "border border-slate-300 text-navy hover:bg-slate-50 hover:-translate-y-0.5"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          );

          return plan.featured ? (
            <TiltCard key={plan.name} maxTilt={4} className="h-full">
              {card}
            </TiltCard>
          ) : (
            <div key={plan.name} className="h-full">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
