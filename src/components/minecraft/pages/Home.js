import React from 'react';
import '../../../App.css';
import './Home.css'
import MinecraftLogo from '../Header';
import CurrentServerStats from '../CurrentServerStats';
import PastWorlds from '../pastWorlds/PastWorlds';
import DiscordButton from '../DiscordButton';
import MinecraftBackground from '../MinecraftBackground';

function Home() {
    return (
        <>
            <div className="minecraft-main">
                <MinecraftLogo />
                <CurrentServerStats />
                <PastWorlds />
                <DiscordButton />
                <MinecraftBackground />
            </div>
        </>
    );
}

export default Home;
