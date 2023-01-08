import React, {useState} from 'react';
import '../../../App.css';
import './Home.css'

function AppleOverview() {

    let wrapperKey = 0;

    let [includedProjects, setIncludedProjects] = useState({
            "data" : ""
        }
    );

    // fetch("http://api.henhen1227.com/appstore/apps")
    fetch("http://localhost:5001/appstore/apps")
        .then(response => {
            setIncludedProjects(response);
        })
        .catch(error => {
            console.log("Error loading from Apple");

            // Show error message
        });

    function addApps() {
        if(includedProjects['data'] != null) {
            includedProjects['data'].forEach((app) => {
                return (<div key={wrapperKey++} className={"app-wrapper"}>app.name</div>);
            })
        }
    }

    return (
        <>
            <p>Jewllo</p>
            <div className="appleOverviewHeader">
                <h1>App Store</h1>
                <p>Developer: Henry Abrahamsen</p>
            </div>
            <div className="appleOverview">
                <div className="appleOverviewList">
                    {addApps()}
                </div>
                <br/>
            </div>
        </>
    );
}

export default AppleOverview;
