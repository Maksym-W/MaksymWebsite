//import logo from './logo.svg';
import logo from './max.jpg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UofTResources from './UofTResources';


function App() {
  const [animateProjects, setAnimateProjects] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);
  const [animateResources, setAnimateResources] = useState(false);

  const handleProjectsClick = () => {
    setAnimateHome(false);
    setAnimateResources(false);
    setAnimateProjects(true);
    setTimeout(() => {
      console.log("Animation completed.");
    }, 500);
  };


  const handleHomeClick = () => {
    setAnimateHome(true);
    setAnimateProjects(false);
    setAnimateResources(false);
    setTimeout(() => {
      console.log("Animation completed.");
    }, 500);
  };

  const handleResourcesClick = () => {
    setAnimateHome(false);
    setAnimateProjects(false);
    setAnimateResources(true);
    setTimeout(() => {
      console.log("Animation completed.");
    }, 500);
  };
  
  //Above are constants and functions for animation!! Duh!

  return (
    <div className="App">

      <nav className="App-nav">
        <a href="#home" onClick={handleHomeClick} className="nav-item">Home</a>
        <a href="#projects" onClick={handleProjectsClick} className="nav-item">TODO: Projects</a>
        <a href="#resources" onClick={handleResourcesClick} className="nav-item">UofT Resources</a>
        <a href="https://www.overleaf.com/read/xyvycpwfxnxj" target="_blank" rel="noopener noreferrer" className="nav-item">Resume</a>
      </nav>

      <div className={`content ${animateHome ? 'slide-in-right' : ''} ${animateProjects ? 'slide-out-left' : ''} ${animateResources ? 'slide-out-left-super' : ''}`}>
        <Home />
        <Projects />
        <UofTResources />
      </div>

    </div>
  );
}


function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function Projects() {
  return (
    <div className="projects">
      <div style={{ marginTop: '75px' }}></div>

      {/* Contents of the Projects section */}
      <h1>Projects</h1>
      <p>This is the Projects section.</p>
    </div>
  );
}





export default App;


