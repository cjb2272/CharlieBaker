import React from 'react';
import AboutSection from './MainSections/About';
import ContactSection from './MainSections/Contact';
import ProjectsSection from './MainSections/Projects';

const ScrollingPage = () => {
  return (
    // ml-64 is a utility class that sets the left margin of the element to 16rem.
    // h-screen is a utility class that sets the height of the element to 100% of the viewport height.
    // overflow-y-scroll is a utility class that adds a vertical scrollbar to the element when the content is too tall to fit in the viewport.
    <div className="ml-48 h-screen bg-lime-50 overflow-y-scroll text-lime-950"> {/* TODO REMOVE COLOR */}
      <ContactSection/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
  );
};

export default ScrollingPage;