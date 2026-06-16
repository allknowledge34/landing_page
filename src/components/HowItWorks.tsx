"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Edit3, LineChart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Download & Install",
      description: "Get Tralance directly from the Google Play Store. The application runs instantly without accounts, sign-ups, or email confirmation.",
      icon: <Download className="w-5 h-5 text-white" />,
    },
    {
      step: "02",
      title: "Log Income & Expenses",
      description: "Input your client payouts, project budgets, and daily spending logs manually or utilizing private SMS transaction triggers.",
      icon: <Edit3 className="w-5 h-5 text-white" />,
    },
    {
      step: "03",
      title: "Analyze Savings",
      description: "Visualize variable margins, cash flow analytics, and net savings graphs instantly on-device through clean dashboard breakdowns.",
      icon: <LineChart className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-white/[0.01] border-y border-slate-200/50 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            Simple Workflow
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Start managing variable finances in 3 steps
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-white/10 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center lg:px-4"
              >
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-accent-cyan shadow-xl shadow-primary/20 mb-6 group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-full bg-slate-900 dark:bg-rich-black flex items-center justify-center group-hover:bg-slate-800 dark:group-hover:bg-slate-950 transition-colors">
                    {item.icon}
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-black bg-primary text-white tracking-widest">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
