import React, { useState } from "react";
import {
  FaLinkedin,
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaComments, // 👈 ADD THIS
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useChat } from "../context/ChatContext"; // 👈 ADD THIS

const Navbar = ({ activePage, setActivePage, setHoveredPage }) => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const { toggleChat } = useChat(); // 👈 for opening chatbot

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const links = [
    { name: "home", icon: <FaHome /> },
    { name: "about", icon: <FaUser /> },
    { name: "projects", icon: <FaProjectDiagram /> },
    { name: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col justify-between items-center h-screen w-[7em] fixed top-0 left-0 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 shadow-lg z-50 py-8">
        {/* Top: Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          title="Toggle Theme"
        >
          {isDark ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-gray-600 text-lg" />
          )}
        </button>

        {/* Middle: Navigation Links */}
        <ul className="flex flex-col items-center space-y-8">
          {links.map(({ name, icon }) => (
            <motion.li key={name} whileHover={{ scale: 1.1 }}>
              <button
                onClick={() => setActivePage(name)}
                onMouseEnter={() => setHoveredPage(name)}
                onMouseLeave={() => setHoveredPage(null)}
                className={`flex flex-col items-center justify-center text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activePage === name
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-300 hover:text-blue-500"
                }`}
              >
                <motion.div
                  className={`p-3 rounded-2xl ${
                    activePage === name
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  } transition-all`}
                >
                  {icon}
                </motion.div>
                <span className="mt-1">{name}</span>
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Bottom: Social Links */}
        <div className="flex flex-col items-center space-y-5">
          <a
            href="https://www.linkedin.com/in/rahul-singh-public-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-14 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 shadow-lg z-50">
        {links.map(({ name, icon }) => (
          <motion.button
            key={name}
            onClick={() => setActivePage(name)}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center text-[10px] font-semibold ${
              activePage === name
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <div
              className={`p-2 rounded-xl ${
                activePage === name
                  ? "bg-blue-100 dark:bg-blue-900"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              } transition-all`}
            >
              {icon}
            </div>
            <span className="mt-0.5">{name}</span>
          </motion.button>
        ))}

        {/* 🌙 Theme Toggle (Mobile) */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center text-[10px] font-semibold text-gray-500 dark:text-gray-300 hover:text-blue-600"
        >
          <div className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </div>
          <span className="mt-0.5">theme</span>
        </motion.button>

        {/* 💬 Chatbot Button */}
        <motion.button
          onClick={toggleChat}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center text-[10px] font-semibold text-gray-500 dark:text-gray-300 hover:text-blue-600"
        >
          <div className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            <FaComments />
          </div>
          <span className="mt-0.5">chat</span>
        </motion.button>
      </div>
    </>
  );
};

export default Navbar;
