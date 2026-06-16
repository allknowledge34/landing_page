import React from "react";
import FinalCTA from "@/components/FinalCTA";
import { Sparkles } from "lucide-react";
import FounderProfile from "@/components/about/FounderProfile";
import { DESIGN_PHILOSOPHIES } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
          Our Story
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mt-6 leading-tight text-slate-900 dark:text-white">
          Software built on trust, <br />
          <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            not surveillance.
          </span>
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Tralance was designed to replace bloated financial apps that compromise user privacy and charge recurring subscription fees.
        </p>
      </section>

      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <FounderProfile />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex self-start px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
              The Mission
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Behind Tralance
            </h2>
            <div className="text-slate-500 dark:text-slate-350 text-sm sm:text-base leading-relaxed flex flex-col gap-4 max-w-xl">
              <p>
                Tralance was designed and developed by Sachin Kumar, a Full-Stack & Android Developer dedicated to building production-grade, privacy-first applications. Frustrated by bloated finance apps that compromise user privacy, Tralance was built to provide independent professionals with a secure local-first solution.
              </p>
              <p>
                Our roadmap is guided by a commitment to zero tracking, no cloud dependencies, and complete code speed. We build utilities to help freelancers manage fluctuating budgets, parse SMS bank notifications privately, and own their files.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-slate-55/30 dark:bg-white/[0.005] border-y border-slate-200/50 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-12 text-center">
            Design Philosophies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESIGN_PHILOSOPHIES.map((phil, idx) => (
              <div key={idx} className="glass dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col gap-3">
                <span className="text-xs font-black text-primary dark:text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {phil.title}
                </span>
                <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
