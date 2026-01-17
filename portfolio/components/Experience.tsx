"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import { useState } from "react";

export default function Experience() {
  const { experience } = portfolioConfig;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (posIndex: number, achIndex: number) => {
    const key = `${posIndex}-${achIndex}`;
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
              {experience.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>

            {/* Experience Items */}
            {experience.positions.map((position, posIndex) => (
              <motion.div
                key={posIndex}
                variants={itemVariants}
                className={`relative mb-12 ${
                  posIndex % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 z-10">
                  <FaBriefcase className="text-white text-xl" />
                </div>

                {/* Content Card */}
                <div
                  className={`bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-200 dark:border-gray-600 ${
                    posIndex % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        {position.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {position.location}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium whitespace-nowrap shadow-md">
                      {position.period}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    {position.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {position.achievements.map((achievement, achIndex) => {
                      const key = `${posIndex}-${achIndex}`;
                      const isExpanded = expandedItems[key] || false;

                      return (
                        <div
                          key={achIndex}
                          className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md"
                        >
                          <button
                            onClick={() => toggleExpand(posIndex, achIndex)}
                            className="flex items-center justify-between w-full text-left"
                          >
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h5>
                            {isExpanded ? (
                              <FaChevronUp className="text-indigo-600 dark:text-indigo-400" />
                            ) : (
                              <FaChevronDown className="text-indigo-600 dark:text-indigo-400" />
                            )}
                          </button>

                          {isExpanded && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 space-y-2"
                            >
                              {achievement.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="text-gray-600 dark:text-gray-400 text-sm pl-4 border-l-2 border-indigo-400 dark:border-purple-500"
                                >
                                  {point}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </div>
                      );
                    })}
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
