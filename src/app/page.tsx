import { Navbar } from "@/components/navbar";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { StatsSection } from "@/components/stats";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <StatsSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
