import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {MenuItems} from "./MenuItems";

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
            <div className={"logo-navbar"}/> &thinsp; Henhen1227
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                  to='/mushroom'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Game Engine
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
                D&D Languages &emsp; <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <SubMenuItems isClicked={click} onClick={closeMobileMenu}/>
            <HomeMenu isClicked={click} onClick={closeMobileMenu}/>
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

function SubMenuItems(props){
  if(props.isClicked){
    return(
        <>
          {MenuItems.map((item, index) => {
            return (
                <li className='nav-item'>
                  <Link to={item.path} className={item.cName} onClick={props.onClick}>
                    {item.title}
                  </Link>
                </li>
            );
          })}

        </>
    )
  }else{
    return (
        <>
        </>
    )
  }

}

function HomeMenu(props){
  if(props.isClicked){
    return(
        <>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={props.onClick}>
              Home
            </Link>
          </li>
        </>
    )
  }else{
    return (
        <>
        </>
    )
  }

}

export default Navbar;
