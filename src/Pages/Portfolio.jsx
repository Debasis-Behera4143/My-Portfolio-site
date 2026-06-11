import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Github, ExternalLink, HelpCircle, Lightbulb, 
  GraduationCap, TrendingUp, Info, ChevronLeft, ChevronRight, Cpu, Globe 
} from "lucide-react";

export default function SelectedWork() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [activeCategory, setActiveCategory] = useState("ai-ml");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const aiMlProjects = [
    {
      id: 1,
      title: "Second Brain AI System",
      img: "/assets/Project1.png",
      whyBuilt: "To solve the problem of fragmented and unsearchable personal knowledge, enabling users to interact semantically with their own notes and documents rather than searching via rigid keywords.",
      problem: "Aggregating and retrieving context-specific insights from hundreds of files is slow and inaccurate without semantic search capabilities.",
      solution: "Developed a FastAPI backend integrating ChromaDB vector storage and LangChain orchestrations. Built a responsive React client for querying.",
      techStack: ["React", "FastAPI", "LangChain", "ChromaDB", "OpenAI API", "Python"],
      whatLearned: "I learned how to configure semantic vector indexes, implement chunking strategies, optimize prompts to reduce hallucination, and manage OpenAI API token costs.",
      impact: "98% Retrieval Accuracy | <2s Response Latency",
      github: "https://github.com/Debasis-Behera4143/Second-Brain-AI",
      live: "https://github.com/Debasis-Behera4143/Second-Brain-AI",
    },
    {
      id: 2,
      title: "AI Stock Screener",
      img: "/assets/Project2.png",
      whyBuilt: "To provide retail investors with real-time, sentiment-aware market scanning capabilities that incorporate news feeds and technical indicators.",
      problem: "Static stock screeners and indicators ignore modern social sentiment and unstructured news dynamics.",
      solution: "Built scikit-learn classification models analyzing historical metrics and parsing news sentiment datasets in real-time.",
      techStack: ["Python", "Streamlit", "Scikit-Learn", "PostgreSQL", "Yahoo Finance API"],
      whatLearned: "I gained hands-on experience handling imbalanced financial datasets, building custom data crawlers, and structuring Streamlit dashboards for real-time inference.",
      impact: "82% Prediction Accuracy | 10k+ Daily Data Points",
      github: "https://github.com/Debasis-Behera4143/Stock-Screener-AI",
      live: "https://github.com/Debasis-Behera4143/Stock-Screener-AI",
    },
    {
      id: 3,
      title: "Smart Attendance System",
      img: "/assets/Project3.png",
      whyBuilt: "To automate university and corporate attendance logging, reducing manual entry errors and paper waste.",
      problem: "Manual attendance taking is slow, error-prone, and lacks real-time auditable record logs.",
      solution: "Constructed local OpenCV pipelines using deep learning CNN models for instantaneous match classification of video frames.",
      techStack: ["Python", "OpenCV", "MySQL", "Tkinter", "Face Recognition API"],
      whatLearned: "I learned facial landmark extraction, multi-threading video streams, caching database queries to reduce matching latency, and training classifiers.",
      impact: "99.4% Face Matching Accuracy | <500ms Frame Processing",
      github: "https://github.com/Debasis-Behera4143/Face-recognition",
      live: "https://github.com/Debasis-Behera4143/Face-recognition",
    }
  ];

  const fullStackProjects = [
    {
      id: 4,
      title: "Synergia Video Conferencing",
      img: "/assets/Project4.jpg",
      whyBuilt: "To create a secure, direct peer-to-peer conferencing stream that eliminates expensive centralized relay servers and maintains low latency.",
      problem: "Conventional video chat software has high relay costs and complex configuration requirements for internal networks.",
      solution: "Engineered pure WebRTC mesh architectures using Socket.io and Express for real-time signaling.",
      techStack: ["React", "Node.js", "Socket.io", "WebRTC", "Express"],
      whatLearned: "I mastered WebRTC signaling mechanisms, NAT traversal configurations (STUN/TURN), dynamic camera/audio stream buffering, and secure P2P channels.",
      impact: "Zero relay server cost | <100ms P2P Stream Latency",
      github: "https://github.com/Debasis-Behera4143",
      live: "https://github.com/Debasis-Behera4143",
    },
    {
      id: 5,
      title: "Gamified Learning Platform",
      img: "/assets/Project5.png",
      whyBuilt: "To solve student engagement issues in online learning by introducing interactive progress maps, quiz statistics, and rewards systems.",
      problem: "Static course modules suffer from high abandonment rates and low concept retention.",
      solution: "Designed responsive dashboard maps and progress state machines backed by MongoDB schema statistics reporting.",
      techStack: ["React", "Express", "MongoDB", "Tailwind CSS", "Node.js"],
      whatLearned: "I learned state-machine integration, rewards logic structuring, schema aggregation queries in MongoDB, and fluid visual progress maps design.",
      impact: "+45% Weekly Active User Retention | 2,000+ Completed Quizzes",
      github: "https://github.com/Debasis-Behera4143",
      live: "https://github.com/Debasis-Behera4143",
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      img: "/assets/Project1.png",
      whyBuilt: "To build a premium, highly responsive developer showcase utilizing blueprint layouts and grid styling elements.",
      problem: "Generic design templates feel robotic, repetitive, and fail to highlight engineering personality.",
      solution: "Configured CSS grid structures, custom blueprint lines, and Framer Motion animations inside a Vite React architecture.",
      techStack: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
      whatLearned: "I explored coordinate overlays styling, responsive canvas borders, lazy-loaded components routing, and high-scoring Lighthouse performance metrics.",
      impact: "Lighthouse Performance >95 | 100 accessibility rating",
      github: "https://github.com/Debasis-Behera4143",
      live: "https://github.com/Debasis-Behera4143",
    }
  ];

  const currentProjects = activeCategory === "ai-ml" ? aiMlProjects : fullStackProjects;
  const project = currentProjects[slideIndex];

  const handlePrev = () => {
    setSlideDirection(-1);
    setSlideIndex((prev) => (prev === 0 ? currentProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection(1);
    setSlideIndex((prev) => (prev === currentProjects.length - 1 ? 0 : prev + 1));
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setSlideIndex(0);
    setSlideDirection(0);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : direction < 0 ? -300 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : direction > 0 ? -300 : 0,
      opacity: 0,
      transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } },
    }),
  };

  return (
    <section 
      id="portfolio"
      className="px-[5%] lg:px-[12%] py-24 bg-transparent border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label">
            <Code2 className="w-3.5 h-3.5" />
            <span>Things I've Built</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Selected Work
          </h2>
        </div>

        {/* Sliding Navigation Tabs */}
        <div className="flex justify-center pt-4 pb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex p-1 rounded-xl bg-slate-50 border border-slate-200/80">
            <button
              onClick={() => selectCategory("ai-ml")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all technical-label ${
                activeCategory === "ai-ml"
                  ? "bg-[#0A3D91] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>AI / ML Projects</span>
            </button>
            <button
              onClick={() => selectCategory("full-stack")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all technical-label ${
                activeCategory === "full-stack"
                  ? "bg-[#0A3D91] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Full Stack Projects</span>
            </button>
          </div>
        </div>

        {/* Outer Slider Box with Arrows */}
        <div className="relative min-h-[600px] flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 lg:-left-16 z-20 p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-md transition-all elite-hover-lift"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full overflow-hidden px-4 md:px-12 py-4">
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={project.id}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left"
              >
                {/* Visual Image Area (Left) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md group">
                    <div className="absolute inset-2 border border-dashed border-slate-300/60 pointer-events-none z-10" />
                    
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = "/assets/Project1.png"; }}
                    />
                    
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-slate-400 pointer-events-none" />
                    <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-slate-400 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-slate-400 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-slate-400 pointer-events-none" />
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 technical-label"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study text layout (Right) */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#0A3D91] uppercase tracking-widest technical-label">
                      Project {slideIndex + 1} of {currentProjects.length}
                    </span>
                    <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Why I Built It */}
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A3D91] uppercase tracking-wider technical-label">
                      <Info className="w-4 h-4" />
                      <span>Why I Built It</span>
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.whyBuilt}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                        <HelpCircle className="w-4 h-4 text-slate-400" />
                        <span>Problem</span>
                      </span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div className="space-y-1.5">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                        <Lightbulb className="w-4 h-4 text-slate-400" />
                        <span>Solution</span>
                      </span>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* What I Learned */}
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                      <GraduationCap className="w-4 h-4 text-slate-400" />
                      <span>What I Learned</span>
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.whatLearned}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A3D91] uppercase tracking-wider technical-label">
                      <TrendingUp className="w-4 h-4" />
                      <span>Impact / Key Metrics</span>
                    </span>
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-xs font-bold text-[#0A3D91] technical-label">
                      {project.impact}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4 border-t border-slate-100">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 elite-btn-primary py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 technical-label"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Link</span>
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 elite-btn-secondary py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 technical-label"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 lg:-right-16 z-20 p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-md transition-all elite-hover-lift"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Index Dots */}
        <div className="flex justify-center gap-2 pt-4">
          {currentProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSlideDirection(i > slideIndex ? 1 : -1);
                setSlideIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === slideIndex ? "bg-[#0A3D91] w-6" : "bg-slate-200 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}