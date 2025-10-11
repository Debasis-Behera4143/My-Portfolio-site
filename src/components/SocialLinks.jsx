import { useEffect } from "react";
import { Linkedin, Github, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "Professional Network",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/debasis-behera4143",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "Code Repository",
    icon: Github,
    url: "https://github.com/Debasis-Behera4143",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 p-4 rounded-xl 
                     bg-[#121826] border border-[#2B6FFF]/20 overflow-hidden
                     hover:border-[#DFFF00] transition-all duration-300"
          data-aos="fade-up" 
          data-aos-delay={index * 100}
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                       bg-gradient-to-r ${link.gradient}`}
          />

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-lg transition-all duration-300
                         group-hover:scale-125 group-hover:opacity-30"
              style={{ backgroundColor: link.color }}
            />
            <div className="relative p-3 rounded-lg bg-[#0B0F19]">
              <link.icon
                className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                style={{ color: link.color }}
              />
            </div>
          </div>

          <div className="flex flex-col min-w-0 flex-grow">
            <span className="text-lg font-bold text-white group-hover:text-[#DFFF00] transition-colors duration-300">
              {link.displayName}
            </span>
            <span className="text-sm text-[#B0B8C5] group-hover:text-white transition-colors duration-300">
              {link.subText}
            </span>
          </div>

          <ExternalLink
            className="w-5 h-5 text-[#B0B8C5] group-hover:text-[#DFFF00]
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 translate-x-2"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                         translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;