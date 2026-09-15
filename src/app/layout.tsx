import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Inline script to set the theme before hydration, avoiding a flash
// of incorrect theme (FOUC).
const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && prefersDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (e) {}
  })();
`;

export const metadata: Metadata = {
  title: "PagePilot — AI-powered Facebook Page automation",
  description:
    "Connect, engage, and grow. One workspace for every Facebook conversation, lead, and automation — powered by AI.",
  keywords: [
    "Facebook automation",
    "Messenger automation",
    "lead management",
    "AI assistant",
    "SaaS",
  ],
  openGraph: {
    title: "PagePilot — AI-powered Facebook Page automation",
    description:
      "Connect, engage, and grow with PagePilot. Manage every Facebook conversation, lead, and automation in one workspace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.className} bg-white text-navy antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
