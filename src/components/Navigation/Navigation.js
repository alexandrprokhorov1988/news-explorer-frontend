import React from 'react';
import './Navigation.css';

function Navigation({ userData, loggedIn, onSignIn, onSignOut }) {
  const [isOpenNav, setIsOpenNav] = React.useState(false);

  function handleOpen() {
    setIsOpenNav(!isOpenNav);
  }

  return (
    <div className={`navigation ${isOpenNav ? 'navigation_theme_opened' : ''}`}>
      <div className="navigation__container">
        <a className="navigation__logo" href="/">NewsExplorer</a>
        <button onClick={handleOpen}
                className={`navigation__button ${isOpenNav ? 'navigation__button_type_open' : 'navigation__button_type_close'}`}
        />
      </div>
      <nav className={`nav ${isOpenNav ? 'nav_opened' : 'nav_closed'}`}>
        <ul className="nav__links">
          <li className="nav__list">
            <a className="nav__link" href="/">Главная</a>
          </li>
          {loggedIn ?
            <>
              <li className="nav__list">
                <a className="nav__link" href="/saved-news">Сохраненные статьи</a>
              </li>
              <li className="nav__list">
                <button onClick={onSignOut}
                        className="nav__button">{userData ? userData.name : 'Грета'}</button>
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
