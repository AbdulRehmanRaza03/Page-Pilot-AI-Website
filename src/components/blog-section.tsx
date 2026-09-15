import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

const posts = [
  {
    title: "How to automate Facebook lead follow-ups without spamming",
    excerpt:
      "Learn the compliant way to keep leads warm using messaging windows and smart automation.",
    category: "Guides",
    readTime: "6 min read",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "5 Facebook Page metrics that actually predict revenue",
    excerpt:
      "Stop chasing vanity metrics. These are the numbers that show which conversations drive sales.",
    category: "Analytics",
    readTime: "4 min read",
    accent: "from-indigo-500 to-purple-600",
  },
  {
    title: "A practical intro to a natural-language AI assistant",
    excerpt:
      "How PagePilot's assistant drafts, summarizes, and acts — always with your confirmation.",
    category: "AI",
    readTime: "8 min read",
    accent: "from-purple-500 to-fuchsia-600",
  },
];

export function BlogSection() {
  return (
    <section className="border-t border-slate-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Resources
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Insights & guides
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Practical tips for running your Facebook pages smarter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-indigo-500/50">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${post.accent} px-2.5 py-0.5 text-xs font-semibold text-white`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
