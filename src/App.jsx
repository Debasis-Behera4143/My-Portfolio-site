import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import AnimatedBackground from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./Pages/Portfolio";
import ContactPage from "./Pages/Contact";
import ProjectDetail from "./components/ui/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./Pages/NotFound";
import ResumeSection from "./components/sections/ResumeSection";
import Experience from "./components/sections/Experience";
import Leadership from "./components/sections/Leadership";
import TechnicalSkills from "./components/sections/TechnicalSkills";
import AboutMe from "./components/sections/AboutMe";

const LandingPage = ({ showWelcome, setShowWelcome }) => (
  <>
    <AnimatePresence mode="wait">
      {showWelcome && (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      )}
    </AnimatePresence>

    {!showWelcome && (
      <>
        <Navbar />
        <AnimatedBackground />
        
        {/* Main Content Order */}
        <div id="home"><Home /></div>
        <div id="about-me"><AboutMe /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><TechnicalSkills /></div>
        <div id="leadership"><Leadership /></div>
        <div id="resumecv"><ResumeSection /></div>
        <div id="contact"><ContactPage /></div>

        {/* Footer */}
        <footer className="relative py-12 mt-16 border-t border-slate-200 bg-transparent overflow-hidden text-slate-500">
          
          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl">
            {/* Left: Personal branding */}
            <div className="text-center md:text-left space-y-1">
              <span className="block text-sm font-bold text-slate-900 tracking-tight uppercase">Debasis Behera</span>
              <span className="block text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label">AI/ML Engineer • Full Stack Developer</span>
            </div>

            {/* Mid: Large Outline Circle / Blueprint Drawing */}
            <div className="text-center">
              <span className="block text-sm font-semibold text-slate-800 uppercase tracking-wider technical-label">IGIT Sarang</span>
            </div>

            {/* Right: Copyright */}
            <div className="text-center md:text-right space-y-1">
              <span className="block text-xs font-semibold text-slate-800 uppercase tracking-wider technical-label">© {new Date().getFullYear()} All Rights Reserved.</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 technical-label">Handcrafted Engineering Portfolio</span>
            </div>
          </div>
        </footer>
      </>
    )}
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter basename="/My-Portfolio-site">
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route
          path="/"
          element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;