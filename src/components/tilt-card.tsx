"use client";

import { useRef, useState } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees of rotation
  glare?: boolean;
};

/**
 * Interactive 3D tilt card that responds to pointer position.
 * Adds a subtle "lift" and rotation on hover for a tactile, premium feel.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rx = (0.5 - py) * maxTilt;
    const ry = (px - 0.5) * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0px) scale3d(1.02, 1.02, 1.02)`
    );
    setGlarePos({ x: px * 100, y: py * 100, opacity: 1 });
  }

  function handleLeave() {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale3d(1,1,1)"
    );
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.35), transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
