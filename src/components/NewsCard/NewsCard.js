import React from 'react';
import './NewsCard.css';

function NewsCard({ link, alt, category, date, title, source, text, isFaved, loggedIn }) {

  return (
    <article className="news-card">
      <button type="button" className={`news-card__button-add ${isFaved ? 'news-card__button-add_active' : ''}`}/>
      {!loggedIn && <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>}
      {category && <span className="news-card__category news-card__category_active">{category}</span>}
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
