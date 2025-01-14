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
import React from 'react';
import SideBarNavigation from './components/SideBarNavigation.js';
import ScrollingPage from './components/ScrollingPage.js';

/**
 * 
 * @returns 
 */
function App() {
  
  return (
    <>
      <SideBarNavigation />
      <ScrollingPage />
    </>
  );
}

export default App;
