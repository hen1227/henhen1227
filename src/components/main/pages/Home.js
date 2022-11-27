import React from 'react';
import '../../../App.css';
import './Home.css'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useSpring, animated, config } from "@react-spring/web";

function Home() {
  return (
    <>
      <div className="MainView">
          <h1>Land of Henhen1227</h1>
          <h2>Whats next?</h2>
          <h3>Could be anything</h3>
          <div className="website-features-wrapper">
              <div className="website-features">
                  <h1>Minecraft Server</h1>
                  <br/>
                  <p>Join the minecraft server at the ip: <b>minecraft.henhen1227.com</b></p>
              </div>
              <div className="website-features" style={{borderColor:"lightyellow",borderWidth:5}}>
                  <h1>View all my projects</h1>

              </div>
              <div className="website-features">
                  <h1>Buy me a coffee</h1>
              </div>
          </div>
      </div>
    </>
  );
}

export default Home;
