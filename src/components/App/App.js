import React from 'react';
import './App.css';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';
import Header from '../../components/Header/Header';
import RegisterPopup from '../../components/RegisterPopup/RegisterPopup';
import LoginPopup from '../../components/LoginPopup/LoginPopup';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
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
      <Header
        loggedIn={loggedIn}
        onSignIn={handleLoginPopupOpen}
        // userData={userData}
        // onSignOut={handleSignOut}
      />
      <main className="main">
        <NewsCardList/>
        <About/>
      </main>
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
