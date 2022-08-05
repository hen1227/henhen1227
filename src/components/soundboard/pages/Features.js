import React from 'react';
import '../../../App.css';
import '../Features.css';
import FeatureItem from '../FeatureItem'


export default function Features() {
  return <>
  <div className='features'>
        <h1 style={{color:"#eee"}}>KeySoundboard Features</h1>
        <div className='features__container'>
            <ul className='features__items'>
        <FeatureItem
        src={'/soundboard/images/soundControl.png'}
        alt="Sound Control"
        text='Control the sound effects reverb, volume, and play speed'
        />
        <FeatureItem
        src={'/soundboard/images/keybinds.png'}
        alt="Keybinds"
        text='Set sounds to play on any keybind'
        />
        <FeatureItem
        src={'/soundboard/images/MLGHorn.png'}
        alt="Keybinds"
        text='Play your favorite sounds with their assigned keybinds in ANY window'
        />
        </ul>
      </div>
      </div>
  </>
}
