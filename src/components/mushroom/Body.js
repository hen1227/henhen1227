import React, {useRef, useState} from 'react';
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
                <br/>
                <h2>Mushroom</h2>
                <br/>
                <br/>
                <p><b>Why Mushroom as a name?</b></p>
                <p>That's easy, there is mush room for improvement</p>
                <p>This is my first project in Java... ever</p>

                <br/>
                <br/>

                <GamePlayImage
                    title="Gameplay"
                    message="An explorable platformer"
                    image="mushroomImage1"
                />

                <GamePlayImage
                    title="Multiplayer"
                    message="A mix of both UDP and TCP connections to keep the game under 10kbs while keeping it run smoothly"
                    image="mushroomImage2"
                /><p>Image soon!</p>

                <GamePlayImage
                    title="Level Editor"
                    message="A built in level editor makes it possible to saves and load levels to local device"
                    image="mushroomImage3"
                /><p>Image soon!</p>

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

function GamePlayImage(props){

    const [fullscreen, setFullscreen] = useState(" left");
    const [left, setLeft] = useState(false);

    const titleRef = useRef(null);

    function handleZoomClick(){
        console.log(fullscreen);
        if(fullscreen === " left"){
            console.log("was on left")
            setLeft(false);
        }else if(fullscreen === " right"){
            console.log("was on right")
            setLeft(true);
        }
        setFullscreen("");
        console.log("Zoomed");
    }
    function handleCloseClick(){
        console.log("Closed");
        console.log(left);
        if(left){
            setFullscreen(" left");
        }else{
            setFullscreen(" right");
        }

        // window.scrollTo({
        //     top: titleRef.current.offsetTop
        // });
    }

    return(
        <>
            <div>
                <h3 ref={titleRef}>{props.title}</h3>
                <p>{props.message}</p>
                <div onClick={handleZoomClick} className={"gamePlayImage "+props.image}/>
                <div onClick={handleCloseClick} className={"gamePlayImageFullscreen "+props.image + " fullscreen" + fullscreen}/>
            </div>
        </>
    );
}

export default Body;
