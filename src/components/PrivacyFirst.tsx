"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Fingerprint, EyeOff, CloudOff, ActivitySquare, ServerOff, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyFirst() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cards = [
    {
      icon: CloudOff,
      title: "No Cloud Storage",
      desc: "We don't own servers. Your data never leaves your Android device."
    },
    {
      icon: ActivitySquare,
      title: "No Analytics",
      desc: "We don't track what buttons you press or how much money you make."
    },
    {
      icon: EyeOff,
      title: "No Tracking",
      desc: "Zero third-party trackers, zero advertising SDKs. Just a pure local app."
    },
    {
      icon: Database,
      title: "Local SQLite Vault",
      desc: "Your ledger is written directly to a securely isolated Android room database."
    }
  ];

  return (
    <section className="py-24 relative bg-white transition-colors duration-500 flex justify-center border-t border-slate-100">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-[3rem] bg-slate-50 border border-slate-200 shadow-sm overflow-hidden isolate py-24 sm:py-32 px-6 sm:px-16 flex flex-col items-center text-center">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full pointer-events-none -z-10" 
            style={{
              background: 'radial-gradient(ellipse at top, rgba(0,102,255,0.05) 0%, rgba(0,102,255,0) 70%)'
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-12 flex items-center justify-center"
          >
            <div 
              className="absolute w-64 h-64 rounded-full" 
              style={{
                background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, rgba(0,102,255,0) 70%)'
              }}
            />
            <div className="relative w-24 h-24 rounded-3xl bg-white border border-blue-100 flex items-center justify-center shadow-lg z-10">
              <Shield className="w-12 h-12 text-[#0066FF] stroke-[1.5]" />
            </div>
            <div className="absolute w-40 h-40 rounded-full border border-dashed border-blue-200">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-blue-200 flex items-center justify-center shadow-sm">
                <Lock className="w-3 h-3 text-[#0066FF]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-[10px] font-bold uppercase tracking-widest text-[#0066FF] mb-6">
              <EyeOff className="w-3 h-3" />
              Zero Telemetry
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 mb-6">
              Your financial data <br/> is strictly yours.
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              We physically cannot read your data. Tralance operates entirely without server sync. There are no cloud accounts, no data selling, and absolutely no tracking.
            </p>
            
            <a 
              href="https://sites.google.com/view/tralance/home" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-2 text-sm font-bold tracking-wide text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              Read our full Privacy Policy
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-24 relative z-10">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col text-left group hover:border-blue-200 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
