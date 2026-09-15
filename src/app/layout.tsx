import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://page-pilot-ai-website.vercel.app";

const title = "PagePilot — AI-powered Facebook Page automation";
const description =
  "Connect, engage, and grow. One workspace for every Facebook conversation, lead, and automation — powered by AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s",
  },
  description,
  keywords: [
    "Facebook automation",
    "Messenger automation",
    "lead management",
    "AI assistant",
    "Facebook page automation",
    "SaaS",
    "CRM",
    "PagePilot",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "PagePilot",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PagePilot — AI-powered Facebook Page automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PagePilot",
      url: siteUrl,
      description,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "PagePilot",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      url: siteUrl,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "99",
        priceCurrency: "USD",
        offerCount: "3",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PagePilot",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: "Abdul Rehman Raza",
      jobTitle: "Founder, Data Scientist & AI Engineer",
      url: siteUrl,
      sameAs: [
        "https://github.com/AbdulRehmanRaza03",
        "https://www.linkedin.com/in/abdul-rehman-raza-7a125b332",
        "https://abdulrehmanraza03.github.io/My-Portfolio/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "PagePilot",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
