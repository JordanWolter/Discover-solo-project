import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>I developed this app to help users cut down on time searching for disc golf courses and get to playing rounds faster. </p>

        <h2>Tech used</h2>
        <p>Node.js</p>
        <p>React</p>
        <p>Redux</p>
        <p>Javascript</p>
        <p>SQL</p>
        <p>MUI</p>
        <p>Google Maps API</p>
        <p>Disc Golf Course Review API</p>
        <p>Weather API</p>
        <p>Discfinder API</p>

        <p></p>

        <p>Thanks to Edan, Prime Digital Academy, my wife, and the Ramirez cohort</p>
      </div>
    </div>
  );
}

export default AboutPage;
