import React from 'react';
import './Navigation.css';
import logoWhite from '../../images/logout-white.svg';
import logoBlack from '../../images/logout-black.svg';
import {Link, useLocation} from 'react-router-dom';

function Navigation({ userData, loggedIn, onSignIn, onSignOut, theme, isLoginPopupOpen }) {
  const [isOpenNav, setIsOpenNav] = React.useState(false);
  const location = useLocation();

  // React.useEffect(() => {
  //   if (isLoginPopupOpen) {
  //     setIsOpenNav(!isOpenNav);
  //   }
  // }, [isLoginPopupOpen]);

  function handleOpen() {
    setIsOpenNav(!isOpenNav);
  }

  return (
    <div className={`navigation navigation_theme_${theme} ${isOpenNav ? `navigation_type_open-${theme}` : ''}`}>
      <div className="navigation__container">
        <Link className={`navigation__logo navigation__logo_theme_${theme}`} to="/">NewsExplorer</Link>
        <button onClick={handleOpen}
                className={`navigation__button navigation__button_type_${isOpenNav ? 'open' : 'close'}-${theme}`}/>
      </div>
      <nav className={`nav nav_theme_${theme} ${isOpenNav ? 'nav_opened' : ''}`}>
        <ul className="nav__links">
          <li className="nav__list">
            <Link className={`nav__link nav__link_theme_${theme}
            ${location.pathname === "/" ? `nav__link_active-${theme}` : ''}`
            } to="/">Главная</Link>
          </li>
          {loggedIn ?
            <>
              <li className="nav__list">
                <Link className={`nav__link nav__link_theme_${theme}
                 ${location.pathname === "/saved-news" ? `nav__link_active-${theme}` : ''}`
                } to="/saved-news">Сохраненные статьи</Link>
              </li>
              <li className="nav__list">
                <button onClick={onSignOut} className={`nav__button nav__button_theme_${theme}`}>
                  {userData ? userData.name : 'Грета'}
                  <img className="nav__img"
                       src={theme === 'main' ? logoWhite : logoBlack}
                       alt="Выход"/>
                </button>
              </li>
            </> :
            <li className="nav__list">
              <button onClick={onSignIn} className={`nav__button nav__button_theme_${theme}`}>
                Авторизоваться
              </button>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
