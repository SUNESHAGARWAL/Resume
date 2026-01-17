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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="relative py-24 bg-black overflow-hidden">
      {/* Geometric background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 border border-indigo-500 rotate-45" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-purple-500 rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {experience.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline - Vertical Layout for Better Alignment */}
          <div className="space-y-12">
            {experience.positions.map((position, posIndex) => (
              <motion.div
                key={posIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Connection Line */}
                {posIndex < experience.positions.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-transparent -mb-12 hidden md:block" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 border-4 border-black z-10 hidden md:flex animate-glow">
                  <FaBriefcase className="text-white text-xl" />
                </div>

                {/* Content Card */}
                <div className="md:ml-20 glass rounded-2xl p-8 hover-lift border border-white/10 backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                        {position.title}
                      </h3>
                      <h4 className="text-xl md:text-2xl font-semibold gradient-text mb-2">
                        {position.company}
                      </h4>
                      <p className="text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                        {position.location}
                      </p>
                    </div>
                    <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30 whitespace-nowrap backdrop-blur-sm">
                      {position.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed border-l-4 border-indigo-500/50 pl-6 italic">
                    {position.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {position.achievements.map((achievement, achIndex) => {
                      const key = `${posIndex}-${achIndex}`;
                      const isExpanded = expandedItems[key] || false;

                      return (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="glass rounded-xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleExpand(posIndex, achIndex)}
                            className="flex items-center justify-between w-full text-left group/btn"
                          >
                            <h5 className="text-lg font-bold text-white group-hover/btn:text-indigo-300 transition-colors">
                              {achievement.title}
                            </h5>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-indigo-400"
                            >
                              <FaChevronDown className="text-xl" />
                            </motion.div>
                          </button>

                          {isExpanded && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-6 space-y-3"
                            >
                              {achievement.points.map((point, pointIndex) => (
                                <motion.li
                                  key={pointIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: pointIndex * 0.05 }}
                                  className="text-gray-400 text-sm pl-6 border-l-2 border-indigo-500/50 hover:border-indigo-400 hover:text-gray-300 transition-all duration-200 leading-relaxed"
                                >
                                  {point}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </motion.div>
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
