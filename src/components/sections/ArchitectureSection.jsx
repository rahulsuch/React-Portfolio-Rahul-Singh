import React, { useState } from "react";
import { engineeringPillars, codeSnippets } from "../../data/portfolioData";

export const ArchitectureSection = () => {
  const [activeCodeIdx, setActiveCodeIdx] = useState(0);

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="space-y-2 mb-16">
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
          [04] ARCHITECTURE & CRAFT
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Senior Frontend Philosophy
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Core architectural principles refined across enterprise scale — prioritizing sub-second performance, deterministic state, and accessible design.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {engineeringPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {pillar.title}
                </h3>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {pillar.subtitle}
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 font-bold">
                [0{idx + 1}]
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              {pillar.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5">
                  <span className="font-mono text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interactive Code Architecture Inspector */}
      <div className="rounded-3xl bg-[#0c0c0c] border border-zinc-800 overflow-hidden text-zinc-100 shadow-xl">
        {/* Code Bar Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/60 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              Architecture Snippet
            </span>
            <span className="text-zinc-600">•</span>
            <span className="font-mono text-xs text-zinc-200 font-medium">
              {codeSnippets[activeCodeIdx].title}.ts
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-1.5">
            {codeSnippets.map((snippet, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCodeIdx(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition cursor-pointer ${
                  activeCodeIdx === idx
                    ? "bg-zinc-800 text-zinc-100 font-bold border border-zinc-700"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {snippet.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Code Body */}
        <div className="p-4 sm:p-6 font-mono text-xs overflow-x-auto bg-[#0a0a0a]">
          <pre className="leading-relaxed text-zinc-300">
            <code>{codeSnippets[activeCodeIdx].code}</code>
          </pre>
        </div>

        {/* Code Description Footer */}
        <div className="px-4 sm:px-6 py-3 bg-black/60 border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center justify-between font-mono">
          <span className="text-zinc-400">{codeSnippets[activeCodeIdx].description}</span>
          <span className="text-zinc-500 text-[11px]">TypeScript Strict Mode</span>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
