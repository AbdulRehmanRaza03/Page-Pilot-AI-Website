"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "PagePilot completely changed how our team handles Facebook leads. We respond faster and never miss a conversation anymore.",
    name: "Sarah Mitchell",
    role: "Marketing Lead, Bloom Agency",
    initials: "SM",
    color: "from-blue-500 to-indigo-600",
  },
  {
    quote:
      "The AI assistant drafts replies in plain English and only acts after I confirm. It's like having an extra teammate 24/7.",
    name: "James Okafor",
    role: "Founder, Nexa Retail",
    initials: "JO",
    color: "from-indigo-500 to-purple-600",
  },
  {
    quote:
      "We manage 15+ Facebook pages across clients. PagePilot's unified inbox and automations saved us countless hours every week.",
    name: "Elena Rodriguez",
    role: "Operations Director, StudioHub",
    initials: "ER",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    quote:
      "Setup took minutes. The analytics dashboard finally gives us real insight into response times and lead conversion.",
    name: "Ahmad Hassan",
    role: "CEO, MarketReach",
    initials: "AH",
    color: "from-emerald-500 to-teal-600",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-brand-600 shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Loved by growing businesses
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-indigo-100" />

            <div className="animate-testimonial" key={index}>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-6 text-xl leading-relaxed text-slate-700">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${current.color} text-sm font-bold text-white`}
                >
                  {current.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy">{current.name}</p>
                  <p className="text-sm text-slate-500">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-brand-600" : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50"
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
