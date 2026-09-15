import { Play, Clock } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * A video demo / explainer section. Uses a placeholder thumbnail with
 * a play button. Swap the href with a real video URL when available.
 */
export function VideoDemo() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Product demo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See PagePilot in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Watch how PagePilot turns your Facebook messages into a fully
            automated growth engine — in under two minutes.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-3d">
            {/* Thumbnail placeholder (gradient + subtle grid) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-purple-600/10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative flex aspect-video flex-col items-center justify-center p-8">
              <a
                href="https://page-pilot-ai-theta.vercel.app/login"
                aria-label="Play product demo"
                className="group/play relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white shadow-glow transition-all hover:scale-110 hover:bg-indigo-500"
              >
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-indigo-600 opacity-30" />
                <Play className="h-9 w-9 translate-x-0.5 fill-current" />
              </a>
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Clock className="h-4 w-4" />
                Watch the 2-minute demo
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
