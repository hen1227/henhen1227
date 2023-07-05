import React, {useRef} from 'react';
import '../../../App.css';
import './Home.css'
import MinecraftLogo from '../Header';
import CurrentWorld from '../worlds/CurrentWorld';
import PastServers from '../worlds/PastServers';
import DiscordButton from '../DiscordButton';
import MinecraftBackground from '../MinecraftBackground';
import UpcomingServer from "../worlds/UpcomingServerDetails";


function Home() {
    return (
        <>
            <div className="minecraft-main">
                <MinecraftLogo />
                <UpcomingServer />
                <CurrentWorld />
                {/*<PastServersLink />*/}
                <DiscordButton />
                <MinecraftBackground/>
            </div>
        </>
    );
}

export default Home;
