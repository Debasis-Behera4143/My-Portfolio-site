import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portfolio from "./Pages/Portfolio";
import ContactPage from "./Pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./Pages/404";
import ResumeSection from "./components/ResumeSection";

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
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="resumecv"><ResumeSection /></div>
        <div id="contact"><ContactPage /></div>

        <footer className="footer-premium py-10 mt-20">
          <center>
            <hr className="my-6 border-[#2B6FFF]/30 sm:mx-auto lg:my-8 text-center w-3/4" />
            <span className="block text-sm pb-6 text-[#B0B8C5] text-center">
              © 2025{" "}
              <a
                href="https://www.linkedin.com/in/debasis-behera4143"
                className="hover:underline primary-gradient"
                target="_blank"
                rel="noreferrer"
              >
                Debasis Behera
              </a>
              . All Rights Reserved.
            </span>
          </center>
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