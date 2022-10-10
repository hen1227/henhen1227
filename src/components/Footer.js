import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Footer() {
  return (
      <div className='footer-container'>
       
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Careers</Link>
              <Link to='/terms-of-service' target="_blank">Terms of Service</Link>
              <Link to='/privacy' target='_blank'>Privacy Policy</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/support'>Contact</Link>
              <Link to='/support'>Support</Link>
              <Link to={{pathname:"https://buymeacoffee.com/HenryAbrahamsen"}} target="_blank">Destinations</Link>
              <Link to='/'></Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Henhen1227
                <i className='fa-solid fa-brain-circuit'/>
              </Link>
            </div>
            <small className='website-rights'>Henry Abrahamsen © 2022</small>
            <div className='social-icons'>
              <Link
                  className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                  className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                  className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                  className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                  className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Footer;
