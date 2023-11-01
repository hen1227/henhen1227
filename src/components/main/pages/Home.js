import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import './Home.css'

// import MaintenanceBar from "../MaintenanceBar";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { useSpring, animated, config } from "@react-spring/web";

function Home() {
  return (
    <>
      <div className="MainView">
          {/*<MaintenanceBar/>*/}
          <h1>Land of Henhen1227</h1>
          <h2>Whats next?</h2>
          <h3>Could be anything</h3>
          <div style={{marginTop: 180}} className="website-features-wrapper">
              <Link style={{color: "black", textDecoration: "none"}} to="https://mc.henhen1227.com">
                  <div className="website-features">
                      <h1>Minecraft Server</h1>
                      <img src={"/images/overview/Minecraft.jpg"} alt={"Minecraft Server"}/>
                      <p>Join the minecraft server at the ip: <br/> <b>mc.henhen1227.com</b></p>
                  </div>
              </Link>
              <Link style={{color: "black", textDecoration: "none"}} to="/overview">
                  <div className="website-features" style={{borderWidth:5}}>
                      <h1>My Projects</h1>
                      <img style={{backgroundColor:"#202020"}} src={"/images/main/logoTm.png"} alt={"Projects Overview"}/>
                      <p>Learn more about all of my projects at: <br/> <b>henhen1227.com/overview</b></p>
                  </div>
              </Link>
              <Link style={{color: "black", textDecoration: "none"}} to="https://docs.henhen1227.com">
                  <div className="website-features">
                      <h1>Documentation</h1>
                      <img src={"/images/main/logoDocs.png"} alt={"Documentation"}/>
                      <p>Learn the ins and outs of Henhen1227's projects at: <br/> <b>docs.henhen1227.com</b></p>
                  </div>
              </Link>
              {/*<a style={{color: "black", textDecoration: "none"}} href="https://www.buymeacoffee.com/HenryAbrahamsen">*/}
              {/*    <div className="website-features">*/}
              {/*        <h1>Buy me a coffee</h1>*/}
              {/*        <img src={"/images/main/buyMeACoffee.png"} alt={"Buy Me A Coffee"}/>*/}
              {/*        <p>Support me and my projects at: <br/> <b>BuyMeACoffee.com</b></p>*/}
              {/*    </div>*/}
              {/*</a>*/}
          </div>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width:'min-content'}} className="website-features-wrapper">
              <Link style={{color: "black", textDecoration: "none"}} to="https://gifts.henhen1227.com">
                  <div className="website-features">
                      <h1>GPT Gift Idea Generator</h1>
                      <img src={"/images/overview/GiftGenerator.png"} alt={"Gift Generator"}/>
                      <p>Applied Science and Engineering Capstone – Gift Idea Generator: <br/> <b>gifts.henhen1227.com</b></p>
                  </div>
              </Link>
              <Link style={{color: "black", textDecoration: "none"}} to="https://spsnow.henhen1227.com">
                  <div className="website-features">
                      <h1>SPS Now (website)</h1>
                      <img style={{backgroundColor:"#202020"}} src={"/images/overview/SPSNow.png"} alt={"Projects Overview"}/>
                      <p>All in one place for student information at St. Paul's School: <br/> <b>spsnow.henhen1227.com</b></p>
                  </div>
              </Link>

              {/*<Link style={{color: "black", textDecoration: "none"}} to="https://docs.henhen1227.com">*/}
              {/*    <div className="website-features">*/}
              {/*        <h1>Documentation</h1>*/}
              {/*        <img src={"/images/main/logoDocs.png"} alt={"Documentation"}/>*/}
              {/*        <p>Learn the ins and outs of Henhen1227's projects at: <br/> <b>docs.henhen1227.com</b></p>*/}
              {/*    </div>*/}
              {/*</Link>*/}
              {/*<a style={{color: "black", textDecoration: "none"}} href="https://www.buymeacoffee.com/HenryAbrahamsen">*/}
              {/*    <div className="website-features">*/}
              {/*        <h1>Buy me a coffee</h1>*/}
              {/*        <img src={"/images/main/buyMeACoffee.png"} alt={"Buy Me A Coffee"}/>*/}
              {/*        <p>Support me and my projects at: <br/> <b>BuyMeACoffee.com</b></p>*/}
              {/*    </div>*/}
              {/*</a>*/}
          </div>
      </div>
    </>
  );
}

export default Home;
