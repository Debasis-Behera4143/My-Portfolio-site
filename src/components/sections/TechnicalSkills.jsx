import React, { useEffect } from "react";
import { Boxes } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnicalSkills = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const coreDomains = [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Generative AI",
    "Backend Engineering",
    "Full Stack Development",
    "Real-Time Systems",
    "System Design"
  ];

  const technologies = [
    "Python", "FastAPI", "React", "TensorFlow", "OpenCV", 
    "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", 
    "AWS", "Git", "Tailwind CSS", "Node.js"
  ];

  const professionalStrengths = [
    "Leadership",
    "Public Speaking",
    "Technical Presentations",
    "Student Mentoring",
    "Community Building",
    "Problem Solving"
  ];

  return (
    <section 
      id="skills" 
      className="px-[5%] lg:px-[12%] py-24 bg-transparent border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />
      

      <div className="max-w-5xl mx-auto space-y-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label">
            <Boxes className="w-3.5 h-3.5" />
            <span>Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Core Expertise
          </h2>
        </div>

        {/* Top Area: Core Domains (Editorial Style) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center md:text-left border-y border-slate-200/60 py-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {coreDomains.map((domain, index) => (
            <div key={index} className="flex items-center md:items-start justify-center md:justify-start">
              <span className="text-xl lg:text-2xl font-extrabold text-slate-800 tracking-tight leading-tight">
                {domain}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12 text-left">
          
          {/* Second Area: Technologies I Use Most */}
          <div className="md:col-span-7 space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="space-y-1 border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest technical-label">
                Technologies I Use Most
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="text-base font-semibold text-slate-600 technical-label"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Third Area: Professional Strengths */}
          <div className="md:col-span-5 space-y-8" data-aos="fade-left" data-aos-delay="300">
            <div className="space-y-1 border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest technical-label">
                Professional Strengths
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {professionalStrengths.map((strength, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 technical-label shadow-sm hover:border-slate-300 transition-colors"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
