"use client";
import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4">
      <div className="rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row transform transition-all duration-500 hover:shadow-3xl gradient-border">
        {/* Left Section */}
        <div className="p-6 md:p-8 bg-gradient-to-r from-[#5DE2E7] to-indigo-600 text-white flex flex-col  md:w-1/2 space-y-4 animated-gradient">
          <h1 className="text-3xl md:text-4xl font-bold text-center animate-fade-in">
            Do You Have a Project to Discuss?
          </h1>
          <h3 className="text-xl flex items-center animate-fade-in delay-100">
            Get in Touch{" "}
            <i className="fa-regular fa-message ml-2 animate-bounce"></i>
          </h3>
          <div className="space-y-4 animate-fade-in delay-200">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm hover:text-blue-200 transition-colors duration-300">
              <a href="mailto:rayroshan225@gmail.com" className="underline">
                rayroshan225@gmail.com
              </a>
            </p>
            <h4 className="text-lg font-semibold mt-6">Social Media</h4>
            <div className="flex space-x-4">
              {["fa-linkedin", "fa-instagram", "fa-github"].map(
                (icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-blue-200 transition-all duration-300 transform hover:scale-110"
                  >
                    <i className={`fa-brands ${icon} text-2xl`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-6 md:p-8 md:w-1/2 bg-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 animate-fade-in delay-300">
            Let's Talk
          </h2>
          {error && (
            <p className="text-red-500 text-sm mb-4 animate-fade-in">{error}</p>
          )}
          {success && (
            <div className="flex items-center text-green-500 text-sm mb-4 animate-fade-in">
              <i className="fa-solid fa-check-circle mr-2"></i>
              {success}
            </div>
          )}
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            aria-busy={isLoading}
          >
            <div className="floating-label animate-fade-in delay-400">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#5DE2E7] focus:border-[#5DE2E7] transition-all duration-300"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="floating-label animate-fade-in delay-500">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#5DE2E7] focus:border-[#5DE2E7] transition-all duration-300"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="floating-label animate-fade-in delay-600">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#5DE2E7] focus:border-[#5DE2E7] transition-all duration-300"
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div className="animate-fade-in delay-700">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#5DE2E7] to-indigo-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
