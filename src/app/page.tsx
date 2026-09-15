import { Navbar } from "@/components/navbar";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { StatsSection } from "@/components/stats";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { VideoDemo } from "@/components/video-demo";
import { CTA } from "@/components/cta";
import { EmailCapture } from "@/components/email-capture";
import { FAQ } from "@/components/faq";
import { BlogSection } from "@/components/blog-section";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SocialProof } from "@/components/social-proof";
import { ScrollToTop } from "@/components/scroll-to-top";

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
        <VideoDemo />
        <CTA />
        <EmailCapture />
        <FAQ />
        <BlogSection />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialProof />
      <ScrollToTop />
    </>
  );
}
