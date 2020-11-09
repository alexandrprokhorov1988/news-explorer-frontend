import React from 'react';
import './Footer.css';
import git from '../../images/github.svg';
import code from '../../images/codewars-icon.svg';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </p>
      <nav className="footer__navigation">
        <ul className="footer__links">
          <li className="footer__list">
            <a href="/" className="footer__link">Главная</a>
          </li>
          <li className="footer__list">
            <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__list">
            <a href="https://github.com/alexandrprokhorov1988" className="footer__link">
              <img className="footer__social-icon" src={git} alt="Github"/>
            </a>
          </li>
          <li className="footer__list">
            <a href="https://www.codewars.com/users/Alexandr%20Prokhorov" className="footer__link">
              <img className="footer__social-icon" src={code} alt="Codewars"/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
