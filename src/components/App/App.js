import React from 'react';
import './App.css';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import NewsCardList from '../../components/NewsCardList/NewsCardList';
import Header from '../../components/Header/Header';
import RegisterPopup from '../../components/RegisterPopup/RegisterPopup';
import LoginPopup from '../../components/LoginPopup/LoginPopup';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(true);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [popupState, setPopupState] = React.useState(true);

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handlePopupState() {
    setPopupState(!popupState);
    closeAllPopups();
    popupState ? handleRegisterPopupOpen() : handleLoginPopupOpen();
  }

  function handleRegisterPopupOpen() {
    setRegisterPopupOpen(true);
    setPopupState(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleLoginPopupOpen() {
    setLoginPopupOpen(true);
    setPopupState(false);
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
      <Header/>
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
        popupState={popupState}
      />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        // onLogin={handleLogin}
        isLoading={isLoading}
        popupState={popupState}
        onPopupState={handlePopupState}
      />
    </div>
  );
}

export default App;
