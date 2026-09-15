"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

type Notification = {
  name: string;
  location: string;
  action: string;
};

const notifications: Notification[] = [
  { name: "Sarah", location: "New York, US", action: "started a free trial" },
  { name: "James", location: "London, UK", action: "connected 3 pages" },
  { name: "Elena", location: "Berlin, DE", action: "upgraded to Pro" },
  { name: "Ahmad", location: "Dubai, AE", action: "started a free trial" },
  { name: "Maria", location: "Toronto, CA", action: "captured 12 leads" },
];

/**
 * Shows a small, dismissible "someone just did X" toast periodically.
 * Disabled on reduced-motion devices and after the user dismisses it.
 */
export function SocialProof() {
  const [current, setCurrent] = useState<Notification | null>(null);
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let hideTimer: ReturnType<typeof setTimeout>;

    // First toast after 6s, then every 16s.
    const firstTimer = setTimeout(showNext, 6000);
    const interval = setInterval(showNext, 16000);

    function showNext() {
      const item = notifications[indexRef.current % notifications.length];
      indexRef.current += 1;
      setCurrent(item);
      setVisible(true);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setVisible(false), 5000);
    }

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-3d backdrop-blur">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-slate-200">
            <span className="font-semibold text-white">{current.name}</span>{" "}
            from {current.location}
          </p>
          <p className="text-xs text-slate-400">{current.action}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss notification"
          className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
