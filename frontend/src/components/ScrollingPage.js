/**
 * Intersection Observer API used to handle the scrolling effects on navigation bar
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import AboutSection from './MainSections/About.js'; // can leave off the .js
import ContactSection from './MainSections/Contact.js';
import ProjectsSection from './MainSections/Projects.js';

// Export Default function component containing the main sections of the website
const ScrollingPage = ({ setActiveSection }) => {
  
  // the array of DOM elements we want to observe
  const sectionRefs = useRef([]);

  // intersection observer detects which section is currently visible in viewport and updates 
  // the activeSection state in parent component App.js via the callback function setActiveSection
  /*
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { //this is the callback function the browser auto calls when one of the observed elements crosses the threshold
        let mostVisibleSection = null;
        let maxIntersectionRatio = 0;
        
        entries.forEach((entry) => {
          console.log(`Observing ${entry.target.id}: Ratio=${entry.intersectionRatio}, Intersecting=${entry.isIntersecting}`);
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            //entry.target is the observed DOM element
            mostVisibleSection = entry.target.id;
            maxIntersectionRatio = entry.intersectionRatio;
          }
        });

        if (mostVisibleSection) {
          // Update the active section only if there's a clear most visible section
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0.5, 0.8] } // Trigger when 50% AND 80% of the section is visible
    );

    // Tells Observer to start observing each element in the sectionRefs.current array
    // when an observed element intersects with viewport the observer auto creates and passes
    // an array of IntersectionObserverEntry objects (the entries variable) to its callback function.
    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [setActiveSection]); // Dependency ensures callback is updated if setActiveSection changes

  */

  return (
    // h-screen- 100% of the viewport height.
    <div className="ml-48 h-screen bg-transparent overflow-y-scroll text-light"> {/* TODO REMOVE COLOR */}
      <div className='py-48 text-center text-light'>
        <h1 className='text-6xl font-bold'> Hi! I&apos;m Charlie</h1>
        <TypewriterEffect/>
      </div>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-secondary border-2 border-tertiary rounded-3xl'>
        <ContactSection sectionRefs={sectionRefs}/>
      </div>
      <hr className='mx-auto border-none bg-tertiary hr-custom'/>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-secondary border-2 border-tertiary rounded-3xl'>
        <AboutSection sectionRefs={sectionRefs}/>
      </div>
      <hr className='mx-auto border-none bg-tertiary hr-custom'/>
      <div className='max-w-5xl mx-auto my-12 py-4 bg-secondary border-2 border-tertiary rounded-3xl'>
        <ProjectsSection sectionRefs={sectionRefs}/>
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