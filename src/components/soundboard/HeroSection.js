import React, {useState} from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';
import axios from "axios";


function HeroSection() {

    // const [rating, setRating] = useState(-1)

    // axios({
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //         "alg": "ES256",
    //         "kid": "B6QM5L5S9L",
    //         "typ": "JWT"
    //     },
    //     url: 'https://api.appstoreconnect.apple.com/v1/apps/id1636744123/customerReviews'
    //     }
    // )
    //     .then(function (result){
    //         console.log(result)
    //         return result
    //     })


  return (
      <div>
        <div className='hero-container'>
        <h1>KeySoundboard</h1>
        <p>Create those Epic moments</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            localDestination={false}
            destination='https://apps.apple.com/app/apple-store/id1636744123?pt=122454310&ct=Website&mt=8'
          >
            VIEW ON APP STORE
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            destination="/soundboard/features"
          >
            SEE FEATURES
          </Button>
        </div>
            {/*<p><span className="ratingLbl" style={{color: "gold"}}>★ </span><span className="ratingLbl">{rating === -1? "loading" :  rating}</span></p>*/}
      </div> 
      </div>
  );
}

export default HeroSection;
