"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 via-accent-purple/15 to-accent-cyan/15 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white px-8 py-16 sm:px-16 sm:py-20 text-center border border-slate-800 dark:border-white/5 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-[40px]" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs font-black uppercase tracking-widest text-primary mb-6">
              Start Today
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight max-w-2xl leading-[1.1] mb-6">
              Take Control of Your Freelance Finances
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-4">
              Track income, expenses, projects, and savings with complete privacy.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.sachin.tralance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-white text-slate-950 hover:bg-slate-50 font-bold text-base transition-all shadow-xl shadow-white/5 border border-white/10"
              >
                <div className="bg-primary text-white p-1.5 rounded-lg">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-500 leading-none">Get it on</p>
                  <p className="text-base font-black leading-tight mt-0.5">Google Play</p>
                </div>
              </a>
            </motion.div>
            <p className="mt-6 text-xs text-slate-500">
              No signups required. Standard core functionality is 100% free.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
