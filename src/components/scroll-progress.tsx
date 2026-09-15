"use client";

import { useEffect, useState } from "react";

/**
 * Thin gradient progress bar fixed to the top of the page,
 * showing how far the user has scrolled.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const height =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}
