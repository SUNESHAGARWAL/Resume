"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTrophy, FaRocket } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import Image from "next/image";

const iconMap: { [key: string]: React.ElementType } = {
  FaTrophy,
  FaRocket,
};

export default function Achievements() {
  const { achievements } = portfolioConfig;
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              {achievements.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.items.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      {/* Replace with actual image when available */}
                      <div className="text-center p-4">
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          Add achievement image to
                        </p>
                        <p className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-1">
                          {achievement.image}
                        </p>
                      </div>
                      {/* Uncomment when you add your image:
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                      */}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg">
                      {IconComponent && (
                        <IconComponent className="text-3xl text-indigo-600 dark:text-indigo-400" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-full border border-indigo-200 dark:border-gray-600">
                      <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        Impact: {achievement.impact}
                      </span>
                    </div>
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
