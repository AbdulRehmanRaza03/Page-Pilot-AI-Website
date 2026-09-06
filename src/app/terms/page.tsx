import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service — PagePilot",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-600">
          <h2 className="text-xl font-semibold text-navy">1. Acceptance of terms</h2>
          <p>
            By accessing or using PagePilot, you agree to be bound by these Terms of Service. If you do
            not agree, please do not use the service.
          </p>

          <h2 className="text-xl font-semibold text-navy">2. Description of service</h2>
          <p>
            PagePilot provides a platform to manage Facebook Page messaging, leads, campaigns, and
            automations. The service requires you to connect your own Facebook Pages via authorized
            integrations.
          </p>

          <h2 className="text-xl font-semibold text-navy">3. Your responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are responsible for your account credentials and activity.</li>
            <li>You must not use PagePilot for spam, unsolicited messaging, or in violation of Meta&apos;s policies.</li>
            <li>You must comply with all applicable laws and regulations.</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy">4. Meta platform compliance</h2>
          <p>
            PagePilot operates within Meta&apos;s official APIs and policies. We do not provide tools to bypass
            messaging windows, rate limits, or other restrictions. Misuse may result in suspension of your
            account.
          </p>

          <h2 className="text-xl font-semibold text-navy">5. Fees & billing</h2>
          <p>
            Some features require a paid subscription. Fees are billed as described at the time of purchase.
            You may cancel at any time, subject to the terms of your plan.
          </p>

          <h2 className="text-xl font-semibold text-navy">6. Intellectual property</h2>
          <p>
            PagePilot and its content are owned by us and protected by intellectual property laws. You retain
            ownership of your own data and content.
          </p>

          <h2 className="text-xl font-semibold text-navy">7. Termination</h2>
          <p>
            We may suspend or terminate your access if you violate these terms. You may stop using the
            service at any time.
          </p>

          <h2 className="text-xl font-semibold text-navy">8. Disclaimer of warranties</h2>
          <p>
            The service is provided &quot;as is&quot; without warranties of any kind, express or implied.
          </p>

          <h2 className="text-xl font-semibold text-navy">9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, PagePilot shall not be liable for indirect, incidental,
            or consequential damages arising from your use of the service.
          </p>

          <h2 className="text-xl font-semibold text-navy">10. Contact</h2>
          <p>Questions about these terms? Contact us at support@pagepilot.app.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
