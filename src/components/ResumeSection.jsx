import React from 'react';

const ResumeSection = () => {
  return (
    <section id="ResumeCV" className="px-[5%] sm:px-[5%] lg:px-[10%] bg-[#030014] py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Resume & CV
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-3">
            I am a Full Stack Developer with experience building responsive and
            accessible web applications using React, Node.js, and modern web
            technologies. Below you can preview my resume and a detailed CV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Resume iframe */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">Resume</h3>
              <p className="text-sm text-gray-400">Quick overview of experience and skills.</p>
            </div>
            <div className="h-[60vh] md:h-[70vh] w-full">
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
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">CV</h3>
              <p className="text-sm text-gray-400">Detailed curriculum vitae and publications.</p>
            </div>
            <div className="h-[60vh] md:h-[70vh] w-full">
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

        <p className="text-xs text-gray-500 mt-4 text-center">
          Note: Downloading is disabled in the viewer to encourage in-browser preview. For an official copy, please request via the contact form.
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;
