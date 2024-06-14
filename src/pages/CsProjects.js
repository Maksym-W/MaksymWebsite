import React from 'react';
import Robotics1 from '../images/Robotics1.jpg';
import AnimatedPage from '../animations/transitions';
import { Button } from '@mui/material';

export default function CsProjects() {
    const pictureStyle = {
        display: 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        marginTop: '50px',
        height: 'auto',
        width: '40%',
        border: '25px solid #e4ddca',
        borderImage: 'linear-gradient(to bottom, #e4ddca, transparent) 1 49%'
    }

    const textStyle =  {
        color: 'white',
        'text-align': 'center'
    }

    const navItemStyle = {
        color: 'white', backgroundColor: '#15639A', borderColor: 'green',
        padding: '5px', 
        fontSize: '16px',
      };

// Above is CSS code

    return (
        <AnimatedPage>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                <h3 style={{ color: 'white', flex: '0 0 45%', marginLeft: '30px' }}>
                This is the main project that I have been working on as of late. It functions like a keurig machine,
                 only that it has tubes sticking out of it that you can put into a bottle of coca-cola/pepsi/etc and it can make a drink for you. 
                In the images below, you can see the current state of it. 
                I still need to code out the arduino board and connect the pumps to it. Il upload the code when I have time to make it 
                </h3>
                
                {/* <a href="#flip" target="_blank" rel="noopener noreferrer" >
                <Button variant="contained" style={navItemStyle}>Flip</Button>
                </a> */}

                <img src={Robotics1} style={{ flex: '0 0 30%', marginLeft: '60px', ...pictureStyle }}/>
            </div>
        </AnimatedPage>
    )
} 