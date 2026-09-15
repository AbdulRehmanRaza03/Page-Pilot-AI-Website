import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://page-pilot-ai-website.vercel.app";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Not found — PagePilot" };
  }

  return {
    title: `${post.title} — PagePilot`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Abdul Rehman Raza"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Abdul Rehman Raza",
      url: `${siteUrl}/about`,
      sameAs: [
        "https://github.com/AbdulRehmanRaza03",
        "https://www.linkedin.com/in/abdul-rehman-raza-7a125b332",
        "https://abdulrehmanraza03.github.io/My-Portfolio/",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "PagePilot",
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${post.accent} px-2.5 py-0.5 text-xs font-semibold text-white`}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="text-xs text-slate-500">{post.readTime}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-slate-400">{post.description}</p>

        <div className="mt-8 space-y-6">
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="pt-4 text-2xl font-bold text-white"
                >
                  {block.slice(3)}
                </h2>
              );
            }
            return (
              <p key={i} className="leading-relaxed text-slate-300">
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
          <p className="text-sm font-medium text-white">
            Ready to automate your Facebook pages?
          </p>
          <Link
            href="https://page-pilot-ai-theta.vercel.app/login"
            className="mt-3 inline-block rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
          >
            Get started free
          </Link>
        </div>

        {/* Author bio */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:flex-row sm:items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-xl font-bold text-white">
            AR
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">
              Abdul Rehman Raza
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Founder of PagePilot · Data Scientist & AI Engineer
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4 sm:justify-start">
              <a
                href="https://github.com/AbdulRehmanRaza03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rehman-raza-7a125b332"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                LinkedIn
              </a>
              <a
                href="https://abdulrehmanraza03.github.io/My-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
