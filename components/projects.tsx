//components/projects.tsx
'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 px-4 md:px-8 lg:px-16"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
            imageUrl={project.imageUrl.src}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
