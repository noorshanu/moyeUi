import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaVoteYea,  FaTrophy, FaTelegram, FaHeart, FaCoins } from 'react-icons/fa';
import { GrStakeholder } from "react-icons/gr";

const TokenBenefits = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Floating Background Images */}
     
      <motion.img src="/bg-rem.png" alt="bg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 sm:left-100"
      />


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Why $MOYE Token */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                 Why $MOYE Token?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Holders of $MOYE get access to exclusive meme alpha, meme token alerts, and premium features in the bot.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Token Utility:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <FaGem className="text-[#7beefc] text-2xl" />
                  <span className="text-gray-300">Unlock Premium Meme Alerts</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <FaVoteYea className="text-[#7beefc] text-2xl" />
                  <span className="text-gray-300">Vote on Meme of the Day</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <GrStakeholder className="text-[#7beefc] text-2xl" />
                  <span className="text-gray-300">Stake for Weekly Rewards</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <FaTrophy className="text-[#7beefc] text-2xl" />
                  <span className="text-gray-300">Earn from viral meme contests</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                $MOYE is a Telegram-native meme discovery bot designed to track, filter, and serve you the hottest memes circulating in real time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#7beefc]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7beefc]/20 rounded-full flex items-center justify-center">
                    <FaTelegram className="text-[#7beefc] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Start the bot on Telegram</h4>
                    <p className="text-gray-400">Connect your Telegram account and activate the MOYE bot</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#7beefc]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7beefc]/20 rounded-full flex items-center justify-center">
                    <FaHeart className="text-[#7beefc] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Pick your interests</h4>
                    <p className="text-gray-400">Choose from memes, coins, niche humor, and more</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#7beefc]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7beefc]/20 rounded-full flex items-center justify-center">
                    <FaCoins className="text-[#7beefc] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Get trending content</h4>
                    <p className="text-gray-400">Receive daily/real-time trending memes and alpha alerts</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenBenefits; 