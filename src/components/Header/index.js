import NetflixLogo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png'

import './style.css'

export const Header = () => (
    <header className="header">
        <div className="header__logo">
          <img src={NetflixLogo} alt="Site logo"/>
        </div>
        
        <div className="header__user-avatar">
          <img src={Avatar}/>
        </div>
    </header>
)