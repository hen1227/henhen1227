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



                {/*<h3>Capabilities</h3>*/}
                {/*<br/>*/}
                {/*<ul>*/}
                {/*    <li>Texture Rendering</li>*/}
                {/*    <li>Font Rendering (soon)</li>*/}
                {/*    <li>2D Platformer</li>*/}
                {/*    <li>2D Platformer</li>*/}
                {/*    */}

                {/*</ul>*/}



                <h4>Coming soon!</h4>


            </div>
        </div>
    );
}

export default Body;
