"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, icon: "fab fa-html5", color: "#E44D26" },
  { name: "CSS", level: 90, icon: "fab fa-css3-alt", color: "#264DE4" },
  { name: "JavaScript", level: 85, icon: "fab fa-js-square", color: "#F7DF1E" },
  { name: "React", level: 80, icon: "fab fa-react", color: "#61DAFB" },
  { name: "Node.js", level: 75, icon: "fab fa-node-js", color: "#68A063" },
];

const professionalSkills = [
  { name: "Problem Solving", level: 90, color: "#4A90E2" },
  { name: "Communication", level: 85, color: "#F5A623" },
  { name: "Teamwork", level: 88, color: "#7ED321" },
];

const SkillBar = ({ skill }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-gray-300 font-medium">
        <i
          className={`${skill.icon} text-xl`}
          aria-hidden="true"
          style={{ color: skill.color }}
        ></i>
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

const ProfessionalSkillCircle = ({ skill }) => {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="80"
            className="stroke-gray-700 stroke-[10] fill-none"
          />
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            className="stroke-[10] fill-none"
            style={{ stroke: skill.color }}
            strokeDasharray="502"
            strokeDashoffset="502"
            initial={{ strokeDashoffset: 502 }}
            animate={{ strokeDashoffset: 502 - (502 * skill.level) / 100 }}
            transition={{ duration: 1 }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-300">
          {skill.level}%
        </span>
      </div>
      <p className="text-lg font-medium text-gray-300">{skill.name}</p>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center text-[#5DE2E7] mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h1>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>

        <motion.h1
          className="text-3xl font-bold text-center text-[#5DE2E7] mt-8 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Skills
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalSkills.map((skill, index) => (
            <ProfessionalSkillCircle key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;