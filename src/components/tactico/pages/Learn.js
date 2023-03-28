import React from 'react';
import '../../../App.css';
import './Learn.css'
import {Button} from "../../Button";


function Learn() {
    return (
        <div>
            <div className='tactico-container'>
                <h1>Tactico</h1>
                <p>How to Play</p>

                <br/>
                <br/>
                <div>
                    <h3>Players take turns placing 4 pieces each into unoccupied spaces.</h3>
                </div>
                <br/>
                <div>
                    <h3>After all eight pieces have been placed, they can be moved to adjacent unoccupied spaces.</h3>
                </div>

                <br/>
                <div>
                    <h3>First player to get 4 in a row, or a 2x2 square wins.</h3>
                </div>

                <br/>
                <h3>Good luck!</h3>

                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--med'
                        localDestination={true}
                        destination='/tactico/play'
                    >
                        &emsp; PLAY ONLINE &emsp;
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--med'
                        localDestination={false}
                        destination='https://apps.apple.com/sa/app/tactico/id1671696295'
                    >
                        &emsp; GET APP &emsp;
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default Learn;
