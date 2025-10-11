import React from 'react';
import { Download, FileText, User } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="ResumeCV" className="px-[5%] sm:px-[5%] lg:px-[10%] bg-gradient-to-b from-[#0B0F19] to-[#121826] py-16 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold primary-gradient">
            <FileText className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#2B6FFF] mb-2" />
            <span className="block mt-2">Resume & CV</span>
          </h2>
          <p className="text-[#B0B8C5] max-w-3xl mx-auto text-base sm:text-lg mt-4 sm:mt-6">
            I am a Full Stack Developer with experience building responsive and
            accessible web applications using React, Node.js, and modern web
            technologies. Below you can preview my resume and a detailed CV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Resume iframe */}
          <div className="premium-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <div className="p-4 sm:p-6 border-b border-[#2B6FFF]/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B6FFF]" />
                Resume
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B8C5] mt-2">Quick overview of experience and skills.</p>
            </div>
            <div className="h-[50vh] sm:h-[60vh] w-full">
              {(() => {
                const resumePdf = new URL('/assets/Debasis_Resume.pdf', import.meta.url).href + '#view=FitH';
                return (
                  <iframe
                    title="Debasis Resume"
                    aria-label="Embedded Resume PDF"
                    src={resumePdf}
                    className="w-full h-full"
                    sandbox="allow-scripts allow-same-origin"
                  />
                );
              })()}
            </div>
          </div>

          {/* CV iframe */}
          <div className="premium-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <div className="p-4 sm:p-6 border-b border-[#2B6FFF]/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFFF00]" />
                CV
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B8C5] mt-2">Detailed curriculum vitae and publications.</p>
            </div>
            <div className="h-[50vh] sm:h-[60vh] w-full">
              {(() => {
                const cvPdf = new URL('/assets/Debasis_CV.pdf', import.meta.url).href + '#view=FitH';
                return (
                  <iframe
                    title="Debasis CV"
                    aria-label="Embedded CV PDF"
                    src={cvPdf}
                    className="w-full h-full"
                    sandbox="allow-scripts allow-same-origin"
                  />
                );
              })()}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-[#B0B8C5] text-xs sm:text-sm">
            Note: Downloading is disabled in the viewer to encourage in-browser preview. For an official copy, please request via the contact form.
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href={new URL('/assets/Debasis_Resume.pdf', import.meta.url).href} 
              download
              className="primary-button px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform text-base sm:text-lg"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </a>
            <a 
              href={new URL('/assets/Debasis_CV.pdf', import.meta.url).href} 
              download
              className="secondary-button px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform text-base sm:text-lg"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;