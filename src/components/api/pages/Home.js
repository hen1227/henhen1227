import React from 'react';
import '../../../App.css';
import './Home.css'
import ConnectionBar from "../../main/ConnectionBar";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useSpring, animated, config } from "@react-spring/web";

function Api() {
    return (
        <>
            {/*<ConnectionBar/>*/}
            <div className="Api">
            <div className="Api-View">
                <h1>api.Henhen1227.com</h1>
                <h2>The Backend of Henhen1227</h2>
                <p>Coming soon!</p>
            </div>
                <div className="Api-feature-wrapper">
                    <div className="Api-feature">
                        <h1>RestAPI</h1>
                        <div>
                            <img alt="restAPI symbol" src="/api/images/restAPI.png"/>
                            <p>Organized RestfulAPI allows easy access to databases.</p>
                        </div>
                    </div>
                <div className="Api-feature">
                    <h1>Version Sync</h1>
                    <div>
                        <img alt="webhook symbol" src="/api/images/webhook.png"/>
                        <p>Using GitHub webhooks, a second server will automatically pull request on every repository update.</p>
                    </div>
                </div>
                <div className="Api-feature">
                    <h1>Persistent database</h1>
                    <div>
                        <img alt="database symbol" src="/api/images/database.png"/>
                        <p>Database is saved to the disk for cross-session storage. And frequently accessed data is also saved to memory for quick responses.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Api;
