import type { Metadata } from "next";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://page-pilot-ai-website.vercel.app";

export const metadata: Metadata = {
  title: "About — Abdul Rehman Raza",
  description:
    "Abdul Rehman Raza is the founder of PagePilot — a Data Scientist and AI Engineer building autonomous AI agents, SaaS products, and ML systems end-to-end.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Abdul Rehman Raza",
    description:
      "Founder of PagePilot. Data Scientist and AI Engineer building AI agents, SaaS products, and ML systems end-to-end.",
    type: "profile",
    url: `${siteUrl}/about`,
    ...{ firstName: "Abdul Rehman", lastName: "Raza", username: "AbdulRehmanRaza03" },
  },
};

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
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abdulrehmanraza60@gmail.com",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Rehman Raza",
    jobTitle: "Founder, Data Scientist & AI Engineer",
    url: `${siteUrl}/about`,
    sameAs: [
      "https://github.com/AbdulRehmanRaza03",
      "https://www.linkedin.com/in/abdul-rehman-raza-7a125b332",
      "https://abdulrehmanraza03.github.io/My-Portfolio/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "PagePilot",
    },
    alumniOf: "Superior University, Lahore",
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-4xl font-bold text-white shadow-glow">
            AR
          </div>
          <div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:mt-0 sm:text-4xl">
              Abdul Rehman Raza
            </h1>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-indigo-300 sm:justify-start">
              <Sparkles className="h-4 w-4" />
              Founder, PagePilot · Data Scientist & AI Engineer
            </p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-slate-400 sm:justify-start">
              <MapPin className="h-4 w-4" />
              Lahore, Pakistan
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
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

        {/* Bio */}
        <div className="mt-12 space-y-6 text-[15px] leading-relaxed text-slate-300">
          <h2 className="text-2xl font-bold text-white">About</h2>
          <p>
            Abdul Rehman Raza is a Data Scientist and full-stack software
            engineer who designs, ships, and deploys AI systems end-to-end.
            He is the founder of PagePilot, an AI-powered Facebook Page
            automation platform that unifies messaging, leads, and automation
            into a single workspace.
          </p>
          <p>
            He is pursuing a BS in Data Science (2024–2028) at Superior
            University, Lahore, where he is an Honhaar Scholarship recipient
            and an elected Student Voice Leader. His work spans autonomous AI
            agents, machine learning systems, and production SaaS products.
          </p>
        </div>

        {/* What he builds */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white">What he builds</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "PagePilot",
                desc: "AI-powered Facebook Page automation SaaS.",
              },
              {
                title: "PinForge AI",
                desc: "ToS-compliant Pinterest automation platform.",
              },
              {
                title: "TheEleven",
                desc: "JARVIS-inspired AI desktop assistant.",
              },
              {
                title: "Forge Agent 05",
                desc: "Multi-agent autonomous automation system.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
          <p className="text-sm font-medium text-white">
            Explore the full portfolio
          </p>
          <a
            href="https://abdulrehmanraza03.github.io/My-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
          >
            Visit portfolio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
