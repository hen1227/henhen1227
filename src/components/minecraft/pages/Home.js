import React from 'react';
import '../../../App.css';
import './Home.css'
// import MinecraftLogo from '../../../../../henhen1227-mc/src/components/Header';
import CurrentWorld from '../worlds/CurrentWorld';
// import DiscordButton from '../../../../../henhen1227-mc/src/components/DiscordButton';
// import MinecraftBackground from '../../../../../henhen1227-mc/src/components/MinecraftBackground';
import UpcomingServer from "../worlds/UpcomingServerDetails";


function Home() {
    return (
        <>
            <div className="minecraft-main">
                {/*<MinecraftLogo />*/}
                <UpcomingServer />
                <CurrentWorld />
                {/*<PastServersLink />*/}
                {/*<DiscordButton />*/}
                {/*<MinecraftBackground/>*/}
            </div>
        </>
    );
}

export default Home;
