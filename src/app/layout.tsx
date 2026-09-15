import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
