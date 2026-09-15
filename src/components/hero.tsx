import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Inbox,
  Users,
  Workflow,
  BarChart3,
  Bot,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { TiltCard } from "./tilt-card";

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
          <span className="gradient-text-animated">growth</span>
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

        {/* 3D dashboard mockup */}
        <div className="perspective-2000 mx-auto mt-20 max-w-5xl">
          <div className="[transform-style:preserve-3d] animate-spin-slow" aria-hidden>
            <TiltCard maxTilt={6} className="rounded-3xl">
              <div className="card-3d relative rounded-3xl border border-slate-800 bg-slate-900/90 p-2 shadow-3d-lg backdrop-blur">
                <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-25 blur-2xl" />

              {/* Mock window chrome */}
              <div className="flex items-center gap-2 rounded-2xl bg-slate-800/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 hidden items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-400 shadow-sm sm:flex">
                  <Bot className="h-3.5 w-3.5 text-indigo-400" />
                  app.pagepilot.com/dashboard
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-3">
                {/* Sidebar */}
                <div className="hidden flex-col gap-2 rounded-2xl bg-slate-800/60 p-3 sm:flex">
                  {[
                    { icon: Inbox, label: "Inbox", active: true },
                    { icon: Users, label: "Leads" },
                    { icon: Workflow, label: "Automations" },
                    { icon: BarChart3, label: "Analytics" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                        m.active
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-slate-400"
                      }`}
                    >
                      <m.icon className="h-4 w-4" />
                      {m.label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-1 flex flex-col gap-3 sm:col-span-2">
                  <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-300">
                        Conversations today
                      </p>
                      <p className="text-2xl font-bold text-white">
                        1,284{" "}
                        <span className="align-middle text-xs font-medium text-emerald-400">
                          ↑ 24%
                        </span>
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-white">
                          AI Assistant replied
                        </p>
                        <p className="text-[11px] text-slate-400">
                          &ldquo;Sure! Here are our pricing plans…&rdquo;
                        </p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-white">
                          New lead captured
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Sarah M. · Interested in Pro plan
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                        Hot
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
          </div>
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
