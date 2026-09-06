import Link from "next/link";
import { Logo } from "./navbar";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              PagePilot is the AI-powered platform to manage Facebook Page
              communication, leads, campaigns, and automations — all in one workspace.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><Link href="#features" className="hover:text-navy">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-navy">How it works</Link></li>
              <li><Link href="#pricing" className="hover:text-navy">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><Link href="/privacy" className="hover:text-navy">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-navy">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-navy">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} PagePilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
