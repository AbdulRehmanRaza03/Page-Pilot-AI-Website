"use client";

import { useEffect, useRef, useState } from "react";
import { Users, MessageSquare, BarChart3, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Facebook Pages automated" },
  { icon: MessageSquare, value: 50000, suffix: "+", label: "Conversations handled" },
  { icon: BarChart3, value: 99.9, suffix: "%", label: "Uptime reliability", decimals: 1 },
  { icon: ShieldCheck, value: 24, suffix: "/7", label: "Support & monitoring" },
];

function CountUp({
  value,
  suffix,
  decimals = 0,
  start,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    let raf = 0;
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span className="text-4xl font-bold text-navy sm:text-5xl">
      {formatted}
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-brand-600">
                <s.icon className="h-6 w-6" />
              </div>
              <CountUp
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
                start={start}
              />
              <p className="mt-2 text-sm text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
