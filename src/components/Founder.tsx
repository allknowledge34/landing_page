"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-32 relative bg-white dark:bg-[#030303] transition-colors duration-500 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAFAFA] dark:bg-[#0A1128]/20 -skew-x-12 translate-x-20 -z-10" />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none -z-10" 
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(0,102,255,0.08) 0%, rgba(0,102,255,0) 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/3 flex flex-col"
        >
          <div className="w-20 h-20 rounded-2xl bg-[#0A1128] dark:bg-white flex items-center justify-center mb-8 shadow-xl shadow-slate-200 dark:shadow-none">
            <span className="font-display font-black text-2xl text-white dark:text-[#0A1128]">SK</span>
          </div>
          <div className="w-12 h-1 bg-[#0066FF] mb-6" />
          <div className="font-display text-2xl font-bold text-[#0A1128] dark:text-white mb-2">Sachin Kumar</div>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Founder & Architect
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-2/3"
        >
          <div className="relative">
            <span className="absolute -top-16 -left-10 text-8xl font-serif text-slate-100 dark:text-white/5 select-none pointer-events-none">"</span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#0A1128] dark:text-white leading-[1.15] mb-8 relative z-10">
              I built Tralance because I was tired of giving up my privacy just to track my own freelance income.
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-p:text-slate-500 dark:prose-p:text-[#8892B0] prose-p:leading-relaxed max-w-none">
            <p>
              When you use traditional finance apps, you aren't the customer—your data is the product. Every invoice, every client, every expense is synced to a cloud server, analyzed, and often monetized. 
            </p>
            <p className="mt-6">
              Top-tier software shouldn't require you to surrender your financial data. Tralance was engineered from the ground up as a fully isolated, strictly local ledger for independent professionals. It gives you enterprise-grade financial intelligence, with absolute zero telemetry.
            </p>
            <p className="mt-8 font-display font-bold text-xl text-[#0066FF] italic">
              Your money. Your device. Your business.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
