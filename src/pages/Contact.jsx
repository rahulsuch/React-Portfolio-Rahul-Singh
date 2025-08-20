import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import ChatBot from "./ChatBot/ChatBot"; 
import ChatModal from "./ChatBot/ChatModal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .send("your_service_id", "your_template_id", form, "your_public_key")
      .then(
        () => {
          setStatus("Message sent!");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("Something went wrong.")
      );
  };

  return (
    <motion.section
      key="contact"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full p-6 bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top: Contact Info and Form */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <h1 className="text-4xl font-bold">🤝 Let’s Connect</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m always excited to collaborate on meaningful projects — whether
              it's intuitive UIs, frontend engineering, or product
              brainstorming. Got something in mind? Let’s talk!
            </p>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-blue-500" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500" />
              </a>
              <a href="mailto:youremail@example.com">
                <FaEnvelope className="hover:text-blue-500" />
              </a>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className="text-sm text-green-500 dark:text-green-400">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 my-8" />

        {/* ChatBot Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">💬 Quick Chat with Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ask me anything about my experience, skills, availability, or how I
            can help your project. This AI assistant follows a set of rules I’ve
            defined — but if you need more clarity, just drop a message!
          </p>

          {/* ... inside your return JSX */}
          {isChatOpen && <ChatModal onClose={() => setIsChatOpen(false)} />}

          {/* Floating Chat Button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
            aria-label="Open Chat"
          >
            💬
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
