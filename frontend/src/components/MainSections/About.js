import React from 'react';
import GeneralSection from './AboutSections/General.js';
import EducationSection from './AboutSections/Education.js';
import TravelSection from './AboutSections/Travel.js';

const About = ({sectionRefs}) => {
  return (
    // <section id="sectionAbout" ref={(el) => (sectionRefs.current[1] = el)} className="flex flex-col items-center justify-center space-y-8">
    <section id="sectionAbout" className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-light">About Me</h1>
      <GeneralSection/>
      <EducationSection/>
      <TravelSection/>

    </section>
  );
};

export default About;