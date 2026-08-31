import React, { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  FolderGit2,
  Briefcase,
  Layers,
  Cpu,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  Copy,
  ExternalLink,
  ArrowRight,
  FileText,
  X,
  CornerDownLeft,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useToast } from "../../context/ToastContext";
import { personalInfo } from "../../data/portfolioData";

export const CommandPalette = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const commands = useMemo(() => [
    {
      group: "Navigation",
      items: [
        {
          id: "nav-work",
          label: "Selected Work & Case Studies",
          sublabel: "Enterprise MIS, Interactive 3D, Form Engine",
          icon: FolderGit2,
          action: () => {
            onNavigate("work");
            onClose();
          },
        },
        {
          id: "nav-experience",
          label: "Experience Timeline",
          sublabel: "Becton Dickinson & Public Digital Transformation",
          icon: Briefcase,
          action: () => {
            onNavigate("experience");
            onClose();
          },
        },
        {
          id: "nav-stack",
          label: "Technical Stack Matrix",
          sublabel: "React 18, Redux Toolkit, TypeScript, Web Performance",
          icon: Cpu,
          action: () => {
            onNavigate("stack");
            onClose();
          },
        },
        {
          id: "nav-philosophy",
          label: "Engineering Philosophy",
          sublabel: "Sub-second CWV, State Machines, A11y, Design Systems",
          icon: Layers,
          action: () => {
            onNavigate("philosophy");
            onClose();
          },
        },
        {
          id: "nav-contact",
          label: "Contact & Collaboration",
          sublabel: "Direct channels, live timezone & message form",
          icon: Mail,
          action: () => {
            onNavigate("contact");
            onClose();
          },
        },
      ],
    },
    {
      group: "Quick Actions",
      items: [
        {
          id: "action-copy-email",
          label: "Copy Email Address",
          sublabel: personalInfo.email,
          icon: Copy,
          action: () => {
            navigator.clipboard.writeText(personalInfo.email);
            showToast("Email address copied to clipboard!");
            onClose();
          },
        },
        {
          id: "action-theme",
          label: `Switch to ${isDark ? "Light" : "Dark"} Mode`,
          sublabel: "Toggle interface appearance",
          icon: isDark ? Sun : Moon,
          action: () => {
            toggleTheme();
            showToast(`Theme switched to ${!isDark ? "Dark" : "Light"} mode`);
            onClose();
          },
        },
        {
          id: "action-resume",
          label: "LinkedIn Profile / Resume",
          sublabel: "Connect on LinkedIn for full CV",
          icon: FileText,
          action: () => {
            window.open(personalInfo.socials.linkedin, "_blank");
            onClose();
          },
        },
      ],
    },
    {
      group: "Social & Code",
      items: [
        {
          id: "social-github",
          label: "GitHub Profile",
          sublabel: "github.com/rahulsuch",
          icon: Github,
          action: () => {
            window.open(personalInfo.socials.github, "_blank");
            onClose();
          },
        },
        {
          id: "social-linkedin",
          label: "LinkedIn Profile",
          sublabel: "linkedin.com/in/rahul-singh-public-profile",
          icon: Linkedin,
          action: () => {
            window.open(personalInfo.socials.linkedin, "_blank");
            onClose();
          },
        },
      ],
    },
  ], [isDark, onNavigate, onClose, showToast, toggleTheme]);

  const flatItems = useMemo(() => {
    const all = [];
    commands.forEach((g) => {
      g.items.forEach((item) => {
        if (
          !query.trim() ||
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.sublabel.toLowerCase().includes(query.toLowerCase())
        ) {
          all.push(item);
        }
      });
    });
    return all;
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate(null);
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (flatItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatItems.length) % (flatItems.length || 1));
      } else if (e.key === "Enter" && flatItems[selectedIndex]) {
        e.preventDefault();
        flatItems[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, flatItems, selectedIndex, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-2xl bg-[#fafafa] dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search work, sections, actions..."
                className="w-full bg-transparent text-sm font-mono text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              ref={listRef}
              className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-neutral-100 dark:divide-neutral-800/40 font-mono"
            >
              {flatItems.length === 0 ? (
                <div className="py-12 text-center text-neutral-400 text-xs">
                  No commands found matching "{query}"
                </div>
              ) : (
                flatItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-neutral-200/70 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          : "hover:bg-neutral-100 dark:hover:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className="w-4 h-4 shrink-0 opacity-60" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider truncate">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 truncate font-sans">
                            {item.sublabel}
                          </p>
                        </div>
                      </div>

                      {isSelected && (
                        <CornerDownLeft className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      )}
                    </div>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-neutral-100/50 dark:bg-neutral-950/80 border-t border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-400 font-mono">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800">↑↓</kbd> navigate</span>
                <span><kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800">↵</kbd> select</span>
                <span><kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800">esc</kbd> close</span>
              </div>
              <span>Rahul Singh</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
