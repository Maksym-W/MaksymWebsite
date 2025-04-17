import React, { useState } from 'react';
import Home from './pages/Home';
import UofTResources from './pages/UofTResources';
import CsProjects from './pages/CsProjects';
import NavBar from './components/NavBar'; 

function App() {
  const [activeTab, setActiveTab] = useState('home'); 

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

      <NavBar
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        navStyle={navStyle}
        navItemStyle={navItemStyle}
      />
      
      <div style={{marginTop: '60px'}}></div> 
      {/* This is just for padding */}
      
      <hr style={{
        position: 'fixed',
        top: '50px',  // Adjust as needed
        width: '100%',
        border: 'none',
        height: '2px',
        backgroundColor: '#fff',  // Adjust as needed
      }} />

      {/* At some point, i would want to code in an app router, the stuff below I wrote before i knew about it. */}
      {activeTab === 'home' && <Home />}
      {activeTab === 'UofTResources' && <UofTResources /> } 
      {activeTab === 'CsProjects' && <CsProjects />} 
    </div>
    </>
  );
}

export default App;

// TODO Figure out the difference between div style= and div className=