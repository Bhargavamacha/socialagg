import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InitialDescription from './components/InitialDescription';
import KeyWords from './components/KeyWords';
import Media from './components/Media';
import Buttons from './components/Button';
import Frequency from './components/Frequency';
import GoogleAuth from './GoogleAuth';
import Submit from './components/Submit';
import Navbar from './components/Navbar';
import axios from 'axios';
import { load } from 'recaptcha-v3';

let tkn;

load('6LeDneQUAAAAAL9yp3IlNKE72B0b3sODs8v7c_q-').then((recaptcha) => {
  recaptcha.execute('login').then((token) => {
      console.log(token) // Will print the token
      
    })
})
load('6LeDneQUAAAAAL9yp3IlNKE72B0b3sODs8v7c_q-', {
    useRecaptchaNet: true,
    autoHideBadge: false
  }).then((recaptcha) => {
    tkn = recaptcha;
  })
const App = () => {

  const [googletoken, setGoogleToken] = useState("None");

  setInterval(function(){
    setGoogleToken(tkn); 
    // console.log(googletoken); 
    }, 2000);
  return (
    <div className="App">
      <Navbar />
      <InitialDescription/>
      <KeyWords />
      <Media />
      <Buttons GoogleToken={googletoken} />
      <Frequency />
      <GoogleAuth />
      <Submit />
    </div>
  );
}

export default App;
