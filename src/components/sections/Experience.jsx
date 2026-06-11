import React, { useEffect } from "react";
import { Briefcase, Info, Lightbulb, GraduationCap, TrendingUp, Code2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const experiences = [
    {
      company: "CTTC (Central Tool Room & Training Centre)",
      role: "AI/ML Intern",
      period: "June 2024 - July 2024",
      whatIWorkedOn: "Real-time video inference systems and facial identification software for attendance and monitoring purposes.",
      whatIBuilt: "Highly optimized face recognition pipelines capable of identifying individuals from live video feeds using deep CNN representations.",
      technologies: ["Python", "OpenCV", "CNNs", "TensorFlow", "SQLite"],
      results: "Improved classification accuracy by 25% and processed live video with sub-500ms latency, achieving 99.4% detection precision in live testing environments.",
      whatILearned: "Advanced hyperparameter tuning, data augmentation techniques, and optimizing deep learning models for real-time inference without sacrificing accuracy."
    },
    {
      company: "Infosys Springboard",
      role: "AI/ML Intern",
      period: "May 2023 - July 2023",
      whatIWorkedOn: "Scalable retrieval systems and sentiment parsing pipelines designed to process large volumes of corporate financial data files.",
      whatIBuilt: "LLM-powered stock screening systems utilizing retrieval chains, vector indexing, and sentiment analysis models.",
      technologies: ["Python", "LangChain", "FastAPI", "PostgreSQL", "Hugging Face APIs"],
      results: "Processed over 50,000 stock records, reduced query latency by 40%, and achieved 90% intent classification accuracy on financial sentiment queries.",
      whatILearned: "Handling large-scale vector embeddings, designing efficient semantic search architectures, and deploying complex NLP pipelines securely via FastAPI."
    }
  ];

  return (
    <section 
      id="experience" 
      className="px-[5%] lg:px-[12%] py-24 bg-transparent border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />
      
      
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment Record</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Where I've Worked
          </h2>
        </div>

        {/* Storytelling Timeline */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-20 text-left">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 md:pl-10"
              data-aos="fade-up"
            >
              {/* Year label left side for wider viewports */}
              <span className="hidden md:block absolute -left-40 top-1 text-xs font-bold text-slate-400 uppercase tracking-widest technical-label w-32 text-right">
                {exp.period.split(" ")[0]} - {exp.period.split(" ").slice(-1)[0]}
              </span>

              {/* Timeline Connector Dot */}
              <span className="absolute -left-3.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0A3D91]" />
              </span>

              {/* Experience Details */}
              <div className="space-y-6">
                
                {/* Title and Organization */}
                <div>
                  <span className="md:hidden block text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <h4 className="text-[#0A3D91] text-sm font-bold uppercase tracking-wider technical-label mt-0.5">
                    {exp.company}
                  </h4>
                </div>

                {/* Narrative Structure */}
                <div className="grid grid-cols-1 gap-5 bg-slate-50/50 p-6 rounded-xl border border-slate-100 shadow-sm">
                  
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                      <Info className="w-4 h-4 text-slate-400" />
                      <span>What I Worked On</span>
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.whatIWorkedOn}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                      <Lightbulb className="w-4 h-4 text-slate-400" />
                      <span>What I Built</span>
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.whatIBuilt}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                      <Code2 className="w-4 h-4 text-slate-400" />
                      <span>Technologies Used</span>
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-600 technical-label"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider technical-label">
                      <GraduationCap className="w-4 h-4 text-slate-400" />
                      <span>What I Learned</span>
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.whatILearned}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A3D91] uppercase tracking-wider technical-label">
                      <TrendingUp className="w-4 h-4 text-[#0A3D91]" />
                      <span>Results Achieved</span>
                    </span>
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-xs font-bold text-[#0A3D91] technical-label">
                      {exp.results}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
