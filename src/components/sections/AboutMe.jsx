import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden" id="about-me">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.03] pointer-events-none" />

      {/* Blueprint coordinate marker top-left */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image */}
          <div 
            className="lg:col-span-5 relative"
            data-aos="fade-right"
          >
            {/* Architectural structural frame */}
            <div className="absolute -inset-4 border border-slate-200 opacity-50 bg-slate-50/50 pointer-events-none z-0"></div>
            
            <div className="relative z-10 aspect-[4/5] overflow-hidden elite-frosted-card elite-hover-lift group">
              {/* Replace with smaller personal photo */}
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop" 
                alt="Debasis at Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Blueprint overlay accent */}
              <div className="absolute inset-0 border border-[#0A3D91]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Technical markers on image corners */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#0A3D91] pointer-events-none"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#0A3D91] pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Conversational Intro */}
          <div 
            className="lg:col-span-7 space-y-8"
            data-aos="fade-left"
          >
            <div className="space-y-2">
              <span className="block text-xs font-bold text-[#0A3D91] tracking-widest uppercase technical-label">
                Who I Am
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                I'm currently in my final year pursuing a <strong className="font-semibold text-slate-900">B.Tech in Computer Science and Engineering</strong> at <strong className="font-semibold text-slate-900">IGIT Sarang</strong>, maintaining a <strong className="font-semibold text-[#0A3D91]">CGPA of 9.16</strong>. 
              </p>
              
              <p>
                My engineering journey has been driven by a deep curiosity for how systems work—from designing robust backend architectures to training machine learning models that solve real-world problems. Over the course of my degree, I've completed intensive <strong className="font-semibold text-slate-900">AI/ML internships</strong> and developed a strong foundation in full-stack engineering.
              </p>

              <p>
                Beyond writing code, I am deeply involved in my campus community. As the <strong className="font-semibold text-slate-900">Training & Placement Coordinator</strong> for the CSE department and the <strong className="font-semibold text-slate-900">Tech Lead at GeeksforGeeks</strong> campus body, I regularly mentor juniors, organize technical workshops, and help bridge the gap between academic learning and industry expectations.
              </p>
              
              <p>
                When I'm not studying or building software, you'll probably find me preparing for my next hackathon, reading about system design, or capturing moments through photography.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
