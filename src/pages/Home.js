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
                        <h3>More about me:</h3>
                        I am currently an undergraduate University Student at the University of Toronto where I take Math, Computer Science, 
                        and Political Science courses. By the time I graduate in 2026, I aim to have a bachelors in Science
                        with a Specialist in Computer Science, a Major in Mathematics, and a minor in Political Science.
                        My work history includes my current position as a teaching assistant for CSC369H5: operating systems. 
                        I also previously TAed computational Complexity, and held a software internship for the Canadian Government, where
                        I was responsible for fullstack web design. 
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
                        <h3>Graduate School Notice:</h3>
                        As for future plans, I want to get into a masters program at a graduate school.
                        I have narrowed down my specific interests to distributed systems, information security, and computer graphics.
                    </p>
                    <p>
                        My motivation for graduate school stems from having done senior level courses at UofT, where I would investigate a topic and do a project.
                        These include taking a reading course in file systems with Professor Bogdan Simion 
                        (I built an SSD visualizer in the course, and also investigated different file system
                        concepts such as building a file system using data structures, distributed file systems etc.). 
                        I also took a course in computer security with Professor Andi Bergen 
                        (I investigated how arp cache poisoning worked, and used that to spoof websites).
                        Another such course that I am currently doing is a graphic course with Professor Marc De Benedetti, where I, along with my 
                        classmates, are involved in creating a graphics engine. My responsibilities for the engine include animation and physics simulation.
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
