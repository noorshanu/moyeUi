import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="cta" className="w-full py-24 px-4 bg-gradient-to-br from-blue-950 via-gray-900 to-green-950 relative overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent mb-2"
        >
          Ready to Revolutionize Your Trading?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-4"
        >
          Join MetaBotX and automate your crypto journey with AI-powered bots, backtesting, and on-chain payments.
        </motion.p>
        <motion.a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-2xl shadow-2xl border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-glow"
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.97 }}
        >
          Join the Revolution <FaArrowRight className="ml-1" />
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mt-6 px-6 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-lg text-gray-200 shadow"
        >
          <FaShieldAlt className="text-green-400 text-xl" />
          Trusted by 10,000+ crypto traders
        </motion.div>
      </div>
      {/* Subtle background shapes */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default CTA; 