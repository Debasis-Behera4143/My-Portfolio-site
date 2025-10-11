import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Code, Terminal, Cpu, Zap, Github, Linkedin, Mail, Download } from 'lucide-react';

const Home = () => {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Computer Science Student <span class='text-[#2B6FFF]'>💻</span>",
        "Full Stack Developer <span class='text-[#DFFF00]'>🚀</span>",
        "AI/ML Enthusiast <span class='text-[#DFFF00]'>🤖</span>",
        "Problem Solver <span class='text-[#2B6FFF]'>🧠</span>",
        "Tech Innovator <span class='text-[#DFFF00]'>⚡</span>"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true
    };

    typedInstance.current = new Typed(typedEl.current, options);

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <>
      {/* NeoTech Particle Background */}
      <div className="premium-background">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className={`particle ${i % 4 === 0 ? 'accent' : i % 4 === 1 ? 'warm' : ''}`}
            style={{
              '--x': `${Math.random() * 100 - 50}vw`,
              '--y': `${Math.random() * 100 - 50}vh`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-6 py-20 section-padding"
      >
        {/* -------- Central Content -------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl fade-in-premium delay-200"
        >
          {/* Profile Image with NeoTech Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#2B6FFF] via-[#DFFF00] to-[#2B6FFF] rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-[#2B6FFF]/30 shadow-2xl">
                <img
                  src={new URL('/Photo.jpg', import.meta.url).href}
                  alt="Debasis Behera"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#2B6FFF]/20 to-[#DFFF00]/20"></div>
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl lg:text-3xl font-semibold text-[#B0B8C5] mb-4"
          >
            Welcome to my digital space
          </motion.h3>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            I'm <span className="primary-gradient">Debasis Behera</span>
          </motion.h1>

          {/* Typed Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2
              ref={typedEl}
              className="text-2xl lg:text-4xl font-semibold primary-gradient drop-shadow-[0_0_20px_#2B6FFF]"
            ></h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-[#B0B8C5] leading-relaxed text-xl max-w-3xl mx-auto fade-in-premium delay-300"
          >
            I craft innovative digital solutions with cutting-edge technologies. 
            Passionate about transforming complex problems into elegant, 
            user-friendly applications that make a real impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-premium delay-400"
          >
            <a
              href="#portfolio"
              className="primary-button px-8 py-4 font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform text-lg"
            >
              <Zap className="w-5 h-5" />
              <span>View My Work</span>
            </a>
            <a
              href="#contact"
              className="secondary-button px-8 py-4 font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform text-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://github.com/Debasis-Behera4143"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#121826] border border-[#2B6FFF]/30 hover:border-[#DFFF00] transition-all group"
            >
              <Github className="w-6 h-6 text-[#B0B8C5] group-hover:text-[#DFFF00] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/debasis-behera4143"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#121826] border border-[#2B6FFF]/30 hover:border-[#DFFF00] transition-all group"
            >
              <Linkedin className="w-6 h-6 text-[#B0B8C5] group-hover:text-[#DFFF00] transition-colors" />
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#121826] border border-[#2B6FFF]/30 hover:border-[#DFFF00] transition-all group"
            >
              <Download className="w-6 h-6 text-[#B0B8C5] group-hover:text-[#DFFF00] transition-colors" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-20 flex flex-col items-center animate-bounce"
          >
            <span className="text-[#B0B8C5] text-sm mb-2">Explore my work</span>
            <div className="w-8 h-12 rounded-full border-2 border-[#2B6FFF] flex justify-center p-1">
              <div className="w-2 h-2 bg-[#2B6FFF] rounded-full animate-scroll"></div>
            </div>
          </motion.div>
        </motion.div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateY(0); }
            30% { transform: translateY(15px); }
            100% { transform: translateY(0); }
          }
          .animate-scroll {
            animation: scroll 2s infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Home;