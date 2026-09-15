"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

/**
 * Email capture / waitlist form with client-side validation and a
 * success state. No backend required — this is a marketing form.
 */
export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage("You're on the list! We'll be in touch soon.");
    setEmail("");
  }

  return (
    <section className="border-t border-slate-800 bg-slate-900/40 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get early access
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Join the waitlist and be the first to know when PagePilot opens new
          features and early-bird pricing.
        </p>

        <form onSubmit={handleSubmit} className="mt-8" noValidate>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="you@company.com"
              aria-label="Email address"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-500"
            >
              Join waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {status === "error" && (
          <p className="mt-3 text-sm text-rose-400">{message}</p>
        )}
        {status === "success" && (
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            {message}
          </p>
        )}
        <p className="mt-4 text-xs text-slate-500">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
