'use client'; //🚀
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { links } from '@/lib/data';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="z-[999] relative">
      {/* Desktop pill background */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] w-full max-w-screen-xl rounded-full bg-white/70 dark:bg-gray-950/75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border border-white/20 dark:border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      {/* Mobile top bar background */}
      <motion.div
        className="sm:hidden fixed top-0 left-0 right-0 h-14 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-black/[0.06] dark:border-white/[0.06]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      <nav className="flex fixed top-0 left-0 right-0 h-14 sm:top-[1.7rem] sm:h-[3.25rem] justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="text-lg font-bold flex items-center z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 mr-2 text-blue-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
          Ethmane Didi
        </div>

        {/* Mobile: Get Hired + hamburger */}
        <div className="flex items-center gap-2 sm:hidden z-10">
          <Link
            href="/get-hired"
            className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Hired
          </Link>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex items-center gap-1 text-[0.9rem] font-medium text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <motion.li key={link.hash} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Link
                href={link.hash}
                onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }}
                className={clsx(
                  'px-3 py-2 rounded-full transition-colors duration-200',
                  activeSection === link.name
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-black/5 dark:hover:bg-white/10',
                )}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Get Hired */}
        <Link
          href="/get-hired"
          className="hidden sm:block bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Get Hired
        </Link>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="sm:hidden fixed top-14 left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] shadow-xl z-[998] px-4 py-3"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); setIsMenuOpen(false); }}
                  className={clsx(
                    'block w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                    activeSection === link.name
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10',
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
