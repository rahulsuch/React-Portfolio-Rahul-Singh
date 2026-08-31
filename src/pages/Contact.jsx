import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "info", message: "Sending..." });

    try {
      emailjs
        .send("your_service_id", "your_template_id", form, "your_public_key")
        .then(
          () => {
            setStatus({ type: "success", message: "Message sent successfully!" });
            setForm({ name: "", email: "", message: "" });
          },
          () => setStatus({ type: "error", message: "Failed to send. Please reach out via email directly." })
        );
    } catch {
      setStatus({ type: "error", message: "Failed to send. Please reach out via email directly." });
    }
  };

  return (
    <section
      className="min-h-screen w-full scroll-smooth p-6 md:p-12 md:pl-28 bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top: Contact Info and Form */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <h1 className="text-4xl font-bold">🤝 Let’s Connect</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m always excited to collaborate on meaningful projects — whether
              it's intuitive UIs, frontend engineering, or product
              brainstorming. Got something in mind? Let’s talk!
            </p>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/rahulsuch"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-singh-public-profile"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:singhrah8ul542@gmail.com"
                aria-label="Send Email"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 flex flex-col gap-4"
          >
            <label htmlFor="contact-name" className="sr-only">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-transparent focus:border-blue-500 outline-none transition"
            />
            <label htmlFor="contact-email" className="sr-only">
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-transparent focus:border-blue-500 outline-none transition"
            />
            <label htmlFor="contact-message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-transparent focus:border-blue-500 outline-none resize-none transition"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-md transition shadow-md"
            >
              {status.type === "info" ? status.message : "Send Message"}
            </button>
            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : status.type === "error"
                    ? "text-red-500 dark:text-red-400"
                    : "text-blue-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 my-4" />

        {/* ChatBot Info Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">💬 Quick Chat with Me</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a quick question about my experience, skills, availability, or how I
            can help your project? Click the chat button in the navigation or on the homepage to start a quick interactive chat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
