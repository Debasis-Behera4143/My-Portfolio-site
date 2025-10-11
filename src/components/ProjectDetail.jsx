import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Star, Code, Zap, Crown } from "lucide-react";

const projectData = {
  1: {
    title: "My Portfolio Site",
    image: new URL('/assets/Project1.png', import.meta.url).href,
    description:
      "A premium animated portfolio designed to showcase my technical expertise and creativity. Built with React, Vite, Tailwind CSS, Framer Motion, and AOS. Features include magnetic hover effects, parallax grid tunnel animations, scroll-triggered transitions, responsive design, and optimized performance. The site demonstrates advanced frontend development skills with modern web technologies.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "AOS"],
    github: "https://github.com/Debasis-Behera4143/My-Portfolio-site",
    live: "https://debasis-behera4143.github.io/My-Portfolio-site/",
  },
  2: {
    title: "Racex - Car Racing Game",
    image: new URL('/assets/Project2.png', import.meta.url).href,
    description:
      "A fast-paced browser-based racing game built with HTML, CSS, and JavaScript. Features smooth gameplay mechanics, real-time scoring system, collision detection, responsive controls, and dynamic difficulty progression. The game includes sound effects, particle animations, and a leaderboard system to enhance user engagement.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Debasis-Behera4143/Mini-car-game",
    live: "https://debasis-behera4143.github.io/Mini-car-game/",
  },
  3: {
    title: "Spotify Clone",
    image: new URL('/assets/Project3.png', import.meta.url).href,
    description:
      "A pixel-perfect front-end clone of Spotify's interface, crafted using only HTML and CSS. Demonstrates advanced CSS techniques such as flexbox, grid layouts, responsive design, and CSS animations. The project showcases meticulous attention to detail in replicating the original UI/UX with precise typography, spacing, and interactive elements.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Debasis-Behera4143/SPOTIFY-CLONE",
    live: "https://debasis-behera4143.github.io/SPOTIFY-CLONE/",
  },
  4: {
    title: "Face Recognition System",
    image: new URL('/assets/Project4.jpg', import.meta.url).href,
    description:
      "An AI/ML-powered face recognition system developed with Python, leveraging OpenCV and machine learning algorithms. The system can detect and identify faces in real-time with high accuracy, supporting multiple face detection models, facial landmark detection, and face matching algorithms. Includes features like face database management and real-time video processing.",
    tech: ["Python", "AI", "Machine Learning", "OpenCV"],
    github: "https://github.com/Debasis-Behera4143/Face-recognition",
    live: "#",
  },
  5: {
    title: "Color Changing App",
    image: new URL('/assets/Project5.png', import.meta.url).href,
    description:
      "An interactive web application that dynamically changes background colors with smooth transitions and animations. Built using HTML, CSS, and JavaScript with features like color palette generation, real-time color preview, copy-to-clipboard functionality, and responsive design. The app demonstrates creative UI/UX implementation and DOM manipulation techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Debasis-Behera4143/Color-Changing",
    live: "#",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0f0f19] to-[#121220] text-white p-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold gold-gradient">Project Not Found</h2>
        <p className="text-gray-400 mt-6 text-xl">The project you're looking for doesn't exist.</p>
        <a 
          href="/#portfolio" 
          className="mt-10 gold-button px-8 py-4 rounded-xl flex items-center gap-3 text-xl font-bold"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Portfolio
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f19] to-[#121220] text-white p-8 md:p-14 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <a 
          href="/#portfolio" 
          className="inline-flex items-center gap-3 text-[#b88f55] hover:text-[#c9a063] mb-10 transition-colors text-xl font-bold"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to Portfolio
        </a>
        
        <div className="premium-card rounded-3xl overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f19] to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h1 className="text-5xl md:text-6xl font-bold gold-gradient flex items-center gap-4">
                <Crown className="w-12 h-12 text-[#b88f55]" />
                {project.title}
              </h1>
            </div>
          </div>
          
          <div className="p-10">
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-[#1a1a2e] px-6 py-3 rounded-full border border-[#b88f55]/30">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="font-bold text-lg">Featured Project</span>
              </div>
              <div className="flex items-center gap-3 bg-[#1a1a2e] px-6 py-3 rounded-full border border-[#cd7f32]/30">
                <Zap className="w-6 h-6 text-[#cd7f32]" />
                <span className="font-bold text-lg">Innovative</span>
              </div>
            </div>
            
            <p className="text-gray-200 text-xl leading-relaxed mb-12">
              {project.description}
            </p>
            
            <div className="mb-12">
              <h3 className="text-3xl font-bold gold-gradient mb-6">Technologies Utilized</h3>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 bg-gradient-to-r from-[#1a1a2e] to-[#252540] border border-[#b88f55]/30 rounded-full text-lg font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 gold-button px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-4 hover:scale-105 transition-transform text-xl"
              >
                <Github className="w-7 h-7" />
                <span>View Source Code</span>
              </a>
              
              {project.live !== "#" ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 outline-button px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-4 hover:scale-105 transition-transform text-xl"
                >
                  <ExternalLink className="w-7 h-7" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 outline-button px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-4 opacity-50 cursor-not-allowed text-xl"
                >
                  <ExternalLink className="w-7 h-7" />
                  <span>Live Demo Not Available</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;