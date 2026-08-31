import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  CheckCircle2,
  FileText,
  Mail,
} from "lucide-react";
import { personalInfo, impactMetrics } from "../../data/portfolioData";
import { useToast } from "../../context/ToastContext";

export const HeroSection = ({ onNavigate }) => {
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast("Email address copied to clipboard!");
  };

  return (
    <section
      id="hero"
      className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      {/* Top Monospace Metadata Row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-8 pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
          <span className="uppercase tracking-wider font-semibold text-zinc-800 dark:text-zinc-200">
            Available for Senior Roles
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          <span>EXPERIENCE: 3.5+ YEARS</span>
          <span>•</span>
          <span>SPECIALTY: REACT • TYPESCRIPT • ARCHITECTURE</span>
        </div>
      </motion.div>

      {/* Main Typographic Headline */}
      <div className="space-y-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08]"
        >
          Senior Frontend Engineer <span className="font-serif italic font-normal text-zinc-500 dark:text-zinc-400">crafting</span> scalable React systems & high-craft UI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl"
        >
          I specialize in architecting high-throughput data layers, normalized Redux state machines, design systems, and sub-second Core Web Vitals optimizations for enterprise healthcare and high-traffic citizen platforms.
        </motion.p>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 pt-4"
        >
          <button
            onClick={() => onNavigate("work")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-xs font-mono uppercase tracking-wider font-semibold transition cursor-pointer shadow-xs"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-mono uppercase tracking-wider font-medium border border-zinc-200 dark:border-zinc-800 transition cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5 opacity-60" />
            <span>Copy Email</span>
          </button>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs font-mono uppercase tracking-wider font-medium border border-zinc-300 dark:border-zinc-800 transition"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>
      </div>

      {/* Metrics Row - Tabular & Clean with Versatile Shades */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 mt-16 border-t border-zinc-200/60 dark:border-zinc-800/60"
      >
        {impactMetrics.map((metric, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              [0{idx + 1}]
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-zinc-900 dark:text-zinc-100">
              {metric.value} <span className="text-xs font-sans font-medium text-zinc-500 dark:text-zinc-400">{metric.suffix}</span>
            </div>
            <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 leading-tight">
              {metric.label}
            </p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
              {metric.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
