import React from 'react';
import GeneralSection from './AboutSections/General.js';
import EducationSection from './AboutSections/Education.js';
import TravelSection from './AboutSections/Travel.js';

const About = () => {
  return (
    <section id="sectionAbout" className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-light">About Me</h1>
      <GeneralSection/>
      <EducationSection/>
      <TravelSection/>

    </section>
  );
};

export default About;