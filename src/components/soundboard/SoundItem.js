import React from 'react';

function SoundItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <iframe width="120" height="100" title={props.sound} src={props.sound} frameBorder="0" scrolling="no"></iframe>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.label}</h5>
          </div>
          </div>
      </li>
      
    </>
  );
}

export default SoundItem;
