import {
  Inbox,
  Users,
  Megaphone,
  Workflow,
  Bot,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Reveal } from "./reveal";

const features = [
  {
    icon: Inbox,
    title: "Unified Inbox",
    desc: "Every conversation from every Facebook Page, in one clean inbox with real-time updates, assignment, and labels.",
  },
  {
    icon: Users,
    title: "Leads & CRM",
    desc: "Automatically capture leads from conversations, score them, and move them through a full pipeline.",
  },
  {
    icon: Megaphone,
    title: "Compliant Campaigns",
    desc: "Send campaigns that respect Meta's policies — with eligibility checking and delivery tracking built in.",
  },
  {
    icon: Workflow,
    title: "Visual Automations",
    desc: "Build trigger → condition → action workflows visually. Automate replies, tagging, and follow-ups.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "A natural-language assistant that searches, summarizes, drafts, and — with confirmation — acts on your behalf.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    desc: "Response times, lead conversion, and campaign performance — all the numbers that matter.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    desc: "Multi-tenant isolation, encrypted tokens, and RBAC. Your data stays yours.",
  },
  {
    icon: Zap,
    title: "Real-time everything",
    desc: "Inbox, messages, and lead updates push to your screen instantly — no refresh needed.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to run your pages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            One platform that replaces the messy mix of inboxes, spreadsheets,
            and manual follow-ups.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80} className="h-full">
              <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
