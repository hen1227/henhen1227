import React from 'react';
import '../../../App.css';
import {Button} from "../../Button";
import './Features.css'

function Features() {
    return (
        <div>
            <div className='dnd-features-container'>
                <h1>D&D Languages</h1>

                <p>The AI tries to guess the symbols written on given images.</p>
                <p>The images are then sent to a database where they are saved.</p>
                <p>Every 100 images or so, the computer will retrain the AI with the new data.</p>
                <p>The new AI is then automatically uploaded to the app.</p>

                <div>
                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            localDestination={false}
                            destination='https://apps.apple.com/us/app/d-d-languages/id1587170371?platform=iphone'
                        >
                            VIEW ON APP STORE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
