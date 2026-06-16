"use client";

import React from "react";
import { PremiumBarChart } from "./analytics/PremiumBarChart";
import { motion } from "framer-motion";

export default function AnalyticsShowcase() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white isolate">
      {/* Moving background mask */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-[-1]"
        style={{
          background: 'linear-gradient(to right, rgba(248,250,252,1) 0%, rgba(255,255,255,0) 50%, rgba(248,250,252,1) 100%)'
        }}
      />
      
      {/* Background SVG Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[-2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%230066FF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to bottom, white 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Financial intelligence, <br/>
            <span className="text-[#0066FF]">beautifully visualized.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-500 font-medium"
          >
            Tralance processes your local data to generate stunning, instantly actionable insights without ever sending a single byte to the cloud.
          </motion.p>
        </div>

        <PremiumBarChart />
        
      </div>
    </section>
  );
}
