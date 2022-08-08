import React from 'react';
import '../../../App.css';
import '../Home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, config } from "@react-spring/web";

function Home() {
  return (
    <>
      <Parallax pages={1} className="MainParallax">
        <div className='MainView'>
        <ParallaxLayer speed={2} offset={0.2}>
          <h1>Land of Henhen1227</h1>
        </ParallaxLayer>
        <ParallaxLayer speed={2} offset={0.4}>
          <h2>Whats next?</h2>
          <h3>Could be anything</h3>
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={0.9}>
          <p>Coming soon</p>
        </ParallaxLayer>
        </div>
      </Parallax>



        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
}

export default Home;
