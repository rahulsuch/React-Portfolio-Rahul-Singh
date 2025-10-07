import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFolderOpen, FaEnvelope, FaComments } from "react-icons/fa";
// import AnimatedBackground from "../components/AnimatedBackground";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../components/chatbot/chatbotconfig";
import MessageParser from "../components/chatbot/MessageParser";
import ActionProvider from "../components/chatbot/ActionProvider";

const Home = ({ setActivePage }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-black">
      <div className="relative w-full h-full">
        {/* <AnimatedBackground /> */}

        <motion.div
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            👋 Hi, I'm Rahul Singh
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 text-balance leading-relaxed">
            A frontend developer passionate about building beautiful,
            high-performance UIs using ⚛️ React, Redux, SCSS, and TailwindCSS.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-[90vw]">
            {[
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
            ].map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 z-10">
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
          </div>
        </motion.div>
        <div className="fixed bottom-6 right-6 z-50">
          {showChat && (
            <div className="w-100 h-100 bg-white shadow-xl rounded-lg overflow-hidden mb-3">
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          )}
          {/* <button
            onClick={() => setShowChat(!showChat)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
          >
            <FaComments size={20} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
