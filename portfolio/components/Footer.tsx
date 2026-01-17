"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

export default function Footer() {
  const { name, contact } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="text-gray-400">
              Senior Data Scientist & Lead AI Engineer passionate about building intelligent solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>&copy; {currentYear} {name}. Built with</span>
            <FaHeart className="text-red-500" />
            <span>using Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
