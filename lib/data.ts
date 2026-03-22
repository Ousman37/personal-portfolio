import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import focusflowImg from '@/public/focusflow.png';
import voyageiqImg from '@/public/voyageiq.png';
import bidspaceImg from '@/public/bidspace.png';
import frvFroovaImg from '@/public/frv-froova.png';
import datalensImg from '@/public/datalens.png';
import wishlishlyImg from '@/public/wishlishly.png';
import reUniqueImg from '@/public/re-unique.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'FocusFlow — Productivity SaaS',
    description:
      'A full-featured productivity web app inspired by the Hyperfocus method. Two focus modes: deep work timer with distraction blocking, and a free-form idea capture journal. Includes mood tracking, habit streaks, badges, and a freemium pricing model.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Authentication'],
    imageUrl: focusflowImg,
    liveDemoLink: 'https://focusflow-app.vercel.app/',
    githubLink: 'https://github.com/Ousman37/focusflow',
  },
  {
    title: 'VoyageIQ — Luxury Travel Explorer',
    description:
      'A travel planning app featuring curated luxury property listings with rich photography, location filters, and live weather and country data. Users browse destinations like Paris, Switzerland, and Amsterdam with real-time information to plan their perfect trip.',
    tags: ['Next.js', 'TypeScript', 'REST APIs', 'API Integration'],
    imageUrl: voyageiqImg,
    liveDemoLink: 'https://vacation-explorer.vercel.app/',
    githubLink: 'https://github.com/Ousman37/VacationExplorer',
  },
  {
    title: 'BidSpace — Online Auction Platform',
    description:
      'A fully functional auction web app where users register, list items, and compete in real-time bidding. Features a credit-based economy, user authentication, curated listings, and a clean responsive layout designed to build trust around every bid.',
    tags: ['JavaScript', 'HTML/CSS', 'Responsive Design', 'Authentication'],
    imageUrl: bidspaceImg,
    liveDemoLink: 'https://visionary-sprite-8c6f10.netlify.app/',
    githubLink: 'https://github.com/Ousman37/auction-platform-sp2',
  },
  {
    title: 'FRV Froova — Brand & E-Commerce',
    description:
      'A bold product marketing site for a probiotic soda brand. Built with Next.js and powered by Prismic CMS. Features product showcases, flavor browsing, subscription pricing, and a vibrant design system that perfectly matches the brand identity.',
    tags: ['Next.js', 'Prismic CMS', 'TypeScript', 'E-Commerce'],
    imageUrl: frvFroovaImg,
    liveDemoLink: 'https://frv-froova.vercel.app/',
    githubLink: 'https://github.com/Ousman37/frv-froova',
  },
  {
    title: 'DataLens — Analytics Dashboard',
    description:
      'A full-stack analytics dashboard with a dark UI featuring colorful KPI cards, real-time line charts, and pie chart breakdowns. Built to visualize and explore datasets in an intuitive, data-dense interface backed by a Node.js/MongoDB API.',
    tags: ['React', 'Express.js', 'MongoDB', 'Recharts'],
    imageUrl: datalensImg,
    liveDemoLink: 'https://dashboard-app-plum-five.vercel.app/',
    githubLink: 'https://github.com/Ousman37/dashboard-app',
  },
  {
    title: 'Wishlishly — iOS Wishlist App',
    description:
      'A native iOS app built with Flutter that lets users create, organize, and share wishlists with friends and family. Features a clean UI, real-time list sharing, and a seamless experience across devices. Currently pending Apple App Store review.',
    tags: ['Flutter', 'iOS', 'Dart', 'App Store'],
    imageUrl: wishlishlyImg,
    liveDemoLink: 'https://github.com/Ousman37/wishlishly',
    githubLink: 'git@github.com:Ousman37/wishlist-app.git',
  },
  {
    title: 'BeUnique — E-Commerce Store',
    description:
      'A clean, fully responsive e-commerce storefront built with React and styled-components. Features product browsing, a shopping cart, and validated checkout forms using react-hook-form and Yup. Routing handled with React Router for a seamless SPA experience.',
    tags: ['React', 'React Router', 'styled-components', 'react-hook-form'],
    imageUrl: reUniqueImg,
    liveDemoLink: 'https://react-ecom-store-psi.vercel.app/',
    githubLink: 'git@github.com:Ousman37/react-ecom-store.git',
  },
] as const;

export const skillsData = [
  {
    section: 'Technical Skills',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Prisma',
      'MongoDB',
      'Express.js',
      'Framer Motion',
      'Shadcn (ui)',
      'Figma',
      'Responsive Web Design',
      'Cross-browser Compatibility',
      'RESTful APIs',
      'User Experience (UX) Design',
      'User Interface (UI) Design',
    ],
  },
  {
    section: 'Frameworks',
    skills: ['Tailwind CSS', 'Bootstrap', 'SCSS (Sass)'],
  },
  {
    section: 'Workflow',
    skills: [
      'Version Control',
      'Node.js',
      'Git',
      'GitHub',
      'GitHub Project',
      'Agile/Scrum Methodology',
      'Trello',
      'Other Tools',
    ],
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Developer Graduate',
    location: 'Noroff University College Norway',
    description:
      'Program started in October 2021 and concluded in October 2023.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
] as const;
