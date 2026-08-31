import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { caseStudies } from "../../data/portfolioData";

export const ProjectsSection = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => [
    { id: "all", label: "All Work" },
    { id: "Enterprise & Scalability", label: "Enterprise Scale" },
    { id: "Creative Frontend & 3D", label: "Creative & 3D" },
    { id: "Architecture & Systems", label: "Systems & Engines" },
  ], []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return caseStudies;
    return caseStudies.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-2">
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
            [01] SELECTED PRODUCTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Case Studies & Architecture
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
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

      {/* Case Study Cards */}
      <div className="space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-2xs"
            >
              {/* Left Column: Image Preview */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 text-zinc-100 text-xs font-mono uppercase tracking-wider backdrop-blur-md border border-white/20">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Right Column: Case Study Details */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  <span>[0{idx + 1}]</span>
                  <span className="uppercase font-semibold">{project.category}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.subtitle}
                  </p>
                </div>

                {/* Key Architecture Points */}
                <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {project.architectureHighlights.slice(0, 2).map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium"
                    >
                      <span className="font-mono text-zinc-400 dark:text-zinc-500 shrink-0">•</span>
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-300 text-[11px] font-mono border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Read Case Study Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                    <span>Full Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>

                  <div
                    className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition p-1"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition p-1"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
