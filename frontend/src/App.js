/**
 * @file App.js is the root component of this React app.
 * It is the JavaScript entry point for the frontend.
 * It is the parent component that encapsulates all the other components.
 * 
 * App.js is rendered by index.js 
 * index.js is the JavaScript entry point for rendering the React app in the DOM.
 * 
 * the components folder is a container for all additional components that will be used in the app.
 */
import './App.css';
import React, { useState, useCallback } from 'react';
import HamburgerNavigation from './components/HamburgerNavigation.js';
import SideBarNavigation from './components/SideBarNavigation.js';
import ScrollingPage from './components/ScrollingPage.js';

/**
 * 
 * @returns 
 */
function App() {
  const [activeSection, setActiveSection] = useState(null);

  // Memoize setActiveSection to avoid unnecessary re-renders
  const handleSetActiveSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);
  // Without useCallback, a new instance of the setActiveSection function 
  // would be created on every re-render of App.
  // which would inturn re-render the SideBarNavigation component and the ScrollingPage component.
  
  return (
    <>
      <div className={"hidden lg:block"}> {/**/}
        <SideBarNavigation activeSection={activeSection} />
      </div>
      <div className={"lg:hidden absolute top-4 left-4 z-10"}>
        <HamburgerNavigation/>
      </div>
      <ScrollingPage setActiveSection={handleSetActiveSection}/>
    </>
  );
}

export default App;
