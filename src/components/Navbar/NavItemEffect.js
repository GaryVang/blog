import React, { useState, useEffect } from 'react';

import './NavItemEffect.css';

const NavItemEffect = ({}) => {

    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        if(isClicked){
          let effectTimer = setTimeout(() => {
            setIsClicked(false);
          }, 800);
          return () => {
            clearTimeout(effectTimer);
          }
        }
      }, [isClicked]);

      const handleClick = (e) => {
        setIsClicked(true);
      }

    return (
        <span className={isClicked ? 'nav-item-effect-on' : "nav-item-effect-off" } onClick={(e)=>handleClick(e)} />
    )
};

export default NavItemEffect;