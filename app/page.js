import React from "react";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";
import TechnicalSkills from "@/components/TechnicalSkills";
import LatestProject from "@/components/LatestProject";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";

const Home = () => {
  return (
    <div className="bg-[#070508]">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section id="hero">
        {" "}
        <HeroSection />{" "}
      </section>
      <section id="about">
        {" "}
        <AboutMe />{" "}
      </section>
      <ServiceSection/>
      <section id="skills">
        {" "}
        <TechnicalSkills />{" "}
      </section>
      <section id="projects">
        {" "}
        <LatestProject />{" "}
      </section>
      <section id="contact">
        {" "}
        <ContactMe />{" "}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
