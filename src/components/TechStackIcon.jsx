import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-8 rounded-3xl premium-card hover:scale-110 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-6 hover:-translate-y-3">
      <div className="relative">
        <div className="absolute -inset-3 bg-gradient-to-r from-[#b88f55] to-[#cd7f32] rounded-full opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
        <img 
          src={new URL(`/assets/icons/${TechStackIcon}`, import.meta.url).href} 
          alt={`${Language} icon`} 
          className="relative h-20 w-20 md:h-24 md:w-24 transform transition-transform duration-300 premium-tech-icon"
        />
      </div>
      <span className="text-gray-100 font-bold text-lg md:text-xl tracking-wide group-hover:text-white transition-colors duration-300 text-center">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;