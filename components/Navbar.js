"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 py-4 px-6 shadow-lg sticky top-0 z-50 w-full">
      <a
        href="#home"
        className="text-3xl font-bold font-bolina text-[#5DE2E7] cursor-pointer hover:text-blue-300 transition duration-300"
        aria-label="Home"
      >
        <i className="fa-solid fa-code"></i>
      </a>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
          {[
            { name: "Home", link: "#hero" }, // Make sure HeroSection has id="hero"
            { name: "About", link: "#about" }, // Make sure AboutMe has id="about"
            { name: "Skills", link: "#skills" }, // Make sure TechnicalSkills has id="skills"
            { name: "Projects", link: "#projects" }, // Make sure LatestProject has id="projects"
            { name: "Contact", link: "#contact" }, // Make sure ContactMe has id="contact"
          ].map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="block py-2 md:py-0 text-center md:text-left relative after:block after:h-[2px] after:w-0 after:bg-[#5DE2E7] after:transition-all after:duration-300 hover:after:w-full hover:text-[#5DE2E7] text-white"
                onClick={closeMenu}
                aria-label={name}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-blue-400 text-2xl hover:text-blue-300 transition duration-300"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
