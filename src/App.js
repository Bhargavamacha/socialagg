import React from 'react';
import './App.css';
import InitialDescription from './InitialDescription';
import KeyWords from './KeyWords';
import SocialMedia from './SocialMedia';
import Source from './Source';
import Frequency from './Frequency';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <InitialDescription/>
      <KeyWords />
      <SocialMedia />
      <Source />
      <Frequency />
    </div>
  );
}

export default App;
