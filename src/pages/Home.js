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
        border: '1em solid #e4ddca',
        borderImage: 'linear-gradient(to bottom, #e4ddca, transparent) 1 49%'
      };

    const textStyle =  {
        color: 'white',
        'text-align': 'center'
    }

    const textBoxStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        marginTop: '20px',
        gap: '40px',
        fontSize: '18px'
    }

// Above is CSS code

    return (
        <AnimatedPage>
            <div style={{marginTop: '20px'}}></div> {/* This is just for padding */}

            <h1 style={{fontSize: '70px', ...textStyle}}>
                I am Maksym Woychyshyn
            </h1>
            
            <img src={maxPicture} className="App-logo" alt="logo" style={pictureStyle} />

            <h2 style={textStyle}>
                I code. Perferably not on paper.
            </h2>

            <>
                <style>
                    {`
                    @media (max-width: 768px) {
                        .responsive-flex {
                        flex-direction: column !important;
                        }
                    }
                    `}
                </style>

                <div className="responsive-flex" style={textBoxStyle}>
                    <div style={{ padding: '20px', flex: 1 }}>
                    <p>
                        I am currently an undergraduate University Student at the University of Toronto where I take Math, Computer Science, 
                        and Political Science courses. By the time I graduate in 2026, I aim to have a bachelors in Science
                        with a Specialist in Computer Science, a Major in Mathematics, and a minor in Political Science.
                        I am also a teaching assistant, where I TA Computational Complexity and Computability
                    </p>
                    <p>
                        Outside of my Academic courses, I am involved in mentoring clubs. I was the president of the UTM robotics club, and now I 
                        act in an advisory capacity to the club. I also do the same for the UTM Urbanism which I helped found.
                    </p>
                    <p>
                        When not partaking in my professional life, I can usually be found playing guitar or piano, video editing, 
                        learning languages, reading books about history/politics, or making projects with Arduinos/Raspberry Pis.
                    </p>
                    </div>

                    <div style={{ padding: '20px', flex: 1 }}>
                    <p>
                        As for future plans, I want to get into graduate school for either a masters or a PHd program.
                        Im not sure what specifically for, as I am currently narrowing down my list of interests for such a program.
                        My interests currently include: file systems, computer graphics, robotics, information security, and networks.
                    </p>
                    <p>
                        In this Summer, I will be involved in doing research courses on multiple topics. With Prof Bogdan Simion, I will be doing a 
                        file systems course. With Prof Marc De Benedetti, I will be doing an OpenGL reading course. With Prof Aurel Braun, I will be doing 
                        a Russia/Ukraine/Nato course. Quite the diverse range of topics!
                    </p>
                    <p>
                        If you'd ever like to chat about work, school, or anything else, feel free to reach out to either of my
                        emails m.woychyshyn@mail.utoronto.ca or maksymwoychyshyn@gmail.com.
                    </p>
                    </div>
                </div>
            </>
        </AnimatedPage>
    )
} 
