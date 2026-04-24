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
                        As of April 2026, I have completed my undergraduate studies! Its been quite a ride, and I did alot! I graduated with 29 credits,
                        which is 9 more then is needed! I obtained a specialist in Computer Science alongside taking 10 additional CS courses, and ontop
                        of that I also did a Math Major and a Political Science Minor 
                        (Where I did research for Aurel Braun, 
                        <a href="https://www.theglobeandmail.com/opinion/article-stronger-ukraine-only-acceptable-outcome-alaska-summit/" target =" blank" style={textStyle}>
                        &nbsp;and helped with his articles!</a>).
                    </p>
                    <p>
                        Alongside all the course work, I TAed intro to CS, Operating Systems,
                        and Computational Complexity/Computability at UTM and UTSC, held an 8 month internship at the government of Canada,
                        led the UTM robotics club as president, founded the UTM Urbanism club and was the initial treasurer (we got line 126 running in Mississauga!),
                        published a paper on visualization tools with professors Bogdan Simion, Michael Liut, and Naaz Sibia, and coded an SSD visualizer for the paper
                        with fellow student Stephen Clark. And there is so much more to mention (in projects). Im pretty proud of all of this!
                    </p>
                    <p>
                        As for future plans, I was accepted into a thesis based masters program at Toronto Metropolitan University,
                        under the supervision of Sven Lilge. While the program
                        doesn't start until September, I am already preparing, reading as many robotics papers that I can so I can be an effective masters
                        student and researcher. 
                    </p>
                    <p>
                        When not partaking in my professional life, I can usually be found playing guitar/piano/drums/bass 
                        (I play drums for 1 band and bass for another)
                        video editing, learning languages (I speak 5, learning Spanish right now!),
                        reading books about history/politics, or making projects with Arduinos/Raspberry Pis.
                    </p>
                    </div>

                    <div style={{ padding: '20px', flex: 1 }}>
                    <p>
                        <h3>Research Interests:</h3>
                        I am interested in Robotics, and am currently looking into continuum and mobile robotics. I expect to be able to persue
                        my robotics interest further when I am at TMU
                    </p>
                    <p>
                        I do have other interests. I do think that CS Education is an interesting topic, and I am interested in how visualization tools 
                        help students learn how concepts work. My SSD visualization paper was produced from this interest. I also think computer graphics,
                        distributed systems, and cyber security is interesting, but it isn't my main focus.
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
