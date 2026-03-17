//components/project.tsx
'use client'; //🚀
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

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
}: ProjectProps) => {
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
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 transition-transform duration-300 ease-in-out transform hover:scale-105 "
    >
      <section className="bg-gray-100 rounded-lg shadow-lg sm:max-w-xl p-5 sm:p-10 mx-auto hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          width={208}
          height={208}
          quality={95}
          className="w-full h-[13rem] object-cover portfolio-card__image"
        />

        <div>
          <h3 className="text-2xl font-semibold portfolio-card__title">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 portfolio-card__text">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 mr-2 "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-row">
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow text-center text-blue-500 hover:underline portfolio-card__link"
            >
              View Live Demo
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow text-center text-blue-500 hover:underline portfolio-card__link"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
