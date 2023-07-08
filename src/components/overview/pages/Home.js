import React, {useState} from 'react';
import '../../../App.css';
import './Home.css'
import Project from '../Project'
import SearchBar from '../SearchBar'
// import {emptyList} from "./TagsList";
// import TagsList from "./TagsList";
// import Tag from "./Tag";

const projects = {
    "Docs Website":{"description":"Easy to use documentation on all necessary projects","date":"July 2023","link":"https://docs.henhen1227.com","image":"/images/overview/Documentation.png","tags":["ReactJS", "CSS"]},
    "Tactico":{"description":"A fun board game you can play locally or online","date":"March 2023","link":"/tactico","image":"/images/tactico/TacticoIcon.png","tags":["ReactJS","NodeJS","SocketIO","IOS","Swift"]},
    "BluetoothSerial":{"description":"An app that allows iPhones to easily interface with Arduino bluetooth HM10 chips","date":"February 2023 - Now","link":"/HM10","image":"/images/bluetooth-serial/BluetoothSerialIcon.png","tags":["Swift","IOS","C++"]},
    "This website":{"description":"A collection of all my projects","date":"August 2022 - Now","link":"#","image":"/images/main/logoTm.png","tags":["ReactJS","HTML","CSS"]},
    "Backend Server":{"description":"The backend for all my projects","date":"August 2022 - Now","link":"/api","image":"/images/main/logoBackend.png","tags":["NodeJS","Python"]},
    "Mushroom Game Engine":{"description":"Designed to create level based multiplayer platformer games","link":"/mushroom","date":"May 2022 - Now","image":"/images/overview/Fungo.png", "tags":["Java","GLSL","MacOS"]},
    "Platform Climber":{"description":"Climb as high as you can and get your name saved on the leaderboards","link":"/climber","date":"November 2022","image":"/images/overview/PlatformClimber.png","tags":["Rust","NodeJS","MacOS"]},
    "KeySoundboard":{"description":"Turn your keyboard into a soundboard. Play any sound at the press of any button","link":"/soundboard","date":"August 2022, June 2023 - Now","image":"/images/overview/KeySoundboard.png","tags":["Swift","MacOS"]},
    "D&D Languages":{"description":"Use AI to learn the characters of the D&D e5 languages. Upload your main to further train the AI","link":"/dnd-languages","date":"September 2021","image":"/images/overview/D&DLanguages.png","tags":["Swift","TensorFlow","Firebase","NodeJS","IOS","Python"]},
    "Braille Decoded":{"description":"Learn the braille alphabet","date":"August 2021","link":"/braille","image":"/images/overview/BrailleDecoded.png","tags":["Swift","Firebase","IOS"]},
    "Morse Decoded":{"description":"Learn to read, write, listen, and tap morse code like a master ","link":"/morse","image":"/images/overview/MorseDecoded.png","date":"August 2021","tags":["Swift","Firebase","IOS"]},
    "Fish's Tale":{"description":"Track what, when, and where you caught fish and watch the trends","link":"#","date":"June - December 2020","image":"/images/overview/FishsTale.png","tags":["Swift","IOS"]},
    "Copy Paste Game":{"description":"An app used to keep track of your \"Copies\" in the Copy and Paste Game","link":"#","date":"May - June 2020","image":"/images/overview/CopyPaste.png","tags":["Swift","Firebase","IOS"]},
}

function Overview() {

    let wrapperKey = 0;

    let [includedProjects, setIncludedProjects] = useState(
        Object.entries(projects).map(function ([key, value]) {
            return (<div key={wrapperKey++} className={"project-wrapper"}><Project title={key} date={value['date']} link={value['link']} description={value['description']} image={value['image']} tags={value['tags']}/></div>);
        })
    );

    function updatedSelection(tags){
        let objects = [];
        Object.entries(projects).map(function ([key, value]) {
            if (Object.keys(tags).every(tag => (value['tags'].includes(tag) || !tags[tag]))) {
                objects.push(<div key={wrapperKey++} className={"project-wrapper"}><Project title={key} date={value['date']} link={value['link']} description={value['description']} image={value['image']} tags={value['tags']}/></div>);
            }else{
                objects.push(<div key={wrapperKey++} className={"project-wrapper project-wrapper-hidden"}></div>);
            }
            return objects
        });

        setIncludedProjects(objects);
    }

    function addProjectsWithTags() {
        if(includedProjects.length === 0){
            return <h2>No results found</h2>
        }
       return includedProjects;
    }

    return (
        <>
            <div className="overviewHeader">
                <h1>Overview</h1>
            </div>
            <div className="overview">
                <SearchBar updatedSelection={updatedSelection}/>
                <br/>
                <div className="project-list-wrapper">
                    {addProjectsWithTags()}
                </div>
                <br/>
            </div>
        </>
    );
}

export default Overview;
