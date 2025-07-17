import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBitcoin, FaEthereum, FaRobot, FaLock, FaChartLine, FaCoins } from 'react-icons/fa';
import { SiSolidity, SiBinance, SiChainlink } from 'react-icons/si';

const marqueeItems = [
  { icon: <FaRobot className="text-blue-400 text-2xl" />, text: 'AI-Powered Trading' },
  { icon: <FaBitcoin className="text-yellow-400 text-2xl" />, text: 'BTC' },
  { icon: <FaEthereum className="text-indigo-400 text-2xl" />, text: 'ETH' },
  { icon: <SiSolidity className="text-gray-300 text-2xl" />, text: 'Smart Contracts' },
  { icon: <FaChartLine className="text-green-400 text-2xl" />, text: 'Backtest Instantly' },
  { icon: <SiBinance className="text-yellow-500 text-2xl" />, text: 'BNB' },
  { icon: <FaCoins className="text-pink-400 text-2xl" />, text: '$METABOTX Ecosystem' },
  { icon: <FaLock className="text-green-500 text-2xl" />, text: 'Secure & Transparent' },
  { icon: <SiChainlink className="text-blue-300 text-2xl" />, text: 'Chainlink' },
  { icon: <FaRobot className="text-purple-400 text-2xl" />, text: '24/7 Automation' },
  { icon: <FaChartLine className="text-blue-400 text-2xl" />, text: 'Copy Top Traders' },
  { icon: <FaCoins className="text-green-400 text-2xl" />, text: 'Decentralized Payments' },
];

const Marque = () => {
  return (
    <div className="w-full py-2 bg-gray-900 border-y border-gray-800">
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 mx-8 text-lg font-semibold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent select-none"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;