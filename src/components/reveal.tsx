"use client";

import { useEffect, useRef, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: ElementType;
};

type Callback = (el: HTMLElement) => void;

// Shared IntersectionObserver avoids creating one per element (big perf win
// when there are dozens of reveal wrappers). We keep a map of callbacks.
let sharedObserver: IntersectionObserver | null = null;
const pending = new WeakMap<HTMLElement, Callback>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const cb = pending.get(el);
          if (cb) cb(el);
          pending.delete(el);
          sharedObserver?.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  return sharedObserver;
}

/**
 * Wraps content and reveals it (fade + slide up) when it scrolls into view.
 * Uses a single shared IntersectionObserver and direct DOM class toggles
 * (no React state) for maximum performance. Respects reduced motion.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = getObserver();
    pending.set(el, (node) => node.classList.add("is-visible"));
    if (observer) observer.observe(el);
    return () => {
      observer?.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
