import React from 'react';
import './Navigation.css';
import logoWhite from '../../images/logout-white.svg';
import logoBlack from '../../images/logout-black.svg';
import {useLocation} from 'react-router-dom';

function Navigation({ userData, loggedIn, onSignIn, onSignOut }) {
  const [isOpenNav, setIsOpenNav] = React.useState(false);
  const location = useLocation();


  function handleOpen() {
    setIsOpenNav(!isOpenNav);
  }

  return (
    <div className={`navigation
    ${location.pathname === "/" ? "navigation_theme_main" : ''}
    ${location.pathname === "/saved-news" ? "navigation_theme_saved-news" : ''}`
    }>
      <div className="navigation__container">
        <a
          className={`navigation__logo ${location.pathname === "/saved-news" ? "navigation__logo_theme_saved-news" : ''}`}
          href="/">NewsExplorer</a>
        <button onClick={handleOpen}
                className={`navigation__button ${isOpenNav ? 'navigation__button_type_open' : 'navigation__button_type_close'}`}
        />
      </div>
      <nav className={`nav ${isOpenNav ? 'nav_opened' : ''}
      ${location.pathname === "/saved-news" ? "nav_theme_saved-news" : ''}`
      }>
        <ul className="nav__links">
          <li className="nav__list">
            <a className={`nav__link
            ${location.pathname === "/" ? "nav__link_active-main" : ''}
            ${location.pathname === "/saved-news" ? "nav__link_theme_saved-news" : ''}`
            } href="/">Главная</a>
          </li>
          {loggedIn ?
            <>
              <li className="nav__list">
                <a className={`nav__link ${location.pathname === "/saved-news" ? "nav__link_active-saved-news" : ''}
                  ${location.pathname === "/saved-news" ? "nav__link_theme_saved-news" : ''}`
                } href="/saved-news">Сохраненные статьи</a>
              </li>
              <li className="nav__list">
                <button onClick={onSignOut}
                        className={`nav__button ${loggedIn ? 'nav__button_type_logged-in' : ''}
                        ${location.pathname === "/saved-news" ? "nav__button_theme_saved-news" : ''}`
                        }>
                  {userData ? userData.name : 'Грета'}
                  <img className="nav__img"
                       src={location.pathname === "/saved-news" ? logoBlack : logoWhite}
                       alt="Выход"/>
                </button>
              </li>
            </> :
            <li className="nav__list">
              <button onClick={onSignIn} className="nav__button">Авторизоваться</button>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
