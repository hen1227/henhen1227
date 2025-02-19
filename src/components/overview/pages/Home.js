import React, {useState} from 'react';
import '../../../App.css';
import './Home.css'
import Project from '../Project'
import SearchBar from '../SearchBar'

const projects = {
    "SwipSwap.io TestFlight Beta":{
        "description":"A simple yet fun endless game. Tap just in time to dodge the spikes as you glide along procedurally generated paths.",
        "link":"https://testflight.apple.com/join/hnBxVPdb",
        "date":"February 2025",
        "time":"50 hours",
        "image":"/images/overview/SwipSwap.png",
        "tags":["Godot", "NodeJS", "PostgreSQL", "AWS"]
    },
    "mcWardrobe":{
        "description":"Minecraft skin editor that allows users to edit skins, try on armor and armor trims, and view their skin in 3D. Also includes an AI to inpaint partially complete skins, and a way to export the skins as STL models for 3D printing.",
        "link":"https://mcwardrobe.com",
        "date":"June 2024 - February 2025",
        "time":"550 hours",
        "image":"/images/overview/MCWardrobeLogo.png",
        "tags":["ReactJS", "CSS", "Python", "PyTorch", "Flask", "PostgreSQL", "AWS"]
    },
    "KeySoundboard v2.0":{
        "description":"Turn your keyboard into a soundboard. Play any sound at the press of any button. And mix the audio with your microphone and play it to a virtual microphone!",
        "link":"https://keyboard.henhen1227.com",
        "date":"November 2022 - April 2024",
        "time":"470 hours",
        "image":"/images/overview/KeySoundboardv2.png",
        "tags":["Swift","SwiftUI","MacOS","MacOS Driver"]
    },
    "GPT Gift Generator":{
        "description":"My Capstone project for my Applied Science and Engineering Project class. Generates gifts from data form and allows feedback to refine gift suggestions.",
        "date":"September 2023 - Now",
        "time":"60 hours",
        "link":"https://gifts.henhen1227.com",
        "image":"/images/overview/GiftGenerator.png",
        "tags":["ReactJS", "CSS", "NodeJS", "OpenAI"]
    },
    "SPS Now Website":{
        "description":"Class schedule, clubs list, and dining menu! An all in one place for SPS Students.",
        "date":"September 2023 - Now",
        "time":"85 hours",
        "link":"https://spsnow.henhen1227.com",
        "image":"/images/overview/SPSNow.png",
        "tags":["ReactJS", "CSS", "NodeJS", "PostgreSQL"]
    },
    "SPS Now App":{
        "description":"Class schedule, clubs list! An all in one place for SPS Students.",
        "date":"August 2023 - Now",
        "time":"175 hours",
        "link":"https://apps.apple.com/qa/app/sps-now/id6464536749",
        "image":"/images/overview/SPSNow.png",
        "tags":["React Native", "iOS", "CSS", "NodeJS", "PostgreSQL"]
    },
    "Minecraft Server":{
        "description":"Access your Minecraft account through the web and track the minecraft servers leaderboard live!",
        "date":"July 2023 - Now",
        "time":"90 hours",
        "link":"https://mc.henhen1227.com",
        "image":"/images/overview/Minecraft.jpg",
        "tags":["ReactJS", "CSS", "Java", "SocketIO", "PostgreSQL"]
    },
    "Docs Website":{
        "description":"Easy to use documentation on all necessary projects",
        "date":"July - August 2023",
        "time":"15 hours",
        "link":"https://docs.henhen1227.com",
        "image":"/images/main/logoDocs.png",
        "tags":["ReactJS", "CSS"]
    },
    "Bluetooth Door Unlock":{
        "description":"A device that allows the Bluetooth Serial Connect app to unlock my dorm room door.",
        "date":"April - June 2023",
        "link":"/HM10",
        "time":"70 hours",
        "image":"/images/overview/BluetoothDoorUnlock.jpg",
        "tags":["C++","iOS"]
    },
    "Tactico":{
        "description":"A fun board game you can play locally or online",
        "date":"March 2023",
        "link":"/tactico",
        "time":"90 hours",
        "image":"/images/tactico/TacticoIcon.png",
        "tags":["ReactJS","NodeJS","SocketIO","iOS","Swift"]
    },
    "BluetoothSerial":{
        "description":"An app that allows iPhones to easily interface with Arduino bluetooth HM10 chips",
        "date":"February - March 2023, July - August 2023",
        "time":"150 hours",
        "link":"/HM10",
        "image":"/images/bluetooth-serial/BluetoothSerialIcon.png",
        "tags":["Swift","iOS","C++"]
    },
    "This website":{
        "description":"A collection of all my projects",
        "date":"August 2022 - Now",
        "time":"200 hours",
        "link":"/",
        "image":"/images/main/logoTm.svg",
        "tags":["ReactJS","CSS"]
    },
    "Backend Server":{
        "description":"The backend for all my projects",
        "date":"August 2022 - Now",
        "time":"140 hours",
        "link":"/api",
        "image":"/images/main/logoBackend.png",
        "tags":["NodeJS","Python","PostgreSQL","SocketIO"]
    },
    "Mushroom Game Engine":{
        "description":"Designed to create level based multiplayer platformer games",
        "link":"/mushroom",
        "date":"April 2022 - February 2023",
        "time":"400 hours",
        "image":"/images/overview/Fungo.png",
        "tags":["Java","GLSL","MacOS"]
    },
    "Platform Climber":{
        "description":"Climb as high as you can and get your name saved on the leaderboards",
        "link":"/climber",
        "date":"November 2022",
        "time":"40 hours",
        "image":"/images/overview/PlatformClimber.png",
        "tags":["Rust","NodeJS","MacOS"]
    },
    "KeySoundboard v1":{
        "description":"Turn your keyboard into a soundboard. Play any sound at the press of any button",
        "link":"/soundboard",
        "date":"July - November 2022",
        "time":"180 hours",
        "image":"/images/overview/KeySoundboard.png",
        "tags":["Swift","MacOS"]
    },
    "D&D Languages":{
        "description":"Use AI to learn the characters of the D&D e5 languages. Upload your main to further train the AI",
        "link":"/dnd-languages",
        "date":"September 2021",
        "time":"100 hours",
        "image":"/images/overview/D&DLanguages.png",
        "tags":["Swift","TensorFlow","Firebase","NodeJS","iOS","Python"]
    },
    "Braille Decoded":{
        "description":"Learn the braille alphabet",
        "date":"August 2021",
        "time":"30 hours",
        "link":"/braille",
        "image":"/images/overview/BrailleDecoded.png",
        "tags":["Swift","Firebase","iOS"]
    },
    "Morse Decoded":{
        "description":"Learn to read, write, listen, and tap morse code like a master ",
        "link":"/morse",
        "time":"60 hours",
        "image":"/images/overview/MorseDecoded.png",
        "date":"August 2021",
        "tags":["Swift","Firebase","iOS"]
    },
    "Fish's Tale":{
        "description":"Track what, when, and where you caught fish and watch the trends",
        "link":"https://apps.apple.com/qa/app/fishs-tale/id1544660669",
        "date":"June - December 2020",
        "time":"160 hours",
        "image":"/images/overview/FishsTale.png",
        "tags":["Swift","iOS"]
    },
    "Copy Paste Game":{
        "description":"An app used to keep track of your \"Copies\" in the Copy and Paste Game",
        "link":"https://apps.apple.com/qa/app/copy-what-u-said/id1547116227",
        "date":"May - June 2020",
        "time":"90 hours",
        "image":"/images/overview/CopyPaste.png",
        "tags":["Swift","Firebase","iOS"]
    },
}

function Overview() {

    let wrapperKey = 0;

    let [includedProjects, setIncludedProjects] = useState(
        Object.entries(projects).map(function ([key, value]) {
            return (<div key={wrapperKey++} className={"project-wrapper"}><Project title={key} date={value['date']} time={value['time']} link={value['link']} description={value['description']} image={value['image']} tags={value['tags']}/></div>);
        })
    );

    function updatedSelection(tags){
        let objects = [];
        Object.entries(projects).map(function ([key, value]) {
            if (Object.keys(tags).every(tag => (value['tags'].includes(tag) || !tags[tag]))) {
                objects.push(<div key={wrapperKey++} className={"project-wrapper"}><Project title={key} date={value['date']} time={value['time']} link={value['link']} description={value['description']} image={value['image']} tags={value['tags']}/></div>);
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
