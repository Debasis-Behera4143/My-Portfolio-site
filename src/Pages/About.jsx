import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Zap } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const Header = memo(() => (
  <div className="text-center mb-16">
    <div className="inline-block relative">
      <h2 
        className="text-4xl lg:text-5xl font-bold text-center mx-auto primary-gradient" 
        data-aos="zoom-in-up"
        data-aos-duration="700"
      >
        <Zap className="inline-block w-10 h-10 lg:w-12 lg:h-12 text-[#2B6FFF] mb-3" />
        <span className="block mt-2">About Me</span>
      </h2>
    </div>
    <p 
      className="mt-6 text-[#B0B8C5] max-w-3xl mx-auto text-xl"
      data-aos="zoom-in-up"
      data-aos-duration="900"
    >
      Transforming ideas into extraordinary digital experiences through code and creativity
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center items-center py-8">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Gradient backgrounds */}
      <div className="absolute -inset-8 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B6FFF] via-[#DFFF00] to-[#2B6FFF] rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 border-4 border-[#2B6FFF]/40">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
          
          {(() => {
            const photoUrl = new URL('/Photo.jpg', import.meta.url).href;
            return (
              <img
                src={photoUrl}
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
            );
          })()}
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  // Memoized calculations
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

  // Optimized AOS initialization
  useEffect(() => {
    AOS.init({
      once: false, 
    });
  }, []);

  return (
    <div
      className="h-auto pb-16 text-white overflow-hidden px-[5%] lg:px-[12%] mt-16 section-padding" 
      id="About"
    >
      <Header />
      
      <div className="w-full mx-auto pt-8 lg:pt-12 relative">
        <ProfileImage />

        <div className="max-w-4xl mx-auto">
          <div className="premium-card p-8 rounded-2xl mb-12">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <span className="primary-gradient">
                Hello, I'm Debasis Behera
              </span>
            </h2>
            
            <div 
              className="text-lg lg:text-xl text-[#B0B8C5] leading-relaxed space-y-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>
                I'm a <span className="text-white font-bold">Computer Science & Engineering student</span> at Indira Gandhi Institute of Technology, Sarang, passionate about exploring the frontiers of technology and solving complex problems through <span className="text-white">elegant coding</span>.
              </p>
              <p>
                My journey began with mastering <span className="text-white">C++</span> and <span className="text-white">Data Structures & Algorithms</span>, and I'm now delving deep into <span className="text-white">Full Stack Development</span> and <span className="text-white">AI/ML technologies</span>.
              </p>
              <p>
                I'm currently working on innovative projects that blend creativity with technical precision, always aiming to craft transformative products that make a meaningful impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div 
              className="premium-card p-6 rounded-2xl text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Code className="w-12 h-12 text-[#2B6FFF] mx-auto mb-4" />
              <div className="text-3xl font-bold primary-gradient mb-2">{totalProjects}+</div>
              <div className="text-[#B0B8C5]">Projects</div>
            </div>
            
            <div 
              className="premium-card p-6 rounded-2xl text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Award className="w-12 h-12 text-[#2B6FFF] mx-auto mb-4" />
              <div className="text-3xl font-bold primary-gradient mb-2">{totalCertificates}+</div>
              <div className="text-[#B0B8C5]">Certificates</div>
            </div>
            
            <div 
              className="premium-card p-6 rounded-2xl text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <FileText className="w-12 h-12 text-[#2B6FFF] mx-auto mb-4" />
              <div className="text-3xl font-bold primary-gradient mb-2">{YearExperience}+</div>
              <div className="text-[#B0B8C5]">Years Experience</div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://www.linkedin.com/in/debasis-behera4143" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block primary-button px-8 py-4 font-bold text-lg rounded-xl hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);