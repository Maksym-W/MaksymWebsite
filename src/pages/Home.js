import React from 'react';
import maxPicture from '../images/max.jpg'

export default function Home() {
    const pictureStyle = {
        display: 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        marginTop: '50px',
        height: 'auto',
        width: '40%',
        border: '5px solid #e4ddca',
        borderImage: 'linear-gradient(to bottom, #e4ddca, transparent) 1 49%'
      };

    const textStyle =  {
        color: 'white',
        'text-align': 'center'
    }

// Above is CSS code

    return (
        <>
            <div style={{marginTop: '20px'}}></div> {/* This is just for padding */}

            <h1 style={{fontSize: '75px', ...textStyle}}>
                I am motherfucking Maksym Woychyshyn.
            </h1>
            
            <img src={maxPicture} className="App-logo" alt="logo" style={pictureStyle} />

            <h2 style={textStyle}>
                I code. Perferably not on paper.
            </h2>
        </>
    )
} 