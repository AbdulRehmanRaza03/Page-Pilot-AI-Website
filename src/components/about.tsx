import {
  Github,
  Linkedin,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AbdulRehmanRaza03",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-rehman-raza-7a125b332",
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://abdulrehmanraza03.github.io/My-Portfolio/",
  },
];

export function About() {
  return (
    <section className="border-t border-slate-800 bg-slate-900/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            About the founder
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built by an engineer who ships
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:flex-row sm:p-12">
            {/* Avatar / monogram */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-3xl font-bold text-white shadow-glow">
              AR
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">
                Abdul Rehman Raza
              </h3>
              <p className="mt-1 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-indigo-300 sm:justify-start">
                <Sparkles className="h-4 w-4" />
                Founder, PagePilot · Data Scientist & AI Engineer
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Abdul is a Data Scientist and full-stack engineer from Lahore,
                Pakistan. He designs, ships, and deploys AI agents, SaaS
                platforms, and ML systems end-to-end — including PagePilot,
                an AI-powered Facebook Page automation platform, alongside a
                portfolio of live products like PinForge AI and ABD Post
                Pilot.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-indigo-500/50 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-8 text-center">
          <a
            href="https://abdulrehmanraza03.github.io/My-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            See the full portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
