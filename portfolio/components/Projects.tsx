"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioConfig;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
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
              {projects.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.items.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200 dark:border-gray-600"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    {/* Replace with actual image when available */}
                    <div className="text-center p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Add project screenshot to
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-2">
                        {project.image}
                      </p>
                    </div>
                    {/* Uncomment when you add your image:
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium border border-indigo-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-sm text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-indigo-400 dark:border-purple-500"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        <FaGithub />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        <FaExternalLinkAlt />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
