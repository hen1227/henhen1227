import React, {useState} from "react";
import Modal from "react-modal";

const WorldScreenshotsModal = ({isOpen, setIsOpen, images, selectedImage, setSelectedImage}) => {
    const nextImage = () => {
        setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevImage = () => {
        setSelectedImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    // if(images === undefined) {
    //     return null;
    // }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Screenshots Modal"
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)'
                },
                content: {
                    backgroundColor: 'rgba(255, 255, 255, 0.0)'
                }
            }}
        >
            <button onClick={prevImage}>Previous</button>
            <img src={`images/minecraft/worlds/${images[selectedImage]}`}
                 alt={`Screenshot ${selectedImage}`}/>
            <button onClick={nextImage}>Next</button>
        </Modal>
    );
}

export default WorldScreenshotsModal;