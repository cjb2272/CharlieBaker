import React from 'react';
import GeneralSection from './AboutSections/General.js';
import EducationSection from './AboutSections/Education.js';
import TravelSection from './AboutSections/Travel.js';

const About = ({sectionRefs}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <GeneralSection/>
      <EducationSection/>
      <TravelSection/>
    </div>
  );
};

export default About;