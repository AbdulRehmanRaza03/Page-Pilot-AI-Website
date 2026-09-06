import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie Policy — PagePilot",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-navy">Cookie Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-600">
          <h2 className="text-xl font-semibold text-navy">1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help us
            remember your preferences and understand how you use our service.
          </p>

          <h2 className="text-xl font-semibold text-navy">2. Cookies we use</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Essential cookies</strong> — required for authentication and core functionality.</li>
            <li><strong>Preference cookies</strong> — remember your settings and preferences.</li>
            <li><strong>Analytics cookies</strong> — help us understand usage and improve the service.</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy">3. Managing cookies</h2>
          <p>
            Most browsers allow you to control or delete cookies. Note that disabling essential cookies
            may affect the functionality of the service.
          </p>

          <h2 className="text-xl font-semibold text-navy">4. Contact</h2>
          <p>Questions? Contact us at privacy@pagepilot.app.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
