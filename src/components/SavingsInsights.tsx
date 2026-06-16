"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiggyBank, Target, ArrowRight } from "lucide-react";

export default function SavingsInsights() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white text-slate-900 isolate">
      {/* Background */}
      <div className="absolute inset-0 z-[-2] bg-slate-50" />

      {/* Radial core glow */}
      <div 
        className="absolute inset-0 z-[-1] opacity-60"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(0, 102, 255, 0.05) 0%, transparent 60%)'
        }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 z-[-1] opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Build your safety net. <br/>
              <span className="text-slate-400">Automatically.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-10 max-w-md leading-relaxed">
              Freelancing means variable income. Tralance helps you set automated percentage-based savings targets so you are never caught off-guard during slow months or tax season.
            </p>
            
            <button className="flex items-center gap-2 text-sm font-bold tracking-wide text-white bg-slate-900 hover:bg-black px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
              Explore Savings Tools
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative h-[450px] w-full flex items-center justify-center">
            <div 
              className="absolute w-80 h-80 pointer-events-none rounded-full" 
              style={{
                background: 'radial-gradient(circle, rgba(0,102,255,0.05) 0%, rgba(0,102,255,0) 70%)'
              }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="absolute z-20 w-80 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center border border-blue-100/50">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Emergency Fund</div>
                  <div className="text-2xl font-black text-slate-900">$8,450</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2 text-slate-500">
                    <span>Progress</span>
                    <span className="text-[#0066FF]">84%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "84%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-[#0066FF] rounded-full relative" 
                    />
                  </div>
                </div>
                
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-500 font-medium">Goal: $10,000</span>
                  </div>
                  <div className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold">
                    On Track
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-10 -left-4 sm:-left-12 z-10 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl"
            >
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Tax Vault</div>
              <div className="text-lg font-bold text-slate-800">$4,200</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 z-30 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deposit</div>
                <div className="text-sm font-bold text-slate-900">+$450 Auto-saved</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
