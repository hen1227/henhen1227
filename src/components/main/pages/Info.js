import React from 'react';
import './Info.css';
import GraphBackground from '../../backgrounds/GraphBackground';

function InfoPage() {
    return (
        <div className="info">
            <GraphBackground />
            <div className="content">
                <img src="/images/main/logoTm.svg" alt="Logo" />
                <h2>Henhen1227, LLC</h2>
                <p>Yes, the company is called that.</p>

                <h5>Not much is known about Henhen1227.</h5>
                <p>¯\_(ツ)_/¯ </p>
            </div>
        </div>
    );
}

export default InfoPage;
