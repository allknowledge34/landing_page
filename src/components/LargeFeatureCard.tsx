"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

export default function LargeFeatureCard() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-[3rem] bg-[#FAFAFA] dark:bg-[#0A1128]/20 border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-none overflow-hidden isolate pt-16 sm:pt-24 px-8 sm:px-16 flex flex-col items-center text-center">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full -z-10 pointer-events-none" 
            style={{
              background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, rgba(0,102,255,0) 70%)'
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0A1128] dark:text-white mb-6">
              Income Intelligence.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Go beyond basic spreadsheets. Visualize your freelance revenue streams, analyze client profitability, and predict future cashflow with enterprise-grade financial dashboards.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mt-10 mb-16 sm:mb-20"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-sm text-sm font-semibold text-[#0A1128] dark:text-slate-200">
              <BarChart3 className="w-4 h-4 text-[#0066FF]" />
              Revenue Analytics
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-sm text-sm font-semibold text-[#0A1128] dark:text-slate-200">
              <PieChart className="w-4 h-4 text-[#0066FF]" />
              Client Distribution
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0A1128] border border-slate-200 dark:border-white/10 shadow-sm text-sm font-semibold text-[#0A1128] dark:text-slate-200">
              <TrendingUp className="w-4 h-4 text-[#0066FF]" />
              Cashflow Forecasting
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 30 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center w-full max-w-5xl"
          >
            <DashboardPreview>
              <div className="absolute inset-0 p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 bg-slate-50 dark:bg-[#0A1128]">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-white/5">
                  <div className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#0066FF] shadow-[0_0_10px_rgba(0,102,255,0.5)]" />
                    Revenue Overview
                  </div>
                  <div className="px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] rounded-md flex items-center justify-center text-xs font-bold">This Year</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { label: "Total Revenue", value: "$42,500" },
                    { label: "Active Projects", value: "12" },
                    { label: "Avg. Invoice", value: "$3,540" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                      className="h-24 rounded-xl bg-white dark:bg-[#111A3A] border border-slate-100 dark:border-white/5 p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wider">{stat.label}</div>
                      <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex-1 rounded-xl bg-white dark:bg-[#111A3A] border border-slate-100 dark:border-white/5 flex items-end justify-between p-4 sm:p-6 mt-2 gap-1.5 sm:gap-2 shadow-sm relative overflow-hidden group/graph">
                  {/* Subtle horizontal grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 pointer-events-none opacity-20">
                    <div className="w-full border-t border-slate-300 dark:border-slate-600" />
                    <div className="w-full border-t border-slate-300 dark:border-slate-600" />
                    <div className="w-full border-t border-slate-300 dark:border-slate-600" />
                  </div>

                  {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 95].map((height, i) => (
                    <div key={i} className="relative w-full h-full flex flex-col justify-end group">
                      {/* Background lighter bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                        className="absolute bottom-0 w-full bg-blue-50 dark:bg-[#0066FF]/10 rounded-t-sm sm:rounded-t-md"
                      />
                      {/* Foreground darker bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height * 0.75}%` }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.5 + (i * 0.08) }}
                        className="relative w-full bg-[#0066FF] rounded-t-sm sm:rounded-t-md z-10 transition-colors group-hover:bg-blue-600 dark:group-hover:bg-blue-400 cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm sm:rounded-t-md" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </DashboardPreview>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
