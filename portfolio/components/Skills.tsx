"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaBrain, FaRobot } from "react-icons/fa";
import { SiPython, SiTensorflow, SiPytorch, SiKeras, SiGit, SiDocker } from "react-icons/si";
import { portfolioConfig } from "@/config/portfolio";

// Skill logo mapping - using available icons
const skillLogos: { [key: string]: any } = {
  "Python": SiPython,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Keras": SiKeras,
  "Git": SiGit,
  "Docker": SiDocker,
};

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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(99, 102, 241, 0.1) 35px,
              rgba(99, 102, 241, 0.1) 70px
            )`
          }}
        />
      </div>

      {/* Floating geometric accents */}
      <div className="absolute top-20 right-20 w-72 h-72 border-2 border-purple-500/10 rotate-45 rounded-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 border-2 border-indigo-500/10 -rotate-12 rounded-full" />

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
              {skills.title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Cutting-edge technologies powering intelligent solutions
            </p>
          </motion.div>

          {/* Skills Categories - Diagonal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.categories.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Diagonal accent line */}
                  <div className="absolute -top-4 -left-4 w-full h-full border-l-4 border-t-4 border-indigo-500/20 rounded-tl-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />

                  <div className="relative glass rounded-2xl p-8 hover-lift border border-white/10 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header */}
                    <div className="relative flex items-center mb-8">
                      <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/50 animate-glow">
                        {IconComponent && (
                          <IconComponent className="text-white text-4xl" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                        {category.name}
                      </h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="relative grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skillLogos[skill];
                        return (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.1, rotateZ: 2 }}
                            className="relative group/skill flex items-center gap-2 px-3 py-3 glass rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                          >
                            {SkillIcon && (
                              <SkillIcon className="text-2xl text-indigo-400 group-hover/skill:text-indigo-300 transition-colors" />
                            )}
                            {!SkillIcon && (
                              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-500" />
                            )}
                            <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                              {skill}
                            </span>
                          </motion.div>
                        );
                      })}
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
