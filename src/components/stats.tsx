"use client";

import {
  Inbox,
  Users,
  Bot,
  Zap,
} from "lucide-react";
import { Reveal } from "./reveal";

const benefits = [
  {
    icon: Inbox,
    title: "One unified inbox",
    desc: "Every Facebook Page conversation in a single, real-time workspace.",
  },
  {
    icon: Users,
    title: "Smarter lead capture",
    desc: "Turn casual chats into a structured pipeline you can act on.",
  },
  {
    icon: Bot,
    title: "AI that assists you",
    desc: "Draft, summarize, and follow up — always with your confirmation.",
  },
  {
    icon: Zap,
    title: "Automations on autopilot",
    desc: "Handle repetitive replies and tagging without lifting a finger.",
  },
];

/**
 * A benefit-focused band that highlights what PagePilot does
 * without relying on arbitrary or unverified statistics.
 */
export function StatsSection() {
  return (
    <section className="bg-slate-900/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 100} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
