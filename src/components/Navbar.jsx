import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, FileText, Mail } from "lucide-react";
import Resume from "./Resume";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#portfolio", label: "Portfolio", icon: Code },
    { label: "Resume", action: () => setIsResumeOpen(true), icon: FileText },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsResumeOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (!href) return;
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isOpen
            ? "bg-[#0B0F19]/95 backdrop-blur-xl"
            : scrolled
            ? "bg-[#0B0F19]/90 backdrop-blur-xl"
            : "bg-transparent"
        } border-b ${scrolled ? 'border-[#2B6FFF]/20' : 'border-transparent'}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="mx-auto px-[5%] lg:px-[12%]">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-2xl sm:text-3xl font-bold primary-gradient"
              >
                Debasis
              </a>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) =>
                  item.action ? (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className={`px-4 py-2 sm:px-5 sm:py-3 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 flex items-center gap-2 ${
                        activeSection === item.label.toLowerCase()
                          ? "primary-button"
                          : "text-[#B0B8C5] hover:text-white hover:bg-[#121826]"
                      }`}
                      aria-label={item.label}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      {item.label}
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`px-4 py-2 sm:px-5 sm:py-3 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 flex items-center gap-2 ${
                        activeSection === item.href?.substring(1).toLowerCase()
                          ? "primary-button"
                          : "text-[#B0B8C5] hover:text-white hover:bg-[#121826]"
                      }`}
                      aria-label={item.label}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-3 sm:p-4 text-[#B0B8C5] hover:text-white transition-all duration-300 ease-in-out rounded-xl hover:bg-[#121826] ${
                  isOpen ? "bg-[#121826]" : ""
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-5 border-t border-[#2B6FFF]/20">
            {navItems.map((item) =>
              item.action ? (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 ease rounded-xl flex items-center gap-3 ${
                    activeSection === item.label.toLowerCase()
                      ? "primary-button"
                      : "text-[#B0B8C5] hover:text-white hover:bg-[#121826]"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl font-bold transition-all duration-300 ease rounded-xl flex items-center gap-3 ${
                    activeSection === item.href?.substring(1).toLowerCase()
                      ? "primary-button"
                      : "text-[#B0B8C5] hover:text-white hover:bg-[#121826]"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Navbar;