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
import RotatingText from "../components/RotatingText/RotatingText";
import ClickSpark from "../components/clickspark/ClickSpark";

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
  const [clickInfo, setClickInfo] = useState(false);

  const Background = useMemo(() => <AnimatedLandscapeBackground />, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const infoModal = useMemo(() => {
    if (!clickInfo) return null;
    return (
      <motion.div
        className="fixed bottom-20 scroll-smooth left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          click to see effect
        </motion.p>
      </motion.div>
    );
    setTimeout(() => setClickInfo(false), 3000);
  }, [clickInfo]);

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
      {clickInfo && infoModal}

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 z-10">
        {Background}
        <div className="text-left">
          <motion.h1
            variants={animation.item}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2 whitespace-nowrap overflow-hidden"
          >
            Hi, I'm
            <RotatingText
              texts={["Rahul Singh", "Frontend Dev", "a UI/UX Designer"]}
              mainClassName={`px-2 sm:px-3 md:px-3
    sm:bg-[#183d1eff] dark:bg-white
    sm:text-white dark:text-black
    overflow-hidden py-0.5 sm:py-1 md:py-1
    justify-center rounded-3xl max-h-12
    min-w-[90px] sm:min-w-[180px] md:min-w-[220px]
    flex items-center text-md sm:text-md md:text-xlg
    truncate font-montserrat font-extrabold
    text-2xl text-center`}
              style={{
                textShadow: document.body.classList.contains("dark")
                  ? `
          1px 1px 2px rgba(255, 255, 255, 0.6),   /* inner glow for black text */
          0 0 6px rgba(0, 0, 0, 0.4),             /* soft ambient depth */
          0 0 12px rgba(0, 0, 0, 0.25)            /* diffuse far glow */
        `
                  : `
          2px 2px 4px rgba(0, 0, 0, 0.45),        /* deep shadow for white text */
          0 0 6px rgba(255, 255, 255, 0.4),       /* close light halo */
          0 0 14px rgba(255, 255, 255, 0.25)      /* subtle outer glow */
        `,
              }}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h1>

          <motion.p
            variants={animation.item}
            className="text-base sm:text-lg md:text-l text-gray-800 mb-6 leading-relaxed dark:text-gray-300 max-w-2xl"
          >
            A frontend developer passionate about building beautiful,
            high-performance UIs using React, Redux, SCSS, and TailwindCSS.
          </motion.p>

          <ClickSpark
            sparkColor="#212121"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
            // optional extras
            multiColor={false}
            glow={true}
            randomBurst={false}
            shape="circle" // circle | square | triangle
          >
            <motion.div
              variants={animation.item}
              className="flex flex-wrap gap-2 mb-6 sm:max-w-[70vw] cursor-pointer select-none dark:bg-white/20 bg-black/20 sm:py-2 sm:px-4 py-1 px-2 rounded-2xl shadow-inner backdrop-blur-sm"
              onHoverStart={() => setClickInfo(true)}
              onHoverEnd={() => setClickInfo(false)}
            >
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 bg-white dark:bg-white text-gray-900 dark:text-black rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </ClickSpark>

          <motion.div
            variants={animation.item}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onMouseMove={(e) => {
                const { offsetX, offsetY, target } = e.nativeEvent;
                const x = (offsetX - target.offsetWidth / 2) / 5;
                const y = (offsetY - target.offsetHeight / 2) / 5;
                e.target.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
              }}
              onMouseLeave={(e) =>
                (e.target.style.transform = "rotateX(0) rotateY(0)")
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center max-h-fit px-4 py-3 gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold shadow-lg"
              onClick={() => setActivePage("projects")}
            >
              <FaFolderOpen /> Projects
            </motion.button>

            <motion.button
              onMouseMove={(e) => {
                const { offsetX, offsetY, target } = e.nativeEvent;
                const x = (offsetX - target.offsetWidth / 2) / 5;
                const y = (offsetY - target.offsetHeight / 2) / 5;
                e.target.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
              }}
              onMouseLeave={(e) =>
                (e.target.style.transform = "rotateX(0) rotateY(0)")
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-4 py-3 flex items-center justify-center gap-2 max-h-fit rounded-2xl bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold shadow-lg"
              onClick={() => setActivePage("contact")}
            >
              <FaEnvelope /> Contact Me
            </motion.button>
          </motion.div>
        </div>
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
