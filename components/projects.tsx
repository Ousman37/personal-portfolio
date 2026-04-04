//components/projects.tsx

'use client'; //🚀
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
      {/* Adjusted grid layout for better responsiveness on small screens */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
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


// import React from 'react';
// import SectionHeading from './section-heading';
// import { projectsData } from '@/lib/data';
// import Project from './project';
// import { useSectionInView } from '@/lib/hooks';

// const Projects = () => {
//   const { ref } = useSectionInView('Projects', 0.5);

//   return (
//     <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
//       <SectionHeading>My projects</SectionHeading>
//       <div>
//         {projectsData.map((project, index) => (
//           <React.Fragment key={index}>
//             <Project
//               title={project.title}
//               description={project.description}
//               liveDemoLink={project.liveDemoLink}
//               githubLink={project.githubLink}
//               imageUrl={project.imageUrl.src}
//               tags={project.tags}
//             />
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
