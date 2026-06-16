"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, WifiOff, Database, Activity } from "lucide-react";
import Link from "next/link";
import { IntelligenceWheel } from "./hero-wheel/intelligence-wheel";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden bg-white min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[55%] z-10 flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
            <Shield className="w-4 h-4 text-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-widest text-[#0066FF] uppercase">
              Bank-Grade Local Privacy
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[3.25rem] sm:text-6xl lg:text-[64px] xl:text-[72px] font-black tracking-tight text-slate-900 leading-[0.95] mb-6 max-w-[750px] w-full">
            Freelance Finance.<br />
            Fully Offline.<br />
            <span className="text-[#0066FF]">100% Private.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Tralance helps freelancers manage income, expenses, projects, and savings completely offline on their device.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 w-full lg:w-auto">
            <a href="https://play.google.com/store/apps/details?id=com.sachin.tralance" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0A1128] hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]">
              {/* SVG for Google Play Icon */}
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 2.5C3.1 2.8 2.8 3.4 2.8 4.2V19.8C2.8 20.6 3.1 21.2 3.5 21.5L3.6 21.6L14.4 10.8V10.6L3.6 2.4L3.5 2.5Z" fill="#2196F3"/>
                <path d="M18.2 14.6L14.4 10.8V10.6L18.2 6.8L18.3 6.9L22.8 9.5C24.1 10.2 24.1 11.4 22.8 12.1L18.3 14.5L18.2 14.6Z" fill="#FFC107"/>
                <path d="M18.3 14.5L14.4 10.7L3.5 21.6C4 22 4.8 22.1 5.6 21.6L18.3 14.5Z" fill="#F44336"/>
                <path d="M18.3 6.9L5.6 2C4.8 1.5 4 1.6 3.5 2.1L14.4 10.7L18.3 6.9Z" fill="#4CAF50"/>
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] leading-tight text-white/70">GET IT ON</span>
                <span className="text-base leading-tight">Google Play</span>
              </div>
            </a>

            <Link href="/features" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:border-slate-300">
              Explore Platform
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Bottom Feature Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
              <WifiOff className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-slate-700">100% Offline</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-slate-700">Zero Tracking</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-xl border border-purple-100">
              <Database className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-bold text-slate-700">Local SQLite</span>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Intelligence Wheel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-0 mt-12 lg:mt-0"
        >
          {/* We use a negative margin on large screens if needed to pull the wheel slightly left, 
              or just let it sit naturally. For a premium SaaS look, the wheel slightly bleeding off or sitting perfectly in the grid is ideal. */}
          <div className="relative">
             <IntelligenceWheel />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
