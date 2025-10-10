import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GridTunnel from './GridTunnel';
import AnimatedBackground from './Background';
import Navbar from './Navbar';
import Resume from './Resume';
import ResumeSection from './ResumeSection';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portofolio from '../Pages/Portfolio';
import ContactPage from '../Pages/Contact';
import WelcomeScreen from '../Pages/WelcomeScreen';


const LandingPage = ({ showWelcome, setShowWelcome }) => {
  const [isResumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* 🎮 GridTunnel sits behind everything */}
      <GridTunnel />

      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen
            key="welcome"
            onLoadingComplete={() => setShowWelcome(false)}
          />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />

          <div id="Home" data-aos="fade-up"><Home /></div>
          <div id="About" data-aos="fade-left"><About /></div>
          <div id="Portfolio" data-aos="zoom-in"><Portofolio /></div>

          <div id="ResumeCV" data-aos="fade-right">
            <ResumeSection />
            <div className="text-center mt-4">
              <button
                onClick={() => setResumeOpen(true)}
                className="magnetic px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Full Resume
              </button>
            </div>
            <Resume isOpen={isResumeOpen} onClose={() => setResumeOpen(false)} />
          </div>

          <div id="Contact" data-aos="fade-up"><ContactPage /></div>

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
};

export default LandingPage;
