<div align="center">

# 🚀 PagePilot

**Turn every Facebook conversation into growth.**

An AI-powered Facebook Page automation platform that unifies your inbox, leads, campaigns, and automations into a single, intelligent workspace.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## ✨ Overview

**PagePilot** replaces the messy mix of inboxes, spreadsheets, and manual follow-ups with one unified platform. It lets individuals, businesses, and agencies manage every Facebook Page interaction — messages, leads, campaigns, and automations — from a single dashboard, supercharged by an AI assistant that works in plain English.

### Key Features

| Feature | Description |
| --- | --- |
| 📥 **Unified Inbox** | Every conversation from every Facebook Page, in one clean inbox with real-time updates, assignment, and labels. |
| 👥 **Leads & CRM** | Automatically capture leads from conversations, score them, and move them through a full pipeline. |
| 📣 **Compliant Campaigns** | Send campaigns that respect Meta's policies — with built-in eligibility checking and delivery tracking. |
| 🔀 **Visual Automations** | Build `trigger → condition → action` workflows visually. Automate replies, tagging, and follow-ups. |
| 🤖 **AI Assistant** | A natural-language assistant that searches, summarizes, drafts, and — with confirmation — acts on your behalf. |
| 📊 **Actionable Analytics** | Response times, lead conversion, and campaign performance — all the numbers that matter. |
| 🛡️ **Secure by Default** | Multi-tenant isolation, encrypted tokens, and role-based access control (RBAC). |
| ⚡ **Real-time Everything** | Inbox, messages, and lead updates push to your screen instantly — no refresh needed. |

---

## 🧩 How It Works

1. **Connect your Pages** — Connect one or many Facebook Pages with secure OAuth. No technical setup required.
2. **Automate & engage** — Unify your inbox, capture leads, and let automations handle repetitive conversations.
3. **Grow on autopilot** — Launch campaigns, follow up with the AI assistant, and watch your pipeline fill up.

---

## 💰 Pricing

| Plan | Price | Best For |
| --- | --- | --- |
| **Starter** | `$0` forever | Individuals getting started (1 Page, up to 100 conversations/mo). |
| **Pro** | `$29`/mo | Growing businesses and teams (up to 10 Pages, unlimited conversations, campaigns, limited AI). |
| **Business** | `$99`/mo | Agencies and multi-brand teams (unlimited everything, API & webhooks, dedicated support). |

*Start free — no credit card required. Pro includes a free 14-day trial.*

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** [`clsx`](https://github.com/lukeed/clsx) + [`tailwind-merge`](https://github.com/dcastil/tailwind-merge)

---

## 📁 Project Structure

```
PagePilot-Website/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout & metadata
│   │   ├── page.tsx        # Landing page (/)
│   │   ├── privacy/        # Privacy Policy
│   │   ├── terms/          # Terms of Service
│   │   └── cookies/        # Cookie Policy
│   ├── components/         # Reusable UI sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── how-it-works.tsx
│   │   ├── pricing.tsx
│   │   ├── cta.tsx
│   │   ├── faq.tsx
│   │   └── footer.tsx
│   └── types.d.ts          # Global type declarations
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

### Pages

- `/` — Landing page (Hero, Features, How it works, Pricing, CTA, FAQ)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/cookies` — Cookie Policy

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `18.18+` (or newer)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdulRehmanRaza03/Page-Pilot-AI-Website.git
   cd Page-Pilot-AI-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in the required values in `.env.local` (e.g. `NEXT_PUBLIC_SITE_URL`).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Start the production server (requires a build first). |
| `npm run lint` | Run ESLint to check for code issues. |

---

## 🚢 Deployment

The site deploys seamlessly to [Vercel](https://vercel.com/) (the platform Next.js is built on).

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Set the `NEXT_PUBLIC_SITE_URL` environment variable if needed.
4. Deploy — Vercel automatically handles the build.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by [Abdul Rehman Raza](https://github.com/AbdulRehmanRaza03)

</div>
