import React from "react";
import FinalCTA from "@/components/FinalCTA";
import LargeFeatureCard from "@/components/LargeFeatureCard";
import BentoGridSection from "@/components/BentoGridSection";
import SavingsInsights from "@/components/SavingsInsights";

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-32 pb-12 text-center max-w-4xl mx-auto px-4 relative">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none -z-10" 
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, rgba(0,102,255,0) 70%)'
          }}
        />

        <span className="text-[10px] font-bold tracking-widest text-[#0066FF] uppercase bg-[#0066FF]/5 border border-[#0066FF]/20 px-3 py-1.5 rounded-full">
          Product Features
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] mt-8 leading-[1.1] text-[#0A1128] dark:text-white">
          Every detail crafted for <br />
          <span className="text-[#0066FF]">
            financial sovereignty.
          </span>
        </h1>
        <p className="mt-6 text-[#8892B0] text-lg max-w-2xl mx-auto leading-relaxed">
          Manage variables, audits, and spend categories offline. No logins, no analytics tracking, no cloud accounts.
        </p>
      </section>

      <LargeFeatureCard />
      <BentoGridSection />
      <SavingsInsights />
      <FinalCTA />
    </>
  );
}
