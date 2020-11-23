import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../../components/Navigation/Navigation';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedNewsHeader(
  { loggedIn, titles, onSignIn, onSignOut, isPopupOpen, savedCards }) {

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    function getPopularCategory() {
      console.log(savedCards);

      // for()
      const category = savedCards;
      if(category.length <= 3){

      } else {

      }
      return {};
    }
    getPopularCategory();
  }, [savedCards]);

  return (
    <header className="saved-news-header">
      <Navigation
        loggedIn={loggedIn}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        theme={'saved-news'}
        isPopupOpen={isPopupOpen}
      />
      <div className="saved-news-header__container">
        <p className="saved-news-header__text">Сохранённые статьи</p>
        <h2 className="saved-news-header__title">
          {`${currentUser.name}, у вас ${savedCards.length} сохранённых статей`}
        </h2>
        <p className="saved-news-header__subtitle">
          По ключевым словам: <span className="saved-news-header__span-accent">Природа</span>,
          <span className="saved-news-header__span-accent"> Тайга</span> и
          <span className="saved-news-header__span-accent"> 2-м другим</span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
