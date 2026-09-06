"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How many Facebook Pages can I connect?",
    a: "The Starter plan includes 1 Page, Pro supports up to 10, and Business supports unlimited Pages. Connect and switch between them all from one dashboard.",
  },
  {
    q: "Is PagePilot compliant with Meta's policies?",
    a: "Yes. PagePilot respects Meta's messaging windows, message types, and tags. We never bypass restrictions or enable spam. If a message can't be sent, we tell you why.",
  },
  {
    q: "Does the AI assistant work automatically?",
    a: "The AI assistant reads and drafts for you, and only performs external actions (like sending messages) after your explicit confirmation. You stay in control.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. You can start on the free Starter plan and upgrade when you're ready. The Pro plan also includes a free 14-day trial.",
  },
  {
    q: "Can my team collaborate?",
    a: "Yes. Add unlimited team members (on Business), assign conversations, set roles and permissions, and work together in real time.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white">
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-navy">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
