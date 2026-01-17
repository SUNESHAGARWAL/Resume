"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaBrain, FaRobot } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

const iconMap: { [key: string]: React.ElementType } = {
  FaCode,
  FaBrain,
  FaRobot,
};

export default function Skills() {
  const { skills } = portfolioConfig;
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

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              {skills.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.categories.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                      {IconComponent && (
                        <IconComponent className="text-white text-3xl" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-purple-500 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
