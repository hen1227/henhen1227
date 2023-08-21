import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           localDestination=true,
                           destination="/"
                       }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if(localDestination){
        return (
            <NavLink to={destination} className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </NavLink>
        );
    }else{
        return (
            <a href={destination} target="_blank" rel="noopener noreferrer" className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </a>
        );
    }
};
