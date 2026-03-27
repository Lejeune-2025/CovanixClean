import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ServicesPreview from "@/components/ServicesPreview";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersBar from "@/components/PartnersBar";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <ServicesPreview />
      <HowItWorks />
      <WhyChooseUs />
      <PartnersBar />
      <Testimonials />
      <BeforeAfter />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Index;
