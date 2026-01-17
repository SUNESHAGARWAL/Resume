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
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Geometric background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-80 h-80 border border-purple-500 -rotate-12 rounded-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 border border-indigo-500 rotate-45" />
      </div>

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
              {about.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full glass rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl">
                    {/* Replace this div with actual Image component when you add your photo */}
                    <div className="text-center p-8">
                      <p className="text-gray-400 text-sm">
                        Add your photo to
                      </p>
                      <p className="text-indigo-400 font-mono text-xs mt-2">
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
                    className="text-lg text-gray-300 leading-relaxed"
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
                    className="glass rounded-xl p-6 hover-lift border border-white/10 backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30"
                  >
                    <h3 className="text-3xl font-bold gradient-text">
                      {stat.value}
                    </h3>
                    <p className="text-gray-300 mt-2 font-medium">
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
