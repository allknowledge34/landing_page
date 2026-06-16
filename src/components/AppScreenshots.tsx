"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Activity, TrendingUp, TrendingDown, PieChart, Settings, Target } from "lucide-react";

const SCREENS = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: Activity,
    color: "bg-blue-500",
    content: (
      <div className="flex flex-col gap-4 w-full h-full p-4 bg-slate-50">
        <div className="w-full flex justify-between items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" />
          <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
        </div>
        <div className="w-full h-32 rounded-3xl bg-blue-500 text-white p-5 flex flex-col justify-end shadow-lg shadow-blue-500/20">
          <span className="text-xs opacity-80">Total Balance</span>
          <span className="text-3xl font-bold">$14,250.00</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-24 rounded-2xl bg-white border border-slate-100 shadow-sm p-4 flex flex-col justify-between">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-bold text-slate-800">$4,500</span>
          </div>
          <div className="h-24 rounded-2xl bg-white border border-slate-100 shadow-sm p-4 flex flex-col justify-between">
            <TrendingDown className="w-5 h-5 text-rose-500" />
            <span className="text-sm font-bold text-slate-800">$1,200</span>
          </div>
        </div>
        <div className="flex-grow rounded-t-3xl bg-white border-t border-x border-slate-100 shadow-sm mt-2 p-4">
          <div className="w-24 h-4 bg-slate-200 rounded-full mb-4" />
          {[1,2,3].map(i => (
            <div key={i} className="w-full h-12 bg-slate-50 rounded-xl mb-2 flex items-center px-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 mr-3" />
              <div className="flex-1 h-3 bg-slate-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "income",
    title: "Income Tracking",
    icon: TrendingUp,
    color: "bg-emerald-500",
    content: (
      <div className="flex flex-col gap-4 w-full h-full p-4 bg-slate-50">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="font-bold text-lg text-slate-800">Income</span>
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">+</div >
        </div>
        <div className="w-full h-40 rounded-3xl bg-white border border-slate-100 p-4 shadow-sm flex items-end gap-2">
          {[40, 70, 45, 90, 60, 100].map((h, i) => (
            <div key={i} className="flex-1 bg-emerald-100 rounded-t-md" style={{ height: `${h}%` }}>
              <div className="w-full bg-emerald-500 rounded-t-md opacity-80" style={{ height: '100%' }} />
            </div>
          ))}
        </div>
        <div className="flex-grow rounded-3xl bg-white border border-slate-100 shadow-sm p-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-full h-14 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="w-20 h-3 bg-slate-200 rounded-full" />
              </div>
              <div className="w-12 h-3 bg-emerald-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "expense",
    title: "Expense Tracking",
    icon: TrendingDown,
    color: "bg-rose-500",
    content: (
      <div className="flex flex-col gap-4 w-full h-full p-4 bg-slate-50">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="font-bold text-lg text-slate-800">Expenses</span>
          <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">+</div >
        </div>
        <div className="w-full h-24 rounded-3xl bg-rose-500 text-white p-5 flex flex-col justify-center shadow-lg shadow-rose-500/20">
          <span className="text-xs opacity-80">This Month</span>
          <span className="text-3xl font-bold">$1,200.50</span>
        </div>
        <div className="flex-grow rounded-3xl bg-white border border-slate-100 shadow-sm p-4">
          <div className="w-24 h-4 bg-slate-200 rounded-full mb-4" />
          {[1,2,3,4,5].map(i => (
            <div key={i} className="w-full h-12 mb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-rose-500" />
                </div>
                <div className="w-20 h-3 bg-slate-200 rounded-full" />
              </div>
              <div className="w-10 h-3 bg-slate-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: PieChart,
    color: "bg-purple-500",
    content: (
      <div className="flex flex-col gap-4 w-full h-full p-4 bg-slate-50">
         <div className="w-full flex justify-center mb-4 mt-2">
           <div className="w-40 h-40 rounded-full border-[12px] border-slate-100 flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border-[12px] border-purple-500 border-r-transparent border-b-transparent transform rotate-45" />
             <div className="absolute inset-0 rounded-full border-[12px] border-emerald-500 border-l-transparent border-t-transparent border-b-transparent transform -rotate-12" />
             <span className="font-bold text-xl text-slate-800">72%</span>
           </div>
         </div>
         <div className="grid grid-cols-2 gap-3">
          <div className="h-20 rounded-2xl bg-white border border-slate-100 shadow-sm p-4">
            <div className="w-16 h-2 bg-slate-200 rounded-full mb-3" />
            <div className="w-10 h-4 bg-purple-200 rounded-full" />
          </div>
          <div className="h-20 rounded-2xl bg-white border border-slate-100 shadow-sm p-4">
            <div className="w-16 h-2 bg-slate-200 rounded-full mb-3" />
            <div className="w-10 h-4 bg-emerald-200 rounded-full" />
          </div>
         </div>
         <div className="flex-grow rounded-3xl bg-white border border-slate-100 shadow-sm p-4">
            <div className="w-32 h-4 bg-slate-200 rounded-full mb-4" />
            <div className="w-full h-2 bg-slate-100 rounded-full mb-3"><div className="w-3/4 h-full bg-purple-500 rounded-full" /></div>
            <div className="w-full h-2 bg-slate-100 rounded-full mb-3"><div className="w-1/2 h-full bg-blue-500 rounded-full" /></div>
            <div className="w-full h-2 bg-slate-100 rounded-full"><div className="w-1/4 h-full bg-emerald-500 rounded-full" /></div>
         </div>
      </div>
    )
  },
  {
    id: "savings",
    title: "Savings Goals",
    icon: Target,
    color: "bg-amber-500",
    content: (
      <div className="flex flex-col gap-4 w-full h-full p-4 bg-slate-50">
        <div className="w-full h-32 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 text-white p-5 flex flex-col justify-end shadow-lg shadow-amber-500/20">
          <span className="text-xs opacity-80">Total Savings</span>
          <span className="text-3xl font-bold">$12,000</span>
        </div>
        <div className="flex-grow rounded-3xl bg-white border border-slate-100 shadow-sm p-5">
          <div className="w-full mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-sm text-slate-800">Emergency Fund</span>
              <span className="text-sm font-bold text-amber-500">80%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full"><div className="w-4/5 h-full bg-amber-500 rounded-full shadow-sm" /></div>
          </div>
          <div className="w-full mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-sm text-slate-800">Taxes 2026</span>
              <span className="text-sm font-bold text-blue-500">45%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full"><div className="w-[45%] h-full bg-blue-500 rounded-full shadow-sm" /></div>
          </div>
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-sm text-slate-800">New Laptop</span>
              <span className="text-sm font-bold text-emerald-500">20%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full"><div className="w-1/5 h-full bg-emerald-500 rounded-full shadow-sm" /></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "settings",
    title: "Settings & Vault",
    icon: Settings,
    color: "bg-slate-800",
    content: (
      <div className="flex flex-col gap-4 w-full h-full p-4 bg-slate-50">
        <div className="w-full flex justify-center py-6">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 shadow-sm" />
        </div>
        <div className="flex-grow rounded-3xl bg-white border border-slate-100 shadow-sm p-2">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="w-full h-12 mb-1 flex items-center justify-between px-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-50" />
                <div className="w-24 h-3 bg-slate-200 rounded-full" />
              </div>
              <div className="w-6 h-3 bg-slate-100 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export default function AppScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREENS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % SCREENS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length);

  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            See Tralance <span className="text-[#0066FF]">In Action</span>.
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            A beautifully crafted native experience. Powerful enough to handle complex freelance workflows, simple enough to use every day.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Phone Mockup Frame */}
          <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl flex-shrink-0 border-4 border-slate-800">
            {/* Dynamic Content Mask */}
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {SCREENS[currentIndex].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls & Descriptions */}
          <div className="w-full max-w-md flex flex-col gap-6">
            {SCREENS.map((screen, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div 
                  key={screen.id} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-white shadow-md border border-slate-200' : 'hover:bg-slate-100 border border-transparent'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isActive ? screen.color + ' text-white shadow-md' : 'bg-slate-200 text-slate-500'}`}>
                    <screen.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                      {screen.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
