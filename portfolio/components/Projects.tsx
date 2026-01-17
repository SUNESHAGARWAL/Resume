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
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating geometric accents */}
      <div className="absolute top-32 left-10 w-80 h-80 border-2 border-purple-500/10 rotate-12 rounded-3xl" />
      <div className="absolute bottom-32 right-10 w-96 h-96 border-2 border-indigo-500/10 -rotate-6 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {projects.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.items.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden hover-lift border border-white/10 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 group"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                  <div className="w-full h-full glass flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-800/50">
                    {/* Replace with actual image when available */}
                    <div className="text-center p-4">
                      <p className="text-gray-400 text-sm">
                        Add project screenshot to
                      </p>
                      <p className="text-indigo-400 font-mono text-xs mt-2">
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
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30"
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
                        className="text-sm text-gray-400 pl-4 border-l-2 border-indigo-500/50 hover:border-indigo-400 hover:text-gray-300 transition-all"
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
                        className="flex items-center gap-2 px-4 py-2 glass border border-white/10 text-white rounded-lg hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-colors"
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
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
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
