import React from 'react';
import '../../../App.css';
import Body from "../Body.js";
import Highscore from "../Highscore.js";
import ConnectionBar from './../../main/ConnectionBar'

function Home() {
  return (
    <>
        <ConnectionBar/>
        <Body/>
        <Highscore/>
    </>
  );
}

export default Home;
