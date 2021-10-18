import NetflixLogo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png'

import './style.css'
import { useState } from 'react/cjs/react.development';
import { useCallback, useEffect } from 'react';

export const Header = () => {
  const [header, setHeader] = useState(false);

  const handleChangeHeaderBackground = useCallback(() => {
    window.scrollY > 80 ? setHeader(true) : setHeader(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleChangeHeaderBackground);
  }, [handleChangeHeaderBackground]);

  return (
    <header className={`header ${header? 'header--active' : ''}`}>
        <div className="header__logo">
          <img src={NetflixLogo} alt="Site logo"/>
        </div>
        
        <div className="header__user-avatar">
          <img src={Avatar} alt="user avatar"/>
        </div>
    </header>
  )
}