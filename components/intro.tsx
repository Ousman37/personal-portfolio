'use client'; //🚀
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import DynamicTypewriter from './dynamic-typewriter';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="flex flex-col items-center mb-28 max-w-5xl mx-auto text-center sm:mb-0"
      id="home"
    >
      <motion.div
        className="relative inline-flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Image
          src="/ousman.png"
          alt="Portrait of Ethmane"
          width="192"
          height="192"
          quality="95"
          objectFit="cover"
          priority={true}
          className="rounded-full border-2 border-white shadow-xl"
        />
        <motion.span
          className="absolute bottom-0 right-0 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          👋
        </motion.span>
      </motion.div>

      <motion.h1
        className="mt-4 mb-10 text-4xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <DynamicTypewriter />
      </motion.h1>
      <motion.p
        className="px-4 mt-4 mb-10 text-lg font-normal leading-relaxed text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I&apos;m a{' '}
        <span className="text-blue-500">web development graduate</span> and{' '}
        <span className="text-blue-500">front-end developer</span>, driven to
        create <span className="text-blue-500">innovative web experiences</span>
        . Excited for new collaborations and challenges.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 mt-8 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-blue-500 hover:bg-blue-700 text-white px-7 py-3 flex items-center gap-2 rounded-full transition-transform duration-300 ease-in-out"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
        </Link>
        <a
          href="/EthmaneDidi_Jr Frontend Developer-CV.pdf"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-300 text-gray-800 px-7 py-3 flex items-center gap-2 rounded-full transition-transform duration-300 ease-in-out border border-gray-200 dark:border-transparent"
        >
          Download CV
          <HiDownload className="ml-2 opacity-60" />
        </a>
        <a
          href="https://www.linkedin.com/in/ethmane-ousman-34885844/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 border border-gray-200 dark:border-transparent"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Ousman37"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 border border-gray-200 dark:border-transparent"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
