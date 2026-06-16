"use client";

import React from "react";
import { motion } from "framer-motion";

interface DashboardPreviewProps {
  className?: string;
  children?: React.ReactNode;
}

export default function DashboardPreview({ className = "", children }: DashboardPreviewProps) {
  return (
    <div className={`relative z-10 w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0A1128] border border-slate-200 dark:border-white/10 overflow-hidden"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
        }}
      >
        <div className="h-10 sm:h-12 bg-slate-50 dark:bg-[#060B19] border-b border-slate-200 dark:border-white/5 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/10" />
          </div>
          <div className="mx-auto h-5 sm:h-6 w-1/3 bg-slate-200/50 dark:bg-white/5 rounded-md" />
        </div>
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-50/50 dark:bg-[#0A1128] overflow-hidden">
          {children ? (
            children
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 dark:text-[#8892B0] text-sm">Dashboard Abstract UI</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
