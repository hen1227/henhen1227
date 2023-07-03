import React from 'react';
import '../../App.css';
import './Body.css'
import {Button} from "../Button";


function Body() {
    return (
        <div>
            <div className='platform-container'>
                <h1>Platform Climber</h1>
                <p>Alpha v0.1.1</p>
                    <div className='hero-btns'>
                        <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                localDestination={false}
                                destination='https://api.henhen1227.com/platform-climber/download'
                        >
                            &emsp; &emsp;  <del>DOWNLOAD</del> &emsp; &emsp;
                        </Button>
                    </div>
                <h2>Unfortunately, my computer broke and supporting files for this game were unable to be recovered. :(</h2>
            </div>
        </div>
    );
}

export default Body;
