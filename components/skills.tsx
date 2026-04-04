'use client'; //🚀
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + index * 0.05,
      duration: 0.4,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center sm:mb-40 p-4"
      id="skills"
    >
      <SectionHeading>Tech Stacks</SectionHeading>
      {skillsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-6">
            {section.section}
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-800 dark:text-gray-300">
            {section.skills.map((skill, skillIndex) => (
              <motion.li
                className="bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
                key={skillIndex}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={skillIndex}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
