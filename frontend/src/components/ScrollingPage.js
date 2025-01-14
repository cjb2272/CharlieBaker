import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
//import particlesJS from 'particles.js';
import AboutSection from './MainSections/About.js'; // can leave off the .js
import ContactSection from './MainSections/Contact.js';
import ProjectsSection from './MainSections/Projects.js';
import ParticlesBanner from './ParticlesBanner.js';

// Export Default function component containing the main sections of the website
const ScrollingPage = () => {

  return (
    // h-screen- 100% of the viewport height.
    <div className="ml-48 h-screen bg-background overflow-y-scroll text-light"> {/* TODO REMOVE COLOR */}
      <ParticlesBanner>
        <div className='py-48 text-center'>
          <h1 className='text-6xl font-bold'> Hi! I'm Charlie</h1>
          <TypewriterEffect/>
        </div>
      </ParticlesBanner>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-secondary border-2 border-tertiary rounded-3xl'>
        <ContactSection/>
      </div>
      <hr className='mx-auto border-none bg-tertiary hr-custom'/>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-secondary border-2 border-tertiary rounded-3xl'>
        <AboutSection/>
      </div>
      <hr className='mx-auto border-none bg-tertiary hr-custom'/>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-secondary border-2 border-tertiary rounded-3xl'>
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
        "I'm a Leadership Enthusiast.",
        "I'm a Descriptive Pull Requester ;)",
        "I'm a Full Stack Developer.",
        "I'm an AGILE Lover <3.",
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