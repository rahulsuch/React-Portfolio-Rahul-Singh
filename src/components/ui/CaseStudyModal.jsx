import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export const CaseStudyModal = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.coverImage];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#fafafa] dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-y-auto z-10 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#fafafa]/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {project.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold truncate max-w-[280px] sm:max-w-md">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Image Preview & Gallery */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-950 border border-neutral-800 shadow-inner group">
                <img
                  src={gallery[activeImageIndex]}
                  alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/10 transition opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/10 transition opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1 rounded-full bg-black/50 backdrop-blur-md">
                      {gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            idx === activeImageIndex
                              ? "w-4 bg-white"
                              : "bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Subtitle & Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {project.subtitle}
                </p>
                <div className="flex items-center gap-3 shrink-0">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-100 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 text-xs font-mono uppercase tracking-wider font-semibold transition"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
                  <span className="font-mono text-xs uppercase font-bold text-neutral-500 block">
                    The Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
                  <span className="font-mono text-xs uppercase font-bold text-neutral-500 block">
                    Engineering Solution
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  {project.architectureHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-neutral-400 dark:text-neutral-600 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
