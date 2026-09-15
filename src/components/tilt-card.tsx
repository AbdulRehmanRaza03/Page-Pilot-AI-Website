"use client";

import { useEffect, useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees of rotation
  glare?: boolean;
};

/**
 * Interactive 3D tilt card that responds to pointer position.
 * Uses direct DOM manipulation (ref) instead of React state to avoid
 * re-rendering on every mousemove — critical for smooth 60fps.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip tilt on touch devices / reduced motion (no mouse hover anyway).
    const canHover = window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    let raf = 0;

    function onMove(e: MouseEvent) {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      // Early exit if the pointer is outside (avoids thrash on nested cards).
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rx = (0.5 - py) * maxTilt;
      const ry = (px - 0.5) * maxTilt;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const n = ref.current;
        if (!n) return;
        n.style.transform = `perspective(1000px) rotateX(${rx.toFixed(
          2
        )}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        if (glareRef.current) {
          glareRef.current.style.opacity = "1";
          glareRef.current.style.background = `radial-gradient(circle at ${(
            px * 100
          ).toFixed(1)}% ${(py * 100).toFixed(
            1
          )}%, rgba(255,255,255,0.35), transparent 60%)`;
        }
      });
    }

    function onLeave() {
      cancelAnimationFrame(raf);
      const node = ref.current;
      if (node) {
        node.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
      }
      if (glareRef.current) glareRef.current.style.opacity = "0";
    }

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      style={{ transition: "transform 0.15s ease-out" }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl transition-opacity duration-300"
          style={{ opacity: 0 }}
        />
      )}
    </div>
  );
}
