import React from 'react';
import '../../App.css';
import './Body.css'

function Body() {
    return (
        <div>
            <div className='mushroom'>

                <div className='projectOverview'>
                    <h1>Project Overview</h1>
                    <h4>Oct 2022</h4>
                    <div className={"projectOverviewImage"}/>
                </div>


                <h1>Game Engine</h1>
                <h2>Mushroom</h2>
                <br/>
                <br/>
                <p><b>Why Mushroom as a name?</b></p>
                <p>That's easy, there is mush room for improvement</p>
                <p>This is my first project in Java... ever</p>

                <br/>
                <br/>


                <h3>Gameplay</h3>
                <p>An explorable platformer </p>
                <div className={"gamePlayImage mushroomImage1"}/>


                <h3>Multiplayer</h3>
                <p>A mix of both UDP and TCP connections to keep the game under 10kbs while keeping it run smoothly</p>
                <div className={"gamePlayImage mushroomImage2"}>
                    <p><b>Image Soon</b></p><br/>
                    <p>I accidentally broke multiplayer capability</p>
                    <p>while adding font rendering and updating the UI</p>
                </div>


                <h3>Level Editor</h3>
                <p>A built in level editor makes it possible to saves and load levels to local device</p>
                <div className={"gamePlayImage mushroomImage2"}>
                    <p><b>Image Soon</b></p><br/>
                    <p>This is currently broken too :(</p>
                </div>
                {/*<h3>Capabilities</h3>*/}
                {/*<br/>*/}
                {/*<ul>*/}
                {/*    <li>Texture Rendering</li>*/}
                {/*    <li>Font Rendering (soon)</li>*/}
                {/*    <li>2D Platformer</li>*/}
                {/*    <li>2D Platformer</li>*/}
                {/*    */}

                {/*</ul>*/}

            </div>
        </div>
    );
}

export default Body;
