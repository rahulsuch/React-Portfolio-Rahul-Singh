import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGitlab,
  FaBootstrap,
  FaJenkins,
} from "react-icons/fa";

import {
  SiRedux,
  SiJson,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

import { TbApi, TbCube } from "react-icons/tb";
import { MdOutlineBugReport, MdDashboardCustomize } from "react-icons/md";
import { RiDashboardLine, RiKeyFill } from "react-icons/ri";
import { BsDiagram3 } from "react-icons/bs";
import { PiCirclesThreeBold } from "react-icons/pi";

const About = () => {
  const profileImg = (import.meta.env.VITE_IMAGE_SRC || "/assets/").endsWith("/")
    ? (import.meta.env.VITE_IMAGE_SRC || "/assets/") + "rahul_profile.png"
    : (import.meta.env.VITE_IMAGE_SRC || "/assets/") + "/rahul_profile.png";

  const keySkills = [
    { name: "AGILE", icon: <BsDiagram3 /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "JSON", icon: <SiJson /> },
    { name: "RESTful APIs", icon: <TbApi /> },
    { name: "JWT Auth", icon: <RiKeyFill /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Three.js", icon: <TbCube /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitLab", icon: <FaGitlab /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "Responsive UI", icon: <RiDashboardLine /> },
    { name: "Debugging", icon: <MdOutlineBugReport /> },
    { name: "Scalability", icon: <PiCirclesThreeBold /> },
    { name: "Optimization", icon: <MdDashboardCustomize /> },
  ];

  const softSkills = [
    "Problem Solving",
    "Improving Scalability",
    "Optimization",
    "Deployment",
    "CI/CD Pipeline",
  ];

  const badgeStyles = [
    "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800/40",
    "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/40",
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/40",
    "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/40",
    "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/40",
    "bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300 dark:border-pink-800/40",
    "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800/40",
    "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/40",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/40",
  ];

  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 md:pl-28 bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-500 scroll-smooth"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* ------------------ IMAGE SECTION ------------------ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[40%] flex justify-center items-center"
        >
          {/* Mobile Circular Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="block sm:hidden w-[70vw] h-[70vw] rounded-full object-cover shadow-md"
            loading="lazy"
          />

          {/* Tablet + Desktop Image */}
          <div className="hidden sm:block aspect-[3/4] w-[75%] sm:w-[60%] md:w-[55%] lg:w-[80%] xl:w-[70%] max-w-[360px] overflow-hidden rounded-xl shadow-xl">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ------------------ CONTENT SECTION ------------------ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
            About Me
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed text-center lg:text-left text-gray-700 dark:text-gray-300">
            Frontend developer with over 3.5 years of experience building
            scalable, intuitive web applications using React, Redux, and modern
            styling frameworks. Focused on performance, clean UI, API
            integration, and long-term maintainability.
          </p>

          {/* ---- TECHNICAL SKILLS ---- */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {keySkills.map((skill, i) => (
                <motion.span
                  key={i}
                  className={`text-sm px-3 py-2 rounded-xl shadow-sm font-medium flex items-center gap-2 border border-transparent ${badgeStyles[i % badgeStyles.length]} cursor-pointer`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {skill.icon} {skill.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ---- SOFT SKILLS ---- */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {softSkills.map((tag, i) => (
                <motion.span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-transparent dark:border-blue-800/40 text-sm px-3 py-1 rounded-full font-medium"
                  whileHover={{ scale: 1.08 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
