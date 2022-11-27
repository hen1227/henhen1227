import React, {useState, useEffect} from 'react';
import '../../App.css';
import './Highscore.css'

function Highscore() {

    let [scores, setScores] = useState([["Unable ","("],["to ","("],["load ","("],["highscores ","("]]);

    // fetch('http://api.henhen1227.com/platform-climber/highscore')
    fetchScores();

    function fetchScores() {
        if (scores.length <= 4) {
            console.log("fetching highscores");
            fetch('http://api.henhen1227.com/platform-climber/highscore')
                .then((response) => response.json().then((result) => {
                        setScores(result);
                    }
                ));
        }
    }

    function renderScores(){
        if(scores.length !== 0){
            let scoreResult = Object.entries(scores).map((obj) => {
                // console.log(obj[1]);
                return (<p className="platform-score">{`${obj[1][0]} : ${obj[1][1]}`}</p>)
            })
        return scoreResult
        }
    }

    return (
        <>
            <div className='platform-highscore'>
                <h1>Highscores</h1>
                {renderScores()}
            </div>
        </>
    );
}

export default Highscore;
