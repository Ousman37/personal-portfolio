'use client'; //🚀
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import TimelineEntry from './TimelineEntry';
import { useSectionInView } from '@/lib/hooks';

const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 dark:text-white px-4 md:px-8"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="mt-8">
        <div className="border-l-2 border-gray-200 dark:border-gray-700">
          {experiencesData.map((experience, index) => (
            <TimelineEntry
              key={index}
              date={experience.date}
              title={experience.title}
              subtitle={experience.location}
              description={experience.description}
              icon={experience.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
