import React from 'react';
import Navbar from './components/main/navbar/Navbar';
import Footer from './components/main/navbar/Footer';
import './App.css';
import DnDLanguages from './components/dnd-languages/pages/Home'
import DnDLanguage from './components/dnd-languages/pages/Language'
import DnDLanguagesFeatures from './components/dnd-languages/pages/Features'
import Braille from './components/braille/pages/Home'
import BrailleFeatures from './components/braille/pages/Features'
import Morse from './components/morse/pages/Home'
import MorseFeatures from './components/morse/pages/Features'
import Soundboard from './components/soundboard/pages/Home';
import SoundboardFeatures from './components/soundboard/pages/Features';
// import Fungo from './components/fungo/pages/Home'
import Mushroom from './components/mushroom/pages/Home'
import Home from './components/main/pages/Home'
import Overview from './components/main/overview/Home'
import Info from './components/main/pages/Info'
import Support from './components/main/pages/Support'
import Privacy from './components/main/pages/privacy'
import TermsOfService from './components/main/pages/terms-of-service.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from './components/main/pages/PageNotFound'

import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Henhen1227</title>
          <meta name="This is a site with all the projects and products from Henhen1227" content="Learn more about the awesome stuff at Henhen1227" />

          <link rel="apple-touch-icon" sizes="180x180" href="/main/icons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/main/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/main/icons/favicon-16x16.png"/>
          <link rel="manifest" href="/main/icons/site.webmanifest"/>
          <link rel="shortcut icon" href="/main/icons/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="msapplication-config" content="/main/icons/browserconfig.xml"/>
          <meta name="theme-color" content="#202020"/>
        </Helmet>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/info' exact component={Info} />
          <Route path='/privacy' exact component={Privacy} />
          <Route path='/terms-of-service' exact component={TermsOfService} />
          <Route path='/support' exact component={Support} />
          <Route path='/dnd-languages' exact component={DnDLanguages} />
          <Route path='/dnd-languages/features' exact component={DnDLanguagesFeatures} />
          <Route path='/dnd-languages/support' exact>{<Redirect to="/support" />}</Route>
          <Route path='/dnd-languages/*' component={DnDLanguage} />
          <Route path='/braille' exact component={Braille} />
          <Route path='/braille/features' exact component={BrailleFeatures} />
          <Route path='/morse' exact component={Morse} />
          <Route path='/morse/features' exact component={MorseFeatures} />
          <Route path='/soundboard' exact component={Soundboard} />
          <Route path='/soundboard/features' component={SoundboardFeatures} />
          <Route path='/soundboard/support' exact>{<Redirect to="/support" />}</Route>
          <Route path='/fungo' exact component={Mushroom} />
          <Route path='/mushroom' exact component={Mushroom} />
          <Route path='/overview' exact component={Overview} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
