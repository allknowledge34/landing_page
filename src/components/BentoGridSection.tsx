"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Briefcase, Users, PieChart, FileText, PiggyBank, Shield, Cloud, Download, CheckCircle2 } from "lucide-react";

const FEATURES = [
  { icon: TrendingUp, title: "Income", desc: "Track every freelance payment easily.", color: "text-emerald-500 bg-emerald-50" },
  { icon: TrendingDown, title: "Expense", desc: "Log business & personal spending.", color: "text-rose-500 bg-rose-50" },
  { icon: Briefcase, title: "Projects", desc: "Organize finances by specific projects.", color: "text-purple-500 bg-purple-50" },
  { icon: Users, title: "Clients", desc: "Monitor revenue per client.", color: "text-blue-500 bg-blue-50" },
  { icon: PieChart, title: "Analytics", desc: "Actionable financial charts.", color: "text-sky-500 bg-sky-50" },
  { icon: FileText, title: "Reports", desc: "Generate professional summaries.", color: "text-orange-500 bg-orange-50" },
  { icon: PiggyBank, title: "Savings", desc: "Set aside money for taxes & goals.", color: "text-amber-500 bg-amber-50" },
  { icon: Shield, title: "Privacy", desc: "100% on-device local data.", color: "text-teal-500 bg-teal-50" },
  { icon: Cloud, title: "Backup", desc: "Secure encrypted manual backups.", color: "text-indigo-500 bg-indigo-50" },
  { icon: Download, title: "Export", desc: "Export to CSV anytime.", color: "text-slate-600 bg-slate-100" }
];

const SPECS = [
  "100% Offline",
  "Local SQLite Storage",
  "Fast Performance",
  "Project Tracking",
  "CSV Export",
  "Privacy First"
];

export default function BentoGridSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Everything you need.
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            A carefully curated suite of tools built specifically to handle the chaos of freelance income and variable project expenses.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
        >
          {FEATURES.map((feat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.color} group-hover:scale-110 transition-transform duration-300`}>
                <feat.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Specifications List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[3rem] border border-slate-200 p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SPECS.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span className="text-sm font-bold text-slate-800">{spec}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
