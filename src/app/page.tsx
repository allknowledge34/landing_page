import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AppScreenshots from "@/components/home/AppScreenshots";
import PrivacyFirst from "@/components/shared/PrivacyFirst";
import ComparisonSection from "@/components/home/ComparisonSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Tralance — The Best Freelance Income & Expense Tracker",
  description: "Tralance is an offline income and expense tracker app built for freelancers. Manage project income, track client payments, and categorize expenses privately.",
};

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <AppScreenshots />
      <PrivacyFirst />
      <ComparisonSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
