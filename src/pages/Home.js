import React from 'react';
import maxPicture from '../images/max.jpg'
import AnimatedPage from '../animations/transitions';

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
        <AnimatedPage>
            <div style={{marginTop: '20px'}}></div> {/* This is just for padding */}

            <h1 style={{fontSize: '75px', ...textStyle}}>
                I am Maksym Woychyshyn.
            </h1>
            
            <img src={maxPicture} className="App-logo" alt="logo" style={pictureStyle} />

            <h2 style={textStyle}>
                I code. Perferably not on paper.
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                <h3 style={{ color: 'white', flex: '0 0 45%', marginLeft: '30px' }}>
                I am currently a University Student at the University of Toronto where I take Math, Computer Science, 
                and Political Science courses. By the time I graduate, I aim to have a bachelors in Science
                with a Major (Ive already completed the requirements for this!) or a Specialist in Computer Science, 
                a Major or Minor in Mathematics, and a minor in Political Science.
                <br></br><br></br>
                Outside of my Academic courses, I run the robotics club at UTM, involved in the UTM Urbanism Club as a treasurer, 
                am the vice president of the UTM Chess club. and an advisor to the Ukrainian Association of UTM
                <br></br><br></br>
                When not partaking in my professional life, I can usually be found playing guitar or piano, video editing, 
                learning languages, reading books about history/politics, or making projects with Arduinos. 
                <br></br><br></br>
                If you'd ever like to chat about work, school, or anything else, feel free to reach out to either of my
                 emails m.woychyshyn@mail.utoronto.ca or maksymwoychyshyn@gmail.com.
                </h3>

                <h3 style={{ flex: '0 0 50%', marginLeft: '60px' }}>
                Im still trying to figure out what would be cool to put here. For now, I interned at the Canadian Government! Isn't that cool!? Also Im open to intern in fall 2024!
                </h3>

            </div>
        </AnimatedPage>
    )
} 