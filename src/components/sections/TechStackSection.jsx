import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Layers } from "lucide-react";
import { techMatrix } from "../../data/portfolioData";

export const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Flatten all items with their category
  const allSkills = useMemo(() => {
    return techMatrix.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, category: cat.category }))
    );
  }, []);

  // Split into 2 alternating rows for the infinite sliding marquee belts
  const row1 = useMemo(() => {
    const list = activeCategory === "all"
      ? allSkills.slice(0, Math.ceil(allSkills.length / 2))
      : allSkills.filter((s) => s.category === activeCategory);
    return [...list, ...list, ...list]; // 3x for smooth infinite loop
  }, [allSkills, activeCategory]);

  const row2 = useMemo(() => {
    const list = activeCategory === "all"
      ? allSkills.slice(Math.ceil(allSkills.length / 2))
      : allSkills.filter((s) => s.category === activeCategory);
    return [...list, ...list, ...list];
  }, [allSkills, activeCategory]);

  const categories = [
    { id: "all", label: "All Ecosystem" },
    { id: "Core Languages & Foundations", label: "Languages" },
    { id: "Frameworks & State Management", label: "Frameworks & State" },
    { id: "UI Systems & Motion", label: "UI & Motion" },
    { id: "Architecture & Performance", label: "Architecture" },
    { id: "Testing & DevOps", label: "Testing & DevOps" },
  ];

  return (
    <section
      id="stack"
      className="py-24 max-w-6xl mx-auto border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
            [03] TECHNICAL MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Ecosystem & Proficiency
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Interactive sliding belt of production-tested technologies, frameworks, and architecture patterns.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide uppercase transition cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Sliding Tile Belt Container with Edge Gradient Fades */}
      <div className="relative w-full space-y-4 py-4">
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#fafafa] dark:from-[#0a0a0a] to-transparent z-10" />
        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#fafafa] dark:from-[#0a0a0a] to-transparent z-10" />

        {/* Marquee Row 1 (Left-moving) */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: activeCategory === "all" ? 35 : 20,
            }}
          >
            {row1.map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-72 sm:w-80 shrink-0 p-4 rounded-2xl bg-white dark:bg-[#141414] border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold border border-zinc-200/60 dark:border-zinc-700/60">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 pt-1 border-t border-zinc-100 dark:border-zinc-800/60">
                  <span className="truncate">{item.category}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Active</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Right-moving) */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: activeCategory === "all" ? 38 : 22,
            }}
          >
            {row2.map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-72 sm:w-80 shrink-0 p-4 rounded-2xl bg-white dark:bg-[#141414] border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold border border-zinc-200/60 dark:border-zinc-700/60">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 pt-1 border-t border-zinc-100 dark:border-zinc-800/60">
                  <span className="truncate">{item.category}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Active</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
