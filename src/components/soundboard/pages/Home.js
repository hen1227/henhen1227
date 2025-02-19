import React from 'react';
import '../../../App.css';
import Sounds from '../Sounds';
import HeroSection from '../HeroSection';

function Home() {
    window.location.href = 'https://keyboard.henhen1227.com';

    return (
    <>
      <HeroSection />
      <Sounds/>
    </>
  );
}

export default Home;
