import React, {useEffect, useRef, useState} from 'react';
import './Worlds.css';
import WorldScreenshotsModal from "./WorldScreenshotsModal";
import PastWorldsJson from './PastServers.json';

// const PastWorldsJson = [];

const PastServersList = () => {
    const [pastWorlds] = useState(PastWorldsJson);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (worldId, images) => {
        const imagesPath = images.map((img) => {
            return worldId + "/" + img;
        })
        setSelectedImages(imagesPath);
        setSelectedImageIndex(0);
        setModalIsOpen(true);
    }

    return (
        <div className="worlds">
            <h2>Past Worlds</h2>
            <ul>
                {pastWorlds.map(world => (
                    <li key={world.id}>
                        <h3>{world.name}</h3>
                        <p>{world.dateStarted} - {world.dateEnded}</p>
                        <p>Version: {world.version}</p>
                        <img src={`images/minecraft/worlds/${world.coverImage}`} alt={world.name} />
                        <p>File Size: {world.fileSize} <a className="download" href={world.downloadLink}>Download</a></p>
                        <div className="thumbnail-container">
                            {world.photoAlbum.map((image, index) => (
                                <img className="thumbnail" key={index} src={`images/minecraft/worlds/${world.id}/${image}`} alt={`Screenshot ${index}`} onClick={() => openModal(world.id, world.photoAlbum)} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
            <WorldScreenshotsModal
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
                images={selectedImages}
                selectedImage={selectedImageIndex}
                setSelectedImage={setSelectedImageIndex}
            />
        </div>
    );
};

export default PastServersList;