"use client";

import React from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export function IntelligenceCenter() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center bg-white rounded-full w-48 h-48 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-[#0066FF] mb-2">
        <Shield className="w-5 h-5" />
      </div>
      <div className="text-center px-4">
        <span className="block text-sm font-black text-slate-900 tracking-tight leading-tight">Tralance</span>
        <span className="block text-[10px] font-bold text-slate-500 tracking-wide uppercase mt-1 mb-1 leading-tight">Financial Intelligence</span>
        <span className="block text-[10px] font-bold text-[#0066FF] tracking-wide bg-blue-50 px-2 py-0.5 rounded-full inline-block mt-1">100% Offline</span>
      </div>
    </motion.div>
  );
}
