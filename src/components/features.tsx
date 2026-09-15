import {
  Inbox,
  Users,
  Megaphone,
  Workflow,
  Bot,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { FlipCard } from "./flip-card";

const features = [
  {
    icon: Inbox,
    title: "Unified Inbox",
    desc: "Every conversation from every Facebook Page, in one clean inbox.",
    accent: "from-blue-500 to-indigo-600",
    points: ["Real-time message updates", "Assign & label conversations", "Team collaboration built-in"],
  },
  {
    icon: Users,
    title: "Leads & CRM",
    desc: "Automatically capture leads and move them through a pipeline.",
    accent: "from-indigo-500 to-purple-600",
    points: ["Auto-capture from chats", "Lead scoring & tagging", "Full pipeline view"],
  },
  {
    icon: Megaphone,
    title: "Compliant Campaigns",
    desc: "Send campaigns that respect Meta's policies.",
    accent: "from-purple-500 to-fuchsia-600",
    points: ["Eligibility checking", "Delivery tracking", "Policy-safe by design"],
  },
  {
    icon: Workflow,
    title: "Visual Automations",
    desc: "Build trigger → condition → action workflows visually.",
    accent: "from-fuchsia-500 to-pink-600",
    points: ["No-code builder", "Auto-replies & tagging", "Smart follow-ups"],
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "A natural-language assistant that drafts and summarizes.",
    accent: "from-pink-500 to-rose-600",
    points: ["Works in plain English", "Drafts & summaries", "Acts only after confirmation"],
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    desc: "Response times, conversion, and campaign performance.",
    accent: "from-emerald-500 to-teal-600",
    points: ["Response-time insights", "Lead conversion tracking", "Campaign reporting"],
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    desc: "Multi-tenant isolation and encrypted tokens.",
    accent: "from-sky-500 to-blue-600",
    points: ["Encrypted tokens", "Role-based access", "Your data stays yours"],
  },
  {
    icon: Zap,
    title: "Real-time everything",
    desc: "Messages and leads push to your screen instantly.",
    accent: "from-amber-500 to-orange-600",
    points: ["Instant inbox updates", "Live lead changes", "No refresh needed"],
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="text-center">
        <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-brand-600 dark:bg-slate-800 dark:text-indigo-300">
          Features
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl dark:text-white">
          Everything you need to run your pages
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          One platform that replaces the messy mix of inboxes, spreadsheets,
          and manual follow-ups.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 80} className="h-full">
            <FlipCard
              className="h-full"
              front={
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {f.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-1 pt-4 text-xs font-medium text-brand-600 dark:text-indigo-400">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              }
              back={
                <div
                  className={`flex h-full flex-col rounded-2xl bg-gradient-to-br ${f.accent} p-6 text-white shadow-lg`}
                >
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
