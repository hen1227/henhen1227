import React, {useState} from 'react';
import '../../../App.css';
import axios from "axios";
import './Language.css'

function Language() {

    const [count, setCount] = useState([[]]);
    const [total, setTotal] = useState(0);

    const lang = window.location.href.split("/").reverse()[0];
    axios({
        method: 'post',
        mode: "no-cors",
        // withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
        url: 'http://dnd.henhen1227.com/dnd-languages/getCount',
        data: {
            "language": lang,
        }
    })
        .then(function (response) {
            let numbers = response.data.Numbers;
            let cnt = [];
            let ttl = 0;
            for(let i = 0; i < numbers.length; i++){
                cnt.push(numbers[i]);
                ttl+=numbers[i];
            }
            setTotal(ttl);
            setCount(cnt);
            return response;
        })
        .catch(function (error) {
            return error;
        });


    function handleClick(e) {
        e.preventDefault();
        window.location.assign('http://henhen1227.com/dnd-languages/'+lang);
    }

    return (
        <>
            <div className='body-container'>
                <h1>{lang}</h1>
                <h2>{total===0? "loading" : total+" Uploads"}</h2>

                <div className="lng-img-container">
                    <LanguageImage lang={lang} letter="A" count={count[0]}/>
                    <LanguageImage lang={lang} letter="B" count={count[1]}/>
                    <LanguageImage lang={lang} letter="C" count={count[2]}/>
                    <LanguageImage lang={lang} letter="D" count={count[3]}/>
                    <LanguageImage lang={lang} letter="E" count={count[4]}/>
                    <LanguageImage lang={lang} letter="F" count={count[5]}/>
                    <LanguageImage lang={lang} letter="G" count={count[6]}/>
                    <LanguageImage lang={lang} letter="H" count={count[7]}/>
                    <LanguageImage lang={lang} letter="I" count={count[8]}/>
                    <LanguageImage lang={lang} letter="J" count={count[9]}/>
                    <LanguageImage lang={lang} letter="K" count={count[10]}/>
                    <LanguageImage lang={lang} letter="L" count={count[11]}/>
                    <LanguageImage lang={lang} letter="M" count={count[12]}/>
                    <LanguageImage lang={lang} letter="N" count={count[13]}/>
                    <LanguageImage lang={lang} letter="O" count={count[14]}/>
                    <LanguageImage lang={lang} letter="P" count={count[15]}/>
                    <LanguageImage lang={lang} letter="Q" count={count[16]}/>
                    <LanguageImage lang={lang} letter="R" count={count[17]}/>
                    <LanguageImage lang={lang} letter="S" count={count[18]}/>
                    <LanguageImage lang={lang} letter="T" count={count[19]}/>
                    <LanguageImage lang={lang} letter="U" count={count[20]}/>
                    <LanguageImage lang={lang} letter="V" count={count[21]}/>
                    <LanguageImage lang={lang} letter="W" count={count[22]}/>
                    <LanguageImage lang={lang} letter="X" count={count[23]}/>
                    <LanguageImage lang={lang} letter="Y" count={count[24]}/>
                    <LanguageImage lang={lang} letter="Z" count={count[25]}/>
                </div>
            </div>
        </>
    );
}

function LanguageImage(props) {


    return (
        <>
            <div className="lng-img-div">
                <h4>{props.letter} ({props.count})</h4>
                <img className="lng-img" src={"http://dnd.henhen1227.com/dnd-languages/database/"+props.lang+"-Letters/"+props.letter+".png"}/>
            </div>
        </>
    );
}

export default Language;
