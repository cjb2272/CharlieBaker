import React from 'react';
import GeneralSection from './AboutSections/General.js';
import EducationSection from './AboutSections/Education.js';
import TravelSection from './AboutSections/Travel.js';

const About = ({sectionRefs}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <section id="subSectionGeneral" ref={(el) => (sectionRefs.current[1] = el)} className="w-full">
        <GeneralSection/>
      </section>
      <section id="subSectionEducation" ref={(el) => (sectionRefs.current[2] = el)} className="w-full">
        <EducationSection/>
      </section>
      <section id="subSectionTravel" ref={(el) => (sectionRefs.current[3] = el)} className="w-full">
        <TravelSection/>
      </section>
    </div>
  );
};

export default About;