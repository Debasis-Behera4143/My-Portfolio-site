import React, { useState, useEffect } from "react";
import { Menu, X, User, Code, FileText, Award, Mail, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#about-me", label: "About", icon: User },
    { href: "#portfolio", label: "Projects", icon: Code },
    { href: "#experience", label: "Experience", icon: FileText },
    { href: "#leadership", label: "Leadership", icon: Award },
    { href: "#resumecv", label: "Resume", icon: FileText },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => {
          if (!item.href) return null;
          const section = document.querySelector(item.href);
          if (section) {
            return {
              id: item.href.replace("#", ""),
              offset: section.offsetTop - 120,
              height: section.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      const currentPosition = window.scrollY;
      const active = sections.find(
        (section) =>
          currentPosition >= section.offset &&
          currentPosition < section.offset + section.height
      );

      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (!href) return;
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2"
            : "bg-transparent border-b border-transparent py-4"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="mx-auto px-[5%] lg:px-[10%]">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo / Left Side */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="flex flex-col group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0A3D91] group-hover:scale-125 transition-transform" />
                  <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#0A3D91] transition-colors">
                    Debasis Behera
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider technical-label mt-0.5 ml-4">
                  AI/ML Engineer • Full Stack Developer
                </span>
              </a>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 technical-label ${
                    activeSection === item.href?.substring(1).toLowerCase()
                      ? "text-[#0A3D91] font-bold"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Optional explicit document download button if needed, otherwise rely on Resume section */}
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 hover:text-slate-950 transition-colors rounded-lg border border-slate-200 bg-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-200 ${
            isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  scrollToSection(e, item.href);
                  setIsOpen(false);
                }}
                className={`block py-2 text-sm font-semibold uppercase tracking-wider flex items-center gap-3 technical-label ${
                  activeSection === item.href?.substring(1).toLowerCase()
                    ? "text-[#0A3D91]"
                    : "text-slate-600 hover:text-slate-950"
                }`}
                aria-label={item.label}
              >
                <item.icon className="w-4 h-4 text-slate-400" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;