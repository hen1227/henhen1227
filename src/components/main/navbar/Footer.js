import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const openInNewTab = (url) => {
  window.location.assign(url);
};

function Footer() {
  return (
      <div className='footer-container'>
       
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About </h2>
              <Link to='/info'>More Info</Link>
              <Link to='/'><span className="greyedOut">Careers</span></Link>
              <Link to='/terms-of-service' target="_blank">Terms of Service</Link>
              <Link to='/privacy' target='_blank'>Privacy Policy</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact </h2>
              <Link to='#' onClick={
                ()=>
                    openInNewTab(
                        "http://api.henhen1227.com/resume")
              }>Resume</Link>
              <Link to='/support'>Contact</Link>
              <Link to='/support'>Support</Link>
              <Link to={{pathname:"https://buymeacoffee.com/HenryAbrahamsen"}} target="_blank">Donations</Link>
              <Link to='/'></Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='#' ><span className="greyedOut">Instagram</span></Link>
              <Link to='#'><span className="greyedOut">Facebook</span></Link>
              <Link to='#' onClick={
                ()=>
                    openInNewTab(
                        "https://www.youtube.com/@Henhen1227")
              }>Youtube</Link>
              <Link to='#'><span className="greyedOut">Twitter</span></Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                <div className={"logo-footer"}/> &thinsp; Henhen1227
              </Link>
            </div>
            <small className='website-rights'>Henry Abrahamsen © 2022-2023</small>
            <div className='social-icons'>
              <Link
                  className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
                  // onClick={
                  //   ()=>
                  //       openInNewTab(
                  //           "https://www.youtube.com/channel/UCue90VnaIZzbN5FYsqMHsDA/featured")
                  // }
              >
                <span className="greyedOut"><i className='fab fa-facebook-f' /></span>
              </Link>
              <Link
                  className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
                  // onClick={
                  //   ()=>
                  //       openInNewTab(
                  //           "https://www.youtube.com/channel/UCue90VnaIZzbN5FYsqMHsDA/featured")
                  // }
              >
                <span className="greyedOut"><i className='fab fa-instagram' /></span>
              </Link>
              <Link
                className='social-icon-link youtube'
                href='src/components/main/navbar/Footer#'
                target='_blank'
                aria-label='Youtube'
                to={"#"}
                onClick={
                ()=>
                    openInNewTab(
                    "https://www.youtube.com/@Henhen1227")
                }
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                  className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
                  // onClick={
                  //   ()=>
                  //       openInNewTab(
                  //           "https://www.youtube.com/channel/UCue90VnaIZzbN5FYsqMHsDA/featured")
                  // }
              >
                <span className="greyedOut"><i className='fab fa-twitter' /></span>
              </Link>
              <Link
                  className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                  // onClick={
                  //   ()=>
                  //       openInNewTab(
                  //           "https://www.youtube.com/channel/UCue90VnaIZzbN5FYsqMHsDA/featured")
                  // }
              >
                <span className="greyedOut"><i className='fab fa-linkedin' /></span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Footer;
