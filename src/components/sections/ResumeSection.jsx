import React from 'react';
import { Download, FileText, User, Eye } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section 
      id="resumecv" 
      className="px-[5%] lg:px-[12%] py-24 bg-transparent border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />
      
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0A3D91] uppercase tracking-wider tracking-widest technical-label">
            <FileText className="w-3.5 h-3.5" />
            <span>Document Center</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Resume & Curriculum Vitae
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Review and download technical credentials, coursework lists, and research indexes.
          </p>
        </div>

        {/* Action Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Resume Card */}
          <div className="elite-frosted-card elite-hover-lift overflow-hidden flex flex-col justify-between p-8 bg-white border border-slate-200 text-left">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-lg bg-blue-50/50 border border-blue-100 text-[#0A3D91]">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Resume</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A concise system-level summary highlighting engineering achievements, internships, and primary tech stack parameters.
              </p>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href={new URL('/assets/DEBASIS_BEHERA.pdf', import.meta.url).href} 
                download
                className="flex-1 elite-btn-primary py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 technical-label"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
              <a 
                href={new URL('/assets/DEBASIS_BEHERA.pdf', import.meta.url).href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 elite-btn-secondary py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 technical-label"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Online</span>
              </a>
            </div>
          </div>

          {/* CV Card */}
          <div className="elite-frosted-card elite-hover-lift overflow-hidden flex flex-col justify-between p-8 bg-white border border-slate-200 text-left">
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-lg bg-blue-50/50 border border-blue-100 text-[#0A3D91]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Curriculum Vitae</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Detailed document outlining full academic courses, simulation credentials, and detailed project architectures.
              </p>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href={new URL('/assets/DEBASIS_BEHERA.pdf', import.meta.url).href} 
                download
                className="flex-1 elite-btn-primary py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 technical-label"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
              <a 
                href={new URL('/assets/DEBASIS_BEHERA.pdf', import.meta.url).href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 elite-btn-secondary py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 technical-label"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Online</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;