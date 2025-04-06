"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const ServiceSection = () => {
  const services = [
    {
      title: "Data Structures & Algorithms",
      icon: "📊",
      description: "Optimizing code efficiency with DSA in C++.",
    },
    {
      title: "Full-Stack Development",
      icon: "🌐",
      description:
        "Building complete web applications with frontend and backend integration.",
    },
    {
      title: "API Development",
      icon: "🔗",
      description: "Creating and integrating RESTful and GraphQL APIs.",
    },
    {
      title: "Performance Optimization",
      icon: "⚡",
      description:
        "Enhancing web performance for faster load times and efficiency.",
    },
    {
      title: "Version Control & CI/CD",
      icon: "🛠️",
      description:
        "Using Git, GitHub, and CI/CD pipelines for streamlined development.",
    },
    {
      title: "Database Management",
      icon: "🗄️",
      description:
        "Working with SQL and NoSQL databases for efficient data handling.",
    },
    {
      title: "Cloud Computing",
      icon: "☁️",
      description: "Deploying and managing applications on cloud platforms.",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-16 py-12 min-h-screen relative"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#5DE2E7]">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              }`}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center">
                <div className="text-xl" aria-label={service.title}>
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold ml-2 text-[#5DE2E7]">
                  {service.title}
                </h2>
              </div>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
