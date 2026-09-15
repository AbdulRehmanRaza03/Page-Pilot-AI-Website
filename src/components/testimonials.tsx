"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "We used to juggle three inboxes and a spreadsheet. Now every conversation, lead, and follow-up lives in one place — it genuinely changed how our team works.",
    name: "Sarah Mitchell",
    role: "Marketing Lead",
    company: "Bloom Agency",
    initials: "SM",
    color: "from-blue-500 to-indigo-600",
  },
  {
    quote:
      "The AI assistant drafts replies in plain English and only acts after I approve. It handles the busywork while I keep full control of the conversation.",
    name: "James Okafor",
    role: "Founder",
    company: "Nexa Retail",
    initials: "JO",
    color: "from-indigo-500 to-purple-600",
  },
  {
    quote:
      "Running multiple client pages was getting out of hand. PagePilot's unified inbox and automations saved us a huge amount of time every single week.",
    name: "Elena Rodriguez",
    role: "Operations Director",
    company: "StudioHub",
    initials: "ER",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    quote:
      "Setup took minutes, not days. The analytics finally give us a clear read on response times and which conversations actually turn into customers.",
    name: "Ahmad Hassan",
    role: "CEO",
    company: "MarketReach",
    initials: "AH",
    color: "from-emerald-500 to-teal-600",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section className="bg-slate-900/40 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our customers say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Real teams using PagePilot to run their Facebook pages more
            efficiently.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote className="absolute -right-2 -top-2 h-24 w-24 text-slate-800" />

            <div className="animate-testimonial relative" key={index}>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mt-6 text-xl leading-relaxed text-slate-200 sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${current.color} text-sm font-bold text-white shadow-md`}
                >
                  {current.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{current.name}</p>
                  <p className="text-sm text-slate-400">
                    {current.role} · {current.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="relative mt-10 flex items-center justify-between border-t border-slate-800 pt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-indigo-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-indigo-500 hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-indigo-500 hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
