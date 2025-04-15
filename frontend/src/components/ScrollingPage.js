/**
 * Intersection Observer API used to handle the scrolling effects on navigation bar
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import HamburgerNavigation from './HamburgerNavigation.js';
import AboutSection from './MainSections/About.js';
import ContactSection from './MainSections/Contact.js';
import ProjectsSection from './MainSections/Projects.js';

import headshotImg from '../assets/images/casualHeadshot.webp'; //1:1

// Export Default function component containing the main sections of the website
const ScrollingPage = ({ setActiveSection }) => {

  const sectionRefs = useRef([]); // the array of DOM elements we want to observe
  const [closeMenu, setCloseMenu] = useState(null); // Hamburger Menu Visibility. setCloseMenu(true) in order to close menu

  // intersection observer detects which section is currently visible in viewport and updates 
  // the activeSection state in parent component App.js via the callback function setActiveSection
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
  // dependency array missing sectionRefs


  // Not inherently wrong, but could negatively impact performance-- consider memoizing handler
  // we are CONSTANTLY setting the closeMenu prop, triggering the useEffect in HamburgerNavigation.js
  const handleCloseMenuOnScroll = () => {
    setCloseMenu(Date.now());
  };

  return (
    <>
      {/*margin left 192+16=208px (xxl theme in config) */}
      <div
        className="ml-4 pr-4 lg:ml-xxl h-screen bg-transparent text-light overflow-y-scroll scrollbar scrollbar-thumb-tertiary scrollbar-track-transparent"
        onScroll={handleCloseMenuOnScroll}>
        <div className={"lg:hidden absolute top-4 left-4 z-10 text-background"}>
          <HamburgerNavigation closeMenu={closeMenu} />
        </div>
        <section id="sectionContact" ref={(el) => (sectionRefs.current[0] = el)}>
          <div className='pt-48 text-center text-light'>
            <h1 className='text-6xl font-bold'> Hi! I&apos;m Charlie</h1>
            <TypewriterEffect />
          </div>
          <div className='mx-auto my-12 max-w-[192px] 3xs:max-w-[214px]'>
            <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
              <img src={headshotImg} alt="Casual Headshot" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className='max-w-md mx-auto mb-12 p-4 bg-secondary border-2 border-tertiary rounded-3xl'>
            <ContactSection />
          </div>
        </section>
        <hr className='mx-auto border-none bg-tertiary hr-custom' />
        <section id="sectionAbout">
          <div className="h-12"></div> {/* Empty content block cleans up nav linking and provides space*/}
          <h1 className="mx-auto max-w-max 2xs:max-w-xs mb-4 py-2 px-4 text-center text-4xl font-bold bg-secondary border-2 border-tertiary rounded-3xl text-light">About Me</h1>
          <div className='mx-auto max-w-5xl mb-12 p-4 bg-secondary border-2 border-tertiary rounded-3xl'>
            <AboutSection sectionRefs={sectionRefs} />
          </div>
        </section>
        <hr className='mx-auto border-none bg-tertiary hr-custom' />
        <section id="sectionProjects">
          <div className="h-12"></div>
          <h1 className="mx-auto max-w-max 2xs:max-w-xs mb-4 py-2 px-4 text-center text-4xl font-bold bg-secondary border-2 border-tertiary rounded-3xl text-light">My Projects</h1>
          <div className='mx-auto max-w-5xl mb-12 p-4 bg-secondary border-2 border-tertiary rounded-3xl'>
            <ProjectsSection sectionRefs={sectionRefs} />
          </div>
        </section>
      </div>
    </>
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
        "I'm a Descriptive Pull Requester &#59;&#41;",
        "I'm a Full Stack Developer.",
        "I'm an AGILE Lover &lt;3",
        "I'm a Creator.",
      ],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspace speed
      backDelay: 2700, // Backspace delay in milliseconds
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