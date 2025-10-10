import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Resume from "./Resume";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Portfolio", label: "Portfolio" },
    // Keep modal-triggering Resume button for quick view
    { label: "Resume", action: () => setIsResumeOpen(true) },
    // New section link for Resume & CV
    { href: "#ResumeCV", label: "Resume & CV" },
    { href: "#Contact", label: "Contact" },
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
              offset: section.offsetTop - 550,
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
            ? "bg-[#030014]"
            : scrolled
            ? "bg-[#030014]/50 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a
                href="#Home"
                onClick={(e) => scrollToSection(e, "#Home")}
                className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
              >
                Debasis Behera
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-8 flex items-center space-x-8">
                {navItems.map((item) =>
                  item.action ? (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className={`text-sm font-medium ${
                        activeSection === item.label
                          ? "text-purple-500"
                          : "text-gray-300 hover:text-white"
                      } transition-colors`}
                      aria-label={item.label}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="group relative px-1 py-2 text-sm font-medium"
                      aria-label={item.label}
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          activeSection === item.href?.substring(1)
                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                            : "text-[#e2d3fd] group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                          activeSection === item.href?.substring(1)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${
                  isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) =>
              item.action ? (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                    activeSection === item.label
                      ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                      : "text-[#e2d3fd] hover:text-white"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                    activeSection === item.href?.substring(1)
                      ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                      : "text-[#e2d3fd] hover:text-white"
                  }`}
                  aria-label={item.label}
                >
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
