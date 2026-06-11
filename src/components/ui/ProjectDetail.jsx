import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Star, Code, Zap, Cpu } from "lucide-react";

const projectData = {
  1: {
    title: "Second Brain AI System",
    image: new URL('/assets/Project1.png', import.meta.url).href,
    description:
      "A personal knowledge base assistant powered by LLMs and Retrieval-Augmented Generation (RAG). Users can upload documents and notes, which are automatically indexed into a vector database for semantic search, summarization, and query-answering. Built using FastAPI for backend orchestrations, React for frontend layout, and LangChain for handling LLM logic.",
    tech: ["React", "FastAPI", "LangChain", "ChromaDB", "OpenAI API"],
    github: "https://github.com/Debasis-Behera4143/Second-Brain-AI",
    live: "https://github.com/Debasis-Behera4143/Second-Brain-AI",
  },
  2: {
    title: "AI-Powered Stock Screener",
    image: new URL('/assets/Project2.png', import.meta.url).href,
    description:
      "An automated stock scanning and machine learning analysis system. It aggregates public market data through APIs and parses historical trends to predict breakout potential with regression and classification algorithms. Offers visual dashboards showing trend prediction metrics, statistical confidence indices, and custom watchlist filters.",
    tech: ["Python", "Streamlit", "Scikit-Learn", "PostgreSQL", "Yahoo Finance API"],
    github: "https://github.com/Debasis-Behera4143/Stock-Screener-AI",
    live: "https://github.com/Debasis-Behera4143/Stock-Screener-AI",
  },
  3: {
    title: "Smart Attendance Management System",
    image: new URL('/assets/Project3.png', import.meta.url).href,
    description:
      "A real-time face recognition based logging system designed to automate class and corporate attendance. Processes live video streams, extracts facial features using deep classifiers, matches frames against a database, and logs records automatically. Built with OpenCV and Tkinter in Python.",
    tech: ["Python", "OpenCV", "MySQL", "Tkinter", "Face Recognition API"],
    github: "https://github.com/Debasis-Behera4143/Face-recognition",
    live: "https://github.com/Debasis-Behera4143/Face-recognition",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-slate-900 p-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-800">Project Not Found</h2>
        <p className="text-slate-500 mt-4 text-lg">The project you're looking for doesn't exist.</p>
        <a 
          href="/#portfolio" 
          className="mt-8 elite-btn-primary px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 p-8 md:p-14 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />
      
      <div className="w-full max-w-5xl relative z-10">
        <a 
          href="/#portfolio" 
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors text-base font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </a>
        
        <div className="elite-card rounded-2xl overflow-hidden bg-white">
          <div className="relative aspect-[21/9] bg-slate-100 border-b border-slate-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12 space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 text-xs font-semibold text-[#0A3D91]">
                  <Star className="w-3.5 h-3.5" />
                  <span>Featured Project</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Innovative</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Architectural & System Summary</h3>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Technologies Utilized</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 elite-btn-primary px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm text-center"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 elite-btn-secondary px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Details</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;