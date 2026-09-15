import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-medium text-white md:text-sm">
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide md:text-xs">
          <Sparkles className="h-3 w-3" />
          NEW
        </span>
        <span className="truncate">
          Turn Facebook Messages into Revenue on Autopilot — Start Your 14-Day
          Free Trial
        </span>
        <Link
          href="#features"
          className="inline-flex shrink-0 items-center gap-1 font-semibold underline-offset-2 hover:underline"
        >
          Explore Features <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
