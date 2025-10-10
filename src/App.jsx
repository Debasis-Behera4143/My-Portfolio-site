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
        <div id="Home"><Home /></div>
        <div id="About"><About /></div>
        <div id="Portfolio"><Portfolio /></div>
        <div id="ResumeCV"><ResumeSection /></div>
        <div id="Contact"><ContactPage /></div>

        <footer>
          <center>
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
            <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
              © 2025{" "}
              <a
                href="https://www.linkedin.com/in/debasis-behera4143"
                className="hover:underline"
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

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://github.com/Debasis-Behera4143"
            className="hover:underline"
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
