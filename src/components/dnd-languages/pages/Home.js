import React from 'react';
import '../../../App.css';
import Body from "../Body.js";
import LanguageStat from "../LanguageStat.js"
import '../LanguageStat.css'

function Home() {
  return (
    <>
        <Body/>
        <div className="lng-list-container">
            <ul className="lng-item-container">
                <LanguageStat language="Elvish"/>
                <LanguageStat language="Draconic"/>
                <LanguageStat language="Dwarvish"/>
            </ul>
        </div>
    </>
  );
}

export default Home;
