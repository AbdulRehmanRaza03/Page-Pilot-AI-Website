import Link from "next/link";
import { ArrowRight, Sparkles, Inbox, Users, Workflow, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
          <Sparkles className="h-4 w-4" />
          AI-powered business assistant built-in
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-6xl">
          Turn every Facebook conversation into{" "}
          <span className="gradient-text">growth</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          PagePilot unifies all your Facebook Pages into one workspace — with a
          unified inbox, CRM, campaigns, automations, and an AI assistant that
          works in plain English.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-brand-700 hover:shadow-xl"
          >
            Get started free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-navy transition-all hover:bg-slate-50"
          >
            See how it works
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          No credit card required · Free 14-day trial
        </p>

        {/* Feature floating cards */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Inbox, label: "Unified Inbox" },
            { icon: Users, label: "Lead CRM" },
            { icon: Workflow, label: "Automations" },
            { icon: BarChart3, label: "Analytics" },
          ].map((f) => (
            <div
              key={f.label}
              className="animate-float flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              <f.icon className="h-6 w-6 text-brand-600" />
              <span className="text-sm font-medium text-navy">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
