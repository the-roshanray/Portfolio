"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="px-6 md:px-16 py-20 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#5DE2E7] mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#5DE2E7] shadow-lg">
              <Image
                src="/Roshan.jpg" // Ensure this path is correct
                alt="About Me"
                width={320}
                height={320}
                className="object-cover w-full h-full hover:scale-105 transition duration-300"
                priority // Add priority for above-the-fold images
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Hi, I'm Roshan Kumar Ray
            </h3>
            <p className="text-lg text-white leading-relaxed">
              I'm a passionate{" "}
              <span className="text-[#5DE2E7] font-semibold">
                Web Developer
              </span>{" "}
              with over 3 years of experience in building modern, responsive,
              and user-friendly web applications. I specialize in front-end
              development using technologies like{" "}
              <span className="text-[#5DE2E7] font-semibold">React.js</span>,{" "}
              <span className="text-[#5DE2E7] font-semibold">Next.js</span>, and{" "}
              <span className="text-[#5DE2E7] font-semibold">Tailwind CSS</span>
              , as well as back-end development with{" "}
              <span className="text-[#5DE2E7] font-semibold">Node.js</span> and{" "}
              <span className="text-[#5DE2E7] font-semibold">Express.js</span>.
            </p>
            <p className="text-lg text-white leading-relaxed">
              I love turning ideas into reality through code and constantly
              strive to learn and improve my skills. When I'm not coding, you
              can find me exploring new technologies, contributing to
              open-source projects, or enjoying a good cup of coffee.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Web Development",
                "UI/UX Design",
                "Responsive Design",
                "API Integration",
                "Problem Solving",
                "Team Collaboration",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#5DE2E7] text-white rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#5DE2E7] to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-transform hover:scale-105"
              aria-label="Let's Work Together"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
