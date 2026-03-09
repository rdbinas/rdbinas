import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhatICreateSection from "@/components/WhatICreateSection";
import WhyBrandsSection from "@/components/WhyBrandsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhatICreateSection />
      <WhyBrandsSection />
      <CTASection />

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="text-sm font-body text-muted-foreground">
          © 2026 Reymark Biñas. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
