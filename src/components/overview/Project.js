import React  from 'react';
import {Link}  from 'react-router-dom';
import '../../App.css';
import './pages/Home.css'
import Tag from './Tag'
import './Project.css'
import TagsList from "./TagsList";

function Project(props) {

    let key = 0;
        return (
        <>
            <Link to={props.link} style={{color: "black", textDecoration: "none"}}>
                <div className="overviewProject">
                    <h1>{props.title}</h1>
                    <p className="date">{props.date}</p>
                    <img src={props.image} className="overviewProjectImage" alt={props.title+" image"}/>
                    <p className="description">{props.description}</p>
                        <ul className="overviewProjectTags">
                            {(props.tags).map((lang) => {
                                return (<Tag key={key++} clickable={false} active={true} lang={`${lang}`} color={`${TagsList[lang]}`}/>)
                            })}
                        </ul>
                </div>
            </Link>
        </>
    );
}

export default Project;