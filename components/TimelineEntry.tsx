import React from 'react';

interface TimelineEntryProps {
  date: string;
  title: string;
  subtitle: string; // Changed from 'location' to 'subtitle'
  description: string;
  icon?: React.ReactNode;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ date, title, subtitle, description, icon }) => (
  <div className="timeline-entry bg-white shadow-md rounded-md p-2 mb-4 mx-auto max-w-sm dark:bg-white/10 dark:text-white/80">
    <div className="timeline-icon text-xl text-gray-600  dark:text-white/80">{icon}</div>
    <div className="timeline-date text-gray-500 font-semibold dark:text-white/80">{date}</div>
    <div className="timeline-content  dark:text-white/80">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700  dark:text-white/80">{subtitle}</p>
      <p className="text-gray-800  dark:text-white/80">{description}</p>
    </div>
  </div>
);

export default TimelineEntry;
