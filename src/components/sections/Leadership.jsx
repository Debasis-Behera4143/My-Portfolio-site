import React, { useEffect } from "react";
import { Award, Users, CheckCircle, Heart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Leadership = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const roles = [
    {
      title: "Training & Placement Coordinator",
      organization: "Computer Science Department",
    },
    {
      title: "Tech Lead",
      organization: "GeeksforGeeks Campus Body",
    }
  ];

  const initiatives = [
    "Workshops Conducted",
    "Students Mentored",
    "Public Speaking",
    "Community Building"
  ];

  return (
    <section
      id="leadership"
      className="px-[5%] lg:px-[12%] py-24 bg-transparent border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label">
            <Award className="w-3.5 h-3.5" />
            <span>Beyond The Code</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Leadership & Community
          </h2>
        </div>

        {/* Roles and Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Main Roles */}
          <div className="space-y-6" data-aos="fade-right">
            {roles.map((role, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-white border border-slate-200 text-[#0A3D91]">
                    <Users className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                </div>
                <h4 className="text-slate-500 text-xs font-bold tracking-wider uppercase technical-label ml-14">
                  {role.organization}
                </h4>
              </div>
            ))}
          </div>

          {/* Initiatives List */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-center" data-aos="fade-left">
            <ul className="space-y-4">
              {initiatives.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0A3D91]" />
                  <span className="text-base font-semibold text-slate-700 tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Personal Note */}
        <div 
          className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <Heart className="w-6 h-6 text-[#0A3D91] mx-auto mb-4" />
          <p className="text-slate-600 text-lg leading-relaxed font-light italic">
            "Beyond academics and development, I enjoy mentoring students, conducting technical sessions, helping peers prepare for placements, and exploring photography."
          </p>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
