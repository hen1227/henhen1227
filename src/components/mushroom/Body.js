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
                <h1>Mushroom</h1>
                <br/>
                <br/>
                <p><b>Why Mushroom as a name?</b></p>
                <p>That's easy, there is mush room for improvement</p>
                <p>This is my first project in Java... ever.</p>
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
                />
                <GamePlayImage
                    title="Level Editor"
                    message="A built in level editor makes it possible to saves and load levels to local device"
                    image="mushroomImage3"
                />
            </div>
        </div>
    );
}

function GamePlayImage(props){
    const [side, setSide] = useState("left");
    const [left, setLeft] = useState(false);

    const titleRef = useRef(null);

    function handleZoomClick(){
        if(side === "left"){
            setLeft(false);
        }else if(side === "right"){
            setLeft(true);
        }
        setSide("");
    }
    function handleCloseClick(){
        if(left){
            setSide("left");
        }else{
            setSide("right");
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
                <div onClick={handleCloseClick} className={"gamePlayImageFullscreen "+props.image + " fullscreen " + side}/>
            </div>
        </>
    );
}

export default Body;
