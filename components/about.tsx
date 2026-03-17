'use client'; //🚀
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-7 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mt-4">
        I come from a varied background that spans passionate personal interests
        to a dedication for continuous professional development. My unique
        journey has always been driven by a desire to create memorable
        experiences, whether it&apos;s through coding or my personal projects.
        In my free time, you&apos;ll often find me in a state of balance,
        whether I&apos;m meditating to find peace or challenging myself with
        physical exercise, both of which sharpen my focus and fuel my
        creativity.
      </p>
      <p className="mt-2">
        As a passionate front-end developer, I leverage my broad background and
        interdisciplinary perspective to create intuitive user experiences
        online. I focus on front-end development using HTML, CSS, JavaScript,
        and frameworks such as React and Vue, to design responsive and
        user-friendly websites.
      </p>
      <p className="mt-2">
        Projects: I&apos;ve been fortunate enough to work on a range of projects
        that have both challenged and demonstrated my abilities, while also
        cultivating my <span className="underline">love</span> for web
        development. Each project has its own story filled with creativity and
        innovation.
      </p>
      <p className="mt-2">
        Connection: I&apos;m always looking to engage, collaborate, or explore
        the latest trends in web development. Feel free to get in touch with me
        via
        <a
          href="https://www.linkedin.com/in/ethmane-ousman-34885844/"
          className="text-blue-500 underline"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
        or
        <a
          href="https://github.com/Ousman37"
          className="text-blue-500 underline"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
          <span className="sr-only">GitHub</span>
        </a>
        . I&apos;m always interested in new conversations, partnerships, and{' '}
        <span className="font-bold">exciting opportunities!</span>
      </p>
      <p className="mt-4">
        Are you ready to start a project together? Get in touch with me on
        LinkedIn or GitHub!
      </p>
    </motion.section>
  );
};
export default About;
