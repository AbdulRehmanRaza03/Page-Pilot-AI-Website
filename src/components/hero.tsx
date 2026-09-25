import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Inbox,
  Users,
  Workflow,
  BarChart3,
  Bot,
} from "lucide-react";
import { TiltCard } from "./tilt-card";
import { RotatingWord } from "./rotating-word";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Animated gradient mesh + Aurora + blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="gradient-mesh absolute inset-0 opacity-20" />
        <div className="aurora absolute -inset-x-20 top-0 h-[500px] opacity-30" />
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl animate-blob" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl animate-blob [animation-delay:2s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 text-center sm:pt-24">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
          <Sparkles className="h-4 w-4" />
          AI-powered business assistant built-in
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Turn every Facebook conversation into{" "}
          <RotatingWord />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          PagePilot unifies all your Facebook Pages into one workspace — with a
          unified inbox, CRM, campaigns, automations, and an AI assistant that
          works in plain English.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://page-pilot-ai-theta.vercel.app/login"
            className="shine group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-3d transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Get started free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800"
          >
            See how it works
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          No credit card required · Free 14-day trial
        </p>

        {/* Real dashboard screenshot */}
        <div className="perspective-2000 mx-auto mt-20 max-w-5xl">
          <TiltCard maxTilt={6} className="rounded-3xl">
            <div className="card-3d relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-3d-lg">
              <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-25 blur-2xl" />

              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 hidden items-center gap-2 rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-400 sm:flex">
                  <Bot className="h-3.5 w-3.5 text-indigo-400" />
                  app.pagepilot.com/dashboard
                </div>
              </div>

              <Image
                src="/dashboard.webp"
                alt="PagePilot dashboard"
                width={1200}
                height={589}
                priority
                className="block h-auto w-full"
              />
            </div>
          </TiltCard>
        </div>

        {/* Feature floating cards */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Inbox, label: "Unified Inbox", delay: "0s" },
            { icon: Users, label: "Lead CRM", delay: "0.5s" },
            { icon: Workflow, label: "Automations", delay: "1s" },
            { icon: BarChart3, label: "Analytics", delay: "1.5s" },
          ].map((f) => (
            <div
              key={f.label}
              className="animate-float flex flex-col items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: f.delay }}
            >
              <f.icon className="h-6 w-6 text-indigo-400" />
              <span className="text-sm font-medium text-white">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
