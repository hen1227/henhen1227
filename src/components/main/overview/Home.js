import React, {useState, useEffect} from 'react';
import '../../../App.css';
import './Home.css'
import Project from './Project'
import SearchBar from './SearchBar'
// import {emptyList} from "./TagsList";
// import TagsList from "./TagsList";
// import Tag from "./Tag";

const projects = {
    "This website":{"description":"Hello world!","date":"August 2022 - Now","link":"#","image":"/main/images/logoDark.png","tags":["ReactJS","HTML","CSS","NodeJS"]},
    "Mushroom Game Engine":{"description":"Designed to create level based multiplayer platformer games","link":"/mushroom","date":"May 2022 - Now","image":"/overview/images/Fungo.png", "tags":["Java","GLSL","MacOS"]},
    "Platform Climber":{"description":"Climb as high as you can and get your name saved on the leaderboards","link":"/climber","date":"November 2022","image":"/overview/images/PlatformClimber.png","tags":["Rust","NodeJS","MacOS"]},
    "KeySoundboard":{"description":"Turn your keyboard into a soundboard. Play any sound at the press of any button","link":"/soundboard","date":"August 2022","image":"/overview/images/KeySoundboard.png","tags":["Swift","MacOS"]},
    "D&D Languages":{"description":"Use AI to learn the characters of the D&D e5 languages. Upload your images to further train the AI","link":"/dnd-languages","date":"September 2021","image":"/overview/images/D&DLanguages.png","tags":["Swift","TensorFlow","Firebase","NodeJS","IOS","Python"]},
    "Braille Decoded":{"description":"Learn the braille alphabet","date":"August 2021","link":"/braille","image":"/overview/images/BrailleDecoded.png","tags":["Swift","Firebase","IOS"]},
    "Morse Decoded":{"description":"Learn to read, write, listen, and tap morse code like a master ","link":"/morse","image":"/overview/images/MorseDecoded.png","date":"August 2021","tags":["Swift","Firebase","IOS"]},
    "Fish's Tale":{"description":"Track what, when, and where you caught fish and watch the trends","link":"#","date":"June - December 2020","image":"/overview/images/FishsTale.png","tags":["Swift","IOS"]},
    "Copy Paste Game":{"description":"An app used to keep track of your \"Copies\" in the Copy and Paste Game","link":"#","date":"May - June 2020","image":"/overview/images/CopyPaste.png","tags":["Swift","Firebase","IOS"]},
}

function Home() {


    let [includedProjects, setIncludedProjects] = useState(
        Object.entries(projects).map(function ([key, value]) {
            return (<div className={"project-wrapper"}><Project title={key} date={value['date']} link={value['link']} description={value['description']} image={value['image']} tags={value['tags']}/></div>);
        })
    );

    function updatedSelection(tags){
        let objects = [];
        Object.entries(projects).map(function ([key, value]) {
            console.log("updated project list");
            if (Object.keys(tags).every(tag => (value['tags'].includes(tag) || !tags[tag]))) {
                objects.push(<div className={"project-wrapper"}><Project title={key} link={value['link']} description={value['description']} image={value['image']} tags={value['tags']}/></div>);
            }else{
                objects.push(<div className={"project-wrapper project-wrapper-hidden"}></div>);
            }
        });

        setIncludedProjects(objects);
    }

    function addProjectsWithTags() {
        console.log(includedProjects);
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

export default Home;
