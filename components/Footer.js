"use client"
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-2 ">
      <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
        <p className="text-gray-300">
          © 2025 Roshan Kumar Ray. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-300 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-200 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
