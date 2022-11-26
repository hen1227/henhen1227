import React from 'react';
import '../../../App.css';
import './Home.css'
import Tag from './Tag'
import './Project.css'
import TagsList from "./TagsList";

function Project(props) {

    return (
        <>
            <div className="overviewProject">
                <h1>{props.title}</h1>
                <div className="overviewProjectImage"/>
                <p className="description">{props.description}</p>
                    <ul className="overviewProjectTags">
                        {(props.tags).map((lang) => {
                            return (<Tag clickable={false} active={true} lang={`${lang}`} color={`${TagsList[lang]}`}/>)
                        })}
                    </ul>
            </div>
        </>
    );
}

export default Project;
