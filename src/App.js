import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Soundboard from './components/soundboard/pages/Home';
import SoundboardFeatures from './components/soundboard/pages/Features';
import Home from './components/main/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/soundboard' exact component={Soundboard} />
          <Route path='/soundboard/features' component={SoundboardFeatures} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
