import React, { useState } from "react";
import {
  Copy,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  Send,
  Mail,
  Phone,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { useToast } from "../../context/ToastContext";

export const ContactSection = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast("Email address copied to clipboard!");
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    showToast("Phone number copied to clipboard!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "info", message: "Sending..." });

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        message: "Thank you! Message received. I will reply within 24 hours.",
      });
      showToast("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
          [05] DIRECT CONTACT & COLLABORATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Let’s Discuss Senior Roles & Projects
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Whether you have an open senior frontend position, need an architectural consultation, or want to discuss enterprise React systems — my inbox is always open.
        </p>
      </div>

      {/* Symmetrically Aligned 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: Direct Channels */}
        <div className="flex flex-col h-full">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-1 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase font-mono tracking-wider flex items-center justify-between">
                  <span>Direct Channels</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Direct communication lines for recruitment & technical discussions.
                </p>
              </div>

              {/* Rows */}
              <div className="space-y-3">
                {/* Email Row */}
                <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3 group hover:border-zinc-400 dark:hover:border-zinc-600 transition">
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 block font-semibold">
                        Primary Email
                      </span>
                      <a
                        href={personalInfo.socials.email}
                        className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Phone Row */}
                <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3 group hover:border-zinc-400 dark:hover:border-zinc-600 transition">
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 block font-semibold">
                        Phone & WhatsApp
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100 block">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Location & Timezone Row */}
                <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 block">
                      India Standard Time (IST / UTC+5:30)
                    </span>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Available for global remote teams, flexible overlap hours, and international relocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid matching Form button height */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-semibold transition border border-zinc-200/60 dark:border-zinc-800"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-semibold transition border border-zinc-200/60 dark:border-zinc-800"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Send Direct Message Form */}
        <div className="flex flex-col h-full">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs flex-1 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-1 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase font-mono tracking-wider">
                  Send Direct Message
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Direct inquiry form. Expect a reply within 24 hours.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block"
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block"
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Senior Frontend Role / Technical Consultation"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Rahul, we’d like to discuss a senior frontend role..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition resize-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 font-mono text-xs uppercase tracking-wider font-semibold transition cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {status.message && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50"
                      : "bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
