//components/project.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type ProjectProps = {
  title: string;
  description: string;
  liveDemoLink: string;
  githubLink: string;
  imageUrl: string;
  tags: readonly string[];
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  liveDemoLink,
  githubLink,
  imageUrl,
  tags,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group h-full"
    >
      <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200/60 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden h-52 shrink-0 bg-gray-100 dark:bg-white/10">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            quality={90}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6 gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-white/65 flex-1">
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-3 pt-1">
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
