import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRobot } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Tokenomics', href: '#tokenomics' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 border-b border-gray-800 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-start justify-center select-none">
          <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="MetaBotX" className="w-16 h-16 rounded-full" />
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
 MOYE
            </span>
          </div>
   
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 px-2"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://x.com/moye_verse?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-2 py-2 rounded-full font-bold shadow-lg border-3 border-blue-900/30 bg-gradient-to-br from-[#7beefc] via-[#5dd8e8] to-[#4ac8d8] hover:from-[#4ac8d8] hover:to-[#7beefc] text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7beefc]/30 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:-translate-y-1"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
           <FaXTwitter/>
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400 text-2xl focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-950/95 border-b border-gray-800 shadow-xl px-4 pt-2 pb-6 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-blue-400 text-lg font-medium py-2 px-2 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-2 px-6 py-3 rounded-full font-bold shadow-lg border-3 border-blue-900/30 bg-gradient-to-br from-[#7beefc] via-[#5dd8e8] to-[#4ac8d8] hover:from-[#4ac8d8] hover:to-[#7beefc] text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7beefc]/30 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:-translate-y-1"
              onClick={() => setMenuOpen(false)}
            >
            <FaXTwitter/>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;