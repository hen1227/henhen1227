import React from 'react';
import '../../../../App.css';
import MinecraftLogo from '../../Header';
import DiscordButton from '../../DiscordButton';
import MinecraftBackground from '../../MinecraftBackground';
import './OriginsServer.css';
import OriginsModList from "./OriginsModList";


function Home() {
    return (
        <>
            <div className="minecraft-main">
                <MinecraftLogo />
                <div className={"minecraft-server-details"}>
                    <h2>Origins Modded Server</h2>
                    <h4>1.19.2</h4>
                    <p>Starting Sunday, July 9th, come play on this hardcore modded server (7 lives each). Each life you are given a random Origin which will grant you abilities.</p>
                </div>
                <div className={"minecraft-server-details mods-list"}>
                    <h3>Mods List</h3>
                    <p>This is subject to change anytime</p>
                    <OriginsModList />
                </div>
                <div className={"minecraft-server-details"}>
                    <div style={{width:"70%", margin:"auto"}}>
                    <h3>Setup mod pack without <a href={"https://www.curseforge.com/minecraft"} target="_blank">curseforge</a>:</h3>
                    <p><b>1.</b>Download fabric <a href={"https://fabricmc.net/use/installer/"} target="_blank">installer</a></p>
                    <p><b>2.</b>Download and unzip the <a href="https://api.henhen1227.com/downloads/minecraft/originsModpack" target="_blank">modpack.</a></p>
                    <p><b>3.</b>Open fabric installer as admin (right click, open) and select client, version 1.19.2.</p>
                    <p><b>4.</b>Open minecraft launcher > go to installations > fabric-loader-1.19.2</p>
                    <p><b>5.</b>Set the game directory to the downloaded modpack folder. </p>
                    <p><b>6.</b>Not necessary but recommended, in more options, the JVM arguments, I recommend setting <span style={{color:"orange", background:"#404040", borderRadius:"5px", padding:"2px"}}>-Xmx2G</span> to a higher value around <span style={{color:"orange", background:"#404040", borderRadius:"5px", padding:"2px"}}>-Xmx6G</span>. But don't set higher than your computer's installed RAM.</p>
                    </div>
                </div>
                <div className={"minecraft-server-details"}>
                    <div style={{width:"70%", margin:"auto"}}>
                        <h3>Setup mod pack with <a href={"https://www.curseforge.com/minecraft"} target="_blank">curseforge</a>:</h3>
                        <p><b>1.</b>Download the modpack.</p>
                        <p><b>2.</b>Open curseforge and navigate to the minecraft page</p>
                        <p><b>3.</b>Create custom profile</p>
                        <p><b>4.</b>Import a previously created profile</p>
                        <p><b>5.</b>Select the modpack zip file.</p>
                        <p><b>6.</b>Once downloaded, click play.</p>
                    </div>
                </div>
                <DiscordButton />
                <MinecraftBackground/>
            </div>
        </>
    );
}

export default Home;
