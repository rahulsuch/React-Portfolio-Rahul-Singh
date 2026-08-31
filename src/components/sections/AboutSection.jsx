import React from "react";
import { motion } from "framer-motion";
import {
  User,
  CheckCircle2,
  Code2,
  Sparkles,
  Layers,
  Zap,
  Globe,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo, impactMetrics } from "../../data/portfolioData";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export const AboutSection = ({ onNavigate }) => {
  const highlights = [
    {
      title: "Senior Frontend Architecture",
      desc: "Specialized in component lifecycle design, normalized state with Redux Toolkit, and scalable micro-frontend architectures.",
    },
    {
      title: "Sub-Second Web Performance",
      desc: "Obsessed with Core Web Vitals (LCP < 1.2s, INP < 100ms, CLS = 0), code splitting, tree shaking, and virtualized lists.",
    },
    {
      title: "Enterprise Systems & A11y",
      desc: "Deep experience delivering mission-critical healthcare analytics and governmental portals compliant with WCAG 2.1 AA.",
    },
    {
      title: "Full API Lifecycle & Security",
      desc: "Integrated 100+ REST and GraphQL endpoints with JWT authentication, token rotation, and robust error boundaries.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
          <User className="w-4 h-4" />
          Technical Profile
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Engineering Leadership & Focus
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
          A frontend engineer focused on building robust, accessible, and high-performance digital products that scale with business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Profile Framing & Core Info */}
        <div className="lg:col-span-5 space-y-6">
          <SpotlightCard className="p-6 border-gray-200 dark:border-gray-800/80 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-18 h-18 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-lg">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl bg-gray-900"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {personalInfo.title}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Available for H2 2026 roles
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                iconRight={ArrowUpRight}
                onClick={() => onNavigate("contact")}
              >
                Connect
              </Button>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Key Technical Strengths */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="p-5 border-gray-200 dark:border-gray-800/80 space-y-2.5"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
