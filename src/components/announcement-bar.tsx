import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, BarChart3 } from "lucide-react";

const messages = [
  {
    icon: Sparkles,
    text: "Turn Facebook Messages into Revenue on Autopilot — Start Your 14-Day Free Trial",
  },
  {
    icon: Rocket,
    text: "AI Assistant that works in plain English — draft, summarize, and act",
  },
  {
    icon: BarChart3,
    text: "Automate leads, campaigns & analytics — all in one workspace",
  },
];

export function AnnouncementBar() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...messages, ...messages];

  return (
    <div className="overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
      <div className="flex items-center">
        {/* Static badge stays on the left */}
        <div className="relative z-10 flex shrink-0 items-center gap-1 bg-white/20 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white md:text-xs">
          <Sparkles className="h-3 w-3" />
          NEW
        </div>

        {/* Scrolling marquee */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12 py-2.5">
            {loop.map((m, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 text-xs font-medium text-white md:text-sm"
              >
                <m.icon className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">{m.text}</span>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-1 font-semibold underline-offset-2 hover:underline"
                >
                  Explore Features <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
