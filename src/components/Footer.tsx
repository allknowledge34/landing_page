"use client";

import React from "react";
import Link from "next/link";
import { Mail, ShieldCheck, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] bg-slate-50 dark:bg-[#0B1020] py-12 sm:py-16 text-slate-500 dark:text-[#AEB7C6] text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] transition-colors duration-300">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm">
                <img src="/app-icon.png" alt="Tralance Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg text-slate-800 dark:text-white transition-colors duration-300">
                Tralance
              </span>
            </div>
            <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400 dark:text-[#AEB7C6] transition-colors duration-300">
              The premium, local-first finance tracker built specifically for variable freelance income and expense logs.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Specifications
            </div>
            
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Cpu className="w-4.5 h-4.5 text-primary" />
                <span>Android 8.0 (API 26) & above</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Optimized for Android 16 (API 36)</span>
              </div>
              <div className="flex items-center gap-2 text-primary dark:text-blue-400 font-semibold mt-1">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:allknowledge34@gmail.com" className="hover:underline">
                  allknowledge34@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Privacy Notice
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              We do not collect, store, or share your financial data. Your databases remain local to your personal device. Your privacy is our absolute priority.
            </p>
          </div>

        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Tralance. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/features" className="hover:underline">Features</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
