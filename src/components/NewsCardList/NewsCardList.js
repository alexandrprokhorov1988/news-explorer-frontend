import React from 'react';
import './NewsCardList.css';
import NotFoundResults from '../../components/NotFoundResults/NotFoundResults';
import Preloader from '../../components/Preloader/Preloader';
import NewsCard from '../../components/NewsCard/NewsCard';

function NewsCardList({ loggedIn, isLoading, cards, isFound, category, onCardAdd }) {

  function handleClick() {
    console.log('ok');
  }

  return (
    <>
      {isFound &&
      <section className="news-card-list">
        <h2 className="news-card-list__title">Результаты поиска</h2>
        <div className="news-card-list__container">
          {isLoading ?
            <Preloader/> :
            cards.map((card) => (
              <NewsCard
                key={card.id}
                {...card}
                loggedIn={loggedIn}
                onCardAdd={onCardAdd}
              />))}
        </div>
        {cards.length !== 0 &&
        <button
          type="button"
          className="news-card-list__button-more"
          onClick={handleClick}>
          Показать еще
        </button>
        }
        {cards.length === 0 && <NotFoundResults/>}
      </section>
      }
    </>
  );
}

export default NewsCardList;
