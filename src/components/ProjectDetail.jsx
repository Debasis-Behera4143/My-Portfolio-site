import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  1: {
    title: "My Portfolio Site",
    image: "/assets/project1.png",
    description:
      "A premium animated portfolio built with React, Vite, Tailwind CSS, Framer Motion, and AOS.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "AOS"],
    github: "https://github.com/Debasis-Behera4143/My-Portfolio-site",
    live: "https://debasis-behera4143.github.io/My-Portfolio-site/",
  },
  2: {
    title: "Racex - Car Game",
    image: "/assets/project2.png",
    description:
      "A fast-paced car racing game using HTML, CSS, and JavaScript with collision and scoring logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Debasis-Behera4143/Mini-car-game",
    live: "https://debasis-behera4143.github.io/Mini-car-game/",
  },
  3: {
    title: "Spotify Clone",
    image: "/assets/project3.png",
    description:
      "A Spotify front-end clone created using HTML and CSS, showcasing a realistic interface layout.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Debasis-Behera4143/SPOTIFY-CLONE",
    live: "https://debasis-behera4143.github.io/SPOTIFY-CLONE/",
  },
  4: {
    title: "Face Recognition System",
    image: "/assets/project4.jpg",
    description:
      "AI/ML-based face recognition system in Python using OpenCV and face_recognition libraries.",
    tech: ["Python", "AI", "Machine Learning", "OpenCV"],
    github: "https://github.com/Debasis-Behera4143/Face-recognition",
    live: "#",
  },
  5: {
    title: "Color Changing App",
    image: "/assets/project5.png",
    description:
      "Interactive app that changes colors dynamically using HTML, CSS, and JavaScript.",
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
      <div className="text-white text-center p-10">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white p-8 flex flex-col items-center">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl shadow-lg mb-6 w-full max-w-3xl object-cover"
      />
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
        {project.title}
      </h1>
      <p className="text-slate-300 mb-6 max-w-3xl text-center">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-purple-600/20 border border-purple-400/40 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
