import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../../components/Navigation/Navigation';

function SavedNewsHeader({ loggedIn, titles, userData, onSignIn, onSignOut }) {

  return (
    <header className="saved-news-header">
      <Navigation
        loggedIn={loggedIn}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        userData={userData}
        theme={'saved-news'}
      />
      <div className="saved-news-header__container">
        <p className="saved-news-header__text">Сохранённые статьи
        </p>
        <h2 className="saved-news-header__title">
          {/*{`${userData ? userData.name : 'Грета'}, у вас ${titles ? titles.length : '5'} сохранённых статей`}*/}
        </h2>
        <p className="saved-news-header__subtitle">
          {/*{`По ключевым словам: ${titles[0] || 'Природа'}, ${titles[1] || 'Тайга'} и 2-м другим`}*/}
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
