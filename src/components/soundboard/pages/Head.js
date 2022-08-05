import React from 'react';
import '../../../App.css';
import {Helmet} from "react-helmet";


function Home() {
  return (
    <>
    <Helmet>
    <title>KeySoundboard</title>
    <meta name="description" content="Set keybinds to play custom sounds!" />
    <link rel="apple-touch-icon" sizes="180x180" href="/soundboard/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/soundboard/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/soundboard/favicon-16x16.png"/>
    <link rel="manifest" href="/soundboard/site.webmanifest"/>
    <link rel="shortcut icon" href="/soundboard/favicon.ico"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="msapplication-config" content="/soundboard/browserconfig.xml"/>
    <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    </>
  );
}

export default Home;
