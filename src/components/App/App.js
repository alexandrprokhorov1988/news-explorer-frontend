import React from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Main from '../../components/Main/Main';
import SavedNews from '../../components/SavedNews/SavedNews';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SavedNewsHeader from '../../components/SavedNewsHeader/SavedNewsHeader';
import RegisterPopup from '../../components/RegisterPopup/RegisterPopup';
import LoginPopup from '../../components/LoginPopup/LoginPopup';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  React.useEffect(() => {
    if (isLoginPopupOpen || isConfirmPopupOpen || isRegisterPopupOpen) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }, [isLoginPopupOpen, isConfirmPopupOpen, isRegisterPopupOpen]);

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleConfirmPopupOpen() {
    closeAllPopups();
    setConfirmPopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleRegisterPopupOpen() {
    closeAllPopups();
    setRegisterPopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleLoginPopupOpen() {
    closeAllPopups();
    setLoginPopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function closeAllPopups() {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setConfirmPopupOpen(false);
    document.removeEventListener('keydown', handleEscClose);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header
            loggedIn={loggedIn}
            onSignIn={handleLoginPopupOpen}
            // userData={userData}
            // onSignOut={handleSignOut}
            isPopupOpen={isPopupOpen}
          />
          <Main
            loggedIn={loggedIn}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader
            loggedIn={loggedIn}
            onSignIn={handleLoginPopupOpen}
            isPopupOpen={isPopupOpen}
            // onSignOut={handleSignOut}
          />
          <SavedNews/>
        </Route>
      </Switch>
      <Footer/>
      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        // onRegister={handleRegister}
        isLoading={isLoading}
        onButtonLoginClick={handleLoginPopupOpen}
        isRegisterPopupOpen={isRegisterPopupOpen}
      />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        // onLogin={handleLogin}
        isLoading={isLoading}
        onButtonRegisterClick={handleRegisterPopupOpen}
        isRegisterPopupOpen={isRegisterPopupOpen}
      />
      <ConfirmPopup
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        onButtonClick={handleLoginPopupOpen}
      />
    </div>
  );
}

export default App;
