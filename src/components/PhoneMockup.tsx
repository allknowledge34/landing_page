"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  src?: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export default function PhoneMockup({ src = "/app-screenshot.png", className = "", children, priority = false }: PhoneMockupProps) {
  return (
    <div className={`relative z-10 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto w-[300px] h-[620px] sm:w-[320px] sm:h-[660px] rounded-[56px] p-[8px] bg-[#1a1a1a] dark:bg-[#111]"
        style={{
          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4), inset 0 0 2px rgba(255,255,255,0.2)"
        }}
      >
        <div className="absolute top-28 -left-[2px] w-[2px] h-8 bg-slate-700 rounded-l-md" />
        <div className="absolute top-44 -left-[2px] w-[2px] h-14 bg-slate-700 rounded-l-md" />
        <div className="absolute top-60 -left-[2px] w-[2px] h-14 bg-slate-700 rounded-l-md" />
        <div className="absolute top-52 -right-[2px] w-[2px] h-16 bg-slate-700 rounded-r-md" />
        <div className="relative w-full h-full rounded-[48px] bg-black overflow-hidden border-[6px] border-black isolate">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 flex items-center justify-between px-3">
            <div className="w-3 h-3 rounded-full bg-[#111] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900/50" />
            </div>
            <div className="w-3 h-3 rounded-full bg-[#111]" />
          </div>
          <div className="w-full h-full relative bg-slate-900">
            {children ? (
              children
            ) : (
              <Image 
                src={src} 
                alt="Tralance freelancer income tracking dashboard" 
                fill
                sizes="(max-width: 640px) 300px, 320px"
                className="object-cover"
                priority={priority}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
