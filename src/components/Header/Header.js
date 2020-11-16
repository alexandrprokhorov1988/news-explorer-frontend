import React from 'react';
import './Header.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Navigation from '../../components/Navigation/Navigation';

function Header({ loggedIn, userData, onSignIn, onSignOut, isLoginPopupOpen, onNavToggle, isOpenNav, onClose }) {

  return (
    <header className="header">
      <Navigation
        loggedIn={loggedIn}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        userData={userData}
        theme={'main'}
        // isLoginPopupOpen={isLoginPopupOpen}
        //         // onNavToggle={onNavToggle}
        //         // isOpenNav={isOpenNav}
                onClose={onClose}
      />
      <div className="header__container">
        <h1 className="header__title">Что творится в мире?</h1>
        <p className="header__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
        <SearchForm/>
      </div>
    </header>
  );
}

export default Header;
