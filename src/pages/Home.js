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
        width: '50%',
        border: '25px solid #e4ddca',
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
                I am Maksym Woychyshyn
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

                <h3 style={{ color: 'white', flex: '0 0 50%', marginLeft: '60px' }}>
                As for future plans, I want to get into researching alot of CS topics. I have a list of things that I want to do research in that is included but not limited to:
                Robotics, Machine Learning, Computer Graphics, Computer Systems, and Information Security. Lots of things to learn!
                <br></br><br></br>
                Im currently focusing on computer systems, specifically file systems. If you want to discuss something regarding file systems, please do reach out!
                <br></br><br></br>
                Aside from researching, like many people these days, I need a job! A short description of my resume is: I did a software internship at the government in the summer and fall terms
                of 2024, and I am a good leader as a president in the robotics club. I do projects around video games and robotics. If you have a position open
                in the summer of 2025 (Preferably something backend focused),  please absolutely do reach out!
                </h3>
            </div>
        </AnimatedPage>
    )
} 