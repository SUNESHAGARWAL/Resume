"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioConfig } from "@/config/portfolio";
import Image from "next/image";

export default function About() {
  const { about } = portfolioConfig;
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              {about.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    {/* Replace this div with actual Image component when you add your photo */}
                    <div className="text-center p-8">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Add your photo to
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-2">
                        public/images/about.jpg
                      </p>
                    </div>
                    {/* Uncomment when you add your image:
                    <Image
                      src={about.image}
                      alt="About me"
                      fill
                      className="object-cover rounded-2xl"
                    />
                    */}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="space-y-6">
                {about.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-6 mt-12"
              >
                {about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg border border-indigo-100 dark:border-gray-600"
                  >
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
