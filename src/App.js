import React, { useState } from 'react';
import Home from './pages/Home';
import UofTResources from './pages/UofTResources';
import Button from '@mui/material/Button';
import CsProjects from './pages/CsProjects';

function App() {
  const [activeTab, setActiveTab] = useState('home'); // Maybe there is a more elegant way of doing this? TODO

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const appStyle = {
    background: "linear-gradient(to bottom, #282c34 30%, #0398fc 150%)",
    height: '100vh',
    width: '100vw',
    overflow: 'auto'
  };

  const navStyle = {
    color: 'white',
    backgroundColor: '#282c34',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000
  };

  const navItemStyle = {
    color: 'white', backgroundColor: '#15639A', borderColor: 'green',
    padding: '5px', 
    fontSize: '16px',
  };

// The above stuff is the CSS Styles. Below is the component we return.

  return (
    <>
    <div style={appStyle}>

      <nav style={navStyle}>
        <a href="#home">
        <Button
          variant="contained"
          style={navItemStyle}
          onClick={() => handleTabChange('home')}
          disabled={activeTab === 'home'}
        >Home</Button>
        </a>
        
        <a href="#CsProjects">
        <Button
          variant="contained"
          style={navItemStyle}
          onClick={() => handleTabChange('CsProjects')}
          disabled={activeTab === 'CsProjects'}
        >Cs Projects</Button>
        </a>

        <a href="#UofTResources">
        <Button
          variant="contained"
          style={navItemStyle}
          onClick={() => handleTabChange('UofTResources')}
          disabled={activeTab === 'UofTResources'}
        >UofTResources</Button>
        </a>

        <a href="https://www.overleaf.com/read/xyvycpwfxnxj" target="_blank" rel="noopener noreferrer" >
          <Button variant="contained" style={navItemStyle}>Resume</Button>
        </a>
      </nav>
      
      <div style={{marginTop: '60px'}}></div> {/* This is just for padding */}
      <hr style={{
        position: 'fixed',
        top: '50px',  // Adjust as needed
        width: '100%',
        border: 'none',
        height: '2px',
        backgroundColor: '#fff',  // Adjust as needed
      }} />

      {activeTab === 'home' && <Home />}
      {activeTab === 'UofTResources' && <UofTResources /> /* TODO FIGURE OUT HOW TO PASS IN ARGUEMENTS */} 
      {activeTab === 'CsProjects' && <CsProjects /> /* TODO FIGURE OUT HOW TO PASS IN ARGUEMENTS */} 
    </div>
    </>
  );
}

export default App;

// TODO Figure out the difference between div style= and div className=