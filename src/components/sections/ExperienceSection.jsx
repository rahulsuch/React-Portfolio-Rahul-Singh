import React from "react";
import { experienceTimeline } from "../../data/portfolioData";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="space-y-2 mb-16">
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
          [02] CAREER & TRACK RECORD
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Work Experience & Enterprise Systems
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          3.5+ years building and scaling production frontends for enterprise healthcare diagnostic portals and public sector citizen systems.
        </p>
      </div>

      {/* Experience Timeline Rows */}
      <div className="space-y-16">
        {experienceTimeline.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-16 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-b-0 last:pb-0"
          >
            {/* Left Column: Role, Company & Meta */}
            <div className="lg:col-span-4 space-y-3">
              <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold tracking-wider uppercase">
                {exp.period}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {exp.role}
              </h3>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                  {exp.company}
                </p>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {exp.division}
                </p>
              </div>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-1.5 pt-4">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative & Key Accomplishments */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Deliverables list */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                  Key Technical Impact & Deliverables
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3">
                      <span className="font-mono text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5">
                        —
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
