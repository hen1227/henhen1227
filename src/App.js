import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';

import Navbar from './components/main/navbar/Navbar';
import Footer from './components/main/navbar/Footer';
import './App.css';
import DnDLanguages from './components/dnd-languages/pages/Home'
import DnDLanguage from './components/dnd-languages/pages/Language'
import DnDLanguagesFeatures from './components/dnd-languages/pages/Features'
import Tactico from './components/tactico/pages/Home'
import TacticoPlay from './components/tactico/pages/Play'
import TacticoLearn from './components/tactico/pages/Learn'
import Climber from './components/platform-climber/pages/Home'
import Braille from './components/braille/pages/Home'
import BrailleFeatures from './components/braille/pages/Features'
import Morse from './components/morse/pages/Home'
import MorseFeatures from './components/morse/pages/Features'
import Soundboard from './components/soundboard/pages/Home';
import SoundboardFeatures from './components/soundboard/pages/Features';
import Mushroom from './components/mushroom/pages/Home'
import Home from './components/main/pages/Home'
import Overview from './components/overview/pages/Home'
import AppleOverview from './components/apple/pages/Home'
import Info from './components/main/pages/Info'
import Support from './components/main/pages/Support'
import Api from './components/api/pages/Home'
import HM10 from './components/hm10/pages/Home'
import Privacy from './components/main/pages/privacy'
import TermsOfService from './components/main/pages/terms-of-service.js'
import PageNotFound from './components/main/pages/PageNotFound'

import ReactGA from 'react-ga4'
ReactGA.initialize("G-8Y66FNGN5Q");

function RedirectToSupportPage() {
  let navigate = useNavigate();
  navigate('/support');
  return null;
}

function RedirectToMinecraftPage() {
  // let navigate = useNavigate();
  window.location.href = 'https://mc.henhen1227.com';
  return (
      <div style={{height:"100vh"}}>
        <h1>Minecraft Server Website is under construction!</h1>
      </div>
  );
}

function App() {

  if (window.location.hostname !== "localhost") {
    ReactGA.send("pageview");
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/support' element={<Support />} />
          <Route path='/api' element={<Api />} />
          <Route path='/hm10' element={<HM10 />} />
          <Route path='/minecraft' element={<RedirectToMinecraftPage />} />
          <Route path='/dnd-languages' element={<DnDLanguages />} />
          <Route path='/dnd-languages/features' element={<DnDLanguagesFeatures />} />
          <Route path='/dnd-languages/support' element={<RedirectToSupportPage />} />
          <Route path='/dnd-languages/*' element={<DnDLanguage />} />
          <Route path='/tactico' element={<Tactico />} />
          <Route path='/tactico/play' element={<TacticoPlay />} />
          <Route path='/tactico/learn' element={<TacticoLearn />} />
          <Route path='/climber' element={<Climber />} />
          <Route path='/braille' element={<Braille />} />
          <Route path='/braille/features' element={<BrailleFeatures />} />
          <Route path='/morse' element={<Morse />} />
          <Route path='/morse/features' element={<MorseFeatures />} />
          <Route path='/soundboard' element={<Soundboard />} />
          <Route path='/soundboard/features' element={<SoundboardFeatures />} />
          <Route path='/soundboard/support' element={<RedirectToSupportPage />} />
          <Route path='/fungo' element={<Mushroom />} />
          <Route path='/mushroom' element={<Mushroom />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/apple' element={<AppleOverview />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
