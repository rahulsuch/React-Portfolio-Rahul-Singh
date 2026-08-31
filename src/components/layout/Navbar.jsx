import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Search,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { personalInfo } from "../../data/portfolioData";

export const Navbar = ({ activeSection, onNavigate, onOpenCommandPalette }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false };
      setTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "stack", label: "Stack" },
    { id: "philosophy", label: "Philosophy" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#fafafa]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-2xs py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Left: Brand Monogram & Live Status */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("hero")}
              className="group flex items-center gap-2.5 cursor-pointer text-left"
              aria-label="Home"
            >
              <span className="font-mono font-bold text-xs tracking-wider uppercase px-2 py-1 rounded-md bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 group-hover:opacity-80 transition">
                RS
              </span>
              <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                {personalInfo.name}
              </span>
            </button>

            {/* Live IST Time & Availability */}
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{time ? `${time} IST` : "India"}</span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">Available</span>
            </div>
          </div>

          {/* Center: Minimalist Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs font-mono tracking-wide uppercase transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? "text-zinc-900 dark:text-zinc-100 font-bold"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-zinc-900 dark:bg-zinc-100"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (Command Menu + Theme Switch) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 transition cursor-pointer"
              title="Command Palette (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition cursor-pointer"
              title={`Switch Theme`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="fixed top-16 left-4 right-4 p-6 rounded-2xl bg-[#fafafa] dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-4 z-40 text-zinc-900 dark:text-zinc-100"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center justify-between p-2.5 rounded-lg text-sm font-mono uppercase tracking-wider text-left hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </div>
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>{personalInfo.email}</span>
                <span>{time} IST</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
