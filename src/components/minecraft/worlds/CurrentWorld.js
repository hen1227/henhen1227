import React, {useEffect, useRef, useState} from 'react';
import './Worlds.css';
import WorldScreenshotsModal from "./WorldScreenshotsModal";
import CurrentWorlds from './CurrentWorld.json';

const CurrentWorld = () => {
    const [worlds] = useState(CurrentWorlds);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (worldId, images) => {
        const imagesPath = images.map((img) => {
            return worldId + "/" + img;
        })
        console.log(imagesPath)
        setSelectedImages(imagesPath);
        setSelectedImageIndex(0);
        setModalIsOpen(true);
    }

    return (
        <div className="worlds">
            <ul>
                {worlds.map(world => (
                    <li key={world.id}>
                        <h3>{world.name}</h3>
                        <p>Currently Live</p>
                        <p>Version: {world.version}</p>
                        <img src={`images/minecraft/worlds/${world.coverImage}`} alt={world.name} />
                        <p>Whitelist only</p>
                        <div className="thumbnail-container">
                            {world.photoAlbum.map((image, index) => (
                                <img className="thumbnail" key={index} src={`images/minecraft/worlds/${world.id}/${image}`} alt={`Screenshot ${index}`} onClick={() => openModal(world.id, world.photoAlbum)} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
            { selectedImages.length > 0 &&
            <WorldScreenshotsModal
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
                images={selectedImages}
                selectedImage={selectedImageIndex}
                setSelectedImage={setSelectedImageIndex}
            />
            }
        </div>
    );
};

export default CurrentWorld;