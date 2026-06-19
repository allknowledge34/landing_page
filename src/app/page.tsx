import Hero from "@/components/Hero";
import AppScreenshots from "@/components/AppScreenshots";
import BentoGridSection from "@/components/BentoGridSection";
import SavingsInsights from "@/components/SavingsInsights";
import PrivacyFirst from "@/components/PrivacyFirst";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <AppScreenshots />
      <BentoGridSection />
      <SavingsInsights />
      <PrivacyFirst />
      <FinalCTA />
    </main>
  );
}
