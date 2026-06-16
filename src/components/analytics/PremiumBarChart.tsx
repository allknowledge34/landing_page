"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DATA = [
  { label: "Jan", value: 3200 },
  { label: "Feb", value: 4100 },
  { label: "Mar", value: 3800 },
  { label: "Apr", value: 5400 },
  { label: "May", value: 4800 },
  { label: "Jun", value: 6200 },
  { label: "Jul", value: 7100 },
  { label: "Aug", value: 6800 },
  { label: "Sep", value: 8400 },
  { label: "Oct", value: 9200 },
  { label: "Nov", value: 11500 },
  { label: "Dec", value: 14250 },
];

const MAX_VALUE = Math.max(...DATA.map(d => d.value));

export function PremiumBarChart() {
  const prefersReducedMotion = useReducedMotion();
  
  // Counter animation
  const counterSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(counterSpring, (latest) => {
    return "$" + latest.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      counterSpring.set(14250);
    }
  }, [isInView, counterSpring]);

  const floatingTransition = prefersReducedMotion ? {} : {
    y: [0, -3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      {/* Header / Number Counter */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <div>
          <p className="text-sm font-semibold text-slate-500 mb-1 tracking-wide uppercase">Net Revenue</p>
          <motion.h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {displayValue}
          </motion.h3>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm">
          <ArrowUpRight className="w-4 h-4" />
          <span>+24.5%</span>
        </div>
      </div>

      {/* Bar Chart Container */}
      <motion.div 
        animate={isInView ? floatingTransition : {}}
        className="relative h-48 sm:h-64 flex items-end justify-between gap-1 sm:gap-2"
      >
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
          <div className="w-full border-t border-slate-300" />
          <div className="w-full border-t border-slate-300" />
          <div className="w-full border-t border-slate-300" />
          <div className="w-full border-t border-slate-300" />
        </div>

        {/* Bars */}
        {DATA.map((item, index) => {
          const heightPercent = (item.value / MAX_VALUE) * 100;
          return (
            <div key={item.label} className="relative w-full h-full flex flex-col justify-end group">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: `${heightPercent}%` }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 12, 
                  delay: 0.1 + (index * 0.08) 
                }}
                className="relative w-full bg-slate-100 rounded-t-sm group-hover:bg-[#0066FF] transition-colors duration-300 cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#0066FF] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-sm" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-max">
                  <div className="bg-slate-900 text-white text-xs font-bold py-1 px-2 rounded shadow-xl">
                    ${item.value.toLocaleString()}
                  </div>
                </div>
              </motion.div>
              
              {/* X-Axis Label */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-semibold text-slate-400 group-hover:text-slate-900 transition-colors">
                {item.label}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
