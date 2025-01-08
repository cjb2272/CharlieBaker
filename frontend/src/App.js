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
import logo from './logo.svg';
import './App.css';

/**
 * 
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	      <h1 className="text-3xl font-bold underline">Hello, Tailwind!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
