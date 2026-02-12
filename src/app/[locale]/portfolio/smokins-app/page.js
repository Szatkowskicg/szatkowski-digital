import HeroSection from "@/components/projects/smokins/HeroSection";
import IntroSection from "@/components/projects/smokins/IntroSection";
import AppUXSection from "@/components/projects/smokins/AppUXSection";
import SellerPanelSection from "@/components/projects/smokins/SellerPanelSection";
import TechStackSection from "@/components/projects/smokins/TechStackSection";
import NextProjectCTA from "@/components/projects/smokins/NextProjectCTA";

export default function page() {
  return (
    <main className="bg-n-9 text-n-1">
      <HeroSection />
      <IntroSection />
      <AppUXSection />
      <SellerPanelSection />
      <TechStackSection />
      <NextProjectCTA />
    </main>
  );
}
