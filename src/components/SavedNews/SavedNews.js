import React from 'react';
import './SavedNews.css';
import NewsCard from '../../components/NewsCard/NewsCard';
import Preloader from '../../components/Preloader/Preloader';

function SavedNews(
  {
    isLoading,
    loggedIn,
    onCardDelete,
    onGetCards,
    savedCards,
  }) {

  React.useEffect(() => {
    onGetCards();
  }, []); //todo []

  return (
    <section className="saved-news">
      <div className="saved-news__container">
        {isLoading ? <Preloader/> : savedCards.map((card) => (
          <NewsCard key={card._id}
                    {...card}
                    loggedIn={loggedIn}
                    onCardDelete={onCardDelete}
          />))
        }
      </div>
    </section>
  );
}

export default SavedNews;
