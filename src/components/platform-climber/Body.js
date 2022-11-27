import React from 'react';
import '../../App.css';
import './Body.css'
import {Button} from "../Button";


function Body() {
    return (
        <div>
            <div className='platform-container'>
                <h1>Platform Climber</h1>
                <p3>Alpha v0.1.1</p3>
                    <div className='hero-btns'>
                        <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                localDestination={false}
                                destination='http://api.henhen1227.com/platform-climber/download'
                        >
                            &emsp; &emsp;  DOWNLOAD &emsp; &emsp;
                        </Button>
                    </div>
            </div>
        </div>
    );
}

export default Body;
