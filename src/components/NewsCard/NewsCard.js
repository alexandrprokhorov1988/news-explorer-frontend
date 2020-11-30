import React from 'react';
import './NewsCard.css';
import {useLocation} from 'react-router-dom';

function NewsCard({ link, alt, category, date, title, source, text, isFaved, loggedIn }) {
  const location = useLocation();

  return (
    <article className="news-card">
      {location.pathname === '/saved-news' ?
        <button type="button" className='news-card__button news-card__button_type_delete'/> :
        <button type="button"
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
      {location.pathname === '/saved-news' &&
      <span className="news-card__category news-card__category_active">{category}</span>}
      <img className="news-card__img" src={link} alt={alt || 'Картинка'}/>
      <div className="news-card__description-container">
        <div>
          <p className="news-card__date">{date}</p>
          <h2 className="news-card__title">{title}</h2>
          <p className="news-card__text">{text}</p>
        </div>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
