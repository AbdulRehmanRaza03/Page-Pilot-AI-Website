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
import { TiltCard } from "./tilt-card";
import { Reveal } from "./reveal";

const features = [
  {
    icon: Inbox,
    title: "Unified Inbox",
    desc: "Every conversation from every Facebook Page, in one clean inbox with real-time updates, assignment, and labels.",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Leads & CRM",
    desc: "Automatically capture leads from conversations, score them, and move them through a full pipeline.",
    accent: "from-indigo-500 to-purple-600",
  },
  {
    icon: Megaphone,
    title: "Compliant Campaigns",
    desc: "Send campaigns that respect Meta's policies — with eligibility checking and delivery tracking built in.",
    accent: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: Workflow,
    title: "Visual Automations",
    desc: "Build trigger → condition → action workflows visually. Automate replies, tagging, and follow-ups.",
    accent: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "A natural-language assistant that searches, summarizes, drafts, and — with confirmation — acts on your behalf.",
    accent: "from-pink-500 to-rose-600",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    desc: "Response times, lead conversion, and campaign performance — all the numbers that matter.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    desc: "Multi-tenant isolation, encrypted tokens, and RBAC. Your data stays yours.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Real-time everything",
    desc: "Inbox, messages, and lead updates push to your screen instantly — no refresh needed.",
    accent: "from-amber-500 to-orange-600",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="text-center">
        <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-brand-600">
          Features
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Everything you need to run your pages
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          One platform that replaces the messy mix of inboxes, spreadsheets,
          and manual follow-ups.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 80} className="h-full">
            <TiltCard maxTilt={10} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-indigo-200 hover:shadow-3d">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
