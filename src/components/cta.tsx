import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-glow text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to turn conversations into customers?
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Join thousands of businesses running their Facebook pages on autopilot.
        </p>
        <Link
          href="https://page-pilot-ai-theta.vercel.app/login"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo-700 shadow-3d-lg transition-all hover:-translate-y-1 hover:bg-indigo-50 hover:shadow-glow"
        >
          Get started free
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <p className="mt-4 text-sm text-indigo-200">No credit card required</p>
      </div>
    </section>
  );
}
