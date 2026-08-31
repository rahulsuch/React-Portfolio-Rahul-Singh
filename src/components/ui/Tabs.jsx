import React from "react";
import { motion } from "framer-motion";

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  className = "",
  layoutId = "active-tab-pill",
}) => {
  return (
    <div
      role="tablist"
      className={`inline-flex items-center gap-1.5 p-1 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 backdrop-blur-md ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors z-10 ${
              isActive
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl shadow-xs border border-gray-200/60 dark:border-gray-700/60 z-[-1]"
              />
            )}
            <span className="flex items-center gap-2">
              {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
              {tab.label}
              {tab.count !== undefined && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
