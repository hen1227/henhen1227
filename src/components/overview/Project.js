import React  from 'react';
import '../../App.css';
import './pages/Home.css'
import Tag from './Tag'
import './Project.css'
import TagsList from "./TagsList";

function Project(props) {

    let key = 0;
        return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>
                <div className="overviewProject">
                    <h1>{props.title}</h1>
                    <p className="date">{props.date}</p>
                    <p className="time">{props.time}</p>
                    <img src={props.image} className="overviewProjectImage" alt={props.title+" image"}/>
                    <p className="description">{props.description}</p>
                    <ul className="overviewProjectTags">
                        {(props.tags).map((lang) => {
                            return (<Tag key={key++} clickable={false} active={true} lang={`${lang}`} color={`${TagsList[lang]}`}/>)
                        })}
                    </ul>
                </div>
            </a>
        </>
    );
}

export default Project;
