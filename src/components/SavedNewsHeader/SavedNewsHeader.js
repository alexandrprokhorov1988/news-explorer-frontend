import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../../components/Navigation/Navigation';
import {connect} from "react-redux";
import mapStateToProps from "../../redux/mapStateToProps";

function SavedNewsHeader(
  { loggedIn, titles, onSignIn, onSignOut, isPopupOpen, savedCards, currentUser }) {

  const [category, setCategory] = React.useState([]);
  const [extension, setExtension] = React.useState('');
  const [numArticles, setNumArticles] = React.useState('');

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
    const getNumbersExtensions = (n, titles) => {
      return titles[
        (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
        ];
    };

    setExtension(getNumbersExtensions(
      category.length - 2,
      ['-ой другой', '-м другим', '-и другим']
    ));

    setNumArticles(getNumbersExtensions(
      savedCards.length,
      ['сохраненная статья', 'сохраненные статьи', 'сохраненных статей']
    ));
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
          {`${currentUser.name}, у вас ${savedCards.length} ${numArticles}`}
        </h2>
        {category.length > 0 &&
        <p className="saved-news-header__subtitle">
          По ключевым словам:
          <span className="saved-news-header__span-accent"> {category[0] || ''}</span>
          {category.length > 1 && ','}
          <span className="saved-news-header__span-accent"> {category[1] || ''}</span>
          {category.length >= 3 && ' и'}
          {category.length === 3 &&
          <span className="saved-news-header__span-accent"> {category[2]}</span>}
          {category.length > 3 &&
          <span className="saved-news-header__span-accent"> {`${category.length - 2}${extension}`}</span>
          }
        </p>
        }
      </div>
    </header>
  );
}

export default connect(mapStateToProps("CurrentUser"))(SavedNewsHeader);

