import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { useToast } from "../../context/ToastContext";

export const Footer = () => {
  const { showToast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast("Email copied to clipboard!");
  };

  return (
    <footer className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 font-mono text-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>{personalInfo.name}</span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span className="font-normal text-zinc-500 dark:text-zinc-400">Senior Frontend Engineer</span>
          </div>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
            Built with React 18, Tailwind CSS, Vite & Framer Motion. Zero layout shifts.
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={copyEmail}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition cursor-pointer"
          >
            Copy Email
          </button>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition cursor-pointer border border-zinc-200 dark:border-zinc-800 shadow-2xs"
            aria-label="Back to Top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-200/40 dark:border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} Rahul Singh. All rights reserved.</span>
        <span>India Standard Time (IST / UTC+5:30)</span>
      </div>
    </footer>
  );
};

export default Footer;
