import React from "react";
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div id="home" className="bg-transparent">
      {/* Hero / Landing Section */}
      <section className="relative flex items-center min-h-[90vh] px-[5%] lg:px-[12%] pt-32 pb-16 overflow-hidden">
        
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 blueprint-grid-system opacity-[0.03]" />

        
        {/* Subtle light-blue gradient accent */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-br from-blue-50/25 to-transparent blur-3xl pointer-events-none z-0" />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Narrative & Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label */}
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-widest text-[#0A3D91] technical-label">
                AI/ML ENGINEER • FULL STACK DEVELOPER
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-none">
              Hi, I'm <span className="text-gradient-navy">Debasis Behera.</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 tracking-tight leading-tight technical-label">
              AI/ML Engineer, Full Stack Developer, and Student Leader passionate about building intelligent systems and useful software.
            </h2>

            {/* Body Text / Vision Statement */}
            <div className="space-y-4 text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
              <p>
                Bridging the gap between artificial intelligence and scalable software. I specialize in building end-to-end systems—from training deep learning models and architecting backend infrastructure, to designing fluid user experiences.
              </p>
              <p className="font-medium text-slate-700">
                I focus on writing clean code and shipping products that matter.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#portfolio"
                className="elite-btn-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 technical-label"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#resumecv"
                className="elite-btn-secondary px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 technical-label"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Photograph Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5]">
              
              {/* Subtle Blueprint grid background lines specifically for the photo */}
              <div className="absolute inset-0 border border-slate-200/80 rounded-2xl p-4 bg-slate-50/50 shadow-sm z-0">
                <div className="absolute inset-2 border border-dashed border-slate-200 pointer-events-none" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-200 pointer-events-none" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 pointer-events-none" />
              </div>
              
              {/* Photo Image Frame */}
              <div className="absolute inset-3 rounded-xl overflow-hidden border-2 border-slate-300 bg-slate-100 z-10 group shadow-lg">
                <img
                  src={new URL('/assets/DEBA.jpeg', import.meta.url).href}
                  alt="Debasis Behera"
                  className="w-full h-full object-cover grayscale-[20%] contrast-[105%] group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = new URL('/PROFILE.jpg', import.meta.url).href;
                  }}
                />
                
                {/* Overlay Architectural coordinates / alignment grid */}
                <div className="absolute inset-0 pointer-events-none border border-white/20" />
                
                {/* SVG Blueprint alignment mark corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/60 pointer-events-none" />
              </div>

              {/* Decorative Blueprint Labels */}
              <div className="absolute -bottom-6 left-4 right-4 flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest technical-label z-20 pointer-events-none">
                <span>COORD: 20.95° N, 85.15° E</span>
                <span>SYS_REF: PORTRAIT_01</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;