import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaUsers, FaExchangeAlt, FaChartLine, FaUserTie, FaTrophy, FaRobot, FaGift, FaEye,  FaGamepad } from 'react-icons/fa';
import { RiNftLine } from "react-icons/ri";
const TokenomicsRoadmap = () => {
  const tokenomics = [
    { percentage: 30, label: 'Community & Airdrops', icon: <FaUsers />, color: 'from-[#7beefc] to-blue-500' },
    { percentage: 25, label: 'CEX/DEX Liquidity', icon: <FaExchangeAlt />, color: 'from-purple-500 to-pink-500' },
    { percentage: 20, label: 'Ecosystem Growth', icon: <FaChartLine />, color: 'from-pink-500 to-red-500' },
    { percentage: 15, label: 'Team & Ops', icon: <FaUserTie />, color: 'from-green-500 to-emerald-500' },
    { percentage: 10, label: 'Meme Wars & Rewards', icon: <FaTrophy />, color: 'from-yellow-500 to-orange-500' },
  ];

  const roadmap = [
    { 
      status: 'completed', 
      title: 'Meme Discovery Bot Launch', 
      description: 'Core bot functionality with meme scanning and alerts',
      icon: <FaRobot />,
      date: 'Q1 2024'
    },
    { 
      status: 'completed', 
      title: 'Airdrop Campaign', 
      description: 'Community token distribution and awareness campaign',
      icon: <FaGift />,
      date: 'Q1 2024'
    },
    { 
      status: 'upcoming', 
      title: 'Meme Coin Watchlist Feature', 
      description: 'Real-time tracking of trending meme coins and tokens',
      icon: <FaEye />,
      date: 'Q2 2024'
    },
    { 
      status: 'upcoming', 
      title: '$MOYE NFT Meme Drops', 
      description: 'Exclusive NFT collections featuring viral memes',
      icon: <RiNftLine />,
      date: 'Q2 2024'
    },
    { 
      status: 'upcoming', 
      title: 'Meme2Earn Platform', 
      description: 'Earn rewards by creating and sharing viral memes',
      icon: <FaGamepad />,
      date: 'Q3 2024'
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden" id="tokenomics">
      {/* Floating Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#7beefc]/20 blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-purple-400/20 blur-xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Tokenomics Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tokenomics
              </h2>
              <div className="flex items-center gap-4">
                <FaCoins className="text-[#7beefc] text-3xl" />
                <div>
                  <p className="text-2xl font-bold text-white">Total Supply: 1B $MOYE</p>
                  <p className="text-gray-400">Fair distribution for sustainable growth</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {tokenomics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                      <span className="text-white font-semibold">{item.label}</span>
                    </div>
                    <span className="text-[#7beefc] font-bold text-lg">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Roadmap Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Upcoming Roadmap
              </h2>
              <p className="text-gray-400 text-lg">Our journey to revolutionize meme discovery</p>
            </div>

            <div className="space-y-6">
              {roadmap.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    item.status === 'completed' 
                      ? 'bg-green-900/20 border-green-500/30' 
                      : 'bg-gray-900/50 border-gray-800 hover:border-[#7beefc]/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-[#7beefc]/20 text-[#7beefc]'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        {item.status === 'completed' && (
                          <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                            ✅ Completed
                          </span>
                        )}
                        {item.status === 'upcoming' && (
                          <span className="px-2 py-1 text-xs bg-[#7beefc]/20 text-[#7beefc] rounded-full">
                            🔜 Upcoming
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-2">{item.description}</p>
                      <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsRoadmap; 