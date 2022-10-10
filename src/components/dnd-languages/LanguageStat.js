import React, {useState} from 'react';
import axios from "axios";
import './LanguageStat.css'

function LanguageStat(props) {

        const [count, setCount] = useState(0);
        let language = props.language

        axios({
            method: 'post',
            mode: "no-cors",
            // withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
            url: 'http://dnd.henhen1227.com/dnd-languages/getCount',
            data: {
                "language": props.language,
            }
        })
        .then(function (response) {
            let numbers = response.data.Numbers;
            let cnt = 0;
            for(let i = 0; i < numbers.length; i++){
                cnt += numbers[i];
            }
            setCount(cnt);
            return response;
        })
        .catch(function (error) {
            return error;
        });


    function handleClick(e) {
        e.preventDefault();
        window.location.assign('http://henhen1227.com/dnd-languages/'+props.language);
    }

    return (
        <>
            <li className='lng-item'>
                <h2>{language}</h2>
                <h4>{count} Uploads</h4>
                <button onClick={handleClick}>View Data</button>
            </li>
        </>
    );
}

export default LanguageStat;
