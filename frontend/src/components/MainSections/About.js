import React from 'react';
import GeneralSection from './AboutSections/General';
import EducationSection from './AboutSections/Education';
import TravelSection from './AboutSections/Travel';

const About = () => {
  return (
    <section id="sectionAbout" className="h-screen flex items-center justify-center border-b-2  border-lime-200">
      <h1 className="text-4xl font-bold text-lime-950">About Me.</h1>
      <GeneralSection/>
      <EducationSection/>
      <TravelSection/>

    </section>
  );
};

export default About;