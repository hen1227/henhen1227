import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
      <>
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Henhen1227
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                  to='/fungo'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Fungo
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                  to='/soundboard'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                KeySoundboard
              </Link>
            </li>
            <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
              <Link
                  to='/dnd-languages'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                D&D Languages <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            {/*<li>*/}
            {/*  <Link*/}
            {/*      to='/sign-up'*/}
            {/*      className='nav-links-mobile'*/}
            {/*      onClick={closeMobileMenu}*/}
            {/*  >*/}
            {/*    Sign Up*/}
            {/*  </Link>*/}
            {/*</li>*/}

          </ul>
        </nav>
      </>
  );
}

export default Navbar;
