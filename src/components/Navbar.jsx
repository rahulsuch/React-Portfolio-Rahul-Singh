import React from "react";
import { FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ activePage, setActivePage, setHoveredPage }) => {
  const links = ["home", "about", "projects", "contact"];

  var classes = document.body.classList;
  console.log(classes);

  return (
    <>
      {/* Desktop & Tablet Vertical Navbar */}
      <div
        className="hidden md:flex flex-col justify-between items-center h-screen w-[9vw] fixed top-0 left-0 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 z-50 px-2 py-6"
        style={{ boxShadow: "4px 0 8px rgba(0, 0, 0, 0.1)" }}
      >
        {/* Nav Links */}
        <ul className="space-y-8">
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              borderRadius: "8px",
              padding: "6px 12px",
              transition: "background-color 0.3s, transform 0.2s",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            {/* {classes.includes("dark") ? ( */}
              <FaSun className="text-yellow-400" size={18} />
            {/* ) : (
              <FaMoon className="text-white-500" size={18} />
            )} */}
            <span
              style={{ fontSize: ".5em" }}
              className="text-gray-700 dark:text-gray-100"
            >
              Toggle Theme
            </span>
          </li>
          {links.map((link) => (
            <li key={link}>
              <button
                onMouseEnter={() => link !== activePage && setHoveredPage(link)}
                onMouseLeave={() => setHoveredPage(null)}
                onClick={() => setActivePage(link)}
                className={`text-xs font-semibold transition duration-200 origin-left pl-4 ${
                  activePage === link
                    ? "scale-110 text-blue-600"
                    : "hover:scale-110 text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        {/* Social Links */}
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://www.linkedin.com/in/rahul-singh-public-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Horizontal Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 shadow-md">
        <div className="flex flex-wrap justify-center gap-4 py-3">
          {links.map((link) => (
            <motion.button
              key={link}
              onClick={() => setActivePage(link)}
              className={`text-sm px-4 py-1.5 rounded-full font-semibold transition-all duration-300 ${
                activePage === link
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Social Icons (below nav links) */}
        <div
          className={`flex justify-center items-center gap-4 py-2 ${
            activePage ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-800"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/rahul-singh-public-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              activePage ? "text-white" : "text-gray-700 dark:text-white"
            } hover:text-white transition-transform transform hover:scale-110`}
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
