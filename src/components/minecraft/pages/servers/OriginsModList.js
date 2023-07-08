import React, { useState, useEffect } from 'react';
import '../../../../App.css';
import './OriginsServer.css';
import OriginsModListFile from "./OriginsModList.txt";


const OriginsModList = () => {
    const [sortAZ, setSortAZ] = useState(true);
    const [search, setSearch] = useState('');
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch(OriginsModListFile)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const listItems = doc.querySelectorAll('li');

                const linkObjects = Array.from(listItems).map(li => {
                    const aElement = li.querySelector('a');
                    return {
                        url: aElement.getAttribute('href'),
                        name: aElement.textContent
                    };
                });

                setLinks(linkObjects);
            })
            .catch(err => {
                console.error('Error: ', err);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSortChange = () => {
        setSortAZ(!sortAZ);
    }

    const getFilteredMods = () => {
        return links.filter((mod) => mod.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => sortAZ ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }



    return (
        <div className="mods-list">
            <a href="https://api.henhen1227.com/downloads/minecraft/originsModpack" className="download">Download Mod Pack v2</a>
            <br/>
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Search Mods..." />
            <button onClick={handleSortChange}>{sortAZ ? "Sort A-Z" : "Sort Z-A"}</button>
            <ul>
                {getFilteredMods().map((mod, index) => (
                    <li key={index}><a href={mod.url}>{mod.name}</a></li>
                ))}
            </ul>
            <p>{links.length} Mods Total</p>
        </div>
    );
};

export default OriginsModList;