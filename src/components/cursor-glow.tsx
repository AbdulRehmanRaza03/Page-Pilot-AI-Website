"use client";

import { useEffect, useRef } from "react";

/**
 * A soft gradient glow that follows the mouse cursor around the page.
 * Disabled automatically on touch / reduced-motion contexts.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only enable on devices with a fine pointer (mouse/trackpad).
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    function onMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = ref.current;
        if (node) {
          node.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
        }
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-glow" />;
}
