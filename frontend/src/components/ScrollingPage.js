import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AboutSection from './MainSections/About.js'; // can leave off the .js
import ContactSection from './MainSections/Contact.js';
import ProjectsSection from './MainSections/Projects.js';

// Export Default function component containing the main sections of the website
const ScrollingPage = () => {
  return (

    // ml-64 is a utility class that sets the left margin of the element to 16rem.
    // h-screen is a utility class that sets the height of the element to 100% of the viewport height.
    // overflow-y-scroll is a utility class that adds a vertical scrollbar to the element when the content is too tall to fit in the viewport.
    <div className="ml-48 h-screen bg-lime-50 overflow-y-scroll text-lime-950"> {/* TODO REMOVE COLOR */}
      <div className='py-48 text-center'>
        <h1 className='text-6xl font-bold'> Hi! I'm Charlie</h1>
        <TypewriterEffect/>
      </div>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-lime-200 border-2 border-lime-600 rounded-3xl'>
        <ContactSection/>
      </div>
      <hr className='mx-auto border-none bg-lime-200 hr-custom'/>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-lime-200 border-2 border-lime-600 rounded-3xl'>
        <AboutSection/>
      </div>
      <hr className='mx-auto border-none bg-lime-200 hr-custom'/>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-lime-200 border-2 border-lime-600 rounded-3xl'>
        <ProjectsSection/>
      </div>
    </div>
  );
};

const TypewriterEffect = () => {
  const element = useRef(null); // Reference to the DOM element where Typed.js will mount

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Welcome to my website!",  
        "I'm a Software Engineer.",
        "I'm a Full Stack Developer.",
        "I'm a Creator.",
      ],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspace speed
      loop: true, // Loop the typing animation
    });

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <h1>
        <span ref={element}></span>
      </h1>
    </div>
  );
};

export default ScrollingPage;