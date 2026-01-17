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
    <section id="achievements" className="relative py-24 bg-black overflow-hidden">
      {/* Circular pattern background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-purple-500 rounded-full"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
              top: `${20 + i * 10}%`,
              left: `${10 + i * 8}%`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric accents */}
      <div className="absolute top-20 right-10 w-72 h-72 border-2 border-indigo-500/10 -rotate-45 rounded-3xl" />

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
              {achievements.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
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
                  className="glass rounded-2xl overflow-hidden hover-lift border border-white/10 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 group"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                    <div className="w-full h-full glass flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-800/50">
                      {/* Replace with actual image when available */}
                      <div className="text-center p-4">
                        <p className="text-gray-400 text-xs">
                          Add achievement image to
                        </p>
                        <p className="text-indigo-400 font-mono text-xs mt-1">
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
                    <div className="absolute top-4 right-4 p-4 glass bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/50 animate-glow">
                      {IconComponent && (
                        <IconComponent className="text-white text-3xl" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center px-4 py-2 glass bg-indigo-600/20 rounded-full border border-indigo-500/30">
                      <span className="text-sm font-semibold gradient-text">
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
