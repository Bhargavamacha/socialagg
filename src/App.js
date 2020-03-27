import React from 'react';
import './App.css';
import InitialDescription from './components/InitialDescription';
import KeyWords from './components/KeyWords';
import SocialMedia from './components/SocialMedia';
import Source from './components/Source';
import Frequency from './components/Frequency';
import GoogleAuth from './GoogleAuth';
import Submit from './components/Submit';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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
