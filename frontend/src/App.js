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
import React, { useState, useCallback, useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import SideBarNavigation from './components/SideBarNavigation.js';
import ScrollingPage from './components/ScrollingPage.js';


/**
 * 
 * @returns 
 */
const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Memoize setActiveSection to avoid unnecessary re-renders
  const handleSetActiveSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);
  // Without useCallback, a new instance of the setActiveSection function 
  // would be created on every re-render of App.
  // which would inturn re-render the SideBarNavigation component and the ScrollingPage component.

  useEffect(() => {
		createChat({
			webhookUrl: process.env.REACT_APP_PERSONAL_SITE_CHATBOT_N8N_WEBHOOK_URL,
      initialMessages: [
		    'Hey, Its Charlie! (not really) 🤣',
		    'My name is CharlieBot. Whats up?'
	    ],
	    i18n: {
		    en: {
			    title: '',
			    subtitle: "Start a chat with CharlieBot below.",
			    footer: '',
			    getStarted: 'New Conversation',
			    inputPlaceholder: 'Type your question..',
		    },
	    }
		});
	}, []);

  return (
    <>
      <div className={"hidden lg:block"}>
        <SideBarNavigation activeSection={activeSection} />
      </div>
      <ScrollingPage setActiveSection={handleSetActiveSection} />
    </>
  );
}

export default App;
