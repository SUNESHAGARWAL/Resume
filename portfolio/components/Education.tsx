"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

export default function Education() {
  const { education } = portfolioConfig;
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="relative py-24 bg-black overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 Q 25 25, 50 50 T 100 50" stroke="rgba(99, 102, 241, 0.3)" fill="none" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Floating geometric accents */}
      <div className="absolute bottom-20 left-10 w-80 h-80 border-2 border-purple-500/10 rotate-6 rounded-full" />
      <div className="absolute top-20 right-20 w-64 h-64 border-2 border-indigo-500/10 -rotate-12 rounded-3xl" />

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
              {education.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          {/* Education Items */}
          <div className="max-w-4xl mx-auto space-y-8">
            {education.degrees.map((degree, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-8 hover-lift border border-white/10 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/50 animate-glow">
                      <FaGraduationCap className="text-white text-3xl" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                        {degree.degree}
                      </h3>
                      <h4 className="text-xl font-semibold gradient-text mb-3">
                        {degree.institution}
                      </h4>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-indigo-400" />
                          <span>{degree.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-indigo-400" />
                          <span>{degree.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GPA Badge */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex flex-col items-center px-6 py-3 glass bg-indigo-600/20 rounded-lg border border-indigo-500/30">
                      <span className="text-xs text-gray-400 mb-1">
                        GPA
                      </span>
                      <span className="text-2xl font-bold gradient-text">
                        {degree.gpa}
                      </span>
                    </div>
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
