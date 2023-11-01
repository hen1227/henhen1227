import React from 'react';
import '../../../App.css';
import './Home.css'
import {Button} from "../../Button";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useSpring, animated, config } from "@react-spring/web";

// TODO: FIX THIS PAGE

function HM10() {
    return (
        <>
            {/*<ConnectionBar/>*/}
            <div className="HM10">
                <div className="HM-View">
                    <h1>Bluetooth Connections</h1>
                    <h2>Connect IOS to Arduino via Bluetooth Low Energy Modules</h2>
                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            localDestination={false}
                            destination='https://apps.apple.com/us/app/bluetooth-serial-connect/id6449396821'
                        >
                            APP STORE
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            destination="/hm10/features"
                        >
                            HOW TO USE
                        </Button>
                    </div>
                    <p></p>
                    <p></p>
                    <p><b>Disclaimer:</b> This app is an updated version of one made by Hoiberg at hanger42.
                        The original is no longer available but his documentation can be found at <a href="https://www.hangar42.nl/hm10">
                            hanger42.nl/hm10</a>. I would recommend looking into his documentation for thorough instructions on how to setup
                    the HM-10 module.</p>
                    <p>This app was made for the HM10, HM11 and other similar UART devices.</p>
                </div>
            </div>
        </>
    );
}

export default HM10;
