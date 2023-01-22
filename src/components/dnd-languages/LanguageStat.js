import React, {useEffect, useState} from 'react';
import axios from "axios";
import './LanguageStat.css'

function LanguageStat(props) {

        const [count, setCount] = useState(0);
        let language = props.language

    const [needUpdate, setNeedUpdate] = useState(true);


    useEffect(() => {
        if(needUpdate) {
            axios({
                method: 'post',
                mode: "no-cors",
                // withCredentials: true,
                headers: {'Content-Type': 'application/json'},
                url: 'http://api.henhen1227.com/dnd-languages/getCount/',
                data: {
                    "language": props.language,
                }
            })
                .then(function (response) {
                    let numbers = response.data.Numbers;
                    let cnt = 0;
                    for (let i = 0; i < numbers.length; i++) {
                        cnt += numbers[i];
                    }
                    setCount(cnt);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                    return error;
                });
            setNeedUpdate(false);
        }

        const updateInterval = setInterval(() => {
            setNeedUpdate(true);
        }, 60000);
    });



    function handleClick(e) {
        e.preventDefault();
        window.location.assign('/dnd-languages/'+props.language);
    }

    return (
        <>
            <li className='lng-item'>
                <h2>{language}</h2>
                <h4>{count===0? "loading" : count+" Uploads"}</h4>
                <button onClick={handleClick}>View Data</button>
            </li>
        </>
    );
}

export default LanguageStat;
