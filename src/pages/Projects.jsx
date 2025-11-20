import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaTimes,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiJsonwebtokens,
} from "react-icons/si";
import { MdClose } from "react-icons/md";
// import env from "react-dotenv";

const iconMap = {
  React: <FaReact className="text-sky-500" size={22} />,
  Redux: <SiRedux className="text-purple-500" size={22} />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500" size={22} />,
  Bootstrap: <FaBootstrap className="text-indigo-600" size={22} />,
  HTML: <FaHtml5 className="text-orange-600" size={22} />,
  CSS: <FaCss3Alt className="text-blue-600" size={22} />,
  JavaScript: <SiJavascript className="text-yellow-400" size={22} />,
  JWT: <SiJsonwebtokens className="text-green-500" size={22} />,
  Git: <FaGitAlt className="text-red-600" size={22} />,
};

const allSkills = [
  "React",
  "Redux",
  "TailwindCSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "JavaScript",
  "JWT",
  "Three.js",
  "Git",
];

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    images: [
      import.meta.env.VITE_IMAGE_SRC + "About_screenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "Home_screenshot.png",
    ],
    description:
      "A modern portfolio built using React, Tailwind, and Three.js with animated transitions and responsive layout.",
    techStack: ["React", "TailwindCSS", "Three.js", "Redux", "JavaScript"],
    category: ["UI", "3D"],
  },
  {
    id: 2,
    title: "API Dashboard",
    images: [
      import.meta.env.VITE_IMAGE_SRC + "Dashboard_Login.png",
      import.meta.env.VITE_IMAGE_SRC + "Certificate_Screenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "MIS_HomeScreenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "ReportList_Screenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "ReportForm_Screenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "Dashboard_Screenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "Dashboard1_Screenshot.png",
      import.meta.env.VITE_IMAGE_SRC + "Dashboard2_Screenshot.png",
    ],
    description:
      "JWT-authenticated dashboard integrating 100+ REST APIs with Redux and reusable components.",
    techStack: ["React", "Redux", "JWT", "Bootstrap", "Git"],
    category: ["UI", "API"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState(
    () => JSON.parse(localStorage.getItem("selectedSkills")) || []
  );

  useEffect(() => {
    localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
  }, [selectedSkills]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const resetFilters = () => {
    setSelectedSkills([]);
  };

  const filteredProjects =
    selectedSkills.length === 0
      ? projects
      : projects.filter((project) =>
          selectedSkills.every((skill) => project.techStack.includes(skill))
        );

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white dark:from-[#1a032a] dark:via-[#2a0a3c] dark:to-[#0d0d1a] transition-colors duration-700">
      {/* Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-black bg-gradient-to-r from-purple-700 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-300">
          Featured Projects
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 font-medium">
          A showcase of my latest work with modern web technologies.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="mb-8 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {selectedSkills.map((skill) => (
            <span
              key={skill}
              className="flex items-center bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-white px-3 py-1 rounded-full shadow text-sm"
            >
              {skill}
              <MdClose
                className="ml-2 cursor-pointer"
                onClick={() => handleSkillToggle(skill)}
              />
            </span>
          ))}
          {selectedSkills.length > 0 && (
            <button
              onClick={resetFilters}
              className="ml-3 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-full transition"
            >
              Reset Filters
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => handleSkillToggle(skill)}
              className={`px-3 py-1 rounded-full border text-sm transition ${
                selectedSkills.includes(skill)
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-white border-gray-300 dark:border-gray-500"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Project Tiles */}
      <motion.div
        className="grid gap-8 justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          display: "grid",
          perspective: "1000px",
        }}
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-white/80 dark:bg-gray-800/60 backdrop-blur-md shadow-lg rounded-xl overflow-hidden cursor-pointer mx-auto transition-all duration-300 w-full aspect-[2.29/1] flex flex-col sm:block max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[40vw]"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 110,
                damping: 14,
              }}
            >
              {/* Image section */}
              <div className="relative w-full h-full aspect-[2.29/1] sm:aspect-auto">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Project Title Always visible */}
                <div className="absolute top-2 left-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                  {project.title}
                </div>
              </div>

              {/* Overlay Content: Desktop/Tablet = on hover; Mobile = always visible */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`
                  px-4 py-3 text-white w-full bg-black/40 hover:bg-black/90 transition-all duration-300
                  sm:absolute sm:inset-0 sm:opacity-0 sm:group-hover:opacity-100 sm:flex sm:flex-col sm:justify-center sm:items-center
                  flex flex-col mt-[calc(100%+1rem)] sm:mt-0
                `}
              >
                <div className="text-center w-full">
                  <p className="text-sm mb-2 text-gray-100 leading-snug visibility-hidden  group-hover:visibility-visible">
                    {project.description.slice(0, 100)}...
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full ${
                          selectedSkills.includes(tech)
                            ? "bg-purple-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2 mb-2">
                    {project.category.map((cat, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-yellow-300 text-black"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-md transition-all duration-300"
                  >
                    Mini Documentation
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 max-w-[95vw] sm:max-w-3xl md:max-w-4xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 14,
              },
            }}
            exit={{ scale: 0.6, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <FaTimes size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">
              {selectedProject.title}
            </h2>

            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              showArrows
              showStatus={false}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    onClick={onClickHandler}
                    className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
                  >
                    ❮
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    onClick={onClickHandler}
                    className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
                  >
                    ❯
                  </button>
                )
              }
            >
              {selectedProject.images.map((img, idx) => (
                <div key={idx} className="px-2">
                  <img
                    src={img}
                    alt={`Slide ${idx}`}
                    className="rounded-lg object-contain max-h-[400px] w-full"
                  />
                </div>
              ))}
            </Carousel>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mt-6 sm:mb-14 flex flex-wrap items-center gap-4">
              {selectedProject.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full shadow text-sm"
                >
                  {tech === "Three.js" ? (
                    <img
                      src="../../public/assets/icons/threedotjs.svg"
                      alt="Three.js"
                      className="w-5 h-5"
                    />
                  ) : (
                    iconMap[tech] || (
                      <span className="font-semibold">{tech}</span>
                    )
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
