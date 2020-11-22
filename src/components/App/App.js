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
import mainApi from "../../utils/MainApi";
import newsApi from "../../utils/NewsApi";
import {SERVER_ERR} from "../../utils/constants";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = React.useState(null);
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isFound, setIsFound] = React.useState(false);
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    if (isLoginPopupOpen || isConfirmPopupOpen || isRegisterPopupOpen) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }, [isLoginPopupOpen, isConfirmPopupOpen, isRegisterPopupOpen]);

  React.useEffect(() => {
    tokenCheck();
    const cards = JSON.parse(localStorage.getItem('news-cards'));
    if (cards) {
      setIsFound(true);
      setCards(cards);
    }
  }, []);

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

  function tokenCheck() {
    mainApi.getUserInfo()
      .then((res) => {
        if (res) {
          setCurrentUser({
            id: res._id,
            name: res.name,
          });
          setLoginErrorMessage(null);
          setLoggedIn(true);
        }
      })
      .catch(err => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          console.log('Токен не передан');
        } else {
          console.log(err);
        }
      });
  }

  function handleRegister({ email, password, name }) {
    setIsLoading(true);
    return mainApi.register(email, password, name)
      .then(() => {
        handleConfirmPopupOpen();
        setRegisterErrorMessage(null);
      })
      .catch((err) => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          setRegisterErrorMessage(SERVER_ERR);
        } else {
          err.then((msg) => {
            setRegisterErrorMessage(msg.message || SERVER_ERR);
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    return mainApi.authorize(email, password)
      .then(() => {
        setLoginErrorMessage(null);
        tokenCheck();
        closeAllPopups();
      })
      .catch((err) => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          setLoginErrorMessage(SERVER_ERR);
        } else {
          err.then((msg) => {
            setLoginErrorMessage(msg.message || SERVER_ERR);
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleSignOut() {
    return mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function handleSearch(value) {
    setIsLoading(true);
    setIsFound(true);
    setCategory(value);
    return newsApi.getSearchCardsResults(value)
      .then((res) => {
        const newCards = res.map((elem) => {
          let timestamp = Date.parse(elem.publishedAt);
          let date = new Date(timestamp);
          let dayAndMonth = date.toLocaleString('default', { day: 'numeric', month: 'long'});
          let year = date.getFullYear();
          let newDate = `${dayAndMonth}, ${year}`;
          return { ...elem, date: newDate };
        });
        setCards(newCards);
        localStorage.setItem('news-cards', JSON.stringify(newCards));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  console.log(cards);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <main className="content">
          <Switch>
            <Route exact path="/">
              <Header
                loggedIn={loggedIn}
                onSignIn={handleLoginPopupOpen}
                onSignOut={handleSignOut}
                isPopupOpen={isPopupOpen}
                onSearch={handleSearch}
              />
              <Main
                loggedIn={loggedIn}
                isLoading={isLoading}
                cards={cards}
                isFound={isFound}
                categry={category}
              />
            </Route>

            <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
              <SavedNewsHeader
                loggedIn={loggedIn}
                onSignIn={handleLoginPopupOpen}
                isPopupOpen={isPopupOpen}
                onSignOut={handleSignOut}
              />
              <SavedNews/>
            </ProtectedRoute>

            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
          <Footer/>
          <RegisterPopup
            isOpen={isRegisterPopupOpen}
            onClose={closeAllPopups}
            onRegister={handleRegister}
            isLoading={isLoading}
            registerErrorMessage={registerErrorMessage}
            onButtonLoginClick={handleLoginPopupOpen}
          />
          <LoginPopup
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onLogin={handleLogin}
            isLoading={isLoading}
            loginErrorMessage={loginErrorMessage}
            onButtonRegisterClick={handleRegisterPopupOpen}
          />
          <ConfirmPopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onButtonClick={handleLoginPopupOpen}
          />
        </main>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
