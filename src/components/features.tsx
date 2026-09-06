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
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Everything you need to run your pages
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          One platform that replaces the messy mix of inboxes, spreadsheets,
          and manual follow-ups.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-brand-600">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-navy">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
