import {useRef, useState} from "react";
import './SimulationThumbnail.css'


function SimulationThumbnail({ gifSrc, thumbnailSrc, title, description, link }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <a href={link} style={{textDecoration: "none", color: "white"}} target="_blank" rel="noopener noreferrer">
            <div className={'simulation-thumbnail-container'}
                 onMouseEnter={() => setIsHovering(true)}
                 onMouseLeave={() => setIsHovering(false)}
            >
                <h3 style={{marginTop: 50}}>{title}</h3>
                {isHovering ? (
                    <img className={'simulation-image preview-gif'} src={gifSrc} alt={title} />
                ) : (
                    <img className={'simulation-image'} src={thumbnailSrc} alt={title} />
                )}
                <p>{description}</p>
            </div>
        </a>
    );
}

export default SimulationThumbnail;
