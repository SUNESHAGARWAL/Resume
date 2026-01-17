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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              {education.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Education Items */}
          <div className="max-w-4xl mx-auto space-y-8">
            {education.degrees.map((degree, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg">
                      <FaGraduationCap className="text-white text-3xl" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {degree.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                        {degree.institution}
                      </h4>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
                          <span>{degree.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-indigo-600 dark:text-indigo-400" />
                          <span>{degree.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GPA Badge */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex flex-col items-center px-6 py-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-indigo-200 dark:border-gray-600">
                      <span className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                        GPA
                      </span>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
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
