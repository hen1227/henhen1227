import React from 'react';
import '../../App.css';
import './Body.css'
import {Button} from "../Button";

function Body() {
    return (
        <div>
            <div className='dnd-container'>
                <h1>D&D Languages</h1>
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
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            destination="/soundboard/features"
                        >
                            HOW IT WORKS
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
