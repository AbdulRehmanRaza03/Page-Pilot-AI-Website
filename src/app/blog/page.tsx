import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — PagePilot",
  description:
    "Guides and insights on Facebook Page automation, lead management, AI assistants, and more.",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Blog
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Insights & guides
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Practical tips for running your Facebook pages smarter.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-indigo-500/50"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${post.accent} px-2.5 py-0.5 text-xs font-semibold text-white`}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-400">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
