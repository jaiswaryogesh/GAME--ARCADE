import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGenerOpen, setIsGenerOpen] = useState(false);
  const generRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleGenerDropdown = () => setIsGenerOpen((prev) => !prev);

  const navLinks = [
    { icon: "bx-user-circle", label: "Avatar", id: "avatar" },
    { icon: "bx-diamond", label: "Arena", id: "arena" },
    { icon: "bx-store", label: "Store", id: "footer" },
    { icon: "bx-history", label: "History", link: "/history" },
  ];

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    setIsGenerOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Close "Gener" on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (generRef.current && !generRef.current.contains(event.target)) {
        setIsGenerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="py-3 px-6 flex justify-between items-center sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">

      {/* Left: Logo & Play Buttons */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img src="/images/illu-logo.png" alt="Logo" className="w-10 md:w-12" />
          <span className="hidden md:block text-xl font-bold text-white tracking-widest">𝔱𝔯𝔦𝔫𝔢𝔱𝔯𝔞</span>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="px-5 py-1.5 text-sm bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white font-medium hover:opacity-80 transition-all">
            SIGN IN
          </button>
          <button className="px-5 py-1.5 text-sm bg-gradient-to-r from-gray-700 to-gray-500 rounded-md text-white font-medium hover:opacity-80 transition-all">
            LOG IN
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map(({ icon, label, id, link }) => (
          link ? (
            <a
              key={label}
              href={link}
              className="relative group text-white text-sm font-semibold flex items-center gap-1 hover:text-purple-400"
            >
              <i className={`bx ${icon}`}></i>
              {label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ) : (
            <button
              key={label}
              onClick={() => scrollToSection(id)}
              className="relative group text-white text-sm font-semibold flex items-center gap-1 hover:text-purple-400"
            >
              <i className={`bx ${icon}`}></i>
              {label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          )
        ))}

        {/* GENER Dropdown */}
        <div className="relative" ref={generRef}>
          <button
            onClick={toggleGenerDropdown}
            className="relative group text-white text-sm font-semibold flex items-center gap-1 hover:text-purple-400"
          >
            <i className="bx bx-chevron-up"></i>
            Gener
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </button>

          {/* Dropdown Items */}
          <AnimatePresence>
            {isGenerOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 right-0 mt-2 w-40 bg-black border border-white/10 rounded-md shadow-lg z-50 overflow-hidden"
              >
                <button
                  onClick={() => scrollToSection("modern")}
                  className="w-full text-left px-4 py-2 hover:bg-purple-600 text-white text-sm"
                >
                  Modern
                </button>
                <button
                  onClick={() => scrollToSection("retro")}
                  className="w-full text-left px-4 py-2 hover:bg-purple-600 text-white text-sm"
                >
                  Retro
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="text-3xl text-white md:hidden"
        aria-label="Toggle Menu"
      >
        <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 px-6 py-5 md:hidden animate-fadeInDown">

          {/* Links */}
          <nav className="flex flex-col gap-4 mb-6 text-center">
            {navLinks.map(({ icon, label, id, link }) => (
              link ? (
                <a
                  key={label}
                  href={link}
                  className="relative group text-white text-lg font-medium flex items-center justify-center gap-2 hover:text-purple-400"
                >
                  <i className={`bx ${icon}`}></i>
                  {label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <button
                  key={label}
                  onClick={() => scrollToSection(id)}
                  className="relative group text-white text-lg font-medium flex items-center justify-center gap-2 hover:text-purple-400"
                >
                  <i className={`bx ${icon}`}></i>
                  {label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}

            {/* GENER in Mobile */}
            <div className="flex justify-center gap-6">
              <button
                onClick={() => scrollToSection("modern")}
                className="text-sm text-purple-300 hover:underline"
              >
                Modern
              </button>
              <button
                onClick={() => scrollToSection("retro")}
                className="text-sm text-purple-300 hover:underline"
              >
                Retro
              </button>
            </div>
          </nav>

          {/* Mobile Play Buttons */}
          <div className="flex flex-col gap-3">
            <button className="py-2 bg-purple-600 rounded-md text-white font-medium hover:opacity-90 transition">
              PLAY NOW
            </button>
            <button className="py-2 bg-gray-700 rounded-md text-white font-medium hover:opacity-90 transition">
              PLAY NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
