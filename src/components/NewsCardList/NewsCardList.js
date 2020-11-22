import React from 'react';
import './NewsCardList.css';
import NotFoundResults from '../../components/NotFoundResults/NotFoundResults';
import NewsCard from '../../components/NewsCard/NewsCard';
import Preloader from '../../components/Preloader/Preloader';

function NewsCardList({ loggedIn, isLoading, cards, isFound, category, onCardAdd }) {
  const [count, setCount] = React.useState(0);
  const [cardRow, setCardRow] = React.useState([]);

  React.useEffect(()=>{
    if(cards.length > 0){
      handleClick();
    }
  }, [cards]);


  function handleClick() {
    if (cards.length >= count) {
      let addCardRow = cards.slice(count, count + 3).map((card) => (
        <NewsCard
          key={card.id}
          {...card}
          loggedIn={loggedIn}
          onCardAdd={onCardAdd}
        />));
      setCardRow([...cardRow, addCardRow]);
      setCount(count + 3);
    } else {
      return;
    }
  }

  return (
    <>
      {isFound &&
      <section className="news-card-list">
        <h2 className="news-card-list__title">Результаты поиска</h2>
        <div className="news-card-list__container">
          {isLoading ?
          <Preloader/> :
            <>{car}</>
          }
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
