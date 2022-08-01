import React from 'react';
import './Sounds.css';
import SoundItem from './SoundItem';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function Sounds() {
  return (
      <div className='cards'>
        <h1>Recommended sounds from <a href='https://www.myinstants.com/en/index/us/'>MyInstants.com</a></h1>
        <div className='cards__container'>
            <ul className='cards__items'>
              <SoundItem
                sound='https://www.myinstants.com/instant/rimshot/embed/'
                label='Rimshot'
              />
              <SoundItem
                sound='https://www.myinstants.com/instant/buzzer-89244/embed/'
                label='Buzzer'
              />
              <SoundItem
                sound='https://www.myinstants.com/instant/sad-trombone/embed/'
                label='Sad Trombone'
              />
              <SoundItem
                sound='https://www.myinstants.com/instant/screaming-goat-best/embed/'
                label='Goat Scream'
              />
              <SoundItem
                sound='https://www.myinstants.com/instant/hello-there-obi-wan-75092/embed/'
                label='Hello there!'
              />
              <SoundItem
                sound='https://www.myinstants.com/instant/mlg-air-horn-_-/embed/'
                label='MLG horn'
              />
              
              
            </ul>
        </div>
      </div>
  );
}

export default Sounds;
