import React from 'react';
import './Navigation.css';

function Navigation() {

  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__list">
          <a className="navigation__link" href="/">Главная</a>
        </li>
        <li className="navigation__list">
          <a className="navigation__link" href="/saved-news">Сохраненные статьи</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
