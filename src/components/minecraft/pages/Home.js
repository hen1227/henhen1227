import React, {useRef} from 'react';
import '../../../App.css';
import './Home.css'
import MinecraftLogo from '../Header';
import CurrentWorld from '../worlds/CurrentWorld';
import PastWorlds from '../worlds/PastWorlds';
import DiscordButton from '../DiscordButton';
import MinecraftBackground from '../MinecraftBackground';
import WorldScreenshotsModal from '../worlds/WorldScreenshotsModal'


function Home() {
    return (
        <>
            <div className="minecraft-main">
                <MinecraftLogo />
                <CurrentWorld />
                <PastWorlds />
                <DiscordButton />
                <MinecraftBackground/>
            </div>
        </>
    );
}

export default Home;
