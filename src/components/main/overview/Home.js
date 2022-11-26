import React from 'react';
import '../../../App.css';
import './Home.css'
import Project from './Project'
import SearchBar from './SearchBar'
import TagsList from "./TagsList";
import Tag from "./Tag";

const projects = {
    "Mushroom Game Engine":{"description":"A game I developed to create platformer games", "image":"public/overview/images/Fungo.png", "tags":["Java","GLSL","MacOS"]},
    "Morse Decoded":{"description":"Learn to read, write, tap, and ","tags":["Swift"]},
}

function Home() {

    function updatedSelection(){

    }

    return (
        <>
            <div className="overviewHeader">
                <h1>Overview</h1>
            </div>
            <div className="overview">
                <SearchBar updatedSelection={updatedSelection}/>
                <br/>
                {
                    Object.entries(projects).map(function ([key, value]){
                        console.log(key,value);
                        return (<Project title={key} description={value['description']} image={value['image']} tags={value['tags']}/>);
                    })
                }
                <br/>
            </div>
        </>
    );
}

export default Home;
