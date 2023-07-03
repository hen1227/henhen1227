import React, {useState} from 'react';
import '../Loading'
import '../../../App.css';
import './Home.css'
import Loading from "../Loading";
import FailedToLoad from "../FailedToLoad";

function AppleOverview() {

    window.location.href = 'https://apps.apple.com/us/developer/henry-abrahamsen/id1544660671';

    let wrapperKey = 0;


    let [includedProjects, setIncludedProjects] = useState({
            "status": "loading"
        }
    );

    fetch("https://api.henhen1227.com/appstore/apps")
        // fetch("https://localhost:5001/appstore/apps")
        .then(response => {
            response['status'] = "loaded";
            setIncludedProjects(response);
        })
        .catch(error => {
            console.log("Error loading from api.henhen1227.com");
            setIncludedProjects({status: "failed"})
            // Show error message


        });

    function addApps() {
        if (includedProjects['status'] === "loaded") {
            for (let i = 0; i < includedProjects['data'].length; i++) {
                let app = includedProjects['data'][i];
                return (<div key={wrapperKey++} className={"app-wrapper"}>{app.name}</div>);
            }
        } else if (includedProjects['status'] === "loading") {
            return <Loading/>
        } else if (includedProjects['status'] === "failed") {
            return <FailedToLoad/>
        }
    }

    return (
        <>
            <div className="MainView">
                <div className="appleOverviewHeader">
                    <h1>App Store</h1>
                    <h3>Developer: Henry Abrahamsen</h3>
                </div>
                <div className="appleOverview">
                    <br/>
                </div>
                <div className="appleOverviewList">
                    {addApps()}
                </div>
                <p>Coming soon!</p>
            </div>
        </>
    );
}

export default AppleOverview;
