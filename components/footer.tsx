import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className='mb-2 block text-xs'>&copy; {new Date().getFullYear()} Ethmane. All rights reserved.</small>
        <p className="mt-4 md:mt-0 text-xs ">
            About this website: <span className="font-semibold">built with React & Next.js (App Router & Server Actions), TypeScript, and Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.</span>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/YourProfile/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-gray-500 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedin />
            </a>
            <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-2xl text-gray-500 hover:text-black transition-colors duration-300">
                <FaGithub />
            </a>
        </div>
    </footer>
  )
}

export default Footer;
