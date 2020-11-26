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
import {CARD_SEARCH_ERR, CONNECTION_REFUSED, SERVER_ERR} from "../../utils/constants";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ErrorMessagePopup from '../../components/ErrorMessagePopup/ErrorMessagePopup';

function App() {
  const history = useHistory();
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = React.useState(null);
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isFound, setIsFound] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [searchErr, setSearchErr] = React.useState('');

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
          setLoggedIn(true);
          setLoginErrorMessage(null);
          sessionStorage.setItem('news-app', '1'); //todo
        }
      })
      .catch(err => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          setErrorMessage(CONNECTION_REFUSED);
        } else {
          err.then((msg) => {
            // setErrorMessage(msg.message || SERVER_ERR);
            console.log(msg.message || SERVER_ERR);
          });
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
          setRegisterErrorMessage(CONNECTION_REFUSED);
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
          setLoginErrorMessage(CONNECTION_REFUSED);
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
      .then((res) => {
        setErrorMessage(res.message);
        setLoggedIn(false);
        sessionStorage.clear();
        history.push('/');
      })
      .catch(() => {
        setErrorMessage(SERVER_ERR);
      })
  }

  function handleSearch(value) {
    setIsLoading(true);
    setIsFound(true);
    return newsApi.getSearchCardsResults(value)
      .then((data) => {
        const res = data.articles;
        if (res.length > 0) {
          const newCards = res.map((elem, index) => {
            const timestamp = Date.parse(elem.publishedAt);
            const date = new Date(timestamp);
            const dayAndMonth = date.toLocaleString('default', { day: 'numeric', month: 'long' });
            const year = date.getFullYear();
            const newDate = `${dayAndMonth}, ${year}`;
            return {
              dataId: index,
              keyword: value,
              title: elem.title,
              text: elem.content,
              date: newDate,
              source: elem.source.name,
              link: elem.url,
              image: elem.urlToImage,
              description: elem.description
            };
          });
          setCards(newCards);
          setCount(0);
          localStorage.setItem('news-cards', JSON.stringify(newCards));
        } else {
          setCards([]);
        }
      })
      .catch(() => {
        setSearchErr(CARD_SEARCH_ERR);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleCardAdd({dataId, keyword, title, text, date, source, link, image}) {
    const formatterdKeyword = keyword[0].toUpperCase() + keyword.slice(1).toLowerCase();

    return mainApi.setNewCard(formatterdKeyword, title, text, date, source, link, image)
      .then((newCard) => {
        const obj = {
          ...newCard,
          isFaved: true,
          dataId: dataId,
        };
        const newCards = cards.map((c) => c.dataId === dataId ? obj : c);
        setCards(newCards);
        localStorage.setItem('news-cards', JSON.stringify(newCards));
      })
      .catch((err) => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          setErrorMessage(CONNECTION_REFUSED);
        } else {
          err.then((msg) => {
            setErrorMessage(msg.message || SERVER_ERR);
          });
        }
      })
  }

  function handleCardDelete(id, dataId, type) {
    return mainApi.deleteCard(id)
      .then((res) => {
        setErrorMessage(res.message);
        let newCards;
        if (type === 'news') {
          newCards = cards.map((c) => c.dataId === dataId ? { ...c, isFaved: false } : c);
        } else if (type === 'saved') {
          const newSavedCards = savedCards.filter((c) => c._id !== id);
          newCards = cards.map((c) => c._id === id ? { ...c, isFaved: false } : c);
          setSavedCards(newSavedCards);
        }
        setCards(newCards);
        localStorage.setItem('news-cards', JSON.stringify(newCards));
      })
      .catch((err) => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          setErrorMessage(CONNECTION_REFUSED);
        } else {
          err.then((msg) => {
            setErrorMessage(msg.message || SERVER_ERR);
          });
        }
      })
  }

  function handleShowMore() {
    if (cards.length >= 0) {
      setCount(count + 3);
    }
  }

  function handleSetErrMessage(msg = '') {
    setErrorMessage(msg);
  }

  function getSavedCards() {
    setIsLoading(true);
    return mainApi.getSavedCards()
      .then((res) => {
        setSavedCards(res.reverse());
      })
      .catch((err) => {
        if (err.toString() === 'TypeError: Failed to fetch') {
          setLoginErrorMessage(CONNECTION_REFUSED);
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
                onCardAdd={handleCardAdd}
                onCardDelete={handleCardDelete}
                count={count}
                onShowMore={handleShowMore}
                onSignIn={handleLoginPopupOpen}
                searchErr={searchErr}
              />
            </Route>
            <ProtectedRoute
              loggedIn={loggedIn}
              path="/saved-news"
              onRedirect={handleLoginPopupOpen}
              onRedirectMessage={handleSetErrMessage}
            >
              <SavedNewsHeader
                loggedIn={loggedIn}
                onSignIn={handleLoginPopupOpen}
                isPopupOpen={isPopupOpen}
                onSignOut={handleSignOut}
                cards={cards}
                savedCards={savedCards}
              />
              <SavedNews
                loggedIn={loggedIn}
                isLoading={isLoading}
                onCardDelete={handleCardDelete}
                onGetCards={getSavedCards}
                savedCards={savedCards}
              />
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
          {errorMessage &&
          <ErrorMessagePopup
            errMessage={errorMessage}
            onSetErrorMessage={handleSetErrMessage}
          />
          }
        </main>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
