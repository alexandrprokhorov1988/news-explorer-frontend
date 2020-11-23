import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../../components/Navigation/Navigation';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedNewsHeader(
  { loggedIn, titles, onSignIn, onSignOut, isPopupOpen, savedCards }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [category, setCategory]= React.useState([]);

  React.useEffect(() => {
    function getPopularCategory() {
      console.log(savedCards);
      const categoryCountObj = savedCards.reduce((acc, cur, i, arr)=>{
        if(acc[cur.keyword]){
          acc[cur.keyword] += 1;
        } else {
         acc[cur.keyword] = 1;
        }
        return acc;
      }, {});
      console.log(categoryCountObj);

      const arrNames = Object.keys(categoryCountObj).sort((a, b) => {
          return categoryCountObj[b] - categoryCountObj[a];
      });
      console.log(arrNames);
      setCategory(arrNames);


      if(arrNames.length <= 3){

      } else {
      }

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
          По ключевым словам: <span className="saved-news-header__span-accent"> {category[0] || ''}</span>,
          <span className="saved-news-header__span-accent"> {category[1] || ''}</span> и
          {category.length <= 3 ?
            <span className="saved-news-header__span-accent"> {category[2]}</span> :
            <span className="saved-news-header__span-accent"> {category.length - 2}-м другим</span>
          }
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
