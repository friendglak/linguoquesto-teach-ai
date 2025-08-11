
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppIntegration } from "@/components/WhatsAppIntegration";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] bg-grid">
      <Header />
      <main>
        <HeroSection />
        <TestimonialCarousel />
        <BenefitsGrid />
        <HowItWorks />
        <WhatsAppIntegration />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
