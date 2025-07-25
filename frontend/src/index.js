// Root Component File
// Strict Mode Applied
// 

import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@n8n/chat/style.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ParticlesBanner from './components/ParticlesBanner.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ParticlesBanner />
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
