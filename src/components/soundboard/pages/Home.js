import React from 'react';
import '../../../App.css';
import Sounds from '../Sounds';
import HeroSection from '../HeroSection';
import Head from './Head'

function Home() {
  return (
    <>
      <Head/>
      <HeroSection />
      <Sounds/>
    </>
  );
}

export default Home;
