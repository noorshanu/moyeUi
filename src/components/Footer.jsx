import React from 'react';
import { FaTelegram, FaTwitter, FaDiscord, FaUsers } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Token', href: '#token' },
];

const socials = [
  { icon: <FaTelegram />, href: '#', name: 'Telegram' },
  { icon: <FaTwitter />, href: '#', name: 'Twitter' },
  { icon: <FaDiscord />, href: '#', name: 'Discord' },
  { icon: <FaUsers />, href: '#', name: 'Community' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 pt-4 pb-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="MOYE" className="w-20 h-20 rounded-full" />
            <span className="text-xl font-extrabold bg-gradient-to-r from-[#7beefc] via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              MOYE
            </span>
          </div>
  
   
        </div>
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
        <div className=" text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MOYE. All rights reserved. | Discover viral memes, meme coins, and alpha-packed laughs
      </div>
        </div>
        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-gray-400 hover:text-[#7beefc] hover:border-[#7beefc] transition-colors text-xl"
              target="_blank" rel="noopener noreferrer"
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
  
    </footer>
  );
};

export default Footer; 