import React from 'react';
import { motion } from 'framer-motion';
import {  FaCoins, FaTrophy, FaRss, FaUsers, FaTelegram } from 'react-icons/fa';
import { GiRadarSweep } from "react-icons/gi";

const features = [
  {
    icon: <GiRadarSweep className="text-[#7beefc] text-3xl" />, title: 'Meme Radar',
    desc: 'Real-time scanner of meme trends on Telegram - never miss a viral moment.'
  },
  {
    icon: <FaCoins className="text-[#7beefc] text-3xl" />, title: 'Top Meme Coins',
    desc: 'Highlights new meme token launches & buzz before they explode.'
  },
  {
    icon: <FaTrophy className="text-[#7beefc] text-3xl" />, title: 'Meme Leaderboards',
    desc: 'Track which memes are going viral fastest with live rankings.'
  },
  {
    icon: <FaRss className="text-[#7beefc] text-3xl" />, title: 'Meme Curation Feed',
    desc: 'Daily dose of high-engagement, top-quality memes curated just for you.'
  },
  {
    icon: <FaUsers className="text-[#7beefc] text-3xl" />, title: 'Community Submissions',
    desc: 'Let users submit and vote on memes - the community decides what goes viral.'
  },
  {
    icon: <FaTelegram className="text-[#7beefc] text-3xl" />, title: '24/7 Bot Monitoring',
    desc: 'MOYE bot never sleeps - scans Telegram channels around the clock for alpha.'
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
       Key Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Discover viral memes, trending coins, and alpha-packed laughs from across Telegram – all inside one powerful bot.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(123,238,252,0.15)', borderColor: '#7beefc', backgroundColor: 'rgba(123,238,252,0.10)' }}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 flex flex-col items-start gap-4 shadow-xl transition-all group cursor-pointer"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform">{f.icon}</div>
              <div className="text-xl font-bold text-white mb-1">{f.title}</div>
              <div className="text-gray-400 text-base">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;