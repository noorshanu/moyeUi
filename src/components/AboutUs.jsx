import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaLock, FaUsers, FaBolt, FaGlobe } from 'react-icons/fa';

const values = [
  { icon: <FaBolt className="text-blue-400 text-2xl" />, title: 'AI Automation', desc: 'Advanced AI for smarter, faster trading.' },
  { icon: <FaLock className="text-green-400 text-2xl" />, title: 'Security', desc: 'Blockchain-powered, fully decentralized.' },
  // { icon: <FaUsers className="text-purple-400 text-2xl" />, title: 'Community', desc: 'Copy top traders, share strategies, grow together.' },
  // { icon: <FaGlobe className="text-pink-400 text-2xl" />, title: 'Transparency', desc: 'On-chain reputation and open performance.' },
];

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-24 px-4 md:px-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent mb-2">
          What is MOYE?
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2">
          Find what's funny before it goes viral.
          </h3>
          <p className="text-lg md:text-xl text-gray-400 mb-2">
          $MOYE is a Telegram-native meme discovery bot designed to track, filter, and serve you the hottest memes circulating in real time. From underground meme groups to trending coin memes – $MOYE brings you the freshest content with zero effort.

          </p>
      
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-800/60 border border-gray-700 rounded-xl p-4 shadow group hover:border-blue-400 transition-all">
                {v.icon}
                <div>
                  <div className="font-bold text-white mb-1">{v.title}</div>
                  <div className="text-gray-400 text-sm">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Illustration/Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex items-center justify-center w-full"
        >
          <img
            src="/about1.jpg"
            alt="About MetaBotX"
            className="rounded-3xl shadow-2xl w-full max-w-md h-auto object-cover border-4 border-blue-900/30"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;