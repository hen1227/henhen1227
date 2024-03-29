import React from 'react';
// import '../../../../../App.css';
// import MinecraftLogo from '../../../../../../../henhen1227-mc/src/components/Header';
// import DiscordButton from '../../../../../../../henhen1227-mc/src/components/DiscordButton';
// import MinecraftBackground from '../../../../../../../henhen1227-mc/src/components/MinecraftBackground';
import './OriginsServer.css';
import OriginsModList from "./OriginsModList";
import ModdedSetupInstructions from "../ModdedSetupInstructions"


function Home() {
    return (
        <>
            <div className="minecraft-main">
                {/*<MinecraftLogo />*/}
                <div className={"minecraft-server-details"}>
                    <h2>Origins Modded Server</h2>
                    <h4>1.19.2</h4>
                    <p>Starting Sunday, July 9th, come play on this hardcore modded server (6 lives each). Each life you are given a random Origin which will grant you abilities.</p>
                </div>
                <div className={"minecraft-server-details mods-list"}>
                    <h3>Mods List</h3>
                    <p>This is subject to change anytime</p>
                    <OriginsModList />
                </div>
                <ModdedSetupInstructions />
                {/*<DiscordButton />*/}
                {/*<MinecraftBackground/>*/}
            </div>
        </>
    );
}

export default Home;
