import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </p>
      <nav className="footer__navigation footer__navigation_type_text">
        <ul className="footer__links footer__links_type_text">
          <li className="footer__list">
            <Link to="/" className="footer__link">Главная</Link>
          </li>
          <li className="footer__list">
            <a href="https://praktikum.yandex.ru"
               className="footer__link"
               target="_blank"
               rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
        </ul>
      </nav>
      <nav className="footer__navigation footer__navigation_type_icon">
        <ul className="footer__links">
          <li className="footer__list">
            <a href="https://github.com/alexandrprokhorov1988"
               className="footer__link footer__link_type_git"
               target="_blank"
               rel="noreferrer">
            </a>
          </li>
          <li className="footer__list">
            <a href="https://www.codewars.com/users/Alexandr%20Prokhorov"
               className="footer__link footer__link_type_fb"
               target="_blank"
               rel="noreferrer">
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
