import React from 'react';
import './Home.css'
import {Button} from "../../Button";


function Home() {
    return (
        <div>
            <div className='morse-body'>
                <h1>morse decoded</h1>
                <h2>•–•• • •– •–• –• &emsp; –– ––– •–• ••• • &emsp; –•–• ––– –•• •</h2>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        localDestination={false}
                        destination='https://apps.apple.com/us/app/morse-decoded/id1578820123'
                    >
                        VIEW ON APP STORE
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        destination="/morse/features"
                    >
                        LEARN MORE
                    </Button>
                </div>
            </div>
            {/*<MorseTranslator/>*/}
        </div>
    );
}

export default Home;
