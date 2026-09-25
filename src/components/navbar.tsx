"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img
        src="/logo-512.png"
        alt="PagePilot logo"
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg object-contain"
      />
      <div className="leading-tight">
        <span className="block text-lg font-bold text-white">
          PagePilot
        </span>
        <span className="block text-[10px] font-medium text-slate-400">
          Connect • Engage • Grow
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Track which section is currently in view to highlight its nav link.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://page-pilot-ai-theta.vercel.app/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800"
          >
            Sign in
          </Link>
          <Link
            href="https://page-pilot-ai-theta.vercel.app/login"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500"
          >
            Get started free
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-300"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://page-pilot-ai-theta.vercel.app/login"
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get started free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
