import './Home.css'
import {useEffect, useState} from "react";
import SimulationThumbnail from "../SimulationThumbnail";

const SimulationsPage = () => {
    const videos = [
        {
            id: 1,
            title: "Double Pendulum",
            description: "500 double pendulums are simulated, each simulated only a fraction of a pixel apart.",
            thumbnailSrc: "/images/simulations/thumbnail-images/DoublePendulum.gif",
            gifSrc: "/images/simulations/thumbnail-gifs/DoublePendulum.gif",
            link: "https://youtu.be/UFDXTLN88N0"
        },
        {
            id: 2,
            title: "Fourier Series",
            description: "A visualization and sound of a Fourier Series.",
            thumbnailSrc: "/images/simulations/thumbnail-images/FourierSeries.gif",
            gifSrc: "/images/simulations/thumbnail-gifs/FourierSeries.gif",
            link: "https://youtu.be/HfQ4LNByCLM"
        },
        {
            id: 3,
            title: "Projectiles Inside a Circle",
            description: "A rhythmic path of projects inside a circle.",
            thumbnailSrc: "/images/simulations/thumbnail-images/ProjectilesInsideCircle.gif",
            gifSrc: "/images/simulations/thumbnail-gifs/ProjectilesInsideCircle.gif",
            link: "https://youtu.be/ib-RXkd_y_M"
        },
        {
            id: 4,
            title: "Ball Bouncing",
            description: "The surprising chaos of 500 balls bouncing.",
            thumbnailSrc: "/images/simulations/thumbnail-images/BallBounce.gif",
            gifSrc: "/images/simulations/thumbnail-gifs/BallBounce.gif",
            link: "https://youtu.be/psYjAHOevVs"
        },
        {
            id: 5,
            title: "Double Pendulum Tunnel",
            description: "A tunnel defined by a double pendulum simulation.",
            thumbnailSrc: "/images/simulations/thumbnail-images/DoublePendulumTunnel.gif",
            gifSrc: "/images/simulations/thumbnail-gifs/DoublePendulumTunnel.gif",
            link: "https://youtu.be/oB0xbhlku2Y"
        },
        {
            id: 6,
            title: "Gravitational Bodies",
            description: "500 gravitational bodies are simulated, each simulated only a fraction of a pixel apart.",
            thumbnailSrc: "/images/simulations/thumbnail-images/GravitationalBodies.gif",
            gifSrc: "/images/simulations/thumbnail-gifs/GravitationalBodies.gif",
            link: "https://youtu.be/7PDGxJsnfxI"
        },
    ]

    return (
        <div className="simulations-main-view">
            <h1>p5JS Simulations</h1>
            <div className="simulation-grid">
                {videos.map(video => (
                    <SimulationThumbnail
                        key={video.id}
                        title={video.title}
                        description={video.description}
                        thumbnailSrc={video.thumbnailSrc}
                        gifSrc={video.gifSrc}
                        link={video.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default SimulationsPage
