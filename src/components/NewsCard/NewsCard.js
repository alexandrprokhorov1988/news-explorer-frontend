import React from 'react';
import './NewsCard.css';
import {useLocation} from 'react-router-dom';

function NewsCard(
  {
    urlToImage,
    alt = 'Картинка',
    _id = null,
    dataId,
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    description,
    isFaved = false,
    loggedIn,
    onCardAdd,
    onCardDelete
  }) {

  const location = useLocation();

  function handleClickAdd() {
    if (isFaved) {
      onCardDelete(_id, dataId);
    } else {
      onCardAdd(dataId, keyword, title, text, date, source, link, image);
    }
  }

  return (
    <article className="news-card">
      {location.pathname === '/saved-news' ?
        <button type="button" className='news-card__button news-card__button_type_delete'/> :
        <button onClick={handleClickAdd} type="button"
                className={`news-card__button news-card__button_type_add ${isFaved ? 'news-card__button_active' : ''}`}
        />
      }
      {location.pathname === '/saved-news' ?
        <>
          {loggedIn && <span className="news-card__button-popup">Убрать из сохранённых</span>}
        </> :
        <>
          {!loggedIn && <span className="news-card__button-popup">Войдите, чтобы сохранять статьи</span>}
        </>
      }
      <a href={link}
         className="news-card__link"
         target="_blank"
         rel="noreferrer"
         title={description}
      >
        {location.pathname === '/saved-news' &&
        <span className="news-card__category news-card__category_active">{keyword}</span>}
        <img className="news-card__img" src={image} alt={alt}/>
        <div className="news-card__description-container">
          <div>
            <p className="news-card__date">{date}</p>
            <h2 className="news-card__title">{title}</h2>
            <p className="news-card__text">{text}</p>
          </div>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
    </article>
  );
}

export default NewsCard;
