import React, {useRef} from 'react';
import '../../../App.css';
import './Home.css'
import MinecraftLogo from '../../../../../henhen1227-mc/src/components/Header';
import PastServersList from '../worlds/PastServers';
import DiscordButton from '../../../../../henhen1227-mc/src/components/DiscordButton';
import MinecraftBackground from '../../../../../henhen1227-mc/src/components/MinecraftBackground';
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
