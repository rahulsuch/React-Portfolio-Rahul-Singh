import React, { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [hoveredPage, setHoveredPage] = useState(null); // renamed from 'hovered'

  const shouldShift = hoveredPage && hoveredPage !== activePage;

  console.log(activePage, hoveredPage);

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        setHoveredPage={setHoveredPage} // renamed here
      />
      <Suspense fallback={<div className="flex items-center justify-center w-full h-screen">Loading...</div>}>
        <div
          className={`ml-0 sm:ml-[7vw] w-full sm:w-[calc(100vw-7vw)] transition-transform duration-300 ${shouldShift ? "translate-x-[-7vw]" : ""
            }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100vw", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full z-10"
            >
              {activePage === "home" && <Home setActivePage={setActivePage} />}
              {activePage === "about" && <About />}
              {activePage === "projects" && <Projects />}
              {activePage === "contact" && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Suspense>
    </div >
  );
};

export default App;
