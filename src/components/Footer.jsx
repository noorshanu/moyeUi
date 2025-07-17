import React from 'react';
import { FaRobot, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Token', href: '#token' },
];

const socials = [
  { icon: <FaTwitter />, href: '#' },
  { icon: <FaGithub />, href: '#' },
  { icon: <FaDiscord />, href: '#' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <FaRobot className="text-2xl text-blue-400 drop-shadow" />
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              MetaBotX
            </span>
          </div>
          <span className="text-xs text-gray-400 font-mono tracking-widest">$METABOTX</span>
        </div>
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-gray-400 hover:text-blue-400 font-medium transition-colors text-base"
            >
              {l.name}
            </a>
          ))}
        </div>
        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors text-xl"
              target="_blank" rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MetaBotX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 