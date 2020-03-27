import React from 'react';
import './App.css';
import InitialDescription from './InitialDescription';
import KeyWords from './KeyWords';
import SocialMedia from './SocialMedia';
import Source from './Source';
import Frequency from './Frequency';
import GoogleAuth from './GoogleAuth';
import Submit from './Submit';

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
      <GoogleAuth />
      <Submit />
    </div>
  );
}

export default App;
