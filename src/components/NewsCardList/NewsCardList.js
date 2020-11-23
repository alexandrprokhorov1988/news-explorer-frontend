import React from 'react';
import './NewsCardList.css';
import NotFoundResults from '../../components/NotFoundResults/NotFoundResults';
import NewsCard from '../../components/NewsCard/NewsCard';
import Preloader from '../../components/Preloader/Preloader';

function NewsCardList(
  {
    loggedIn,
    isLoading,
    cards,
    isFound,
    category,
    onCardAdd,
    onCardDelete,
    count,
    onShowMore,
    onSignIn
  }) {

  function handleClick() {
    onShowMore();
  }

  return (
    <>
      {isFound &&
      <section className="news-card-list">
        <h2 className="news-card-list__title">Результаты поиска</h2>
        <div className="news-card-list__container">
          {isLoading ? <Preloader/> : cards.slice(0, count + 3).map((card) => (
            <NewsCard key={card.dataId}
                      {...card}
                      loggedIn={loggedIn}
                      onCardAdd={onCardAdd}
                      onCardDelete={onCardDelete}
                      onSignIn={onSignIn}
            />))
          }
        </div>
        {(count < cards.length - 1) &&
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
