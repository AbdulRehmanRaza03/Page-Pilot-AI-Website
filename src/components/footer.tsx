import Link from "next/link";
import { Logo } from "./navbar";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              PagePilot is the AI-powered platform to manage Facebook Page
              communication, leads, campaigns, and automations — all in one
              workspace.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} PagePilot. All rights reserved.
          </p>
          <p className="mt-2">
            Built by{" "}
            <Link
              href="/about"
              className="font-medium text-slate-400 transition-colors hover:text-indigo-400"
            >
              Abdul Rehman Raza
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
