import NetflixLogo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png'

import './style.css'
import { useState } from 'react/cjs/react.development';

export const Header = () => {
  const [header, setHeader] = useState(false);

  window.addEventListener('scroll', handleChangeHeaderBackground);

  function handleChangeHeaderBackground() {
    if (window.scrollY >= 80) return setHeader(true);
    return setHeader(false);
  }

  return (
    <header className={`header ${header? 'header--active' : ''}`}>
        <div className="header__logo">
          <img src={NetflixLogo} alt="Site logo"/>
        </div>
        
        <div className="header__user-avatar">
          <img src={Avatar}/>
        </div>
    </header>
  )
}