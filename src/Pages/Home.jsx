import GridTunnel from '../components/GridTunnel';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Home = () => {
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "B.Tech CSE Student at IGIT Sarang 💻",
        "Full Stack Developer 🌐",
        "DSA Enthusiast 🧠",
        "Photography Lover",
        "AI/ML Engineer",
        "Creative Developer 🚀"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
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
      <GridTunnel />

      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-gradient-to-b from-[#030014] to-[#06061a]"
      >
        {/* -------- Left Content -------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Debasis Behera
            </span>
          </h1>

          <h2
            ref={typedEl}
            className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#22d3ee]"
          ></h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I’m a{" "}
            <span className="text-cyan-400">
              Computer Science & Engineering
            </span>{" "}
            student passionate about building impactful web apps, mastering DSA in
            C++, and exploring AI & innovative technologies. My journey combines
            creativity, logic, and a deep curiosity to learn and create.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-cyan-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-cyan-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* -------- Right Image -------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8 md:mb-0"
        >
          <div className="relative">
            <img
              src={new URL('/Photo.jpg', import.meta.url).href}
              alt="Debasis Behera"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_30px_#00ffff50]"
            />
            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-10 blur-2xl"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;