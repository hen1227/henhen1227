import React, {useEffect, useRef, useState} from "react";
import './ConnectionBar.css'

function ConnectionBar(){

    let bar = useRef()
    let [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const handleScroll = event => {
            if(window.scrollY > 10){
                setIsSmall(true);
            }else{
                setIsSmall(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    return (
        <p ref={bar} className={"ConnectionBar" + (isSmall?" Small":"")}>Unable to connect to api.henhen1227.com :(</p>
    )
}

export default ConnectionBar;