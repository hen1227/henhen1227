import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingServerDetails.css';

const UpcomingServer = () => {
    return (
        <div className="upcomingServer">
            <h2>Origins Modded Server</h2>
            <h4>1.19.2</h4>
            <p>Starting Sunday, July 9th, come play on this hardcore modded server (7 lives each). Each life you are given a random Origin which will grant you abilities.
                This is by whitelist only, so if you're interested, please join the <a href={"https://discord.gg/W9eXNVMAqp"}>discord</a>.</p>
            <Link className={"learnMore"} to={`/minecraft/servers/origins`}>Learn More</Link>
        </div>
    );
};

export default UpcomingServer;
