import React from 'react';
import { motion } from 'framer-motion';
import {  FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-[85vh] px-4 md:px-12 pt-24 pb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 ">
      {/* Left: Text Content */}
 <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-8 '> 
 <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex flex-col items-start justify-center gap-6 max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Meet $MOYE
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          The Telegram Bot That Finds All Trending Memes Before Anyone Else
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Discover viral memes, meme coins, and alpha-packed laughs from across Telegram – all inside one powerful bot.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <motion.button
            onClick={() => alert('Coming Soon! 🚀')}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-bold text-base shadow-2xl border-3 border-blue-900/30 bg-gradient-to-br from-[#7beefc] via-[#5dd8e8] to-[#4ac8d8] hover:from-[#4ac8d8] hover:to-[#7beefc] text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7beefc]/30 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:-translate-y-1 group relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <FaTelegram className="text-lg drop-shadow-lg" />
            <span>Start Bot</span>
            <span className="absolute inset-0 flex items-center justify-center bg-gray-900/90 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold">
              Coming Soon! 🚀
            </span>
          </motion.button>
          
          <motion.a
          href="https://x.com/moyememe"
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-base gap-3 px-6 py-3 rounded-full font-bold shadow-2xl border-3 border-blue-900/30 bg-gradient-to-br from-[#7beefc] via-[#5dd8e8] to-[#4ac8d8] hover:from-[#4ac8d8] hover:to-[#7beefc] text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7beefc]/30 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:-translate-y-1 group relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <FaXTwitter className="text-lg drop-shadow-lg" />
            <span>Community</span>
    
          </motion.a>

              <motion.a
          href="https://moye-meme.gitbook.io/moye-meme/"
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-base gap-3 px-6 py-3 rounded-full font-bold shadow-2xl border-3 border-blue-900/30 bg-gradient-to-br from-[#7beefc] via-[#5dd8e8] to-[#4ac8d8] hover:from-[#4ac8d8] hover:to-[#7beefc] text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7beefc]/30 focus:ring-offset-2 focus:ring-offset-gray-950 transform hover:-translate-y-1 group relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
           
            <span>Whitepaper</span>
    
          </motion.a>
        </div>
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
          alt="MOYE Telegram Bot"
          className="rounded-3xl shadow-2xl w-[400px] h-auto object-cover border-4 border-blue-900/30"
        />
      </motion.div>
 </div>
    </section>
  );
};

export default Hero;