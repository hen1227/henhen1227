import React, {useRef} from 'react';
import '../../../App.css';
import './Home.css'
import MinecraftLogo from '../Header';
import PastServersList from '../worlds/PastServers';
import DiscordButton from '../DiscordButton';
import MinecraftBackground from '../MinecraftBackground';
import UpcomingServer from "../worlds/UpcomingServerDetails";


function PastServers() {
    return (
        <>
            <div className="minecraft-main">
                <MinecraftLogo />
                <UpcomingServer />
                <PastServersList />
                <DiscordButton />
                <MinecraftBackground/>
            </div>
        </>
    );
}

export default PastServers;
