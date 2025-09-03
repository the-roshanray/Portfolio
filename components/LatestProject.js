"use client";

import Image from "next/image";
import React from "react";

const LatestProject = () => {
  const projects = [
    {
      title: "Netflix Clone",
      image: "/NetflixClone.png",
    },
    {
      title: "Uber Clone",
      image: "/Uber.png",
    },
    {
      title: "Student Smart Card",
      image:
        "/Student Smart Card.png",
    },

    {
      title: "Upcoming Project 1",
      image: "/Upcoming.webp",
    },
    {
      title: "Upcoming Project 2",
      image: "/Upcoming.webp",
    },
    {
      title: "Upcoming Project 3",
      image: "/Upcoming.webp",
    },
  ];

  return (
    <section className="py-20 min-h-screen bg-black text-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#5DE2E7] mb-12">
          Latest Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                onError={(e) => {
                  e.currentTarget.src = "/images/fallback.png";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <div className="text-center">
                  <p className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </p>
                  <button
                    className="px-6 py-2 bg-[#5DE2E7] text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#5DE2E7] focus:ring-opacity-50"
                    aria-label={`View details of ${project.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
