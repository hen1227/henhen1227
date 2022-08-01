import React from 'react';
import { Link } from 'react-router-dom';

function SoundItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <iframe width="120" height="100" src={props.sound} frameborder="0" scrolling="no"></iframe>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.label}</h5>
          </div>
          </Link>
      </li>
      
    </>
  );
}

export default SoundItem;
