import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
//import particlesJS from 'particles.js';
import AboutSection from './MainSections/About.js'; // can leave off the .js
import ContactSection from './MainSections/Contact.js';
import ProjectsSection from './MainSections/Projects.js';
import ParticlesBanner from './ParticlesBanner.js';

// Export Default function component containing the main sections of the website
const ScrollingPage = () => {
  // const [activeSection, setActiveSection] = useState(null);
  // const sectionRefs = useRef([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 } // Trigger when 60% of the section is visible
  //   );

  //   sectionRefs.current.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, []);

  return (
    // h-screen- 100% of the viewport height.
    <div className="ml-48 h-screen bg-transparent overflow-y-scroll text-light"> {/* TODO REMOVE COLOR */}
      <ParticlesBanner>
        <div className='py-48 text-center text-light'>
          <h1 className='text-6xl font-bold'> Hi! I&apos;m Charlie</h1>
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
  const domElementRef = useRef(null); // Reference to the DOM element where Typed.js will mount

  // empty dependencies array, only runs once on mount when component appears on screen for first time
  useEffect(() => {
    const typed = new Typed(domElementRef.current, {
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

    return () => { //cleanup function
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={domElementRef}></span>
    </div>
  );
};

export default ScrollingPage;