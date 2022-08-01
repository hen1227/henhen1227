import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import DnDLanguages from './components/dnd-languages/Home'
import Soundboard from './components/soundboard/pages/Home';
import SoundboardFeatures from './components/soundboard/pages/Features';
import Home from './components/main/pages/Home'
import Support from './components/main/pages/Support'
import Privacy from './components/main/pages/privacy'
import TermsOfService from './components/main/pages/terms-of-service.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/privacy' exact component={Privacy} />
          <Route path='/terms-of-service' exact component={TermsOfService} />
          <Route path='/support' exact component={Support} />
          <Route path='/dnd-languages' exact component={DnDLanguages} />
          <Route path='/soundboard' exact component={Soundboard} />
          <Route path='/soundboard/features' component={SoundboardFeatures} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;