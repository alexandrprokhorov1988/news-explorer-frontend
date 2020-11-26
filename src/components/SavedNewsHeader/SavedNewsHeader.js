import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../../components/Navigation/Navigation';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedNewsHeader(
  { loggedIn, titles, onSignIn, onSignOut, isPopupOpen, savedCards }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [category, setCategory] = React.useState([]);
  const [extension, setExtension] = React.useState('');

  React.useEffect(() => {
    function getPopularCategory() {
      const categoryCountObj = savedCards.reduce((acc, cur) => {
        if (acc[cur.keyword]) {
          acc[cur.keyword] += 1;
        } else {
          acc[cur.keyword] = 1;
        }
        return acc;
      }, {});
      const arrNames = Object.keys(categoryCountObj).sort((a, b) => {
        return categoryCountObj[b] - categoryCountObj[a];
      });
      setCategory(arrNames);
    }

    getPopularCategory();
  }, [savedCards]);

  React.useEffect(() => {
    const getNumbersExtensions = () => {
      const number = category.length - 2;
      const titles = ['-ой другой', '-м другим', '-и другим'];
      const cases = [2, 0, 1, 1, 1, 2];
      return titles[
        (number % 100 > 4 && number % 100 < 20) ?
          2 :
          cases[(number % 10 < 5) ? number % 10 : 5]
        ];
    };
    setExtension(getNumbersExtensions());
  }, [category]);

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
        {category.length > 0 &&
        <p className="saved-news-header__subtitle">
          По ключевым словам:
          <span className="saved-news-header__span-accent"> {category[0] || ''}</span>
          {category.length > 1 && ','}
          <span className="saved-news-header__span-accent"> {category[1] || ''}</span>
          {category.length >= 3 && ' и'}
          {category.length === 3 ?
            <span className="saved-news-header__span-accent"> {category[2]}</span> :
            <span className="saved-news-header__span-accent"> {`${category.length - 2}${extension}`}</span>
          }
        </p>
        }
      </div>
    </header>
  );
}

export default SavedNewsHeader;
