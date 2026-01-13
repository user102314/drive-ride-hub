import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PopularCars } from "@/components/home/PopularCars";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* SEO optimized home page structure */}
      <HeroSection />
      <PopularCars />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
