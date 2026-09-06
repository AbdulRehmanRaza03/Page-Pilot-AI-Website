import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — PagePilot",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-600">
          <p>
            PagePilot (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains what information we collect, how we use it, and the choices you have.
          </p>

          <h2 className="text-xl font-semibold text-navy">1. Information we collect</h2>
          <p>We collect information you provide directly, such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account details (name, email address, password).</li>
            <li>Facebook Page data you choose to connect.</li>
            <li>Conversations, contacts, and lead information you manage through the platform.</li>
          </ul>
          <p>When you sign in with Google, we receive your name and email address from Google to create or access your account.</p>

          <h2 className="text-xl font-semibold text-navy">2. How we use information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide, operate, and maintain the PagePilot service.</li>
            <li>To process Facebook Page connections and messaging on your behalf.</li>
            <li>To improve and personalize your experience.</li>
            <li>To send you important service updates (not marketing unless you opt in).</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy">3. Facebook / Meta data</h2>
          <p>
            When you connect a Facebook Page, we access only the permissions you authorize
            (such as page management and messaging). We do not share your Facebook data with third
            parties. You can revoke access at any time from your Facebook settings.
          </p>

          <h2 className="text-xl font-semibold text-navy">4. Google data</h2>
          <p>
            When you choose &quot;Sign in with Google&quot;, we access only your basic profile information
            (name and email address) needed to create or identify your account. We do not access your
            Google Drive, contacts, or other Google services.
          </p>

          <h2 className="text-xl font-semibold text-navy">5. Data security</h2>
          <p>
            We use industry-standard security measures, including encryption of sensitive tokens at
            rest and in transit. Access tokens are stored server-side and never exposed to your browser.
          </p>

          <h2 className="text-xl font-semibold text-navy">6. Data retention & deletion</h2>
          <p>
            We retain your data for as long as your account is active. You may request deletion of your
            data at any time by contacting us. Upon deletion, your personal data is removed within a
            reasonable timeframe.
          </p>

          <h2 className="text-xl font-semibold text-navy">7. Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, export, or delete
            your personal data. To exercise these rights, contact us at privacy@pagepilot.app.
          </p>

          <h2 className="text-xl font-semibold text-navy">8. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes
            by posting the updated policy on this page.
          </p>

          <h2 className="text-xl font-semibold text-navy">9. Contact us</h2>
          <p>If you have any questions about this Privacy Policy, contact us at privacy@pagepilot.app.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
