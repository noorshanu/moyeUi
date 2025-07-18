import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTelegram, FaUsers } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="cta" className="w-full py-24 px-4 bg-cta backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
        >
          Ready to Discover Viral Memes First?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-4"
        >
          Join MOYE and never miss a viral meme again. Get real-time alerts, trending coins, and alpha-packed laughs from across Telegram.
        </motion.p>
        <motion.a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-2xl shadow-2xl border-2 border-[#7beefc] bg-gradient-to-r from-[#7beefc] to-purple-600 hover:from-purple-600 hover:to-[#7beefc] text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7beefc] focus:ring-offset-2 animate-glow"
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.97 }}
        >
          Start the Bot <FaTelegram className="ml-1" />
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mt-6 px-6 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-lg text-gray-200 shadow"
        >
          <FaUsers className="text-[#7beefc] text-xl" />
          Join 50,000+ meme hunters
        </motion.div>
      </div>
      {/* Subtle background shapes */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#7beefc]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default CTA; 