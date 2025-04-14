// NavBar.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavBar = ({ activeTab, handleTabChange }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home', href: '#home' },
    { label: 'Cs Projects', value: 'CsProjects', href: '#CsProjects' },
    { label: 'UofTResources', value: 'UofTResources', href: '#UofTResources' },
    {
      label: 'Resume',
      value: 'resume',
      href: 'https://www.overleaf.com/read/xyvycpwfxnxj',
      external: true,
    },
  ];

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

  const styles = {
    navContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#333',
      padding: '10px',
      zIndex: 1000,
      gap: '10px',
    },
    navButton: {
      color: 'white',
      backgroundColor: '#1976d2',
      fontSize: '0.9rem',
      padding: '6px 12px',
    },
    drawerContent: {
      width: 250,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
  };

  return (
    <>
      {isMobile ? (
        <div style={navStyle}>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>

          <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                      width: '75%',
                      background: 'linear-gradient(to bottom, #282c34 30%, #0398fc 150%)',
                      color: 'white',
                      height: '100vh',
                      boxShadow: 'none',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100px',  // width of fade
                        height: '100%',
                        background: 'linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0))',
                        pointerEvents: 'none', // let clicks pass through
                      },
                    },
                  }}
                >
            <Box sx={styles.drawerContent}>
              {navItems.map(({ label, value, href, external }) =>
                external ? (
                  <a
                    key={value}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="contained" style={styles.navButton}>
                      {label}
                    </Button>
                  </a>
                ) : (
                  <a key={value} href={href} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      style={styles.navButton}
                      onClick={() => {
                        handleTabChange(value);
                        setDrawerOpen(false);
                      }}
                      disabled={activeTab === value}
                    >
                      {label}
                    </Button>
                  </a>
                )
              )}
            </Box>
          </Drawer>
        </div>

      ) : (
        <nav style={navStyle}>
          {navItems.map(({ label, value, href, external }) =>
            external ? (
              <a
                key={value}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="contained" style={styles.navButton}>
                  {label}
                </Button>
              </a>
            ) : (
              <a key={value} href={href} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  style={styles.navButton}
                  onClick={() => handleTabChange(value)}
                  disabled={activeTab === value}
                >
                  {label}
                </Button>
              </a>
            )
          )}
        </nav>
      )}
    </>
  );
};

export default NavBar;
