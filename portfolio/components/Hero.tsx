"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

export default function Hero() {
  const { hero, contact } = portfolioConfig;

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-indigo-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
              {hero.greeting}
            </span>
          </motion.div>

          {/* Name with 3D Effect - Resized */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
            style={{
              textShadow: '0 0 40px rgba(99, 102, 241, 0.5)',
            }}
          >
            <span className="gradient-text">{hero.name}</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-24 flex items-center justify-center mb-12"
          >
            <TypeAnimation
              sequence={hero.titles.flatMap((title) => [title, 2500])}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90"
              style={{ fontFamily: 'Sora, sans-serif' }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <button
              onClick={scrollToExperience}
              className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl overflow-hidden shadow-2xl shadow-indigo-600/50 hover:shadow-indigo-600/70 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">{hero.cta.primary}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-5 glass border-2 border-indigo-500/50 text-white font-bold text-lg rounded-xl hover:border-indigo-400 hover:bg-indigo-600/20 transform hover:scale-105 transition-all duration-300"
            >
              {hero.cta.secondary}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-6 justify-center"
          >
            {[
              { Icon: FaGithub, href: contact.github, label: "GitHub" },
              { Icon: FaLinkedin, href: contact.linkedin, label: "LinkedIn" },
              { Icon: FaEnvelope, href: `mailto:${contact.email}`, label: "Email" },
              { Icon: FaPhone, href: `tel:${contact.phone}`, label: "Phone" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-5 glass rounded-xl hover:bg-indigo-600/20 transform hover:scale-110 transition-all duration-300 border border-white/5 hover:border-indigo-500/50"
                aria-label={label}
              >
                <Icon className="text-3xl text-gray-400 group-hover:text-indigo-400 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm uppercase tracking-wider">Scroll Down</span>
          <FaArrowDown className="text-indigo-500 text-xl" />
        </div>
      </motion.div>
    </section>
  );
}
