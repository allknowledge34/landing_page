import React from "react";
import { Metadata } from "next";
import { Mail, Cpu } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import FaqAccordion from "@/components/contact/FaqAccordion";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Tralance Expense Manager Support",
  description: "Get support for Tralance, the ultimate offline income and expense tracker app. Reach out for developer audits or general help.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
          Help Center
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mt-6 leading-tight text-slate-900 dark:text-white">
          {"We're here to help."}
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Have questions about variable budgets, SMS triggers, or local backup files? Drop us a line.
        </p>
      </section>

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Direct Contact</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-3">
                Reach out directly to Sachin Kumar for database support or custom developer audits.
              </p>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold text-sm">
                <Mail className="w-4.5 h-4.5 text-primary" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:underline">
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
            </div>

            <div className="h-px bg-slate-200 dark:bg-white/5" />

            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Platform Specs</h3>
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span>Android 8.0 (API 26) & above</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Optimized for Android 16 (API 36)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-55/30 dark:bg-white/[0.005] border-t border-slate-200/50 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
