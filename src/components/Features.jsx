import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaLock, FaUsers, FaCoins, FaBolt, FaExchangeAlt } from 'react-icons/fa';
import { SiChainlink, SiBinance, SiEthereum } from 'react-icons/si';

const features = [
  {
    icon: <FaRobot className="text-blue-400 text-3xl" />, title: 'AI Trading Bots',
    desc: 'Automate your crypto trading with advanced AI-powered bots.'
  },
  {
    icon: <FaChartLine className="text-green-400 text-3xl" />, title: 'Backtesting',
    desc: 'Test your strategies on historical data before going live.'
  },
  {
    icon: <FaUsers className="text-purple-400 text-3xl" />, title: 'Copy Top Traders',
    desc: 'Follow and copy the best performing traders in real time.'
  },
  {
    icon: <FaCoins className="text-yellow-400 text-3xl" />, title: 'Crypto Payments',
    desc: 'Pay and get paid in crypto, instantly and securely.'
  },
  {
    icon: <FaLock className="text-pink-400 text-3xl" />, title: 'On-Chain Security',
    desc: 'All transactions and reputations are secured on blockchain.'
  },
  {
    icon: <FaBolt className="text-indigo-400 text-3xl" />, title: '24/7 Automation',
    desc: 'Bots never sleep—trade around the clock, hands-free.'
  },
  {
    icon: <SiChainlink className="text-blue-300 text-3xl" />, title: 'Oracle Integration',
    desc: 'Get real-time, reliable data feeds for smarter trading.'
  },
  {
    icon: <SiBinance className="text-yellow-500 text-3xl" />, title: 'Multi-Exchange',
    desc: 'Trade on Binance, Coinbase, and more from one platform.'
  },
  {
    icon: <SiEthereum className="text-gray-300 text-3xl" />, title: 'ETH & EVM Support',
    desc: 'Full support for Ethereum and EVM-compatible chains.'
  },
  {
    icon: <FaExchangeAlt className="text-green-300 text-3xl" />, title: 'Strategy Marketplace',
    desc: 'Browse, rent, or sell trading strategies with transparent stats.'
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
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent"
        >
          Powerful Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Everything you need to succeed in crypto trading, powered by AI and secured by blockchain technology.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.15)', borderColor: '#60a5fa', backgroundColor: 'rgba(30,64,175,0.10)' }}
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