import React from 'react';
import { ThemeProvider } from '@mui/system';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';
import Box from '@mui/material/Box';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <ThemeProvider theme={PrimaryMainTheme}>
      <Box sx={{backgroundColor: 'white', m:2, borderRadius:3, minHeight:680,}}>

    
    <div className="container">
      <div>
        <p>I developed this app to help users spend less time and energy searching for disc golf courses and spend more time playing. I have been frustrated many times putting in the research and time to find a new course only to be left empy handed.</p>
        
        <h2>Tech used</h2>
        <ul>
        <li>Node.js</li>
        <li>React</li>
        <li>Redux</li>
        <li>Javascript</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material-UI</li>
        <li>Google Maps API</li>
        <li>Disc Golf Course Review API</li>
        <li>Weather API</li>
        <li>Discfinder API</li>
        </ul>
        </div>

        <p>Thanks to Prime Digital Academy, especially Edan for being a great teacher. My wife Kelsi, for all the support through this journy. And the Ramirez cohort, TO THE BUS!</p>
        <img className='logo' src='/images/IMG_9B0420E0C6D3-1.jpeg'/>
    </div>
    </Box>
    </ThemeProvider>
  );
}

export default AboutPage;
