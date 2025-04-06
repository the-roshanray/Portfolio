"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

const titles = ["Web Developer", "UI/UX Designer", "Backend Engineer"];

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const SocialLink = ({ href, label, icon: Icon, color, hoverColor }) => (
  <a
    href={href}
    aria-label={label}
    className={`text-3xl ${color} hover:${hoverColor} transition-transform hover:scale-110`}
  >
    <Icon />
  </a>
);

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-around min-h-screen px-6 md:px-16 text-center md:text-left bg-[url('/Background.jpg')] bg-cover bg-center">
      <motion.div
        className="md:w-1/2 space-y-6"
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-100">
            Hello, I'm
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold font-bolina text-[#5DE2E7] mt-2">
            Roshan Kumar Ray
          </h1>
          <h3 className="text-xl sm:text-2xl mt-3 text-gray-200">
            A Passionate{" "}
            <span className="text-yellow-400 font-bold font-bolina">
              {titles[index]}
            </span>
          </h3>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          With over 3 years of experience in web development, I specialize in
          designing and developing seamless, high-performing web applications.
        </p>
        <div className="flex justify-center md:justify-start gap-6">
         
          <SocialLink
            href="https://www.instagram.com/the_roshanroy/"
            label="Instagram"
            icon={FaInstagram}
            color="text-pink-500"
            hoverColor="text-pink-400"
          />
          <SocialLink
            href="https://www.linkedin.com/in/roshan-kumar-ray-76478a332/"
            label="LinkedIn"
            icon={FaLinkedin}
            color="text-[#5DE2E7]"
            hoverColor="text-[#5DE2E7]"
          />
          <SocialLink
            href="https://github.com/the-roshanray"
            label="GitHub"
            icon={FaGithub}
            color="text-white"
            hoverColor="text-gray-300"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#about"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#5DE2E7] to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-[#5DE2E7]-600 transition-transform hover:scale-105 text-center"
            aria-label="More About Me"
          >
            More About Me
          </a>
          <a
            href="#projects"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-transform hover:scale-105 text-center"
            aria-label="View My Work"
          >
            View My Work
          </a>
        </div>
        <a
          href="/Resume.pdf" // Ensure this path is correct
          download
          className="mt-6 px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-transform hover:scale-105 flex items-center justify-center gap-2 w-[23rem]"
          aria-label="Download Resume"
        >
          Download My Resume <FaDownload />
        </a>
      </motion.div>
      <motion.div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#5DE2E7] shadow-xl"
        initial="hidden"
        animate="visible"
        variants={slideInRight}
      >
        <Image
          src="/Roshan.jpg" // Ensure this path is correct
          alt="Roshan Kumar Ray"
          width={320}
          height={320}
          className="rounded-full object-cover hover:scale-105 transition duration-300"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
