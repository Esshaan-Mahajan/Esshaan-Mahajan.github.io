import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsHighlights from "./components/StatsHighlights";
import EducationSection from "./components/EducationSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import PublicationsSection from "./components/PublicationsSection";
import SkillsMatrix from "./components/SkillsMatrix";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/theme.css";
import "./styles/animations.css";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <StatsHighlights />
      <EducationSection />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <PublicationsSection />
      <SkillsMatrix />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
