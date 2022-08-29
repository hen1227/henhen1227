import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
// import { Parallax } from 'react-parallax';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function HeroSection() {
  return (
      <div style={{ height: 720}}>      
        <div className='hero-container'>
        <h1>KeySoundboard</h1>
        <p>Create those Epic moments</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            localDestination={false}
            destination='https://apps.apple.com/app/apple-store/id1636744123?pt=122454310&ct=Website&mt=8'
          >
            VIEW ON APP STORE
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            destination="/soundboard/features"
          >
            SEE FEATURES
          </Button>
        </div>
      </div> 
      </div>
  );
}

export default HeroSection;
