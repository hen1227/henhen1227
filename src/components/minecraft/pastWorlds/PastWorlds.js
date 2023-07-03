import React, { useEffect, useState } from 'react';
import './PastWorlds.css';
import servers from './PastWorlds.json';

const PastWorlds = () => {
    const [pastWorlds, setPastWorlds] = useState([]);

    useEffect(() => {
        setPastWorlds(servers);
    }, []);

    return (
        <div className="pastWorlds">
            <h2>Past Worlds</h2>
            <ul>
                {pastWorlds.map(world => (
                    <li key={world.id}>
                        <h3>{world.name}</h3>
                        <p>{world.dateStarted} - {world.dateEnded}</p>
                        <img src={`images/minecraft/pastWorlds/${world.coverImage}`} alt={world.name} />
                        <p>File Size: {world.fileSize}<a className="download" href={world.downloadLink}>Download</a></p>
                        <div className="thumbnail-container">
                            {world.photoAlbum.map((image, index) => (
                                <img key={index} className="thumbnail" src={`images/minecraft/pastWorlds/${world.id}/${image}`} alt={`Thumbnail ${index}`} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PastWorlds;