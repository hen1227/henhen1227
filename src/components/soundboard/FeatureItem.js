import React from 'react';
import { Link } from 'react-router-dom';


function FeatureItem(props) {
  return (
    <>
      <li className='features__item'>
        <Link className='features__item__link' to={props.path}>
          <figure className='features__item__pic-wrap' data-category={props.label}>
            <img
              className='features__item__img'
              alt={props.alt}
              src={props.src}
            />
          </figure>
          <div className='features__item__info'>
            <h5 className='features__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default FeatureItem;
