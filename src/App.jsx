import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CommandPalette from "./components/ui/CommandPalette";
import CaseStudyModal from "./components/ui/CaseStudyModal";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import TechStackSection from "./components/sections/TechStackSection";
import ArchitectureSection from "./components/sections/ArchitectureSection";
import ContactSection from "./components/sections/ContactSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Scroll Spy for Navbar
  useEffect(() => {
    const sections = ["hero", "work", "experience", "stack", "philosophy", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    if (!sectionId) {
      setIsCommandPaletteOpen((prev) => !prev);
      return;
    }
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans selection:bg-neutral-900 selection:text-neutral-100 dark:selection:bg-neutral-100 dark:selection:text-neutral-900 relative">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Single-Page Editorial Stream */}
      <main className="w-full">
        <HeroSection onNavigate={handleNavigate} />
        <ProjectsSection onSelectProject={(project) => setSelectedCaseStudy(project)} />
        <ExperienceSection />
        <TechStackSection />
        <ArchitectureSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
