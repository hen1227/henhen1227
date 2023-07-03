import React, { useEffect, useState } from 'react';
import './CurrentServerStats.css';
import { fetchServerStatus } from './MinecraftServerAPI';

const CurrentServerStats = () => {
    const [serverStats, setServerStats] = useState(null);

    useEffect(() => {
        // fetchServerStatus().then(setServerStats);
    }, []);

    if (!serverStats) { return (
        <div>
            <div className="currentServerStats">
                No active servers at this time
            </div>
        </div>
    )};

    return (
        <div className="currentServerStats">
            <h2>Current Server Status</h2>
            <p>Status: {serverStats.status}</p>
            <p>Version: {serverStats.version}</p>
            <p>Wrapper: {serverStats.wrapper}</p>
            <p>Dates of Operation: {serverStats.operationDates}</p>
            <p>File Size: {serverStats.fileSize}</p>
            {serverStats.modpack && <button>Download Modpack</button>}
        </div>
    );
};

export default CurrentServerStats;