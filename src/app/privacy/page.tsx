import React from "react";
import { Metadata } from "next";
import FinalCTA from "@/components/home/FinalCTA";
import PrivacyFirst from "@/components/shared/PrivacyFirst";

export const metadata: Metadata = {
  title: "Privacy Manifesto | Zero Telemetry Expense Manager",
  description: "Tralance is an offline expense tracker with a strict privacy policy. Zero telemetry, no cloud sync, local SQLite database only.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-12 text-center max-w-4xl mx-auto px-4 relative">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none -z-10" 
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, rgba(0,102,255,0) 70%)'
          }}
        />
        <span className="text-[10px] font-bold tracking-widest text-[#0066FF] uppercase bg-[#0066FF]/5 border border-[#0066FF]/20 px-3 py-1.5 rounded-full">
          Privacy Manifesto
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] mt-8 leading-[1.1] text-[#0A1128] dark:text-white">
          Your Money. Your Device. <br />
          <span className="text-[#0066FF]">
            Your Data.
          </span>
        </h1>
        <p className="mt-6 text-[#8892B0] text-lg max-w-2xl mx-auto leading-relaxed">
          Tralance operates entirely local-first. We do not run databases in the cloud, collect analytics, or sell your financial history.
        </p>
      </section>

      <PrivacyFirst />
      <FinalCTA />
    </>
  );
}
