import React, {useEffect, useRef, useState} from "react";
import './MaintenanceBar.css'

function MaintenanceBar(){

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
        <p style={{paddingTop:isSmall?"0px":"15px"}} ref={bar} className={"MaintenanceBar" + (isSmall?" Small":"")}>Currently down for maintenance!</p>
    )
}

export default MaintenanceBar;