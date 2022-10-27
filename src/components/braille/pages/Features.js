import React from 'react';
import './Home.css'
import '../../../App.css';
import {Button} from "../../Button";

function Home() {
    return (
        <div>
            <div className='braille'>
                <h1>Braille Decoded</h1>
                <h2>learn to write braille</h2>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        localDestination={false}
                        destination='https://apps.apple.com/us/app/braille-decoded/id1580625909'
                    >
                        VIEW ON APP STORE
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        destination="/braille/features"
                    >
                        LEARN MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
