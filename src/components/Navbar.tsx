"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Privacy", href: "/privacy" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/40 dark:bg-[#0B1020]/80 dark:border-[rgba(255,255,255,0.08)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
                <img src="/app-icon.png" alt="Tralance Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-[#AEB7C6] bg-clip-text text-transparent">
                Tralance
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive 
                      ? "text-primary dark:text-white" 
                      : "text-slate-600 dark:text-[#AEB7C6] hover:text-primary dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-[#AEB7C6] dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.sachin.tralance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-blue-600 transition-all shadow-md shadow-primary/20 hover:shadow-primary/30"
            >
              Get App
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] text-slate-600 dark:text-[#AEB7C6] dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] text-slate-600 dark:text-[#AEB7C6] dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200/50 dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-[#0B1020] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                      pathname === item.href
                        ? "bg-slate-50 text-primary dark:bg-[#1A2238] dark:text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary dark:text-[#AEB7C6] dark:hover:bg-[#1A2238] dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2 px-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sachin.tralance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold text-white bg-primary hover:bg-blue-600 transition-all shadow-md shadow-primary/20"
                >
                  Get App on Google Play
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
