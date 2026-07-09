import React, { useState } from "react";
import AnimatedPage from '../animations/transitions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import braille from '../images/braille.jpg';


export default function CsProjects() {
    const accordionStyle = {
        backgroundColor: '#282c34',
        color: 'white',
        border: '1px solid #e4ddcb',
        margin: 0,
    };

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


    const params = new URLSearchParams(window.location.search);

    const [expanded, setExpanded] = useState(params.get("project") === "braille" ? "braille" : false);

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
                <div style={{ display: 'flex', flexWrap: 'flex-start', marginTop: '20px' }}>
                    <h3 style={{ color: 'white', marginLeft: '30px', marginRight: '30px' }}>

                    <div>
                      <Accordion style={accordionStyle}
    			expanded={expanded === "drink"} onChange={() => setExpanded(expanded === "drink" ? false : "drink")}>
                          <AccordionSummary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography>Drink Robot</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              This is a project that I have worked on in the past. It functions like a keurig machine,
	                      only that it has tubes sticking out of it that you can put into a bottle of coca-cola/pepsi/etc and it can make a drink for you. 
        	              Its close to completion, I just need to find some time to complete it. 

                              <pre style={{ whiteSpace: 'pre-wrap', color: 'white' }}>
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
                                  }}/>
                                  <code>{codeString}</code>
                              </pre>
                          </AccordionDetails>
                      </Accordion>

                      <Accordion style={accordionStyle}
                         expanded={expanded === "braille"} onChange={() => setExpanded(expanded === "braille" ? false : "braille")}>
                          <AccordionSummary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography>Braille Device</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              The main project that I will be working on this summer is a braille device reader.
                              I originally started this project with&nbsp;
                              <a href="https://www.linkedin.com/in/jessica-wen1021/" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>Jessica Wen</a> and&nbsp;
                              <a href="https://www.linkedin.com/in/devin-mendes-24b609330/" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>Devin Mendes</a>&nbsp;
                              in collaboration with Dr. Daniel Zingaro at UTM, and we created a solenoid based braille reader,
                              where the solenoids are controlled with relays and an Arduino. We aim to continue working on this
                              during the summer to improve its capabilities, while ensuring it keeps a low cost per braille cell (less then 20 dollars)
                              <pre style={{ whiteSpace: 'pre-wrap', color: 'white' }}>
                                  <img src={braille} alt="Drink Machine" style={{ flex: '0 0 30%', maxWidth: '500px', marginLeft: '60px', ...pictureStyle }}/>
                              </pre>
                          </AccordionDetails>
                      </Accordion>  
                    </div>


                    <hr></hr>
                    I have also worked on plenty of school projects. I have built a game engine in the computer graphics courses I took.
                    <a href="https://github.com/P0k3rf4ce/SauceEngine" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>Click here for link </a>
                    I have also worked on other physical hardware projects such as vision machine learning to track
                    how many people are in a subway car to provide accurate updates about the subways capacity. More details can be found here: 
                    <a href="https://tycelm.github.io/track-the-crowd/" target =" blank" style={{color: 'cyan', 'text-align': 'center' }}>
                    https://tycelm.github.io/track-the-crowd/ <br></br>
                    </a>
                    </h3>

            </div>
        </AnimatedPage>
    )
} 
