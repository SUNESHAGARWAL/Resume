"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

export default function Contact() {
  const { contactSection, contact, location } = portfolioConfig;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/SUNESHAGARWAL",
      href: contact.github,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sunesh-agarwal",
      href: contact.linkedin,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {contactSection.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {contactSection.description}
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-200 dark:border-gray-600 ${
                  method.label === "Location" ? "cursor-default" : "cursor-pointer"
                }`}
                onClick={method.label === "Location" ? (e) => e.preventDefault() : undefined}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg">
                    <method.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {method.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Optional Contact Image */}
          {contactSection.image && (
            <motion.div
              variants={itemVariants}
              className="mt-16 max-w-2xl mx-auto"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Add contact image to
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-2">
                        {contactSection.image}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
