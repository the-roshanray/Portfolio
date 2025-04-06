"use client";
import Image from "next/image";
import React from "react";

const LatestProject = () => {
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#5DE2E7] mb-12">
          Latest Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: "DSA Project",
              image:
                "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
            },
            {
              title: "Student Portal",
              image:
                "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
            },
            {
              title: "Food Delivery App",
              image: "/Food Delivery.webp",
            },
            {
              title: "E-Commerce Platform",
              image:
                "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg",
            },
            {
              title: "Travel Blog",
              image:
                "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
            },
            {
              title: "Fitness Tracker",
              image: "/Fitness Tracker.jpg",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <div className="text-center">
                  <p className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </p>
                  <button
                    className="px-6 py-2 bg-[#5DE2E7] text-white rounded-lg hover:bg-blue-700 transition duration-300"
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
