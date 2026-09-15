"use client";

import { useEffect, useState } from "react";

const words = ["growth", "revenue", "leads", "customers"];

/**
 * Rotates a single word on a loop with a subtle fade, keeping the
 * hero headline dynamic. Disabled on reduced-motion devices.
 */
export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`gradient-text-animated inline-block transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {words[index]}
    </span>
  );
}
