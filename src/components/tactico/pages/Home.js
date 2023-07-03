import React from 'react';
import './Home.css'
import {Button} from "../../Button";


function Home() {
    return (
        <div>
            <div className = "tactico-container">
                <h1>Tactico</h1>
                <p></p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        localDestination={false}
                        destination='https://apps.apple.com/sa/app/tactico/id1671696295'
                    >
                        &emsp;  DOWNLOAD APP &emsp;
                    </Button>
                </div>
                {/*<div className='hero-btns'>*/}
                {/*    <Button*/}
                {/*        className='btns'*/}
                {/*        buttonStyle='btn--primary'*/}
                {/*        buttonSize='btn--large'*/}
                {/*        localDestination={true}*/}
                {/*        destination='/tactico/play'*/}
                {/*    >*/}
                {/*        &emsp; PLAY &emsp;*/}
                {/*    </Button>*/}
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        localDestination={true}
                        destination='/tactico/learn'
                    >
                        &emsp; LEARN &emsp;
                    </Button>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Home;
