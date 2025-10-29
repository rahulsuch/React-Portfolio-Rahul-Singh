import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFolderOpen, FaEnvelope, FaComments, FaTimes } from "react-icons/fa";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../components/chatbot/chatbotconfig";
import MessageParser from "../components/chatbot/MessageParser";
import ActionProvider from "../components/chatbot/ActionProvider";
import AnimatedLandscapeBackground from "../components/AnimatedLandscapeBackground";
import SpriteWalker from "../components/SpriteWalker/SpriteWalker";
import { useChat } from "../context/ChatContext"; // 👈 import context

const techList = [
  "React",
  "Redux",
  "SCSS",
  "JavaScript",
  "Three.js",
  "Bootstrap",
  "Application Scalability",
  "Deployment",
  "Performance Optimization",
  "Debugging",
];

const animation = {
  container: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

const Home = React.memo(({ setActivePage }) => {
  const { showChat, toggleChat, closeChat } = useChat();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const ChatBotComponent = useMemo(
    () => (
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    ),
    []
  );

  return (
    <motion.main
      className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
      variants={animation.container}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 50 }}
    >
      {!isMobile && <SpriteWalker />}

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 z-10">
        <AnimatedLandscapeBackground />
        <motion.h1
          variants={animation.item}
          className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4"
        >
          👋 Hi, I'm Rahul Singh
        </motion.h1>

        <motion.p
          variants={animation.item}
          className="text-base sm:text-lg md:text-l text-gray-800 mb-6 leading-relaxed dark:text-gray-300 max-w-xl"
        >
          A frontend developer passionate about building beautiful,
          high-performance UIs using ⚛️ React, Redux, SCSS, and TailwindCSS.
        </motion.p>

        <motion.div
          variants={animation.item}
          className="flex flex-wrap justify-center gap-2 mb-6 max-w-[70vw]"
        >
          {techList.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={animation.item}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage("projects")}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition min-w-[140px]"
          >
            <FaFolderOpen /> View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage("contact")}
            className="flex items-center justify-center gap-2 bg-red-700 text-white px-5 py-2 rounded shadow hover:bg-gray-800 transition min-w-[140px]"
          >
            <FaEnvelope /> Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Chatbot Modal */}
      {showChat && (
        <div className="fixed bottom-6 right-6 z-50 w-[320px] sm:w-[360px] bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <button
            onClick={closeChat}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
          >
            <FaTimes size={18} />
          </button>
          {ChatBotComponent}
        </div>
      )}

      {/* Floating Chat Button (only desktop/tablet) */}
      {!isMobile && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        >
          <FaComments size={20} />
        </button>
      )}
    </motion.main>
  );
});

export default Home;
