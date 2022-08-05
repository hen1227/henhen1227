import React from 'react';
import '../../../App.css';
import '../Features.css';
import FeatureItem from '../FeatureItem';
import {Button} from '../../Button';
import Head from './Head'


export default function Features() {
  return <>
    <Head/>
  <div className='features'>
        <div className='description'>
        <h1 style={{color:"#fff"}}>KeySoundboard</h1>
        <br/>
          <p>KeySoundboard allows you to play sound files at the press of a button. On ANY window!</p>
        </div>

        <div className='features__container'>
            <ul className='features__items'>
        <FeatureItem
        src={'/soundboard/images/soundControl.png'}
        alt="Sound Control"
        text='Control the sound effects speed, reverb, and volume'
        />
        <FeatureItem
        src={'/soundboard/images/keybinds.png'}
        alt="Keybinds"
        text='Set sounds to play on any keybind'
        />
        <FeatureItem
        src={'/soundboard/images/keypad.jpg'}
        alt="Keypad"
        text='Fully compatible with numpads too!'
        />
        <FeatureItem
        src={'/soundboard/images/MLGHorn.png'}
        alt="Keybinds"
        text='Play your favorite sounds with their assigned keybinds in ANY window'
        />
        </ul>
      </div>
      <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            localDestination={false}
            destination='https://apps.apple.com/us/app/keysoundboard/id1636744123'
          >
            VIEW ON APP STORE
      </Button>
      </div>
  </>
}
