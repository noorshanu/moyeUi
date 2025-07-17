import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-[70vh] px-4 md:px-12 pt-24 pb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 ">
      {/* Left: Text Content */}
 <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-8 '> 
 <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-start justify-center gap-6 max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
          MetaBotX
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-2">
          Your Ultimate AI Trading Companion
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-2">
          AI-powered trading platform and bot marketplace for crypto traders.<br/>
          Automate strategies, backtest ideas, copy top traders, and pay with crypto—all on-chain.
        </p>
        <motion.a
          href="#cta"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow-xl border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Join the Revolution <FaArrowRight className="ml-1" />
        </motion.a>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 flex items-center justify-center w-full max-w-lg"
      >
        <img
          src="/hero.jpg"
          alt="MetaBotX AI Trading"
          className="rounded-3xl shadow-2xl w-[400px] h-auto object-cover border-4 border-blue-900/30"
        />
      </motion.div>
 </div>
    </section>
  );
};

export default Hero;