import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import MentorsSection from "@/components/MentorsSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <MentorsSection />
      <BenefitsSection />
      <WhatsAppSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
