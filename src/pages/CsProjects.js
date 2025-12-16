import React from 'react';
import AnimatedPage from '../animations/transitions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



export default function CsProjects() {
    const accordionStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid #e4ddcb',
    };

    const codeString = `/**
    Maksym's Drink Dispencer Machine
 
    Copyright (C) 2025
    This is the ideal code for the machine, utilizing a keypad and an LCD display. 
    The code in the video is different, in that its just a button and digitalWrite to the relay. 
 */
 
 #include <LiquidCrystal.h>
 #include <Keypad.h>
 
 /* Handles the pump setup */
 #define PUMP_1 8
 #define PUMP_2 9
 #define PUMP_3 10
 #define PUMP_4 11
 #define PUMP_5 12
 #define PUMP_6 13
 const int pumpPins[] = {PUMP_1, PUMP_2, PUMP_3, PUMP_4, PUMP_5, PUMP_6};
 
 /* Handles the Display setup */
 LiquidCrystal lcd(A5, A4, A3, A2, A1, A0);
 
 /* Handles the Keypad setup */
 const byte KEYPAD_ROWS = 4;
 const byte KEYPAD_COLS = 4;
 byte rowPins[KEYPAD_ROWS] = {7, 6, 5, 4};
 byte colPins[KEYPAD_COLS] = {3, 2, 1, 0};
 char keys[KEYPAD_ROWS][KEYPAD_COLS] = {
   {'1', '2', '3', 'A'},
   {'4', '5', '6', 'B'},
   {'7', '8', '9', 'C'},
   {'*', '0', '#', 'D'}
 };
 Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, KEYPAD_ROWS, KEYPAD_COLS);
 
 void setup() {
   lcd.begin(16, 2);
   lcd.print("The Rizz-Spencer");
 
   for (int i = 0; i < 6; i++) {
     pinMode(pumpPins[i], OUTPUT);
   }
 }
 
 void activatePump(int pumpNumber) {
   for (int i = 0; i < 6; i++) {
     digitalWrite(pumpPins[i], LOW);
   }
 
   if (pumpNumber >= 0 && pumpNumber < 6) {
     digitalWrite(pumpPins[pumpNumber] - 1, HIGH);
   }
   lcd.print("Making Drink " + String(pumpNumber));
   delay(1000); // Change this if you want Spencer to Dispence for more then 1 second.
 }
 
 void loop() {
   lcd.setCursor(0, 2);
   char customKey = keypad.getKey();
 
   if (customKey){ 
     activatePump((int(customKey) - 48)); // Don't forget to shift by 48 to get integers that aren't gibberish!
   } else {
     for (int i = 0; i < 6; i++) {
       digitalWrite(pumpPins[i], LOW);
     }
     lcd.print("Making Nothing   ");
   }
 }`; // TODO Put this into another file, and import it so 

// Above is CSS code

    return (
        <AnimatedPage>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                <h3 style={{ color: 'white', flex: '0 0 45%', marginLeft: '30px' }}>
                This is the main project that I have been working on as of late. It functions like a keurig machine,
                 only that it has tubes sticking out of it that you can put into a bottle of coca-cola/pepsi/etc and it can make a drink for you. 
                The video right next to me. I will wire the thing up soon, and upload pictures of it. 

                <Accordion style={accordionStyle}>
                    <AccordionSummary 
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <Typography>Click me to see the code for the robot.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <pre style={{ whiteSpace: 'pre-wrap', color: 'white' }}>
                            <code>{codeString}</code>
                        </pre>
                    </AccordionDetails>
                </Accordion>


                <hr></hr>
                Im also working on a video game adaptation of blood on the clocktower. The techstack here is vite, electron, react, typescript.
                The current state of it is on &nbsp;
                <a href="https://github.com/Maksym-W/bloodOnTheClocktower" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>
                my Github. <br></br>
                </a>

                <hr></hr>
                I have also worked on plenty of school projects. I already mentioned some in the grad school section on the home page (
                  <a href="https://ssd-visualizer.vercel.app/visualizer" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>click here</a> for the link to the educational SSD visualizer I worked on at UofT),
                but in addition, I have also worked on physical hardware projects such as vision machine learning to track
                how many people are in a subway car to provide accurate updates about the subways capacity. More details can be found here: 
                <a href="https://tycelm.github.io/track-the-crowd/" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>
                https://tycelm.github.io/track-the-crowd/ <br></br>
                </a>


                <hr></hr>

                
                </h3>

                
                
                {/* <a href="#flip" target="_blank" rel="noopener noreferrer" >
                <Button variant="contained" style={navItemStyle}>Flip</Button>
                </a> */}

                {/* <img src={Robotics1} alt="Drink Machine" style={{ flex: '0 0 30%', marginLeft: '60px', ...pictureStyle }}/> */}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/36Ka0xX_gws"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    flex: '0 0 30%',
                    marginLeft: '60px',
                    marginTop: '50px',
                    border: '25px solid #e4ddca',
                    borderImage: 'linear-gradient(to bottom, #e4ddca, transparent) 1 49%',
                  }}
                />

            </div>
        </AnimatedPage>
    )
} 